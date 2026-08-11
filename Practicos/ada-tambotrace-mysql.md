# TamboTrace — Base de datos MySQL (DDL + datos de ejemplo)

### Ingeniería de Software | ADA

---

> Este documento traduce a SQL el Modelo Entidad-Relación definido en [ada-tambotrace.md §7](ada-tambotrace.md) para el proyecto **TamboTrace** ([proyecto_scrum_trazabilidad_lechera.md](proyecto_scrum_trazabilidad_lechera.md)). Incluye: configuración del servidor MySQL, creación de la base y el usuario de aplicación, DDL completo de las 9 tablas con sus claves y restricciones, e inserts de datos de ejemplo que permiten recorrer el flujo completo (vaca → ordeñe → lote → propiedades de calidad → cierre → historial).

---

## 1. Requisitos y configuración del servidor

| Elemento | Valor recomendado | Justificación |
|---|---|---|
| Motor | MySQL 8.0+ (o MariaDB 10.6+) | Soporte de `CHECK` constraints, `JSON`, y tipos `ENUM` usados abajo. |
| Charset / Collation | `utf8mb4` / `utf8mb4_unicode_ci` | Necesario para guardar correctamente tildes y "ñ" (caravana, observaciones, nombres) — RF3, RF9. |
| Motor de tablas | InnoDB | Es el único motor de MySQL con soporte transaccional y claves foráneas (`FOREIGN KEY`), imprescindible para la integridad referencial entre `LOTES`, `ORDENES` y `VACAS`. |
| Zona horaria | `America/Montevideo` | El establecimiento opera en Uruguay (litoral uruguayo); las columnas `DATETIME`/`TIMESTAMP` de auditoría (RNF7) deben reflejar la hora local del tambo. |

Configuración mínima sugerida en `my.cnf` / `my.ini` (sección `[mysqld]`):

```ini
[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
default-time-zone = '-03:00'
default_storage_engine = InnoDB
max_connections = 50
```

> `max_connections = 50` es suficiente para el tamaño del establecimiento (encargado, 2 operarios, administración, veterinario — RNF4) sin sobredimensionar el hosting externo contratado (RNF9).

---

## 2. Creación de la base de datos y usuario de aplicación

```sql
-- 2.1 Base de datos
CREATE DATABASE IF NOT EXISTS tambotrace
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

-- 2.2 Usuario de aplicación (no usar root desde la app — RNF5, protección de datos sensibles)
CREATE USER IF NOT EXISTS 'tambotrace_app'@'%' IDENTIFIED BY 'CAMBIAR_ESTA_CLAVE';

GRANT SELECT, INSERT, UPDATE, DELETE ON tambotrace.* TO 'tambotrace_app'@'%';

-- 2.3 Usuario de solo lectura, útil para reportes/auditoría externa (RF14, RNF11)
CREATE USER IF NOT EXISTS 'tambotrace_reportes'@'%' IDENTIFIED BY 'CAMBIAR_ESTA_CLAVE_TAMBIEN';
GRANT SELECT ON tambotrace.* TO 'tambotrace_reportes'@'%';

FLUSH PRIVILEGES;

USE tambotrace;
```

> **Importante:** las contraseñas de este documento son placeholders didácticos. En un despliegue real deben reemplazarse por valores generados de forma segura y nunca deben commitearse a un repositorio (ver [ada-tambotrace-docker.md](ada-tambotrace-docker.md), sección de variables de entorno).

---

## 3. DDL — creación de tablas

El orden respeta las dependencias de claves foráneas: primero las tablas sin dependencias (`usuarios`, `vacas`), luego las que dependen de ellas.

