# TamboTrace — Entorno Docker (PHP + HTML/CSS + MySQL)

### Ingeniería de Software | ADA

---

> Este documento define el entorno de desarrollo/despliegue en contenedores para **TamboTrace**, usando **HTML + CSS** en el frontend, **PHP** en el backend y **MySQL** como base de datos (DDL en [ada-tambotrace-mysql.md](ada-tambotrace-mysql.md)). Se resuelve con `docker compose` porque RNF9 exige que la solución "pueda desplegarse en hosting externo, ya que el cliente no posee servidor propio" — contenerizar el stack facilita mover el proyecto entre el entorno del equipo de desarrollo y el hosting contratado sin reinstalar dependencias a mano.

---

## 1. Justificación de la arquitectura elegida

| Decisión | Justificación |
|---|---|
| PHP + Apache en vez de un framework pesado | El presupuesto es acotado (USD 6.600, sección 17 del proyecto original) y el plazo es de 8 semanas — PHP corre sin build step adicional y es ampliamente soportado por hostings económicos, alineado con RNF9. |
| Frontend HTML + CSS servido por el mismo contenedor PHP (sin SPA/build de JS) | RNF1 "usable desde computadora, tablet o celular mediante navegador"; RNF2 y RNF12 piden pantallas **simples y livianas** para la sala de ordeñe con conectividad irregular — una SPA con bundle pesado va en contra de ese requisito. |
| MySQL en contenedor separado con volumen persistente | Aísla los datos del ciclo de vida del contenedor de aplicación; permite respaldos independientes (RNF6). |
| phpMyAdmin como servicio opcional | Facilita a administración inspeccionar datos durante desarrollo/capacitación (HU18), sin necesidad de instalar un cliente MySQL aparte. |
| Variables sensibles vía `.env` (no hardcodeadas) | RNF5 "los datos sensibles deben protegerse" — las credenciales de base de datos no deben quedar en el repositorio ni en la imagen. |

---

## 2. Estructura de carpetas del proyecto

```
tambotrace/
├── docker-compose.yml
├── .env                      # NO se commitea (ver .gitignore)
├── .env.example               # plantilla versionada
├── backup/                    # respaldos generados por el servicio db-backup (RNF6)
├── db/
│   └── init/
│       └── 001_schema.sql     # copia del DDL de ada-tambotrace-mysql.md, secciones 2-4
├── php/
│   ├── Dockerfile
│   └── php.ini
└── src/                        # código de la aplicación (montado dentro del contenedor php)
    ├── public/                 # document root de Apache
    │   ├── index.php
    │   ├── login.php
    │   ├── vacas.php
    │   ├── ordenes.php
    │   ├── lotes.php
    │   ├── assets/
    │   │   └── css/
    │   │       └── estilos.css
    │   └── includes/
    │       └── conexion.php
    └── composer.json           # opcional, si se agregan librerías PHP
```

---

## 3. `docker-compose.yml`

```yaml
services:
  web:
    build:
      context: ./php
      dockerfile: Dockerfile
    container_name: tambotrace_web
    restart: unless-stopped
    ports:
      - "${APP_PORT:-8080}:80"
    volumes:
      - ./src:/var/www/html
    environment:
      DB_HOST: db
      DB_PORT: 3306
      DB_NAME: ${MYSQL_DATABASE}
      DB_USER: ${MYSQL_APP_USER}
      DB_PASSWORD: ${MYSQL_APP_PASSWORD}
      APP_TIMEZONE: America/Montevideo
    depends_on:
      db:
        condition: service_healthy
    networks:
      - tambotrace_net

  db:
    image: mysql:8.0
    container_name: tambotrace_db
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_APP_USER}
      MYSQL_PASSWORD: ${MYSQL_APP_PASSWORD}
      TZ: America/Montevideo
    command: >
      --character-set-server=utf8mb4
      --collation-server=utf8mb4_unicode_ci
      --default-time-zone=-03:00
    volumes:
      - db_data:/var/lib/mysql
      - ./db/init:/docker-entrypoint-initdb.d:ro
    ports:
      - "127.0.0.1:3306:3306"   # expuesto solo en localhost, no hacia afuera (RNF5)
    healthcheck:
      test: ["CMD", "mysqladmin", "ping", "-h", "localhost", "-u", "root", "-p${MYSQL_ROOT_PASSWORD}"]
      interval: 5s
      timeout: 5s
      retries: 10
    networks:
      - tambotrace_net

  phpmyadmin:
    image: phpmyadmin:5
    container_name: tambotrace_phpmyadmin
    restart: unless-stopped
    environment:
      PMA_HOST: db
      PMA_PORT: 3306
      UPLOAD_LIMIT: 50M
    ports:
      - "${PMA_PORT:-8081}:80"
    depends_on:
      db:
        condition: service_healthy
    networks:
      - tambotrace_net
    profiles:
      - herramientas   # se levanta solo con: docker compose --profile herramientas up

  db-backup:
    image: mysql:8.0
    container_name: tambotrace_backup
    restart: unless-stopped
    depends_on:
      db:
        condition: service_healthy
    environment:
      MYSQL_APP_PASSWORD: ${MYSQL_APP_PASSWORD}
    volumes:
      - ./backup:/respaldos
    entrypoint: >
      sh -c "
      while true; do
        FECHA=$$(date +%Y-%m-%d_%H%M);
        mysqldump -h db -u ${MYSQL_APP_USER} -p$$MYSQL_APP_PASSWORD --single-transaction ${MYSQL_DATABASE} | gzip > /respaldos/tambotrace_$${FECHA}.sql.gz;
        find /respaldos -name 'tambotrace_*.sql.gz' -mtime +30 -delete;
        sleep 86400;
      done
      "
    networks:
      - tambotrace_net

networks:
  tambotrace_net:
    driver: bridge

volumes:
  db_data:
    driver: local
```

