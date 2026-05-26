# Proyecto didáctico Scrum: Sistema de trazabilidad para establecimiento lechero

# Parte 1: Concepción del proyecto

## 1. Situación inicial del cliente

**Nombre del establecimiento:** Estancia "Mucha Teta"

**Cliente:** Sr. Antonio Romualdo Rogelio Roldán (arrr)\
**Rubro:** Producción lechera\
**Ubicación:** zona rural del litoral uruguayo\
**Tamaño:** establecimiento mediano\
**Cantidad aproximada de animales:** 280 vacas lecheras\
**Producción:** leche cruda destinada a industria láctea local, con intención de mejorar procesos para exportación\
**Nivel tecnológico actual:** medio-bajo\
**Registro actual:** planillas, cuadernos, etiquetas manuales y archivos dispersos

---

## 2. Necesidad puntual presentada por el cliente

El cliente se comunica con el equipo de desarrollo y plantea la siguiente necesidad inicial:

> “Tenemos un tambo mediano y queremos empezar a ordenar mejor la información de nuestras vacas y de los lotes de leche que producimos. Hoy registramos muchas cosas en papel o en planillas separadas, pero cuando nos piden información sobre un lote, nos cuesta reconstruir de qué animales salió, en qué fecha se ordeñó, qué controles tenía y qué observaciones hubo ese día.
>
> Queremos un sistema que nos ayude a tener trazabilidad. La idea es poder identificar cada lote de leche, saber qué vacas participaron, registrar datos importantes de producción y calidad, y tener reportes que nos sirvan para demostrar orden y control si avanzamos hacia ventas más exigentes o exportación.
>
> No necesitamos algo enorme al principio, pero sí algo serio, fácil de usar en el campo y que no dependa de una sola persona.”

---

## 3. Primer análisis del equipo de desarrollo

Antes de entrevistar al cliente, el equipo identifica que la solicitud contiene varias áreas que deben aclararse:

| Área a aclarar  | Preguntas iniciales del equipo                                                 |
| --------------- | ------------------------------------------------------------------------------ |
| Animales        | ¿Cómo se identifica cada vaca? ¿Caravana, número interno, chip, nombre?        |
| Producción      | ¿Cómo se registran los ordeñes? ¿Por día, por turno, por tanque, por lote?     |
| Lotes           | ¿Qué significa exactamente “lote de leche” para el cliente?                    |
| Calidad         | ¿Qué propiedades del lote deben registrarse?                                   |
| Usuarios        | ¿Quiénes usarán el sistema en el campo y en oficina?                           |
| Infraestructura | ¿Hay internet estable en el tambo? ¿Se usan celulares, tablets o computadoras? |
| Exportación     | ¿Qué información se espera demostrar ante terceros?                            |
| Seguridad       | ¿Qué información debe protegerse?                                              |
| Plazo           | ¿Cuándo necesitan tener una primera versión funcionando?                       |
| Presupuesto     | ¿Qué inversión aproximada está dispuesto a realizar el cliente?                |

---

# Parte 2: Entrevista ficticia con el cliente

## 4. Participantes de la entrevista

| Rol                  | Participante ficticio                                               | Responsabilidad                                              |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| Sponsor principal    | Sr. ARRR, administrador y dueño del establecimiento                 | Aprueba presupuesto, alcance y prioridades.                  |
| Usuario experto      | Carlos Andrés Cáceres Alvez (caca), encargado del tambo             | Explica el proceso de ordeñe y registro diario.              |
| Usuario operativo    | Lucía Esperanza Echera (leechera), operaria de ordeñe               | Representa a quienes cargarán datos en el campo.             |
| Equipo de desarrollo | Lider del equipo (actúa como Scrum Master), desarrolladores FE y BE | Relevan necesidades y transforman la información en backlog. |

---

## 5. Entrevista ficticia

### Inicio de la entrevista

**Equipo:** ¿Cuál es el principal problema que quieren resolver?

**Cliente:** El problema principal es que tenemos datos, pero están dispersos. Sabemos qué vacas se ordeñan, sabemos qué leche va al tanque y tenemos algunos controles, pero cuando queremos relacionar todo eso con un lote específico se vuelve lento y poco confiable.

---

**Equipo:** Cuando hablan de lote de leche, ¿a qué se refieren exactamente?

**Cliente:** Para nosotros un lote es la leche producida en una fecha y turno determinado, asociada a un tanque o destino. Por ejemplo, la leche del ordeñe de la mañana del 12 de mayo que fue al tanque 1. Ese lote después puede enviarse a la planta o quedar identificado para análisis.

---

**Equipo:** ¿Cada lote debe asociarse a vacas individuales?

**Cliente:** Sí. No necesitamos medir exactamente cuántos litros aportó cada vaca al lote en esta primera etapa, pero sí saber qué vacas participaron en ese ordeñe y cuáles quedaron excluidas, por ejemplo por tratamiento veterinario.

---

**Equipo:** ¿Cómo identifican actualmente a las vacas?

