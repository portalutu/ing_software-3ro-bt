# Project Charter — TamboTrace

### Ingeniería de Software | ADA

---

> Este documento aplica la plantilla **01_project_charter.md** al caso **TamboTrace**, desarrollado en [proyecto_scrum_trazabilidad_lechera.md](proyecto_scrum_trazabilidad_lechera.md) (Partes 1 a 3: concepción, entrevista y alcance inicial del proyecto). Es el primer documento formal del proyecto: no entra en detalle técnico — eso se desarrolla en [ada-tambotrace.md](ada-tambotrace.md) (UML/MER), [ada-tambotrace-mysql.md](ada-tambotrace-mysql.md) y [ada-tambotrace-docker.md](ada-tambotrace-docker.md). Se redacta una única vez, tras la entrevista inicial; si el alcance cambia drásticamente, el cambio se documenta aparte, no reescribiendo este charter.

---

## Project Charter

**Nombre del proyecto:**
TamboTrace — Sistema de trazabilidad para establecimiento lechero

**Cliente / patrocinador (sponsor):**
Sr. Antonio Romualdo Rogelio Roldán, dueño de la Estancia "MuchaTeta"

**Director del proyecto / Scrum Master:**
Líder del equipo de desarrollo (actúa como Scrum Master)

**Equipo:**
1 Líder/Scrum Master + 3 desarrolladores (frontend y backend)

**Fecha de inicio:**
Semana 1 del proyecto (inicio inmediatamente después de la entrevista y aprobación de la propuesta por parte del cliente)

**Duración estimada:**
8 semanas — 4 sprints de 2 semanas cada uno

---

**Situación inicial del cliente:**

Establecimiento lechero mediano ubicado en zona rural del litoral uruguayo, con aproximadamente 280 vacas lecheras. Produce leche cruda destinada a industria láctea local, con intención de mejorar procesos de cara a una futura exportación. Nivel tecnológico actual medio-bajo: el registro de información se realiza hoy mediante planillas, cuadernos, etiquetas manuales y archivos dispersos, sin ningún sistema informático integrado.

**Necesidad planteada por el cliente:**

> "Tenemos un tambo mediano y queremos empezar a ordenar mejor la información de nuestras vacas y de los lotes de leche que producimos. Hoy registramos muchas cosas en papel o en planillas separadas, pero cuando nos piden información sobre un lote, nos cuesta reconstruir de qué animales salió, en qué fecha se ordeñó, qué controles tenía y qué observaciones hubo ese día.
>
> Queremos un sistema que nos ayude a tener trazabilidad. La idea es poder identificar cada lote de leche, saber qué vacas participaron, registrar datos importantes de producción y calidad, y tener reportes que nos sirvan para demostrar orden y control si avanzamos hacia ventas más exigentes o exportación."

**Objetivo del proyecto:**

Desarrollar una aplicación web que permita registrar animales, ordeñes y lotes de leche, y consultar la trazabilidad completa de cada lote producido, mejorando el control interno y preparando información confiable para eventuales procesos de exportación.

**Justificación del proyecto:**

Hoy la información del tambo está dispersa entre papel, planillas separadas y archivos sueltos. Reconstruir de qué vacas salió un lote, en qué fecha se ordeñó y qué controles de calidad tuvo es un proceso lento y poco confiable. Si esta situación no se resuelve, el establecimiento no podrá demostrar orden y control ante procesos de venta más exigentes o exportación, y seguirá dependiendo de que una sola persona recuerde o reconstruya manualmente la información cuando se la solicitan.

**Visión del producto:**

TamboTrace será una aplicación web responsive que permitirá al establecimiento registrar sus vacas, controlar ordeñes, generar lotes de leche, asociar animales a cada lote, cargar propiedades de calidad y obtener reportes de trazabilidad. La primera versión estará orientada a resolver el circuito básico de producción y trazabilidad, evitando funcionalidades avanzadas que aumenten el costo o retrasen la entrega.

---

**Alcance incluido (primera versión):**

1. Gestión de usuarios y roles.
2. Registro de vacas lecheras.
3. Estados de animales: en producción, secado, tratamiento, baja.
4. Registro de ordeñes por fecha, turno y responsable.
5. Creación de lotes de leche.
6. Asociación de vacas a un ordeñe o lote.
7. Exclusión de animales por tratamiento u observación sanitaria.
8. Registro de propiedades del lote.
9. Cierre de lote para evitar modificaciones no autorizadas.
10. Reporte de trazabilidad por lote.
11. Reporte de animales asociados a lote.
12. Capacitación básica y entrega de manual breve.