```sql
-- 3.1 USUARIOS — RF1, RF2, RNF4, RNF5 (HU1, HU2)
CREATE TABLE usuarios (
    id                INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario    VARCHAR(50)  NOT NULL,
    password_hash     VARCHAR(255) NOT NULL,
    nombre_completo   VARCHAR(150) NOT NULL,
    email             VARCHAR(150) NULL,
    rol               ENUM('ADMINISTRADOR','ENCARGADO','OPERARIO','VETERINARIO') NOT NULL,
    activo            BOOLEAN NOT NULL DEFAULT TRUE,
    fecha_creacion    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uq_usuarios_nombre_usuario UNIQUE (nombre_usuario)
) ENGINE=InnoDB;

-- 3.2 VACAS — RF3, RF4, RF13 (HU3, HU4, HU5)
CREATE TABLE vacas (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    caravana            VARCHAR(20)  NOT NULL,
    nombre              VARCHAR(100) NULL,
    raza                VARCHAR(80)  NULL,
    fecha_nacimiento    DATE NULL,
    estado              ENUM('EN_PRODUCCION','SECADO','TRATAMIENTO','BAJA') NOT NULL DEFAULT 'EN_PRODUCCION',
    observaciones       TEXT NULL,
    CONSTRAINT uq_vacas_caravana UNIQUE (caravana)
) ENGINE=InnoDB;

CREATE INDEX idx_vacas_estado ON vacas (estado);         -- soporta HU19 (RNF3: consultas < 3s)
CREATE INDEX idx_vacas_nombre ON vacas (nombre);          -- soporta RF13 (búsqueda por nombre)

-- 3.3 OBSERVACIONES_SANITARIAS — HU15
CREATE TABLE observaciones_sanitarias (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    vaca_id         INT NOT NULL,
    veterinario_id  INT NOT NULL,
    fecha           DATE NOT NULL,
    descripcion     TEXT NOT NULL,
    CONSTRAINT fk_obs_vaca FOREIGN KEY (vaca_id) REFERENCES vacas (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_obs_veterinario FOREIGN KEY (veterinario_id) REFERENCES usuarios (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

-- 3.4 ORDENES — RF5, RNF2, RNF3, RNF12 (HU6, HU19)
CREATE TABLE ordenes (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    fecha           DATE NOT NULL,
    turno           ENUM('MANANA','TARDE') NOT NULL,
    tanque          VARCHAR(30) NOT NULL,
    responsable_id  INT NOT NULL,
    observaciones   TEXT NULL,
    CONSTRAINT fk_ordenes_responsable FOREIGN KEY (responsable_id) REFERENCES usuarios (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE INDEX idx_ordenes_fecha ON ordenes (fecha, turno);   -- RF12: consulta de trazabilidad por fecha/turno

-- 3.5 ORDENE_VACA — RF6, RF7 (HU7, HU8, HU19)
CREATE TABLE ordene_vaca (
    id                INT AUTO_INCREMENT PRIMARY KEY,
    ordene_id         INT NOT NULL,
    vaca_id           INT NOT NULL,
    participo         BOOLEAN NOT NULL DEFAULT TRUE,
    motivo_exclusion  VARCHAR(255) NULL,
    CONSTRAINT fk_ov_ordene FOREIGN KEY (ordene_id) REFERENCES ordenes (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_ov_vaca FOREIGN KEY (vaca_id) REFERENCES vacas (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT uq_ordene_vaca UNIQUE (ordene_id, vaca_id)
) ENGINE=InnoDB;

-- 3.6 LOTES — RF8, RF11, RNF10, RNF12 (HU9, HU12, HU20, HU21)
CREATE TABLE lotes (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    ordene_id           INT NOT NULL,
    fecha_creacion      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    tanque              VARCHAR(30) NOT NULL,
    litros_estimados    DECIMAL(8,2) NULL,
    estado              ENUM('BORRADOR','PENDIENTE_ANALISIS','COMPLETO','CERRADO') NOT NULL DEFAULT 'BORRADOR',
    creado_por_id       INT NOT NULL,
    cerrado_por_id      INT NULL,
    fecha_cierre        DATETIME NULL,
    CONSTRAINT uq_lotes_ordene UNIQUE (ordene_id),
    CONSTRAINT fk_lotes_ordene FOREIGN KEY (ordene_id) REFERENCES ordenes (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_lotes_creado_por FOREIGN KEY (creado_por_id) REFERENCES usuarios (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT fk_lotes_cerrado_por FOREIGN KEY (cerrado_por_id) REFERENCES usuarios (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE INDEX idx_lotes_estado ON lotes (estado);   -- HU20: filtrar lotes por estado

-- 3.7 PROPIEDADES_CALIDAD — RF9, RF10 (HU10, HU11)
CREATE TABLE propiedades_calidad (
    id                        INT AUTO_INCREMENT PRIMARY KEY,
    lote_id                   INT NOT NULL,
    temperatura               DECIMAL(4,1) NULL,
    grasa                     DECIMAL(4,2) NULL,
    proteina                  DECIMAL(4,2) NULL,
    celulas_somaticas         INT NULL,
    resultado_antibioticos    ENUM('NEGATIVO','POSITIVO','PENDIENTE') NULL,
    observaciones             TEXT NULL,
    fecha_carga               DATETIME NULL,
    CONSTRAINT uq_propiedades_lote UNIQUE (lote_id),
    CONSTRAINT fk_propiedades_lote FOREIGN KEY (lote_id) REFERENCES lotes (id)
        ON UPDATE CASCADE ON DELETE CASCADE
) ENGINE=InnoDB;

-- 3.8 LOTE_VACA — RF12 (snapshot inmutable, ver justificación en ada-tambotrace.md §5.4/§8)
CREATE TABLE lote_vaca (
    id                  INT AUTO_INCREMENT PRIMARY KEY,
    lote_id             INT NOT NULL,
    vaca_id             INT NOT NULL,
    tipo_participacion  ENUM('INCLUIDA','EXCLUIDA') NOT NULL,
    motivo_exclusion    VARCHAR(255) NULL,
    CONSTRAINT fk_lv_lote FOREIGN KEY (lote_id) REFERENCES lotes (id)
        ON UPDATE CASCADE ON DELETE CASCADE,
    CONSTRAINT fk_lv_vaca FOREIGN KEY (vaca_id) REFERENCES vacas (id)
        ON UPDATE CASCADE ON DELETE RESTRICT,
    CONSTRAINT uq_lote_vaca UNIQUE (lote_id, vaca_id)
) ENGINE=InnoDB;

-- 3.9 HISTORIAL_CAMBIOS — RF15, RNF7 (HU16, HU17)
CREATE TABLE historial_cambios (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    entidad         VARCHAR(50) NOT NULL,
    entidad_id      INT NOT NULL,
    campo           VARCHAR(80) NOT NULL,
    valor_anterior  TEXT NULL,
    valor_nuevo     TEXT NOT NULL,
    usuario_id      INT NOT NULL,
    fecha_hora      DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_historial_usuario FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
        ON UPDATE CASCADE ON DELETE RESTRICT
) ENGINE=InnoDB;

CREATE INDEX idx_historial_entidad ON historial_cambios (entidad, entidad_id);
```