**Cliente:** Todas tienen caravana con número. Algunas también tienen nombre interno, pero el número de caravana es lo principal. También registramos raza, fecha de nacimiento aproximada, estado sanitario y si están en producción, secado o tratamiento.

---

**Equipo:** ¿Qué datos quieren registrar de cada lote?

**Cliente:** Fecha, turno, tanque, cantidad estimada de litros, vacas incluidas, vacas excluidas, responsable del ordeñe, observaciones y algunos valores de calidad cuando los tenemos: temperatura, grasa, proteína, células somáticas y resultado de antibióticos.

---

**Equipo:** ¿Todos esos valores se cargan en el momento?

**Cliente:** No. Algunos se cargan en el momento del ordeñe y otros llegan después del laboratorio. El sistema debería permitir completar datos más tarde.

---

**Equipo:** ¿Quiénes usarían el sistema?

**Cliente:** En el campo lo usarían el encargado del tambo y dos operarios. En oficina lo usaría administración. También nos gustaría que el veterinario pueda consultar o cargar observaciones sanitarias, pero no debería ver información económica.

---

**Equipo:** ¿Hay buena conectividad en el tambo?

**Cliente:** En la oficina hay internet bastante estable. En la sala de ordeñe hay Wi-Fi, pero a veces falla. En el campo abierto no siempre hay señal.

---

**Equipo:** ¿Necesitan que funcione sin internet?

**Cliente:** Sería ideal al menos poder cargar información básica aunque la conexión falle y sincronizar después. Si eso encarece mucho el proyecto, podemos dejarlo para una segunda etapa, pero nos preocupa depender totalmente de internet.

---

**Equipo:** ¿Qué tan urgente es el proyecto?

**Cliente:** Nos gustaría tener algo funcional en unos dos meses. No tiene que tener todo desde el primer día, pero sí debería permitir registrar vacas, ordeñes y lotes.

---

**Equipo:** ¿Tienen un presupuesto definido?

**Cliente:** Tenemos un presupuesto estimado de entre USD 5.000 y USD 7.000 para una primera versión. Si el sistema demuestra valor, podemos ampliar luego.

---

**Equipo:** ¿Qué información consideran sensible?

**Cliente:** Datos sanitarios de animales, observaciones veterinarias, información productiva, usuarios responsables y reportes internos. No queremos que cualquier usuario pueda modificar lotes cerrados.

---

**Equipo:** ¿Qué esperan recibir al finalizar el proyecto?

**Cliente:** Un sistema funcionando, usuarios creados, una capacitación corta, un manual básico y algunos reportes que podamos usar para mostrar trazabilidad por lote.

---

## 6. Información obtenida en la entrevista

| Categoría           | Información relevada                                                                    |
| ------------------- | --------------------------------------------------------------------------------------- |
| Problema principal  | Falta de trazabilidad integrada entre vacas, ordeñes, lotes y propiedades de calidad.   |
| Objetivo de negocio | Mejorar control interno y preparar información confiable para procesos de exportación.  |
| Alcance inicial     | Registro de animales, ordeñes, lotes, exclusiones, propiedades de calidad y reportes.   |
| Plazo esperado      | Aproximadamente 2 meses.                                                                |
| Presupuesto         | Entre USD 5000 y USD 7.000 para primera versión.                                        |
| Usuarios            | Administración, encargado de tambo, operarios, veterinario.                             |
| Infraestructura     | Internet estable en oficina, conexión irregular en sala de ordeñe. Sin servidor propio. |
| Seguridad           | Acceso por roles, protección de datos sanitarios y bloqueo de lotes cerrados.           |
| Riesgo operativo    | Que los operarios no usen el sistema si la carga de datos es lenta o compleja.          |
| Restricción técnica | La carga en sala de ordeñe debe ser simple y tolerante a problemas de conectividad.     |

---

# Parte 3: Alcance inicial del proyecto

## 7. Nombre propuesto del producto

**TamboTrace**

Sistema web para gestión de trazabilidad de producción lechera por animal, ordeñe y lote.

---

## 8. Visión del producto

TamboTrace será una aplicación web responsive que permitirá a un establecimiento lechero registrar sus vacas, controlar ordeñes, generar lotes de leche, asociar animales a cada lote, cargar propiedades de calidad y obtener reportes de trazabilidad.

La primera versión estará orientada a resolver el circuito básico de producción y trazabilidad, evitando funcionalidades demasiado avanzadas que puedan aumentar el costo o retrasar la entrega.

---

## 9. Alcance incluido

El proyecto incluirá:

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

---

## 10. Alcance excluido para esta primera versión

Quedarán fuera de la primera versión:

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

Estas funcionalidades podrán evaluarse en una etapa posterior si el producto inicial funciona correctamente.

---

# Parte 4: Requerimientos del sistema

## 11. Requerimientos funcionales