**Alcance excluido (queda para etapas futuras):**

1. Integración automática con sensores de ordeñe.
2. Lectura automática de caravanas electrónicas o chips RFID.
3. Aplicación móvil nativa.
4. Sincronización offline completa.
5. Integración directa con laboratorios externos.
6. Facturación.
7. Módulo contable.
8. Control de alimentación animal.
9. Predicción de producción mediante inteligencia artificial.
10. Integración con sistemas de organismos externos.

---

**Stakeholders principales:**

| Rol | Persona / referente | Responsabilidad |
| --- | --- | --- |
| Sponsor principal | Sr. Antonio Romualdo Rogelio Roldán (ARRR), dueño del establecimiento | Aprueba presupuesto, alcance y prioridades |
| Usuario experto | Carlos Andrés Cáceres Alvez (caca), encargado del tambo | Explica el proceso de ordeñe y registro diario; usuario principal en oficina/campo |
| Usuario operativo | Lucía Esperanza Echera (leechera) y otro operario de ordeñe | Carga datos de ordeñes en el campo, día a día |
| Administración | Personal de oficina del establecimiento | Carga resultados de calidad, consulta trazabilidad y genera reportes |
| Veterinario | Referente veterinario del establecimiento | Consulta información sanitaria y carga observaciones veterinarias; sin acceso a información económica |
| Equipo de desarrollo | Líder/Scrum Master + desarrolladores frontend y backend | Releva necesidades, transforma la información en backlog y construye el producto |

---

**Riesgos iniciales:**

| Riesgo | Impacto posible |
| --- | --- |
| Conectividad irregular o sin señal en la sala de ordeñe y el campo abierto | Dificultad o imposibilidad de cargar información en el momento del ordeñe |
| Baja adopción por parte de los operarios si la carga de datos es lenta o compleja | Datos incompletos, cargados tarde o directamente no cargados, comprometiendo la trazabilidad |
| Alcance relevado (92 puntos) mayor a la capacidad estimada del equipo (80 puntos en 4 sprints) | Necesidad de recortar o simplificar funcionalidades antes de comenzar (offline completo, reportes avanzados, auditoría completa, módulo veterinario) |
| Datos sensibles (sanitarios, económicos, responsables de carga) mal protegidos | Exposición de información confidencial o modificación no autorizada de lotes cerrados |
| Falta de servidor propio del cliente | Obliga a definir de antemano una estrategia de hosting externo y respaldo automático |
| Requerimientos que cambian al ver el producto en funcionamiento (riesgo típico de proyectos con usuarios de campo) | Necesidad de ajustar historias durante los sprints, como ocurrió con la selección rápida de vacas y los estados de lote |

---

**Plazo y metodología:**

Scrum, con 4 sprints de 2 semanas cada uno (8 semanas de duración total). Se realiza una revisión del incremento junto al cliente (Sprint Review) al final de cada sprint, para validar que el sistema se ajuste al trabajo real del tambo y ajustar el backlog ante correcciones solicitadas.

**Presupuesto / esfuerzo estimado:**

Presupuesto aprobado por el cliente: entre USD 5.000 y USD 7.000. Propuesta presentada y aceptada: USD 6.600, para un esfuerzo estimado de 240 horas de equipo (1 Líder/Scrum Master + 3 desarrolladores) a una tarifa promedio didáctica de USD 25 por hora, más un margen de USD 600 para ajustes menores.

**Criterios de éxito:**

El sistema permite registrar vacas, ordeñes y lotes de leche; excluir animales de un ordeñe u ordeñe indicando motivo; cargar y completar propiedades de calidad después de creado el lote; cerrar un lote impidiendo modificaciones posteriores no autorizadas; y responder una consulta de trazabilidad completa por lote (fecha, turno, tanque, responsable, vacas incluidas y excluidas, propiedades de calidad) en menos de 3 segundos bajo carga normal. El proyecto se considera exitoso cuando el cliente acepta la entrega final al cabo de los 4 sprints, dentro del presupuesto de USD 6.600 y con acceso al sistema, manual básico y capacitación entregados.