**Justificación de decisiones del compose:**

| Elemento | Justificación |
|---|---|
| `db` con `ports: 127.0.0.1:3306:3306` | El puerto de MySQL solo se expone en la máquina local (para administración/debug), nunca hacia la red externa — RNF5. |
| `healthcheck` en `db` + `depends_on: condition: service_healthy` en `web` | Evita que Apache/PHP arranque antes de que MySQL esté listo para aceptar conexiones — reduce errores intermitentes de conexión, relevante para RNF3 (respuesta rápida) desde el primer arranque. |
| `phpmyadmin` bajo `profiles: [herramientas]` | No se levanta en producción por defecto (reduce superficie de ataque, RNF5); el equipo lo activa solo cuando lo necesita. |
| `db-backup` como servicio propio | Traduce RNF6 "respaldos automáticos diarios" a un contenedor dedicado, independiente del contenedor de aplicación, para que un reinicio de `web` no interrumpa el respaldo. |
| `db_data` como volumen nombrado | Persiste los datos aunque se recree el contenedor `db` (`docker compose down` sin `-v`), evitando pérdida de información productiva. |
| Variables via `${...}` desde `.env` | Ninguna credencial queda escrita en el archivo versionado — RNF5. |

---

## 4. Variables de entorno

### 4.1 `.env.example` (versionado en git)

```dotenv
# Copiar este archivo a .env y completar antes de levantar el stack
APP_PORT=8080
PMA_PORT=8081

MYSQL_ROOT_PASSWORD=CAMBIAR_ESTA_CLAVE_ROOT
MYSQL_DATABASE=tambotrace
MYSQL_APP_USER=tambotrace_app
MYSQL_APP_PASSWORD=CAMBIAR_ESTA_CLAVE_APP
```

### 4.2 `.gitignore` sugerido

```gitignore
.env
backup/*.sql.gz
```

---

## 5. `php/Dockerfile`

```dockerfile
FROM php:8.2-apache

# Extensiones necesarias para conectar con MySQL (mysqli/PDO) y generar PDF (RF14) más adelante
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Configuración propia de PHP (uploads, límites, zona horaria)
COPY php.ini /usr/local/etc/php/conf.d/tambotrace.ini

# Apache: permitir .htaccess y activar mod_rewrite (URLs simples, RNF2 usabilidad en campo)
RUN a2enmod rewrite
RUN sed -i 's/AllowOverride None/AllowOverride All/' /etc/apache2/apache2.conf

WORKDIR /var/www/html
```

### `php/php.ini`

```ini
date.timezone = America/Montevideo
upload_max_filesize = 20M
post_max_size = 20M
memory_limit = 128M
display_errors = Off
log_errors = On
error_log = /var/log/apache2/php_errors.log
session.cookie_httponly = 1
session.cookie_samesite = "Lax"
```

> `display_errors = Off` + `log_errors = On`: en un sistema que maneja datos sanitarios y económicos (RNF5), los errores de PHP no deben mostrarse al usuario final (podrían filtrar rutas o consultas), pero sí quedar registrados para diagnóstico.

---

## 6. Conexión PHP → MySQL (`src/public/includes/conexion.php`)

```php
<?php
declare(strict_types=1);

function obtenerConexion(): mysqli
{
    $host     = getenv('DB_HOST')     ?: 'db';
    $puerto   = (int) (getenv('DB_PORT') ?: 3306);
    $base     = getenv('DB_NAME')     ?: 'tambotrace';
    $usuario  = getenv('DB_USER')     ?: 'tambotrace_app';
    $password = getenv('DB_PASSWORD') ?: '';

    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

    $conexion = new mysqli($host, $usuario, $password, $base, $puerto);
    $conexion->set_charset('utf8mb4');

    return $conexion;
}
```