| Código | Requerimiento funcional                                                                                                                                                 |
| ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RF1    | El sistema debe permitir iniciar sesión con usuario y contraseña.                                                                                                       |
| RF2    | El sistema debe permitir gestionar usuarios con diferentes roles.                                                                                                       |
| RF3    | El sistema debe permitir registrar vacas con número de caravana, nombre opcional, raza, fecha de nacimiento, estado y observaciones.                                    |
| RF4    | El sistema debe permitir modificar el estado de una vaca: en producción, secado, tratamiento o baja.                                                                    |
| RF5    | El sistema debe permitir registrar ordeñes indicando fecha, turno, responsable y tanque asociado.                                                                       |
| RF6    | El sistema debe permitir seleccionar las vacas participantes en cada ordeñe.                                                                                            |
| RF7    | El sistema debe permitir excluir vacas de un ordeñe indicando motivo.                                                                                                   |
| RF8    | El sistema debe permitir crear lotes de leche a partir de un ordeñe.                                                                                                    |
| RF9    | El sistema debe permitir registrar propiedades del lote: litros estimados, temperatura, grasa, proteína, células somáticas, resultado de antibióticos y observaciones.  |
| RF10   | El sistema debe permitir completar propiedades de calidad después de creado el lote.                                                                                    |
| RF11   | El sistema debe permitir cerrar un lote para evitar modificaciones no autorizadas.                                                                                      |
| RF12   | El sistema debe permitir consultar la trazabilidad de un lote, mostrando fecha, turno, tanque, responsable, vacas incluidas, vacas excluidas y propiedades registradas. |
| RF13   | El sistema debe permitir buscar vacas por caravana, nombre o estado.                                                                                                    |
| RF14   | El sistema debe permitir generar reportes exportables en PDF o planilla.                                                                                                |
| RF15   | El sistema debe registrar un historial de cambios sobre lotes cerrados o datos críticos.                                                                                |

---

## 12. Requerimientos no funcionales

| Código | Requerimiento no funcional                                                                                                  |
| ------ | --------------------------------------------------------------------------------------------------------------------------- |
| RNF1   | El sistema debe ser usable desde computadora, tablet o celular mediante navegador web.                                      |
| RNF2   | La interfaz de carga de ordeñe debe ser simple y rápida para uso en sala de ordeñe.                                         |
| RNF3   | El sistema debe responder las consultas principales en menos de 3 segundos bajo carga normal.                               |
| RNF4   | El sistema debe permitir acceso mediante roles: administrador, encargado, operario y veterinario.                           |
| RNF5   | Los datos sensibles deben protegerse mediante autenticación y autorización por rol.                                         |
| RNF6   | El sistema debe realizar respaldos automáticos diarios.                                                                     |
| RNF7   | El sistema debe registrar fecha, hora y usuario en cambios críticos.                                                        |
| RNF8   | El sistema debe tener disponibilidad suficiente para operar durante los horarios de ordeñe.                                 |
| RNF9   | La solución debe poder desplegarse en hosting externo, ya que el cliente no posee servidor propio.                          |
| RNF10  | El sistema debe permitir crecer en cantidad de animales y lotes sin rediseñar la base de datos.                             |
| RNF11  | Los reportes deben ser claros, imprimibles y comprensibles para auditorías internas.                                        |
| RNF12  | La primera versión debe considerar conectividad irregular, evitando pantallas pesadas o procesos largos en la carga diaria. |

---

# Parte 5: Épicas del proyecto

## 13. Definición de épicas

Una épica es una funcionalidad grande o área de trabajo que debe dividirse en historias de usuario más pequeñas. En este proyecto, las épicas organizan el alcance principal antes de pasar al Product Backlog.

| Código | Épica                           | Descripción                                                                         |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------- |
| EP1    | Gestión de usuarios y seguridad | Acceso al sistema, roles, permisos y control básico de seguridad.                   |
| EP2    | Gestión de animales             | Registro, consulta y actualización de datos de vacas lecheras.                      |
| EP3    | Registro de ordeñes             | Registro de ordeñes por fecha, turno, tanque, responsable y animales participantes. |
| EP4    | Gestión de lotes de leche       | Creación, edición, cierre y consulta de lotes de leche.                             |
| EP5    | Propiedades de calidad del lote | Registro de datos productivos y resultados de análisis de calidad.                  |
| EP6    | Trazabilidad y reportes         | Consulta integral de trazabilidad por lote y generación de reportes.                |
| EP7    | Auditoría básica y respaldo     | Historial de cambios críticos y respaldo periódico de la información.               |
| EP8    | Capacitación y cierre           | Manual básico, capacitación de usuarios y cierre formal del proyecto.               |

---

# Parte 6: Estimación de esfuerzo, plazo y costo

## 14. Criterio didáctico de estimación

Para simplificar la explicación, vamos a utilizar una estimación basada en puntos de historia (storypoints).

En este ejemplo:

- 1 punto representa una tarea muy pequeña.
- 3 puntos representan una tarea simple pero con cierta lógica.
- 5 puntos representan una tarea media.
- 8 puntos representan una tarea compleja.
- 13 puntos representan una tarea grande o riesgosa.

Se asumirá una velocidad promedio del equipo de **20 puntos por sprint**.

Cada sprint tendrá una duración de **2 semanas**.

El proyecto tendrá **4 sprints**, por lo tanto la duración total estimada será de **8 semanas**.

---

## 15. Estimación por épica