### 3.10 Notas de diseño físico

| Decisión | Justificación |
|---|---|
| `ON DELETE RESTRICT` en casi todas las FK hacia `vacas`, `usuarios`, `ordenes`, `lotes` | RF11/RF15: los registros históricos y de trazabilidad no deben poder desaparecer por un borrado en cascada accidental — solo `ordene_vaca`, `lote_vaca` y `propiedades_calidad` usan `ON DELETE CASCADE`, porque son datos que **no tienen sentido sin su padre** (ver composición en el UML, ada-tambotrace.md §6). |
| `DECIMAL` en vez de `FLOAT`/`DOUBLE` para litros, temperatura, grasa, proteína | Evita errores de redondeo en valores que después se usan en reportes de auditoría (RNF11). |
| `ENUM` para `estado`, `turno`, `rol`, `tipo_participacion` | Refleja los valores cerrados definidos literalmente en RF2/RF4/RNF4/HU20 — impide datos inválidos a nivel de base, reforzando el criterio "verificable" de IEEE 830. |
| Índices en `vacas.estado`, `ordenes.fecha`, `lotes.estado` | RNF3 "responder las consultas principales en menos de 3 segundos". |

---

## 4. Datos de ejemplo

Los datos siguen el ejemplo textual dado por el cliente en la entrevista: *"la leche del ordeñe de la mañana del 12 de mayo que fue al tanque 1"*.

