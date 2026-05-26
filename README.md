# Ingeniería de Software - 3º Año EMT (2026)

Repositorio de apoyo para la materia, pensado para centralizar materiales teóricos, prácticos, plantillas de trabajo y documentos de referencia para proyectos de software.

## Objetivo

Este repositorio reúne en un solo lugar:

- material teórico para clase;
- actividades prácticas listas para usar;
- plantillas para documentar proyectos;
- documentos de apoyo sobre Git, Markdown y gestión de proyectos;
- ejemplos que conectan relevamiento, requerimientos, historias de usuario, backlog y sprint planning.

## Estructura del repositorio

```text
.
├── README.md
├── Teoricos/
│   ├── Introducción a la Gestión de Proyectos.md
│   ├── agile.md
│   ├── waterfall.md
│   ├── entrevistas.md
│   ├── user-stories.md
│   ├── backlog.md
│   ├── sprint-planning.md
│   └── scrum-events.md
├── Practicos/
│   ├── juego_roles_relevamiento_requerimientos_3_emt.md
│   └── proyecto_scrum_trazabilidad_lechera.md
├── Templates/
│   ├── 01_project_charter.md
│   ├── 02_stakeholders.md
│   ├── 03_scope.md
│   ├── 04_wbs.md
│   ├── 05_schedule.md
│   ├── 06_risk_register.md
│   ├── 07_communication_plan.md
│   ├── 08_requirements.md
│   ├── 09_backlog.md
│   ├── 10_sprint_plan.md
│   ├── 11_architecture.md
│   ├── 12_test_plan.md
│   └── 13_final_report.md
└── Documentos/
    ├── Project_Management_Templates_full.md
    ├── manual_estilo_markdown.md
    ├── manual_git_v2.md
    └── imgs/
```

## Contenido principal

### `Teoricos/`

Material conceptual y didáctico para trabajar los temas principales de la materia.

- [Introducción a la Gestión de Proyectos](Teoricos/Introducción%20a%20la%20Gestión%20de%20Proyectos.md): conceptos iniciales de gestión de proyectos.
- [agile.md](Teoricos/agile.md): introducción al enfoque ágil.
- [waterfall.md](Teoricos/waterfall.md): introducción al enfoque en cascada.
- [entrevistas.md](Teoricos/entrevistas.md): relevamiento de requerimientos mediante entrevistas, con casos de ejemplo.
- [user-stories.md](Teoricos/user-stories.md): redacción de historias de usuario y criterios de aceptación.
- [backlog.md](Teoricos/backlog.md): transformación de requerimientos en historias y backlog.
- [sprint-planning.md](Teoricos/sprint-planning.md): planificación de sprint con ejemplo aplicado.
- [scrum-events.md](Teoricos/scrum-events.md): eventos principales de Scrum y su propósito.

### `Practicos/`

Actividades y casos de trabajo para aplicar los conceptos en clase.

- [juego_roles_relevamiento_requerimientos_3_emt.md](Practicos/juego_roles_relevamiento_requerimientos_3_emt.md): dinámica de entrevista con clientes ficticios para practicar relevamiento de requerimientos, identificación de usuarios, stakeholders, restricciones y riesgos.
- [proyecto_scrum_trazabilidad_lechera.md](Practicos/proyecto_scrum_trazabilidad_lechera.md): proyecto didáctico completo basado en Scrum, con entrevista ficticia, análisis de requerimientos y trazabilidad aplicada a un establecimiento lechero.

### `Templates/`

Plantillas separadas para usar durante el desarrollo de proyectos del curso.

- [01_project_charter.md](Templates/01_project_charter.md): acta o definición inicial del proyecto.
- [02_stakeholders.md](Templates/02_stakeholders.md): identificación de actores interesados.
- [03_scope.md](Templates/03_scope.md): definición de alcance.
- [04_wbs.md](Templates/04_wbs.md): estructura de desglose del trabajo.
- [05_schedule.md](Templates/05_schedule.md): planificación temporal.
- [06_risk_register.md](Templates/06_risk_register.md): registro de riesgos.
- [07_communication_plan.md](Templates/07_communication_plan.md): plan de comunicación.
- [08_requirements.md](Templates/08_requirements.md): relevamiento y documentación de requerimientos.
- [09_backlog.md](Templates/09_backlog.md): backlog del producto.
- [10_sprint_plan.md](Templates/10_sprint_plan.md): planificación de sprint.
- [11_architecture.md](Templates/11_architecture.md): arquitectura de la solución.
- [12_test_plan.md](Templates/12_test_plan.md): plan de pruebas.
- [13_final_report.md](Templates/13_final_report.md): informe final del proyecto.

### `Documentos/`

Material de apoyo complementario.

- [Project_Management_Templates_full.md](Documentos/Project_Management_Templates_full.md): compilado general de plantillas y ejemplos.
- [manual_estilo_markdown.md](Documentos/manual_estilo_markdown.md): pautas para redactar entregables en Markdown.
- [manual_git_v2.md](Documentos/manual_git_v2.md): guía práctica de Git para el curso.
- `Documentos/imgs/`: imágenes de apoyo utilizadas por la documentación.

## Recorrido sugerido para estudiantes

Un recorrido posible para usar este repositorio durante el curso es:

1. Leer los conceptos generales en `Teoricos/`.
2. Entender cómo entrevistar al cliente en [entrevistas.md](Teoricos/entrevistas.md).
3. Practicar el relevamiento con el juego de roles de `Practicos/`.
4. Convertir necesidades en historias de usuario con [user-stories.md](Teoricos/user-stories.md).
5. Armar y priorizar el producto con [backlog.md](Teoricos/backlog.md).
6. Planificar una iteración con [sprint-planning.md](Teoricos/sprint-planning.md).
7. Usar las plantillas de `Templates/` para documentar el proyecto real.
8. Consultar `Documentos/` cuando se necesiten guías de escritura, Markdown o Git.

## Relación entre materiales

Los materiales están pensados para mostrar una secuencia de trabajo:

```text
entrevista del cliente -> requerimientos -> historias de usuario -> backlog -> sprint planning -> documentación del proyecto
```

Esta secuencia ayuda a que los estudiantes no vean cada artefacto como un documento aislado, sino como parte del proceso completo de desarrollo de software.

## Uso recomendado en clase

- Utilizar `Teoricos/` como base conceptual y de ejemplos.
- Usar `Practicos/` para actividades guiadas, simulaciones y casos de aplicación.
- Completar `Templates/` como documentación progresiva del proyecto de cada equipo.
- Complementar con `Documentos/` cuando se necesiten guías prácticas de redacción o control de versiones.

## Nota

Este repositorio puede seguir creciendo con nuevos materiales teóricos, prácticos, casos de estudio, ejemplos de backlog y guías de trabajo para acompañar la materia durante el año.