| Código    | Épica                           | Estimación en puntos |
| --------- | ------------------------------- | -------------------- |
| EP1       | Gestión de usuarios y seguridad | 12                   |
| EP2       | Gestión de animales             | 14                   |
| EP3       | Registro de ordeñes             | 16                   |
| EP4       | Gestión de lotes de leche       | 16                   |
| EP5       | Propiedades de calidad del lote | 10                   |
| EP6       | Trazabilidad y reportes         | 14                   |
| EP7       | Auditoría básica y respaldo     | 6                    |
| EP8       | Capacitación y cierre           | 4                    |
| **Total** |                                 | **92 puntos**        |

La estimación supera la capacidad inicial de 80 puntos para 4 sprints. Por lo tanto, el equipo deberá ajustar alcance y priorizar. En Scrum esto es normal: el Product Backlog se ordena por valor y riesgo.

---

## 16. Ajuste de alcance para respetar plazo y presupuesto

Para entregar en 4 sprints, el equipo propone reducir o simplificar algunos elementos:

| Elemento                        | Decisión                                                                         |
| ------------------------------- | -------------------------------------------------------------------------------- |
| Sincronización offline completa | Queda fuera del alcance inicial.                                                 |
| Reportes avanzados              | Se entrega solo reporte básico por lote y exportación simple.                    |
| Auditoría completa              | Se implementa auditoría básica de cambios críticos.                              |
| Veterinario                     | Tendrá rol de consulta y carga de observaciones, no módulo veterinario completo. |
| Propiedades de calidad          | Se registran manualmente, sin integración automática con laboratorio.            |

Con estos ajustes, la primera versión se estima en **80 puntos**, alineada con 4 sprints de 20 puntos promedio.

---

## 17. Estimación de costo hipotético

Para fines didácticos, se utiliza el siguiente cálculo:

| Concepto                    | Valor hipotético              |
| --------------------------- | ----------------------------- |
| Duración del proyecto       | 8 semanas                     |
| Equipo                      | 1 Lider/SM, 3 desarrolladores |
| Esfuerzo estimado           | 240 horas                     |
| Tarifa promedio didáctica   | USD 25 por hora               |
| Costo base                  | USD 6,000                     |
| Margen para ajustes menores | USD 600                       |
| **Costo total propuesto**   | **USD 6,600**                 |

(**Nota:** El costo está estimado en forma simplificada, como estimación didáctica. En un proyecto real, el presupuesto dependería de tarifas, tecnología, infraestructura, contratos, licencias, soporte y mantenimiento.)

---

## 18. Propuesta presentada al cliente

El equipo presenta la siguiente propuesta:

| Elemento         | Propuesta                                                                           |
| ---------------- | ----------------------------------------------------------------------------------- |
| Producto         | TamboTrace, sistema web de trazabilidad lechera.                                    |
| Duración         | 8 semanas.                                                                          |
| Metodología      | Scrum, con 4 sprints de 2 semanas.                                                  |
| Entregas         | Incremento funcional al final de cada sprint.                                       |
| Presupuesto      | USD 6,600.                                                                          |
| Forma de trabajo | Revisión con cliente al cierre de cada sprint.                                      |
| Primera versión  | Usuarios, animales, ordeñes, lotes, propiedades básicas, trazabilidad y reportes.   |
| Exclusiones      | RFID, app móvil nativa, integración con laboratorio, offline completo, facturación. |

---

## 19. Aprobación ficticia del cliente

Luego de revisar la propuesta, el cliente responde:

> “La propuesta está dentro del presupuesto máximo que habíamos previsto. Nos parece correcto empezar por una versión inicial sin RFID ni integración automática con laboratorio. Lo más importante para nosotros es ordenar animales, ordeñes, lotes y reportes de trazabilidad.
>
> Aprobamos el proyecto con 4 ciclos de trabajo de 2 semanas. Queremos participar en las revisiones al final de cada ciclo para validar que el sistema se ajuste al trabajo real del tambo.”

Con esta aprobación, el equipo pasa de épicas a historias de usuario y construye el Product Backlog inicial.

---

# Parte 7: Historias de usuario

## 20. Formato de historia de usuario

Se utilizará el siguiente formato:

> Como **[tipo de usuario]**, quiero **[acción o necesidad]**, para **[beneficio o resultado esperado]**.

Cada historia incluirá criterios de aceptación para saber cuándo puede considerarse terminada.

---

## 21. Historias de usuario iniciales

