# TamboTrace · demo educativa

Aplicación web estática basada en el caso de estudio TamboTrace. No utiliza base de datos, servidor de aplicación, paquetes ni almacenamiento del navegador: los datos se leen y escriben en archivos JSON mediante la **File System Access API**.

## Cómo ejecutarla

La escritura de archivos necesita un contexto seguro. Abrir una terminal en la carpeta `tambotrace` y ejecutar:

```bash
python3 -m http.server 8080
```

Después abrir [http://localhost:8080](http://localhost:8080) en una versión reciente de Chrome o Edge.

Safari y Firefox pueden mostrar la demo, pero actualmente no ofrecen la misma API de escritura directa sobre una carpeta elegida por el usuario.

## Cómo habilitar el guardado

1. Presionar **Elegir carpeta de archivos JSON** o **Conectar JSON**.
2. Seleccionar la carpeta `tambotrace/data`.
3. Autorizar lectura y escritura.

El permiso dura la sesión del navegador. La aplicación no almacena el acceso a la carpeta ni la sesión en `localStorage` o IndexedDB.

> Conviene realizar una copia de `data/` antes de una actividad si se quiere recuperar fácilmente el estado inicial.

## Usuarios de demostración

Todos usan la contraseña `demo123`.

| Usuario | Persona | Rol |
| --- | --- | --- |
| `arrr` | Antonio Romualdo Rogelio Roldán | Administrador / sponsor |
| `admin` | Administración del establecimiento | Administrador |
| `caca` | Carlos Andrés Cáceres Alvez | Encargado |
| `leechera` | Lucía Esperanza Echera | Operaria |
| `operario2` | Martín Pereira | Operario |
| `veterinario` | Dra. Valentina Silva | Veterinaria |

El caso original nombra al sponsor, al encargado y a una operaria. Para hacer utilizables todos los perfiles propuestos pero no identificados, la demo asigna nombres didácticos al segundo operario y a la veterinaria.

Las contraseñas no aparecen en texto plano dentro de `usuarios.json`; se compara su hash SHA-256. Este mecanismo es adecuado para demostrar el concepto en una aplicación local, pero una aplicación real debe autenticar del lado servidor y utilizar un algoritmo específico para contraseñas, como Argon2 o bcrypt.

## Archivos de datos

- `usuarios.json`: usuarios, roles y estado de acceso.
- `vacas.json`: animales y estado productivo.
- `observaciones_sanitarias.json`: historial veterinario.
- `ordenes.json`: ordeñes y participación de animales.
- `lotes.json`: lotes, snapshot de animales, calidad y cierre.
- `auditoria.json`: cambios críticos y responsables.
- `documentacion.json`: relación entre módulos, épicas, RF, RNF e historias.

El perfil administrador también puede generar un archivo `respaldo-tambotrace-*.json`. Es un respaldo manual adecuado para la demo; la automatización diaria planteada por RNF6 requeriría un proceso de servidor y queda fuera de una aplicación compuesta solamente por HTML, CSS y JavaScript del navegador.

## Recorrido sugerido para clase

1. Ingresar como `leechera` y registrar un ordeñe.
2. Excluir una vaca e intentar continuar sin indicar el motivo.
3. Ingresar como `caca`, generar el lote y tratar de cerrarlo sin calidad.
4. Ingresar como `admin`, cargar resultados y revisar `auditoria.json`.
5. Cerrar el lote, consultar su trazabilidad y exportar el reporte.
6. Comparar los archivos modificados con los códigos RF/HU del módulo **Documentación**.

## Alcance técnico

- HTML, CSS y JavaScript sin frameworks.
- Diseño adaptable a computadora, tableta y celular.
- Sin base de datos y sin backend.
- Sin `localStorage`, cookies ni IndexedDB.
- Persistencia mediante archivos `.json` elegidos por el usuario.
- Reporte imprimible como PDF y exportable como JSON o CSV.

La demo es deliberadamente educativa. Al no existir un servidor, los controles de roles se ejecutan en el navegador y no deben considerarse seguridad suficiente para un sistema productivo.