Ejemplo de uso — RF13, búsqueda de vacas por caravana o estado (`src/public/vacas.php`):

```php
<?php
require_once __DIR__ . '/includes/conexion.php';
session_start();

// RNF4/RNF5: solo usuarios autenticados con rol habilitado pueden consultar
if (empty($_SESSION['usuario_id'])) {
    header('Location: /login.php');
    exit;
}

$conexion = obtenerConexion();
$criterio = trim($_GET['q'] ?? '');

$consulta = $conexion->prepare(
    'SELECT id, caravana, nombre, estado FROM vacas
     WHERE caravana LIKE CONCAT("%", ?, "%") OR nombre LIKE CONCAT("%", ?, "%")
     ORDER BY caravana'
);
$consulta->bind_param('ss', $criterio, $criterio);
$consulta->execute();
$resultado = $consulta->get_result();
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>TamboTrace — Vacas</title>
    <link rel="stylesheet" href="/assets/css/estilos.css">
</head>
<body>
    <h1>Búsqueda de vacas</h1>
    <form method="get">
        <input type="text" name="q" value="<?= htmlspecialchars($criterio) ?>" placeholder="Caravana o nombre">
        <button type="submit">Buscar</button>
    </form>
    <table>
        <tr><th>Caravana</th><th>Nombre</th><th>Estado</th></tr>
        <?php while ($fila = $resultado->fetch_assoc()): ?>
        <tr>
            <td><?= htmlspecialchars($fila['caravana']) ?></td>
            <td><?= htmlspecialchars($fila['nombre'] ?? '—') ?></td>
            <td><?= htmlspecialchars($fila['estado']) ?></td>
        </tr>
        <?php endwhile; ?>
    </table>
</body>
</html>
```

> Se usa `mysqli` con **consultas preparadas** (`prepare` + `bind_param`) para evitar inyección SQL, y `htmlspecialchars()` en toda salida hacia el HTML para evitar XSS — ambos son requisitos implícitos de RNF5 (protección de datos sensibles).

### CSS mínimo, liviano (`src/public/assets/css/estilos.css`)

```css
/* Diseño simple y liviano a propósito: RNF2/RNF12, uso en sala de ordeñe con conectividad irregular */
* { box-sizing: border-box; font-family: system-ui, sans-serif; }
body { margin: 0; padding: 1rem; background: #f5f5f0; color: #222; }
h1 { font-size: 1.4rem; }
table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
th, td { padding: 0.5rem; border-bottom: 1px solid #ccc; text-align: left; }
input, button { padding: 0.5rem; font-size: 1rem; }
button { background: #2f6b3a; color: #fff; border: none; cursor: pointer; }
```

---

## 7. Puesta en marcha

```bash
# 1. Clonar/ubicarse en la carpeta del proyecto y preparar variables de entorno
cp .env.example .env
# editar .env y completar contraseñas reales

# 2. Levantar el stack base (web + db + respaldo automático)
docker compose up -d --build

# 3. (Opcional) levantar también phpMyAdmin para administración
docker compose --profile herramientas up -d

# 4. Ver logs de la aplicación
docker compose logs -f web

# 5. Apagar el stack (los datos persisten en el volumen db_data)
docker compose down

# 6. Apagar y BORRAR también los datos (usar con cuidado)
docker compose down -v
```

Accesos por defecto:

| Servicio | URL |
|---|---|
| Aplicación TamboTrace | http://localhost:8080 |
| phpMyAdmin (perfil `herramientas`) | http://localhost:8081 |

---

## 8. Relación con el resto del proyecto

- El esquema que inicializa `db/init/001_schema.sql` es la misma DDL documentada en [ada-tambotrace-mysql.md](ada-tambotrace-mysql.md) — al copiarla ahí, MySQL la ejecuta automáticamente la primera vez que se crea el volumen `db_data`.
- Las entidades, atributos y relaciones que el backend PHP consulta están justificadas en el diagrama de clases y el MER de [ada-tambotrace.md](ada-tambotrace.md).
- El servicio `db-backup` implementa RNF6 de forma equivalente al script `backup_tambotrace.sh` descrito en [ada-tambotrace-mysql.md §6](ada-tambotrace-mysql.md), pero corriendo dentro del propio stack de contenedores en vez de un `cron` del host — decisión más adecuada para RNF9 (hosting externo sin servidor propio del cliente), donde no siempre se tiene acceso a configurar `cron` a nivel de sistema operativo.