| ID   | Historia de usuario                                                                                                                     | Puntos | Prioridad |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- | ------ | --------- |
| HU1  | Como administrador, quiero iniciar sesión en el sistema, para acceder de forma segura.                                                  | 3      | Alta      |
| HU2  | Como administrador, quiero crear usuarios y asignar roles, para controlar qué puede hacer cada persona.                                 | 5      | Alta      |
| HU3  | Como encargado, quiero registrar una vaca con sus datos principales, para mantener actualizado el rodeo.                                | 5      | Alta      |
| HU4  | Como encargado, quiero buscar vacas por caravana o estado, para encontrarlas rápidamente.                                               | 3      | Alta      |
| HU5  | Como encargado, quiero cambiar el estado de una vaca, para indicar si está en producción, secado, tratamiento o baja.                   | 3      | Alta      |
| HU6  | Como operario, quiero registrar un ordeñe con fecha, turno, tanque y responsable, para documentar la producción diaria.                 | 5      | Alta      |
| HU7  | Como operario, quiero seleccionar las vacas participantes en un ordeñe, para saber qué animales aportaron a la producción.              | 8      | Alta      |
| HU8  | Como operario, quiero excluir vacas de un ordeñe indicando motivo, para evitar incluir animales en tratamiento.                         | 5      | Alta      |
| HU9  | Como encargado, quiero crear un lote de leche a partir de un ordeñe, para identificar formalmente la producción.                        | 8      | Alta      |
| HU10 | Como encargado, quiero cargar litros estimados y tanque asociado al lote, para registrar datos productivos básicos.                     | 3      | Alta      |
| HU11 | Como administración, quiero cargar resultados de calidad del lote, para completar información recibida después del laboratorio.         | 5      | Media     |
| HU12 | Como encargado, quiero cerrar un lote, para evitar modificaciones accidentales.                                                         | 5      | Alta      |
| HU13 | Como administración, quiero consultar un lote y ver vacas incluidas, excluidas y propiedades, para responder consultas de trazabilidad. | 8      | Alta      |
| HU14 | Como administración, quiero exportar un reporte de trazabilidad, para presentarlo en auditorías o controles internos.                   | 5      | Media     |
| HU15 | Como veterinario, quiero registrar observaciones sanitarias de una vaca, para documentar situaciones relevantes.                        | 5      | Media     |
| HU16 | Como administrador, quiero ver historial de cambios críticos, para saber quién modificó información sensible.                           | 5      | Media     |
| HU17 | Como administrador, quiero que el sistema realice respaldos automáticos, para reducir riesgo de pérdida de datos.                       | 3      | Media     |
| HU18 | Como usuario nuevo, quiero recibir una guía básica de uso, para aprender el flujo principal del sistema.                                | 2      | Baja      |

---

# Parte 8: Product Backlog inicial

## 22. Backlog priorizado

| Orden | ID   | Historia                           | Puntos | Sprint estimado            |
| ----- | ---- | ---------------------------------- | ------ | -------------------------- |
| 1     | HU1  | Inicio de sesión                   | 3      | Sprint 1                   |
| 2     | HU2  | Gestión de usuarios y roles        | 5      | Sprint 1                   |
| 3     | HU3  | Registro de vacas                  | 5      | Sprint 1                   |
| 4     | HU4  | Búsqueda de vacas                  | 3      | Sprint 1                   |
| 5     | HU5  | Cambio de estado de vaca           | 3      | Sprint 1                   |
| 6     | HU6  | Registro de ordeñe                 | 5      | Sprint 2                   |
| 7     | HU7  | Selección de vacas participantes   | 8      | Sprint 2                   |
| 8     | HU8  | Exclusión de vacas con motivo      | 5      | Sprint 2                   |
| 9     | HU9  | Creación de lote desde ordeñe      | 8      | Sprint 3                   |
| 10    | HU10 | Datos productivos básicos del lote | 3      | Sprint 3                   |
| 11    | HU11 | Resultados de calidad              | 5      | Sprint 3                   |
| 12    | HU12 | Cierre de lote                     | 5      | Sprint 3                   |
| 13    | HU13 | Consulta de trazabilidad por lote  | 8      | Sprint 4                   |
| 14    | HU14 | Exportación de reporte             | 5      | Sprint 4                   |
| 15    | HU16 | Historial de cambios críticos      | 5      | Sprint 4                   |
| 16    | HU17 | Respaldos automáticos              | 3      | Sprint 4                   |
| 17    | HU15 | Observaciones sanitarias           | 5      | Sprint 4, si hay capacidad |
| 18    | HU18 | Guía básica de uso                 | 2      | Sprint 4                   |

---

# Parte 9: Planificación de sprints

## 23. Sprint 1: Base del sistema y registro de animales

### Objetivo del sprint

Construir la base inicial del sistema: acceso seguro, roles básicos y gestión inicial de vacas.

### Historias seleccionadas

| ID        | Historia                    | Puntos |
| --------- | --------------------------- | ------ |
| HU1       | Inicio de sesión            | 3      |
| HU2       | Gestión de usuarios y roles | 5      |
| HU3       | Registro de vacas           | 5      |
| HU4       | Búsqueda de vacas           | 3      |
| HU5       | Cambio de estado de vaca    | 3      |
| **Total** |                             | **19** |

### Incremento esperado

Al finalizar el sprint, el cliente podrá:

- Iniciar sesión.
- Crear usuarios.
- Asignar roles básicos.
- Registrar vacas.
- Buscar vacas.
- Cambiar estado de vacas.

### Sprint Review 1

El cliente revisa el incremento y responde:

> “Esto está bien para empezar. La carga de vacas es clara y la búsqueda por caravana nos sirve mucho. Aprobamos este avance.”

### Resultado del sprint