```sql
-- 4.1 Usuarios (uno por rol, según RNF4)
INSERT INTO usuarios (nombre_usuario, password_hash, nombre_completo, email, rol) VALUES
('arrr',     '$2y$10$examplehash0000000000000000000000000000000000000000', 'Antonio Romualdo Rogelio Roldán', 'arrr@muchateta.uy',     'ADMINISTRADOR'),
('caca',     '$2y$10$examplehash0000000000000000000000000000000000000001', 'Carlos Andrés Cáceres Alvez',     'caca@muchateta.uy',     'ENCARGADO'),
('leechera', '$2y$10$examplehash0000000000000000000000000000000000000002', 'Lucía Esperanza Echera',          'leechera@muchateta.uy', 'OPERARIO'),
('vetuy',    '$2y$10$examplehash0000000000000000000000000000000000000003', 'Dra. Marina Solé',                'vetuy@muchateta.uy',    'VETERINARIO');

-- 4.2 Vacas (RF3)
INSERT INTO vacas (caravana, nombre, raza, fecha_nacimiento, estado, observaciones) VALUES
('101', 'Estrella',  'Holando',  '2021-03-10', 'EN_PRODUCCION', NULL),
('102', NULL,        'Holando',  '2020-11-02', 'EN_PRODUCCION', NULL),
('103', 'Manchada',  'Jersey',   '2022-01-20', 'EN_PRODUCCION', NULL),
('104', NULL,        'Holando',  '2019-06-15', 'TRATAMIENTO',   'Mastitis en tratamiento antibiótico desde 2026-05-08.'),
('105', 'Paloma',    'Jersey',   '2021-09-30', 'SECADO',        'Secado programado, próximo parto estimado 2026-06.');

-- 4.3 Observación sanitaria de ejemplo (HU15)
INSERT INTO observaciones_sanitarias (vaca_id, veterinario_id, fecha, descripcion) VALUES
(4, 4, '2026-05-08', 'Diagnóstico de mastitis clínica en cuarto posterior izquierdo. Inicia tratamiento antibiótico, 5 días.');

-- 4.4 Ordeñe del 12 de mayo, turno mañana, tanque 1 (RF5)
INSERT INTO ordenes (fecha, turno, tanque, responsable_id, observaciones) VALUES
('2026-05-12', 'MANANA', 'Tanque 1', 3, 'Ordeñe de rutina.');

-- 4.5 Participación del ordeñe: HU19 agregó automáticamente las 3 vacas en producción,
--     la vaca 104 quedó excluida por tratamiento (RF7)
INSERT INTO ordene_vaca (ordene_id, vaca_id, participo, motivo_exclusion) VALUES
(1, 1, TRUE,  NULL),
(1, 2, TRUE,  NULL),
(1, 3, TRUE,  NULL),
(1, 4, FALSE, 'Tratamiento antibiótico por mastitis (ver observación sanitaria).');

-- 4.6 Lote generado a partir del ordeñe (RF8)
INSERT INTO lotes (ordene_id, tanque, litros_estimados, estado, creado_por_id) VALUES
(1, 'Tanque 1', 620.50, 'PENDIENTE_ANALISIS', 2);

-- 4.7 Snapshot de vacas del lote, copiado desde ordene_vaca (RF12, ver justificación en ada-tambotrace.md)
INSERT INTO lote_vaca (lote_id, vaca_id, tipo_participacion, motivo_exclusion) VALUES
(1, 1, 'INCLUIDA', NULL),
(1, 2, 'INCLUIDA', NULL),
(1, 3, 'INCLUIDA', NULL),
(1, 4, 'EXCLUIDA', 'Tratamiento antibiótico por mastitis (ver observación sanitaria).');

-- 4.8 Propiedades de calidad: temperatura cargada en el momento del ordeñe;
--     el resto llega después del laboratorio y queda NULL por ahora (RF10)
INSERT INTO propiedades_calidad (lote_id, temperatura, fecha_carga) VALUES
(1, 4.2, '2026-05-12 07:30:00');

-- 4.9 Historial de cambios: ejemplo de auditoría de exclusión (RF15, RNF7)
INSERT INTO historial_cambios (entidad, entidad_id, campo, valor_anterior, valor_nuevo, usuario_id) VALUES
('ordene_vaca', 4, 'participo', 'TRUE', 'FALSE', 3);
```

