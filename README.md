# Ingeniería de Software · 3.º BT (2026)

Repositorio de apoyo para Ingeniería de Software de 3.º de Bachillerato Tecnológico. Reúne teoría, actividades, casos aplicados, recursos y documentación para los proyectos del curso.

## Sitio del curso

**[portalutu.github.io/ing_software-3ro-bt](https://portalutu.github.io/ing_software-3ro-bt/)**

La portada es estática, adaptable a celulares y no requiere compilación. Incluye una ruta de estudio, búsqueda, filtros por tipo y acceso directo a los recursos interactivos.

## Recorrido sugerido

1. [Introducción a la gestión de proyectos](Teoricos/Introducción%20a%20la%20Gestión%20de%20Proyectos.md)
2. [Entrevistas y relevamiento](Teoricos/entrevistas.md)
3. [Especificación de requerimientos y UML](Teoricos/ADA.md)
4. [Análisis aplicado de TamboTrace](ADA/analisis.md)
5. [Historias de usuario](Teoricos/user-stories.md)
6. [Backlog de producto](Teoricos/backlog.md)
7. [Planificación del sprint](Teoricos/sprint-planning.md)
8. [Kit completo de documentación](documentos/Project_Management_Templates_full.md)

```text
necesidad → entrevista → requerimientos → modelado → historias → backlog → sprint → documentación
```

## Organización

```text
.
├── index.html              # Portada de GitHub Pages
├── Teoricos/               # Conceptos y guías de estudio
├── ADA/                    # Análisis aplicado y recurso interactivo
├── Practicos/              # Actividades y proyecto TamboTrace
├── documentos/             # Kit de plantillas y manuales
├── Eval/                   # Evaluación y corrección
├── Premios-Nodo/           # Presentación y guion
└── old/                    # Versiones incompletas archivadas
```

### Teóricos

- [Gestión de proyectos](Teoricos/Introducción%20a%20la%20Gestión%20de%20Proyectos.md)
- [Agile](Teoricos/agile.md) y [Waterfall](Teoricos/waterfall.md)
- [Entrevistas](Teoricos/entrevistas.md)
- [Historias de usuario](Teoricos/user-stories.md)
- [Backlog](Teoricos/backlog.md)
- [Sprint Planning](Teoricos/sprint-planning.md)
- [Eventos de Scrum](Teoricos/scrum-events.md)
- [Especificación de requerimientos y UML](Teoricos/ADA.md)

### ADA y prácticos

- [Análisis de TamboTrace](ADA/analisis.md)
- [Guía de análisis y diseño de aplicaciones](ADA/guia_analisis_disenio_apps.md)
- [Flujo de datos interactivo](ADA/flujo_de_datos.html)
- [Juego de roles](Practicos/juego_roles_relevamiento_requerimientos_3_emt.md)
- [Proyecto Scrum de trazabilidad lechera](Practicos/proyecto_scrum_trazabilidad_lechera.md)
- [Modelado UML y MER](Practicos/ada-tambotrace.md)
- [Base de datos MySQL](Practicos/ada-tambotrace-mysql.md)
- [Entorno Docker](Practicos/ada-tambotrace-docker.md)
- [Project Charter](Practicos/ada-tambotrace-project-charter.md)

### Recursos y evaluación

- [Kit completo de documentación](documentos/Project_Management_Templates_full.md)
- [Manual de Markdown](documentos/manual_estilo_markdown.md)
- [Manual de Git](documentos/manual_git_v2.md)
- [Ayuda rápida de Git y GitHub](documentos/git-gh-cheatsheet.md)
- [App a lo Vestia](Eval/app_a_lo_vestia.html) y su [corrección](Eval/app_a_lo_vestia_correccion.md)
- [Presentación](Premios-Nodo/presentacion_proyecto.md) y [guion](Premios-Nodo/guion_video_tambotrace.md) de TamboTrace

## Archivo de versiones anteriores

Las 13 plantillas individuales de `templates/` duplicaban secciones del kit completo y ofrecían menos contexto. Se conservaron en [`old/Templates/`](old/Templates/) para mantener el historial. Para las actividades nuevas se debe utilizar el [kit consolidado](documentos/Project_Management_Templates_full.md), que reúne plantillas, ejemplos y una estructura recomendada de entrega.

## Publicación con GitHub Pages

El repositorio está preparado para publicarse directamente desde `main`:

1. Abrir **Settings → Pages** en GitHub.
2. En **Build and deployment**, elegir **Deploy from a branch**.
3. Seleccionar `main`, la carpeta `/ (root)` y guardar.

`.nojekyll` indica que el contenido se publica tal como está e `index.html` funciona como portada. Los documentos Markdown se abren renderizados en GitHub; los recursos HTML se ejecutan dentro del sitio.

## Mantenimiento

- Incorporar cada material nuevo a `index.html` para que aparezca en la búsqueda.
- Mover a `old/` solo una versión reemplazada por otra más completa o actual.
- Comprobar enlaces y vista móvil antes de publicar.