**Sprint aprobado sin correcciones mayores.**

### Aprendizaje didáctico

Este sprint permite explicar que Scrum busca entregar valor temprano. Aunque el sistema aún no resuelve toda la trazabilidad, ya existe una base funcional usable por el cliente.

---

## 24. Sprint 2: Registro de ordeñes y participación de animales

### Objetivo del sprint

Permitir registrar ordeñes y asociar vacas participantes o excluidas.

### Historias seleccionadas

| ID             | Historia                                 | Puntos |
| -------------- | ---------------------------------------- | ------ |
| HU6            | Registro de ordeñe                       | 5      |
| HU7            | Selección de vacas participantes         | 8      |
| HU8            | Exclusión de vacas con motivo            | 5      |
| Ajuste técnico | Mejora de interfaz para selección rápida | 2      |
| **Total**      |                                          | **20** |

### Incremento esperado

Al finalizar el sprint, el cliente podrá:

- Crear un ordeñe.
- Indicar fecha, turno, tanque y responsable.
- Seleccionar vacas participantes.
- Excluir vacas indicando motivo.

### Sprint Review 2

Durante la revisión, el cliente detecta un problema:

> “La función está bien, pero seleccionar vaca por vaca nos lleva demasiado tiempo. En un ordeñe participan muchas vacas. Necesitamos una forma de cargar rápidamente todas las vacas en producción y después excluir solo las que no participaron.”

### Corrección solicitada

El cliente solicita agregar una acción rápida:

- Botón “Agregar todas las vacas en producción”.
- Luego permitir quitar o excluir animales específicos.

### Impacto en el backlog

Se agrega una nueva historia:

| ID   | Nueva historia                                                                                                               | Puntos | Prioridad |
| ---- | ---------------------------------------------------------------------------------------------------------------------------- | ------ | --------- |
| HU19 | Como operario, quiero agregar automáticamente todas las vacas en producción a un ordeñe, para no seleccionarlas una por una. | 5      | Alta      |

### Resultado del sprint

**Sprint funcional, pero requiere corrección.**

### Aprendizaje didáctico

Este sprint permite explicar que una funcionalidad puede estar técnicamente correcta, pero no ser suficientemente útil en la operación real. La retroalimentación del usuario mejora el producto.

---

## 25. Sprint 3: Lotes de leche y propiedades de calidad

### Objetivo del sprint

Crear lotes de leche a partir de ordeñes y registrar sus propiedades principales.

### Historias seleccionadas

| ID        | Historia                                              | Puntos |
| --------- | ----------------------------------------------------- | ------ |
| HU19      | Agregar automáticamente vacas en producción al ordeñe | 5      |
| HU9       | Creación de lote desde ordeñe                         | 8      |
| HU10      | Datos productivos básicos del lote                    | 3      |
| HU11      | Resultados de calidad                                 | 5      |
| **Total** |                                                       | **21** |

El equipo acepta 21 puntos porque HU19 es una corrección prioritaria del sprint anterior.

### Incremento esperado

Al finalizar el sprint, el cliente podrá:

- Agregar rápidamente vacas en producción a un ordeñe.
- Crear un lote desde un ordeñe.
- Registrar litros estimados y tanque.
- Cargar propiedades de calidad del lote.

### Sprint Review 3

El cliente aprueba la mejora de selección rápida, pero observa otra dificultad:

> “Ahora crear el lote funciona, pero necesitamos diferenciar entre datos cargados en el momento del ordeñe y datos que llegan después del laboratorio. Si alguien mira el lote antes de cargar los análisis, debería quedar claro que está incompleto.”

### Corrección solicitada

El cliente solicita agregar estados de lote:

- Borrador.
- Pendiente de análisis.
- Completo.
- Cerrado.

También solicita que un lote no pueda cerrarse si faltan datos obligatorios.

### Impacto en el backlog

Se agregan dos nuevas historias:

| ID   | Nueva historia                                                                                                             | Puntos | Prioridad |
| ---- | -------------------------------------------------------------------------------------------------------------------------- | ------ | --------- |
| HU20 | Como encargado, quiero ver el estado de un lote, para saber si está incompleto, pendiente de análisis, completo o cerrado. | 5      | Alta      |
| HU21 | Como encargado, quiero que el sistema impida cerrar un lote si faltan datos, para evitar registros incompletos.            | 3      | Alta      |

### Resultado del sprint

**Sprint funcional, pero requiere ajustes antes de la entrega final.**

### Aprendizaje didáctico

Este sprint permite explicar que los requerimientos evolucionan cuando el cliente ve el sistema en funcionamiento. También muestra la diferencia entre dato opcional, dato obligatorio y regla de negocio.

---

## 26. Sprint 4: Trazabilidad, reportes, cierre y entrega

### Objetivo del sprint

Completar la trazabilidad por lote, aplicar correcciones solicitadas y preparar el cierre del proyecto.

### Historias seleccionadas