### 4.10 Completar el ejemplo: resultado de laboratorio y cierre del lote

```sql
-- Llega el resultado del laboratorio unos días después (RF10)
UPDATE propiedades_calidad
SET grasa = 3.65,
    proteina = 3.20,
    celulas_somaticas = 180000,
    resultado_antibioticos = 'NEGATIVO',
    fecha_carga = '2026-05-14 10:00:00'
WHERE lote_id = 1;

-- El lote pasa a COMPLETO porque ya tiene todos los datos obligatorios (HU20)
UPDATE lotes SET estado = 'COMPLETO' WHERE id = 1;

-- El encargado cierra el lote (RF11, HU12) — antes debería validarse puedeSerCerrado() en la capa de aplicación (HU21)
UPDATE lotes
SET estado = 'CERRADO', cerrado_por_id = 2, fecha_cierre = '2026-05-15 09:00:00'
WHERE id = 1;

INSERT INTO historial_cambios (entidad, entidad_id, campo, valor_anterior, valor_nuevo, usuario_id) VALUES
('lotes', 1, 'estado', 'COMPLETO', 'CERRADO', 2);
```

---

## 5. Consultas de ejemplo (soportan RF12, RF13, RF14)

```sql
-- 5.1 RF13: búsqueda de vacas por caravana o estado
SELECT id, caravana, nombre, estado
FROM vacas
WHERE caravana LIKE '10%' OR estado = 'EN_PRODUCCION';

-- 5.2 RF12 / HU13: trazabilidad completa de un lote
SELECT
    l.id            AS lote_id,
    o.fecha,
    o.turno,
    l.tanque,
    u.nombre_completo AS responsable,
    l.estado,
    l.litros_estimados,
    pc.temperatura, pc.grasa, pc.proteina, pc.celulas_somaticas, pc.resultado_antibioticos
FROM lotes l
JOIN ordenes o           ON o.id = l.ordene_id
JOIN usuarios u          ON u.id = o.responsable_id
LEFT JOIN propiedades_calidad pc ON pc.lote_id = l.id
WHERE l.id = 1;

-- 5.3 RF12: vacas incluidas y excluidas del lote
SELECT v.caravana, v.nombre, lv.tipo_participacion, lv.motivo_exclusion
FROM lote_vaca lv
JOIN vacas v ON v.id = lv.vaca_id
WHERE lv.lote_id = 1
ORDER BY lv.tipo_participacion, v.caravana;

-- 5.4 HU16: historial de cambios críticos de un lote
SELECT h.fecha_hora, h.campo, h.valor_anterior, h.valor_nuevo, u.nombre_completo AS usuario
FROM historial_cambios h
JOIN usuarios u ON u.id = h.usuario_id
WHERE h.entidad = 'lotes' AND h.entidad_id = 1
ORDER BY h.fecha_hora;

-- 5.5 HU20: lotes pendientes de completar (para seguimiento diario)
SELECT id, tanque, estado, fecha_creacion
FROM lotes
WHERE estado IN ('BORRADOR', 'PENDIENTE_ANALISIS')
ORDER BY fecha_creacion;
```

---

## 6. Script de respaldo (RNF6)

Ejemplo de comando de respaldo automático diario, pensado para ejecutarse vía `cron` en el servidor de hosting (RNF9):

```bash
#!/bin/sh
# backup_tambotrace.sh — respaldo diario (RNF6)
FECHA=$(date +%Y-%m-%d)
mysqldump --single-transaction --routines --triggers \
  -u tambotrace_app -p"$MYSQL_APP_PASSWORD" tambotrace \
  | gzip > "/respaldos/tambotrace_${FECHA}.sql.gz"

# Retener solo los últimos 30 respaldos
find /respaldos -name "tambotrace_*.sql.gz" -mtime +30 -delete
```

> Este script se referencia también desde [ada-tambotrace-docker.md](ada-tambotrace-docker.md) como servicio auxiliar del `docker-compose.yml`.