| ID        | Historia                          | Puntos |
| --------- | --------------------------------- | ------ |
| HU20      | Estados de lote                   | 5      |
| HU21      | Validación para cierre de lote    | 3      |
| HU12      | Cierre de lote                    | 5      |
| HU13      | Consulta de trazabilidad por lote | 8      |
| HU14      | Exportación de reporte            | 5      |
| HU16      | Historial de cambios críticos     | 5      |
| HU18      | Guía básica de uso                | 2      |
| **Total** |                                   | **33** |

El total supera la velocidad normal del equipo. Para mantener el plazo, se toman decisiones de alcance:

| Elemento                      | Decisión                                                                                 |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| HU17 Respaldos automáticos    | Se configura respaldo básico del hosting, no una pantalla administrativa propia.         |
| HU15 Observaciones sanitarias | Queda como mejora posterior, salvo observaciones simples dentro del estado de cada vaca. |
| Exportación de reporte        | Se entrega formato PDF básico, sin personalización avanzada.                             |
| Historial de cambios          | Se aplica solo a lotes y cambios de estado críticos.                                     |

### Incremento esperado

Al finalizar el sprint, el cliente podrá:

- Ver estados de lote.
- Validar datos mínimos antes de cerrar.
- Cerrar lotes.
- Consultar trazabilidad completa por lote.
- Exportar reporte básico.
- Revisar cambios críticos.
- Recibir una guía breve de uso.

### Sprint Review 4

El cliente revisa el producto final y responde:

> “Ahora el sistema refleja mejor cómo trabajamos. Podemos registrar vacas, ordeñes, lotes, datos de calidad y consultar la trazabilidad. El reporte básico nos sirve para empezar. Aprobamos la entrega final y dejamos para una segunda etapa el módulo veterinario más completo y la integración con laboratorio.”

### Resultado del sprint

**Sprint aprobado. Producto aceptado para cierre de proyecto.**

### Aprendizaje didáctico

Este sprint permite explicar cierre de alcance, priorización y negociación. No todo lo deseado entra en la primera versión. El valor del proyecto está en entregar un producto funcional, útil y aceptado por el cliente.

---

# Parte 10: Resumen de las cuatro iteraciones

## 27. Tabla general de sprints

| Sprint   | Objetivo                         | Incremento entregado                               | Resultado           |
| -------- | -------------------------------- | -------------------------------------------------- | ------------------- |
| Sprint 1 | Base del sistema y animales      | Login, roles, registro y búsqueda de vacas         | Aprobado            |
| Sprint 2 | Ordeñes y participación de vacas | Registro de ordeñe, selección y exclusión de vacas | Requiere corrección |
| Sprint 3 | Lotes y calidad                  | Creación de lote, datos productivos y análisis     | Requiere corrección |
| Sprint 4 | Trazabilidad y cierre            | Estados, cierre, consulta, reporte y guía          | Aprobado            |

---

## 28. Evolución del proyecto

| **Momento**           | **Estado**                                                                  |
| --------------------- | --------------------------------------------------------------------------- |
| Inicio                | Solo existe una necesidad general del cliente.                              |
| Después de entrevista | Se conocen alcance, usuarios, restricciones y prioridades.                  |
| Después de épicas     | El trabajo se organiza en grandes bloques funcionales.                      |
| Después del backlog   | El equipo tiene historias priorizadas y estimadas.                          |
| Después del Sprint 1  | Existe una base funcional con usuarios y animales.                          |
| Después del Sprint 2  | Se pueden registrar ordeñes, pero se detecta problema de usabilidad.        |
| Después del Sprint 3  | Se pueden crear lotes, pero se detecta necesidad de estados y validaciones. |
| Después del Sprint 4  | Existe un producto funcional de trazabilidad inicial.                       |
| Cierre                | El cliente acepta la entrega y se documentan mejoras futuras.               |

---

# Parte 11: Cierre del proyecto

## 29. Actividades de cierre

Al finalizar el proyecto, el equipo realiza las siguientes actividades:

1. Presentación final al cliente.
2. Validación de los requerimientos cumplidos.
3. Entrega de acceso al sistema.
4. Entrega de guía básica de uso.
5. Capacitación breve a usuarios principales.
6. Revisión de pendientes y mejoras futuras.
7. Registro de lecciones aprendidas.
8. Cierre formal del proyecto.

---

## 30. Requerimientos cumplidos al cierre

| Área                        | Estado                                   |
| --------------------------- | ---------------------------------------- |
| Usuarios y roles            | Cumplido.                                |
| Registro de vacas           | Cumplido.                                |
| Estados de vacas            | Cumplido.                                |
| Registro de ordeñes         | Cumplido con mejora de selección rápida. |
| Exclusión de animales       | Cumplido.                                |
| Creación de lotes           | Cumplido.                                |
| Propiedades de calidad      | Cumplido en carga manual.                |
| Estados de lote             | Cumplido como corrección del Sprint 3.   |
| Cierre de lote              | Cumplido con validación mínima.          |
| Reporte de trazabilidad     | Cumplido en versión básica.              |
| Historial de cambios        | Cumplido en cambios críticos.            |
| Módulo veterinario completo | Pendiente para fase futura.              |
| Integración con laboratorio | Pendiente para fase futura.              |
| Offline completo            | Pendiente para fase futura.              |

---

## 31. Lecciones aprendidas (Sprint Retrospective)

| Lección                                                     | Explicación                                                                                                           |
| ----------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| La necesidad inicial no alcanza para construir el sistema   | El cliente comenzó con una idea general, pero la entrevista permitió descubrir procesos, restricciones y prioridades. |
| Los usuarios reales modifican el diseño                     | La selección manual de vacas parecía correcta, pero resultó poco práctica en operación diaria.                        |
| Los requerimientos cambian al ver el producto               | Los estados de lote surgieron después de que el cliente vio cómo funcionaba la carga de calidad.                      |
| Scrum permite correcciones controladas                      | Los cambios se incorporaron al backlog y se priorizaron sin reiniciar el proyecto.                                    |
| No todo entra en la primera versión                         | Algunas ideas útiles quedaron fuera para respetar plazo y presupuesto.                                                |
| El cierre no significa que el producto no pueda evolucionar | El sistema queda operativo y se identifican mejoras futuras.                                                          |

---

# Parte 12: Reflexionamos sobre el caso

## 32. Preguntas para analizar en clase

1. ¿Qué información importante no estaba clara en la necesidad inicial del cliente?
2. ¿Qué preguntas de la entrevista fueron más importantes para definir el alcance?
3. ¿Qué requerimientos funcionales son indispensables para la primera versión?
4. ¿Qué requerimientos no funcionales condicionan el diseño del sistema?
5. ¿Por qué no conviene incluir RFID, app móvil e integración con laboratorio en la primera versión?
6. ¿Qué diferencia hay entre una épica y una historia de usuario?
7. ¿Por qué el Sprint 2 generó una corrección si la funcionalidad estaba implementada?
8. ¿Qué regla de negocio nueva apareció en el Sprint 3?
9. ¿Cómo afectaron las correcciones al backlog?
10. ¿Qué aprendizajes deja este caso sobre la relación entre cliente y equipo de desarrollo?

---

## 33. Actividad en clase

Dividir la clase en equipos y asignarles una de estas tareas:

| Equipo   | Tarea                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------ |
| Equipo 1 | Revisar la entrevista y proponer 10 preguntas adicionales que deberían haberse hecho.            |
| Equipo 2 | Clasificar los requerimientos en funcionales, no funcionales, reglas de negocio y restricciones. |
| Equipo 3 | Revisar las épicas y proponer si alguna debería dividirse o unirse con otra.                     |
| Equipo 4 | Revisar el backlog y justificar si el orden de prioridad es correcto.                            |
| Equipo 5 | Analizar los cambios de los sprints 2 y 3 y explicar su impacto en plazo y alcance.              |
| Equipo 6 | Proponer una fase 2 del producto con nuevas épicas e historias de usuario.                       |

---

## 34. Glosario breve

| Término                    | Explicación didáctica                                                                   |
| -------------------------- | --------------------------------------------------------------------------------------- |
| Cliente                    | Persona u organización que necesita el sistema.                                         |
| Sponsor                    | Persona que aprueba presupuesto, prioridades y decisiones importantes.                  |
| Stakeholder                | Persona afectada por el sistema o interesada en sus resultados.                         |
| Requerimiento funcional    | Acción o función que el sistema debe realizar.                                          |
| Requerimiento no funcional | Condición de calidad, seguridad, rendimiento, usabilidad o restricción técnica.         |
| Épica                      | Funcionalidad grande que debe dividirse en historias más pequeñas.                      |
| Historia de usuario        | Descripción breve de una necesidad desde el punto de vista de un usuario.               |
| Product Backlog            | Lista priorizada de trabajo pendiente del producto.                                     |
| Sprint                     | Iteración corta de trabajo en Scrum.                                                    |
| Sprint Planning            | Reunión donde se decide qué se hará en el sprint.                                       |
| Incremento                 | Parte funcional del producto entregada al final de un sprint.                           |
| Sprint Review              | Revisión del incremento con el cliente o interesados.                                   |
| Corrección                 | Cambio solicitado luego de revisar una entrega.                                         |
| Cierre                     | Etapa final donde se acepta el producto, se documenta y se entregan pendientes futuros. |

---

# Parte 13: Conclusión

Este proyecto permite observar el ciclo de vida completo de un desarrollo de software desde una necesidad inicial hasta una entrega aceptada por el cliente.

El caso muestra que el trabajo de Ingeniería de Software no se limita a programar. El equipo debe comprender el negocio, entrevistar, analizar, priorizar, estimar, negociar alcance, construir de forma incremental y validar con usuarios reales.

La metodología Scrum permite organizar el trabajo en entregas cortas, recibir retroalimentación y adaptar el producto. Sin embargo, también exige disciplina: mantener un backlog priorizado, estimar con criterio, proteger el objetivo del sprint y documentar correctamente las decisiones.

En este ejemplo, el sistema TamboTrace no resuelve todos los problemas posibles del establecimiento rural, pero sí entrega una primera versión útil, verificable y alineada con el objetivo principal: mejorar la trazabilidad de los lotes de leche producidos.

