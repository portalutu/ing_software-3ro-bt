# Análisis de Requerimientos — TamboTrace
### Sistema de trazabilidad de producción lechera
**Ingeniería de Software | 3.º año Bachillerato Tecnológico**

---

> Este documento toma como base el proyecto **TamboTrace**, un sistema de trazabilidad lechera desarrollado para la Estancia "MuchaTeta" del Sr. Antonio Romualdo Rogelio Roldán. A lo largo del texto, cada concepto teórico se explica primero de forma general y luego se aplica directamente a situaciones reales del proyecto. La idea es que al terminar de leerlo, no solo se conozca la teoría, sino que también se entienda cómo se usa en la práctica.

---

## 1.1. Definición e importancia de los requerimientos

### ¿Qué son los requerimientos?

Un **requerimiento** es una descripción de lo que un sistema debe hacer o de las condiciones que debe cumplir para satisfacer la necesidad de alguien. Dicho de forma más sencilla: es todo aquello que el sistema tiene que ser o hacer para que el cliente y los usuarios queden conformes.

La palabra "requerimiento" proviene del inglés *requirement* y en ingeniería de software se usa para nombrar tanto las funcionalidades concretas del sistema como sus restricciones de calidad, seguridad, rendimiento y comportamiento.

### ¿Por qué son tan importantes?

Imaginemos que un grupo de estudiantes decide construir una casa sin planos. Cada uno empieza a construir la parte que le parece más urgente. El resultado casi seguro será un desastre: paredes que no encajan, puertas que abren al vacío, una escalera que lleva a ninguna parte. En el desarrollo de software pasa exactamente lo mismo si no se relevan correctamente los requerimientos.

Los requerimientos son importantes porque:

- **Definen el acuerdo entre cliente y equipo.** Sin requerimientos claros, el equipo construye lo que cree que el cliente quiere, no lo que realmente necesita.
- **Evitan el retrabajo.** Descubrir un error en los requerimientos durante el análisis cuesta mucho menos que descubrirlo después de haber programado todo el sistema.
- **Permiten estimar y planificar.** Sin saber qué hay que hacer, es imposible saber cuánto tiempo llevará ni cuánto costará.
- **Sirven de base para las pruebas.** Si no está escrito lo que el sistema debe hacer, no hay forma de verificar si lo hace correctamente.

### Aplicación al proyecto TamboTrace

Cuando el Sr. Roldán se acercó al equipo de desarrollo, su necesidad inicial era bastante vaga:

> *"Queremos empezar a ordenar mejor la información de nuestras vacas y de los lotes de leche."*

Esa frase, aunque válida como punto de partida, no alcanzaba para construir nada. ¿Qué información exactamente? ¿Cómo se identifican las vacas? ¿Qué es un lote para ellos? ¿Quién usará el sistema?

El equipo tuvo que realizar un proceso de relevamiento para transformar esa necesidad general en requerimientos concretos, verificables y realizables. Sin ese proceso, hubieran terminado construyendo un sistema que quizás era técnicamente correcto pero operativamente inútil para el trabajo real del tambo.

---

## 1.2. Herramienta ES.RE — Especificación de Requerimientos (IEEE Std. 830-1998)

### ¿Qué es la norma IEEE 830?

La **IEEE Std. 830-1998** es un estándar publicado por el *Institute of Electrical and Electronics Engineers* (IEEE) que establece las buenas prácticas para escribir una **Especificación de Requerimientos de Software** (ERS, o en inglés *SRS: Software Requirements Specification*).

El IEEE es la organización de ingenieros eléctricos y electrónicos más grande del mundo y una de sus responsabilidades es definir estándares técnicos que sirvan de referencia para la industria.

La norma 830 propone que un documento de especificación de requerimientos debe ser:

| Característica | Significado |
|---|---|
| **Correcto** | Cada requerimiento refleja una necesidad real del cliente. |
| **No ambiguo** | Tiene una sola interpretación posible. |
| **Completo** | Cubre todas las situaciones relevantes. |
| **Consistente** | No hay contradicciones entre requerimientos. |
| **Verificable** | Es posible comprobar si el sistema lo cumple o no. |
| **Modificable** | Puede actualizarse sin afectar el resto del documento. |
| **Trazable** | Se puede rastrear su origen y su impacto en el sistema. |

### Estructura básica de un documento ERS según IEEE 830

Un documento ERS típico incluye:

1. **Introducción**: propósito, alcance, definiciones y visión general.
2. **Descripción general**: contexto del producto, funciones principales, características de usuarios y restricciones.
3. **Requerimientos específicos**: funcionales, no funcionales, interfaces y restricciones.
4. **Apéndices e índice**.

### Aplicación al proyecto TamboTrace

En TamboTrace, el documento de especificación de requerimientos incluye:

- Una **descripción del producto**: *"Sistema web para gestión de trazabilidad de producción lechera por animal, ordeñe y lote."*
- El **alcance incluido y excluido** (qué se hace en esta versión y qué queda afuera).
- Los **requerimientos funcionales** (RF1 a RF15).
- Los **requerimientos no funcionales** (RNF1 a RNF12).

Cada requerimiento está numerado (RF1, RNF3...) para que pueda trazarse y verificarse de forma independiente. Por ejemplo: RF11 establece que *"el sistema debe permitir cerrar un lote para evitar modificaciones no autorizadas"*. Ese requerimiento es verificable: o el sistema lo permite o no lo permite. No hay ambigüedad.

---

## 1.2.1. Tipos de requerimientos

Los requerimientos pueden clasificarse de varias maneras. La clasificación más utilizada en ingeniería de software es la que distingue entre **requerimientos funcionales** y **requerimientos no funcionales**. Pero también existen otros tipos que vale la pena conocer:

| Tipo | Descripción |
|---|---|
| **Funcionales** | Describen qué debe hacer el sistema: sus funciones, comportamientos y respuestas a entradas. |
| **No funcionales** | Describen cómo debe ser el sistema: su calidad, rendimiento, seguridad, disponibilidad. |
| **De dominio** | Provienen del área de negocio del cliente: reglas, normas o leyes que el sistema debe respetar. |
| **De interfaz** | Describen cómo el sistema interactúa con otros sistemas, hardware o personas. |
| **De restricción** | Limitan las opciones del diseño: tecnología obligatoria, plataforma, presupuesto. |

En proyectos reales, los requerimientos de dominio y restricción suelen entremezclarse con los funcionales y no funcionales. Por eso es importante leer con cuidado lo que el cliente expresa y clasificar correctamente cada necesidad.

### Aplicación al proyecto TamboTrace

El proyecto TamboTrace contiene los tres tipos principales:

- **Requerimientos de dominio**: *"Un lote no puede cerrarse si faltan datos obligatorios."* Esta regla no viene del equipo de desarrollo, viene del proceso productivo del tambo: tiene sentido que un lote incompleto no se certifique como cerrado.
- **Requerimientos de restricción**: *"La solución debe desplegarse en hosting externo, ya que el cliente no posee servidor propio."* (RNF9). Esta restricción condiciona toda la arquitectura del sistema.
- **Requerimientos de interfaz**: aunque no están listados explícitamente, el hecho de que el sistema deba ser *"web responsive"* y funcionar desde celulares, tablets y computadoras implica requerimientos de interfaz con el navegador y el hardware del usuario.

---

## 1.2.2. Requerimientos funcionales

### Definición

Un **requerimiento funcional** describe una acción, función o servicio que el sistema debe ser capaz de realizar. Responde a la pregunta: *¿qué debe hacer el sistema?*

Los requerimientos funcionales se identifican con frases del estilo:

> *"El sistema debe permitir..."*
> *"El sistema debe registrar..."*
> *"El sistema debe generar..."*

Cada requerimiento funcional es una promesa del sistema hacia el usuario: si el sistema no lo cumple, el sistema está fallando.

### Características de un buen requerimiento funcional

- Es concreto: describe una acción específica.
- Es verificable: se puede comprobar si el sistema lo hace o no.
- Es independiente: puede entenderse sin necesitar leer otros requerimientos.

### Requerimientos funcionales de TamboTrace

A continuación se presentan los 15 requerimientos funcionales del proyecto, agrupados por área para facilitar su comprensión:

**Acceso y usuarios**

| Código | Requerimiento |
|---|---|
| RF1 | El sistema debe permitir iniciar sesión con usuario y contraseña. |
| RF2 | El sistema debe permitir gestionar usuarios con diferentes roles. |

**Gestión de animales**

| Código | Requerimiento |
|---|---|
| RF3 | El sistema debe permitir registrar vacas con número de caravana, nombre opcional, raza, fecha de nacimiento, estado y observaciones. |
| RF4 | El sistema debe permitir modificar el estado de una vaca: en producción, secado, tratamiento o baja. |
| RF13 | El sistema debe permitir buscar vacas por caravana, nombre o estado. |

**Ordeñes**

| Código | Requerimiento |
|---|---|
| RF5 | El sistema debe permitir registrar ordeñes indicando fecha, turno, responsable y tanque asociado. |
| RF6 | El sistema debe permitir seleccionar las vacas participantes en cada ordeñe. |
| RF7 | El sistema debe permitir excluir vacas de un ordeñe indicando motivo. |

**Lotes de leche**

| Código | Requerimiento |
|---|---|
| RF8 | El sistema debe permitir crear lotes de leche a partir de un ordeñe. |
| RF9 | El sistema debe permitir registrar propiedades del lote: litros estimados, temperatura, grasa, proteína, células somáticas, resultado de antibióticos y observaciones. |
| RF10 | El sistema debe permitir completar propiedades de calidad después de creado el lote. |
| RF11 | El sistema debe permitir cerrar un lote para evitar modificaciones no autorizadas. |

**Trazabilidad y reportes**

| Código | Requerimiento |
|---|---|
| RF12 | El sistema debe permitir consultar la trazabilidad de un lote, mostrando fecha, turno, tanque, responsable, vacas incluidas, vacas excluidas y propiedades registradas. |
| RF14 | El sistema debe permitir generar reportes exportables en PDF o planilla. |
| RF15 | El sistema debe registrar un historial de cambios sobre lotes cerrados o datos críticos. |

### Un ejemplo concreto de trazabilidad

RF12 es quizás el requerimiento más representativo del objetivo del proyecto. Cuando alguien consulta la trazabilidad de un lote, el sistema debe poder responder:

- *¿Cuándo se produjo este lote?* → Fecha y turno del ordeñe.
- *¿Quién estuvo a cargo?* → Responsable registrado.
- *¿Qué vacas participaron?* → Lista de animales incluidos.
- *¿Hubo animales excluidos?* → Con el motivo correspondiente.
- *¿Qué calidad tiene la leche?* → Temperatura, grasa, proteína, células somáticas y antibióticos.

Sin este requerimiento correctamente implementado, el sistema sería funcional pero no cumpliría su objetivo principal.

---

## 1.2.3. Requerimientos no funcionales

### Definición

Un **requerimiento no funcional** describe cómo debe ser el sistema, no qué debe hacer. Responde a preguntas como:

> *¿Con qué rapidez debe responder?*
> *¿Desde qué dispositivos se puede usar?*
> *¿Qué tan seguro debe ser?*
> *¿Cuánto tiempo debe estar disponible?*

Los requerimientos no funcionales son, con frecuencia, los más difíciles de relevar porque los usuarios no siempre los expresan de forma directa. Cuando el Sr. Roldán dijo *"algo fácil de usar en el campo"*, estaba describiendo un requerimiento de **usabilidad**. Cuando dijo *"que no dependa de una sola persona"*, estaba hablando de **disponibilidad y roles de acceso**.

Los requerimientos no funcionales se clasifican típicamente en categorías:

| Categoría | Ejemplos |
|---|---|
| **Rendimiento** | Tiempo de respuesta, capacidad de usuarios concurrentes. |
| **Usabilidad** | Facilidad de aprendizaje, simplicidad de la interfaz. |
| **Seguridad** | Autenticación, autorización, protección de datos. |
| **Disponibilidad** | Uptime, tolerancia a fallas. |
| **Escalabilidad** | Capacidad de crecer sin rediseñar. |
| **Portabilidad** | Funcionar en distintos dispositivos o sistemas operativos. |
| **Mantenibilidad** | Facilidad para actualizar o corregir el sistema. |

### Requerimientos no funcionales de TamboTrace

| Código | Requerimiento | Categoría |
|---|---|---|
| RNF1 | El sistema debe ser usable desde computadora, tablet o celular mediante navegador web. | Portabilidad |
| RNF2 | La interfaz de carga de ordeñe debe ser simple y rápida para uso en sala de ordeñe. | Usabilidad |
| RNF3 | El sistema debe responder las consultas principales en menos de 3 segundos bajo carga normal. | Rendimiento |
| RNF4 | El sistema debe permitir acceso mediante roles: administrador, encargado, operario y veterinario. | Seguridad |
| RNF5 | Los datos sensibles deben protegerse mediante autenticación y autorización por rol. | Seguridad |
| RNF6 | El sistema debe realizar respaldos automáticos diarios. | Disponibilidad |
| RNF7 | El sistema debe registrar fecha, hora y usuario en cambios críticos. | Trazabilidad |
| RNF8 | El sistema debe tener disponibilidad suficiente durante los horarios de ordeñe. | Disponibilidad |
| RNF9 | La solución debe poder desplegarse en hosting externo, ya que el cliente no posee servidor propio. | Restricción técnica |
| RNF10 | El sistema debe permitir crecer en cantidad de animales y lotes sin rediseñar la base de datos. | Escalabilidad |
| RNF11 | Los reportes deben ser claros, imprimibles y comprensibles para auditorías. | Usabilidad |
| RNF12 | La primera versión debe considerar conectividad irregular, evitando pantallas pesadas. | Rendimiento |

### La importancia real de los no funcionales

RNF2 y RNF12 nacieron de una situación muy concreta: en la sala de ordeñe, los operarios trabajan con las manos ocupadas, bajo presión de tiempo y con conexión Wi-Fi inestable. Si la interfaz era lenta o compleja, la consecuencia no era técnica, sino operativa: el operario directamente dejaba de usar el sistema. Un requerimiento no funcional ignorado puede hundir un proyecto que funciona perfectamente en términos técnicos.

---

## 1.3. Ciclo de vida de los requisitos

### ¿Qué es el ciclo de vida de los requisitos?

Los requerimientos no son estáticos. No se relevan una sola vez y no cambian nunca. Al contrario: tienen un ciclo de vida que comienza con una idea vaga y puede evolucionar a lo largo de todo el desarrollo del sistema.

Las etapas típicas del ciclo de vida de los requisitos son:

```
Elicitación → Análisis → Especificación → Validación → Gestión del cambio
```

| Etapa | ¿Qué se hace? |
|---|---|
| **Elicitación** | Se descubren las necesidades mediante entrevistas, cuestionarios, observación, etc. |
| **Análisis** | Se estudian y clasifican los requerimientos relevados: ¿son claros? ¿son consistentes? ¿se contradicen? |
| **Especificación** | Se documentan de forma precisa, verificable y no ambigua. |
| **Validación** | El cliente confirma que los requerimientos reflejan lo que necesita. |
| **Gestión del cambio** | Cuando un requerimiento cambia durante el desarrollo, se controla su impacto y se actualiza la documentación. |

### El ciclo de vida en TamboTrace

Este proyecto es un caso de estudio excelente porque el ciclo de vida de los requisitos se puede observar en acción:

**Elicitación**: el equipo realizó una entrevista estructurada con tres participantes del lado del cliente (dueño, encargado de tambo y operaria de ordeñe). En esa entrevista surgieron datos clave que no estaban en la descripción inicial: la conectividad irregular en la sala de ordeñe, la necesidad de completar datos de calidad después del laboratorio, y el rol del veterinario con acceso restringido.

**Análisis**: el equipo detectó áreas de indefinición (¿qué es exactamente un "lote"?) y las clarificó mediante preguntas directas antes de escribir una sola línea de especificación.

**Especificación**: los requerimientos quedaron documentados en forma de tabla con código único, descripción precisa y categoría.

**Validación**: en cada Sprint Review, el cliente vio el sistema funcionando y confirmó o ajustó los requerimientos. Por ejemplo, en la Sprint Review 2 el cliente dijo que la selección de vacas una por una era impráctica, lo que generó un nuevo requerimiento (HU19): cargar automáticamente todas las vacas en producción.

**Gestión del cambio**: el nuevo requerimiento no se ignoró ni se incorporó de forma desordenada. Se documentó como historia de usuario con puntos, se agregó al backlog y se priorizó formalmente.

> **Reflexión**: los requerimientos no terminan de definirse antes de empezar a programar. Se refinan a lo largo de todo el proyecto. Un equipo que ignora este ciclo termina con un sistema que técnicamente funciona pero no resuelve el problema real.

---

## 1.4. Usuarios del sistema

### ¿Qué se entiende por usuario del sistema?

En ingeniería de software, un **usuario del sistema** es toda persona que interactúa directamente con él: lo usa, lo consulta, carga datos o toma decisiones a partir de su información.

Es importante distinguir entre:

- **Usuario final**: quien usa el sistema en el día a día.
- **Usuario administrador**: quien configura, mantiene y gestiona el sistema.
- **Stakeholder**: persona con interés en el sistema, aunque no lo use directamente (más sobre esto en la sección 1.4.2).

### 1.4.1. Tipos de usuarios y clasificación

Los usuarios pueden clasificarse según diferentes criterios:

**Por nivel de acceso:**

| Tipo | Descripción |
|---|---|
| Administrador | Acceso total. Puede configurar el sistema, crear usuarios y ver todo. |
| Usuario con privilegios | Acceso a funciones específicas de su área. |
| Usuario básico | Acceso restringido a las tareas de su rol. |
| Usuario de consulta | Solo puede ver información, no modificarla. |

**Por frecuencia de uso:**

| Tipo | Descripción |
|---|---|
| Usuario frecuente | Usa el sistema diariamente o casi todos los días. |
| Usuario esporádico | Usa el sistema de vez en cuando. |

**Por nivel técnico:**

| Tipo | Descripción |
|---|---|
| Usuario técnico | Tiene conocimientos de informática. Puede configurar parámetros avanzados. |
| Usuario no técnico | No tiene formación informática. Necesita interfaces simples y mensajes claros. |

### Usuarios de TamboTrace

En el proyecto se identificaron cuatro roles de usuario, cada uno con necesidades y restricciones diferentes:

| Rol | Persona de referencia | Acceso | Perfil de uso |
|---|---|---|---|
| **Administrador** | Sr. Roldán (dueño/administrador) | Acceso total al sistema, gestión de usuarios, historial de cambios. | Esporádico, no técnico. Revisa información de gestión. |
| **Encargado de tambo** | Carlos Andrés Cáceres (caca) | Registra vacas, ordeñes, lotes. Puede cerrar lotes y consultar trazabilidad. | Frecuente, conoce el proceso productivo en detalle. |
| **Operario de ordeñe** | Lucía Esperanza Echera (leechera) | Carga ordeñes, selecciona vacas participantes, registra exclusiones. | Muy frecuente, usa el sistema en campo, necesita una interfaz muy simple. |
| **Veterinario** | Sin nombre en el proyecto | Puede consultar datos sanitarios y cargar observaciones. No accede a información económica. | Esporádico, técnico en su área pero no necesariamente en informática. |

Esta clasificación tuvo consecuencias directas en el diseño del sistema:

- El rol **operario** condicionó el diseño de la interfaz de carga de ordeñe: debe ser rápida, simple y funcionar con conectividad inestable (RNF2, RNF12).
- El rol **veterinario** requirió una restricción explícita: no puede ver información económica ni modificar lotes cerrados.
- El **administrador** necesita tener visibilidad del historial de cambios para mantener la integridad de la información (RF15).

---

## 1.4.2. Identificación y análisis de stakeholders

### ¿Qué es un stakeholder?

Un **stakeholder** (en español: *parte interesada*) es toda persona, grupo u organización que tiene algún interés en el sistema, sea porque lo usa, porque se ve afectado por sus resultados o porque participa de su desarrollo o financiamiento.

Los stakeholders no siempre usan el sistema directamente, pero sus necesidades y expectativas deben tenerse en cuenta al definir los requerimientos.

### ¿Por qué es importante identificarlos?

Si el equipo solo escucha al dueño del negocio y no considera a los operarios que usarán el sistema en el campo, el resultado puede ser un sistema correcto en el papel pero inutilizable en la práctica. Esto fue exactamente lo que casi ocurrió en TamboTrace con la selección de vacas en el Sprint 2.

### Mapa de stakeholders de TamboTrace

| Stakeholder | Relación con el sistema | Necesidades y expectativas |
|---|---|---|
| **Sr. Roldán** (dueño) | Financia y aprueba el proyecto. | Sistema que mejore el control y facilite la exportación futura. Que no exceda el presupuesto. |
| **Carlos Cáceres** (encargado) | Usuario clave del día a día. | Sistema fácil de usar para el trabajo real del tambo. Que registre todo lo necesario sin complicaciones. |
| **Lucía Echera** (operaria) | Usuaria de campo, carga los datos en tiempo real. | Interfaz muy simple. Que no ralentice su trabajo de ordeñe. |
| **Veterinario** | Consulta y carga observaciones sanitarias. | Acceso a datos relevantes sin tener que ver información que no le corresponde. |
| **Planta láctea** | Compradora de la leche. No usa el sistema directamente. | Documentación de trazabilidad verificable. Que demuestre control de calidad. |
| **Organismos de control** | Posibles auditores en un futuro. | Reportes claros, trazabilidad completa, historial de cambios. |
| **Equipo de desarrollo** | Construye y entrega el sistema. | Requerimientos claros, feedback oportuno del cliente, plazos realistas. |

### Análisis de expectativas cruzadas

Algunas expectativas de distintos stakeholders pueden entrar en conflicto. Por ejemplo:

- **El operario** quiere una interfaz lo más simple posible.
- **El encargado** quiere que se registren muchos datos para tener control completo.
- **Los organismos de control** van a exigir información completa y verificable.

El equipo de desarrollo debe negociar entre estas expectativas y documentar las decisiones tomadas. En TamboTrace, esto se resolvió haciendo que los datos de calidad pudieran completarse *después* del ordeñe (RF10), para no recargar al operario en el momento de mayor presión.

---

## 1.5. Técnicas de relevamiento

### ¿Qué es el relevamiento de requerimientos?

El **relevamiento** (también llamado *elicitación*) es el proceso de descubrir, recopilar y comprender las necesidades de los usuarios y stakeholders. Es, en términos simples, el arte de hacer que la gente cuente lo que necesita, incluso cuando no sabe bien cómo expresarlo.

Existen varias técnicas de relevamiento. Las más comunes en proyectos de pequeña y mediana escala son los cuestionarios, las entrevistas y la revisión de registros existentes.

---

### 1.5.1. Cuestionarios

Un **cuestionario** es un conjunto de preguntas estructuradas que se envían a los usuarios para recopilar información de forma sistemática. Son útiles cuando hay muchos usuarios o cuando el equipo no puede reunirse con todos en persona.

**Ventajas:**
- Permiten llegar a muchas personas al mismo tiempo.
- Son anónimos si se necesita.
- Las respuestas son fáciles de comparar y analizar.

**Desventajas:**
- Las preguntas mal redactadas generan respuestas confusas.
- No permiten explorar en profundidad una respuesta interesante.
- Dependen de la disposición del usuario a completarlos.

**Cuestionario aplicable a TamboTrace**

Antes de realizar la entrevista, el equipo podría haber enviado un cuestionario previo a cada participante con preguntas como:

*Para el encargado de tambo (Carlos):*

1. ¿Cuántos ordeñes diarios se realizan en el tambo?
2. ¿Qué información se registra actualmente de cada ordeñe?
3. ¿Qué datos de las vacas son los más importantes para el trabajo diario?
4. ¿Cuántas personas cargan información normalmente?
5. ¿Usás más el celular o la computadora para trabajar?

*Para la operaria (Lucía):*

1. ¿En qué momento del ordeñe sería más práctico cargar datos en el sistema?
2. ¿Qué tan cómoda te sentís usando aplicaciones en el celular?
3. ¿Qué información te resulta más urgente registrar en el momento?

Este cuestionario previo hubiera permitido llegar a la entrevista con información de contexto y aprovechar mejor el tiempo de la reunión.

---

### 1.5.2. Entrevistas

Una **entrevista** es una conversación estructurada o semiestructurada entre el equipo de desarrollo y uno o más representantes del cliente, con el objetivo de relevar necesidades, procesos y restricciones.

**Tipos de entrevistas:**

| Tipo | Descripción |
|---|---|
| **Estructurada** | Preguntas fijas preparadas con anticipación. Más controlada pero menos flexible. |
| **Semiestructurada** | Preguntas guía que permiten explorar temas emergentes. El más usado en proyectos de software. |
| **No estructurada** | Conversación abierta. Útil en etapas tempranas para explorar el contexto general. |

**Ventajas:**
- Permiten explorar en profundidad.
- El entrevistador puede pedir aclaraciones y ejemplos concretos.
- Generan confianza entre cliente y equipo.

**Desventajas:**
- Requieren tiempo y coordinación.
- Las respuestas pueden estar influenciadas por el entrevistador.
- La interpretación puede variar.

**La entrevista en TamboTrace**

El equipo realizó una entrevista semiestructurada con cuatro participantes: el dueño, el encargado, la operaria y el equipo de desarrollo. Se prepararon preguntas organizadas por áreas (animales, producción, lotes, calidad, usuarios, infraestructura) pero la conversación permitió explorar temas adicionales.

Gracias a esta entrevista se descubrieron elementos clave que no estaban en la descripción inicial:

- Los lotes se definen por fecha, turno y tanque (no solo por fecha).
- Los resultados de laboratorio llegan *después* del ordeñe, por lo que el sistema debe permitir cargar datos diferidos.
- El veterinario necesita acceso pero con restricciones explícitas.
- La conectividad en la sala de ordeñe es irregular, lo que condiciona el diseño técnico.

Ninguno de estos elementos hubiera surgido con un simple cuestionario.

---

### 1.5.3. Revisión de registros

La **revisión de registros** consiste en analizar documentos, planillas, formularios o sistemas existentes que el cliente ya usa, para entender cómo trabaja hoy y qué información maneja.

**Ventajas:**
- Muestra la realidad tal como es, sin filtros ni interpretaciones.
- Permite identificar qué datos ya existen y qué falta.
- Revela procesos informales que el cliente no menciona en la entrevista porque los considera "obvios".

**Desventajas:**
- Los registros pueden estar desactualizados o incompletos.
- Puede haber documentos en formatos difíciles de analizar (cuadernos, hojas sueltas).

**Revisión de registros en TamboTrace**

En el caso de la Estancia "MuchaTeta", el cliente describió su situación actual así:

> *"Registramos muchas cosas en papel o en planillas separadas, pero cuando nos piden información sobre un lote, nos cuesta reconstruir de qué animales salió."*

Esto indica que existían registros previos: planillas de ordeñe, fichas de animales, registros de tratamientos veterinarios, quizás planillas de entrega de leche. Una revisión de esos documentos hubiera permitido al equipo:

- Entender qué columnas ya usaba el cliente y cuáles eran relevantes.
- Identificar inconsistencias en los registros actuales.
- Validar que los campos definidos en RF3, RF5 y RF9 coinciden con lo que el tambo realmente necesita registrar.
- Descubrir campos que el cliente usa pero no mencionó explícitamente en la entrevista.

La revisión de registros complementa la entrevista: mientras la entrevista captura lo que el cliente *cree* que necesita, la revisión muestra lo que el cliente *realmente hace*.

---

## 1.6. Factibilidades del sistema

### ¿Qué es un estudio de factibilidad?

Antes de comprometerse a construir un sistema, el equipo de desarrollo debe evaluar si ese sistema es viable desde diferentes perspectivas. A este análisis se lo llama **estudio de factibilidad**.

El objetivo no es asegurarse de que el proyecto saldrá perfecto, sino identificar los riesgos más importantes y decidir si tiene sentido avanzar con el desarrollo propuesto.

---

### 1.6.1. Factibilidad operativa

La **factibilidad operativa** evalúa si el sistema será realmente usado y si el entorno en el que se va a operar lo soporta.

Preguntas clave:
- ¿Los usuarios están dispuestos a usar el sistema?
- ¿Tienen las habilidades necesarias?
- ¿El proceso de trabajo actual se puede adaptar al sistema?
- ¿El sistema mejora la situación actual o la complica?

**Análisis de factibilidad operativa de TamboTrace**

| Aspecto | Situación actual | Análisis |
|---|---|---|
| Disposición de los usuarios | El dueño quiere ordenar la información. El encargado conoce el proceso y está motivado. | Favorable. Los usuarios clave tienen interés en el cambio. |
| Habilidades técnicas | Los operarios no tienen formación informática. | Riesgo identificado: si la interfaz es compleja, los operarios no usarán el sistema. |
| Proceso de trabajo | El proceso de ordeñe es físico y con alta presión de tiempo. | El sistema debe adaptarse al proceso, no al revés. |
| Mejora real | El sistema reemplaza papel y planillas dispersas por información integrada y trazable. | Mejora concreta y verificable. |

**Riesgo operativo identificado**: el cliente expresó explícitamente que si la carga de datos fuera lenta o compleja, los operarios simplemente dejarían de usar el sistema. Este riesgo derivó en dos requerimientos no funcionales concretos: RNF2 y RNF12.

---

### 1.6.2. Factibilidad técnica

La **factibilidad técnica** evalúa si la tecnología necesaria para construir el sistema está disponible y si el equipo tiene las capacidades para usarla.

Preguntas clave:
- ¿Existe la tecnología necesaria?
- ¿El equipo sabe usarla?
- ¿La infraestructura del cliente puede soportar el sistema?

**Análisis de factibilidad técnica de TamboTrace**

| Aspecto | Situación | Análisis |
|---|---|---|
| Tecnología disponible | Aplicación web responsive, hosting externo, base de datos relacional. | Tecnología madura, ampliamente disponible. |
| Infraestructura del cliente | Internet en oficina (estable), Wi-Fi en sala de ordeñe (irregular). Sin servidor propio. | Se puede resolver con hosting externo (RNF9). La conectividad irregular es un riesgo a gestionar. |
| Capacidad del equipo | Equipo con 1 líder/SM y 3 desarrolladores. | Equipo pequeño pero suficiente para el alcance definido. |
| Funcionalidades complejas | RFID, integración con laboratorio, app nativa, offline completo. | Tecnológicamente posibles, pero fuera del alcance inicial por costo y complejidad. |

El estudio de factibilidad técnica fue determinante para excluir del alcance inicial la sincronización offline completa, la lectura de caravanas RFID y la integración con laboratorios externos. Estas funcionalidades son técnicamente realizables, pero requerirían más tiempo, presupuesto y complejidad de la que el proyecto puede asumir en su primera versión.

---

### 1.6.3. Factibilidad económica

La **factibilidad económica** evalúa si el proyecto tiene justificación financiera: si el costo de construirlo es razonable en relación con el beneficio que genera.

Preguntas clave:
- ¿Cuánto costará desarrollar el sistema?
- ¿El cliente puede pagar ese costo?
- ¿Los beneficios justifican la inversión?

**Análisis de factibilidad económica de TamboTrace**

El cliente informó un presupuesto disponible de entre **USD 5.000 y USD 7.000** para la primera versión.

El equipo estimó el costo del proyecto:

| Concepto | Valor estimado |
|---|---|
| Duración | 8 semanas |
| Equipo | 1 líder/SM + 3 desarrolladores |
| Esfuerzo total | 240 horas |
| Tarifa promedio | USD 25/hora |
| Costo base | USD 6.000 |
| Margen para ajustes | USD 600 |
| **Costo total propuesto** | **USD 6.600** |

El costo propuesto (USD 6.600) está dentro del presupuesto máximo del cliente (USD 7.000), con un margen ajustado pero manejable.

**Beneficios estimados para el cliente:**

- Reducción del tiempo de búsqueda de información por lote.
- Eliminación de inconsistencias entre registros en papel.
- Base documentada para futuras auditorías o procesos de exportación.
- Menor dependencia de personas específicas que "saben cómo están los registros".

En este caso, los beneficios no son directamente cuantificables en dinero (no hay un cálculo de ROI preciso), pero el cliente reconoció el valor estratégico del sistema para crecer hacia mercados más exigentes.

---

### 1.6.4. Factibilidad legal

La **factibilidad legal** evalúa si el sistema puede construirse y operarse sin violar leyes, normas o reglamentos vigentes.

Preguntas clave:
- ¿El sistema maneja datos personales que requieren protección legal?
- ¿Hay normativas sectoriales que el sistema deba respetar?
- ¿Las licencias de tecnología usada son compatibles con el uso previsto?

**Análisis de factibilidad legal de TamboTrace**

| Aspecto | Situación | Implicación |
|---|---|---|
| Datos personales | El sistema registra nombres de usuarios y responsables de ordeñe. | En Uruguay, la Ley 18.331 de Protección de Datos Personales aplica. Los datos deben protegerse y no compartirse sin consentimiento. |
| Datos sanitarios | Se registran observaciones sanitarias de animales y tratamientos. | En ganadería, el MGAP (Ministerio de Ganadería, Agricultura y Pesca) regula registros sanitarios. El sistema debe ser compatible con esas exigencias. |
| Trazabilidad lechera | La industria láctea uruguaya tiene requisitos de trazabilidad para exportación (INAC, MGAP, LATU). | El sistema debe generar reportes compatibles con los formatos exigidos si el cliente avanza hacia exportación. |
| Licencias de software | El sistema usará tecnologías open source o con licencias comerciales. | El equipo debe verificar que las licencias permiten uso comercial en el contexto del proyecto. |
| Propiedad intelectual | El cliente solicitó un sistema a medida. | El contrato debe definir a quién pertenece el código fuente y el sistema una vez entregado. |

La factibilidad legal no generó impedimentos para el proyecto, pero sí señaló aspectos a documentar y considerar en el contrato y en el diseño de seguridad del sistema (especialmente los roles de acceso y la protección de datos sensibles, reflejados en RNF4 y RNF5).

---

## 1.7. Lógica del sistema

### ¿Qué es la lógica del sistema?

La **lógica del sistema** describe las reglas de negocio y las decisiones que el sistema debe tomar ante distintas situaciones. Formalizar esta lógica es fundamental para que el equipo de desarrollo programe el comportamiento correcto del sistema.

Dos herramientas muy utilizadas para representar lógica son el **árbol de decisión** y la **tabla de decisión**.

---

### 1.7.1. Árbol de decisión

Un **árbol de decisión** es un diagrama en forma de árbol que representa una secuencia de decisiones y sus posibles resultados. Cada nodo es una condición o pregunta, cada rama es una respuesta posible, y cada hoja es un resultado final.

Son especialmente útiles cuando la lógica tiene varias condiciones que se evalúan en secuencia.

**Árbol de decisión: ¿puede una vaca ser incluida en un ordeñe?**

Este árbol representa la lógica para decidir si una vaca puede participar en un ordeñe dado:

```
¿La vaca está registrada en el sistema?
│
├── NO → No puede incluirse. [Registrar primero la vaca]
│
└── SÍ
    │
    ¿Cuál es el estado actual de la vaca?
    │
    ├── BAJA → No puede incluirse. [Vaca dada de baja]
    │
    ├── SECADO → No puede incluirse. [Vaca en período de secado]
    │
    ├── TRATAMIENTO → No puede incluirse normalmente.
    │   │
    │   ¿Se registró exclusión con motivo?
    │   ├── SÍ → Queda excluida con motivo documentado. [Registro de exclusión creado]
    │   └── NO → No puede procesarse el ordeñe sin registrar la exclusión.
    │
    └── EN PRODUCCIÓN → Puede incluirse en el ordeñe. [Vaca incluida]
```

Este árbol responde directamente a los requerimientos RF4, RF6 y RF7: el sistema debe conocer el estado de cada vaca y aplicar la lógica correspondiente.

---

**Árbol de decisión: ¿puede cerrarse un lote?**

Este árbol representa la lógica del requerimiento RF11 y la regla de negocio surgida en el Sprint 3 (HU21):

```
¿El lote existe y está identificado?
│
├── NO → No se puede cerrar. [Error: lote no encontrado]
│
└── SÍ
    │
    ¿El lote ya está cerrado?
    │
    ├── SÍ → No se puede volver a cerrar. [Advertencia: lote ya cerrado]
    │
    └── NO
        │
        ¿El lote tiene litros estimados registrados?
        │
        ├── NO → No se puede cerrar. [Faltan datos obligatorios: litros]
        │
        └── SÍ
            │
            ¿El lote tiene al menos una vaca incluida?
            │
            ├── NO → No se puede cerrar. [Faltan datos obligatorios: animales participantes]
            │
            └── SÍ
                │
                ¿El usuario tiene permiso para cerrar lotes?
                │
                ├── NO → No se puede cerrar. [Sin autorización]
                │
                └── SÍ → El lote puede cerrarse. [Lote cerrado. Estado: CERRADO]
```

Este árbol hace visible la complejidad que hay detrás de una acción que parece simple: "cerrar un lote". Sin esta formalización, el equipo podría implementar el cierre sin validaciones y el sistema permitiría cerrar lotes incompletos.

---

### 1.7.2. Tabla de decisión

Una **tabla de decisión** es una representación matricial que muestra todas las combinaciones posibles de condiciones y sus acciones resultantes. Es especialmente útil cuando hay varias condiciones que se evalúan simultáneamente.

Una tabla de decisión tiene cuatro zonas:

| | Condiciones |
|---|---|
| **Condiciones** | Las variables o preguntas que se evalúan. |
| **Combinaciones** | Cada columna es una combinación posible de respuestas (Sí/No, Verdadero/Falso). |
| **Acciones** | Lo que el sistema debe hacer en cada combinación. |
| **Marcas** | Indican qué acción aplica en cada combinación. |

---

**Tabla de decisión: acciones del sistema según estado del lote y rol del usuario**

| Condición / Combinación | C1 | C2 | C3 | C4 | C5 | C6 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿El lote está cerrado? | No | No | No | Sí | Sí | Sí |
| ¿El usuario es administrador o encargado? | Sí | Sí | No | Sí | No | No |
| ¿El usuario es operario? | No | Sí | Sí | No | Sí | No |
| **ACCIONES** | | | | | | |
| Permitir editar el lote | ✓ | ✓ | — | — | — | — |
| Permitir agregar propiedades de calidad | ✓ | ✓ | — | — | — | — |
| Permitir cargar datos básicos | ✓ | ✓ | ✓ | — | — | — |
| Permitir cerrar el lote | ✓ | — | — | — | — | — |
| Mostrar lote en modo lectura | — | — | ✓ | ✓ | ✓ | ✓ |
| Impedir cualquier modificación | — | — | — | ✓ | ✓ | ✓ |
| Mostrar mensaje de error / sin acceso | — | — | — | — | — | ✓ |

Esta tabla resume de forma compacta las reglas de acceso que se distribuyen entre los requerimientos RNF4, RNF5, RF11 y RF15. Sin una tabla como esta, el equipo podría programar parte de las restricciones y olvidar otras, generando inconsistencias en la seguridad del sistema.

---

**Tabla de decisión: ¿qué estado debe tener un lote según los datos cargados?**

| Condición / Combinación | C1 | C2 | C3 | C4 |
|---|:---:|:---:|:---:|:---:|
| ¿Se registraron datos básicos del ordeñe? | No | Sí | Sí | Sí |
| ¿Se registraron los litros estimados? | — | No | Sí | Sí |
| ¿Se cargaron los resultados de calidad? | — | — | No | Sí |
| **ESTADO RESULTANTE** | | | | |
| Estado: BORRADOR | ✓ | — | — | — |
| Estado: INCOMPLETO | — | ✓ | — | — |
| Estado: PENDIENTE DE ANÁLISIS | — | — | ✓ | — |
| Estado: COMPLETO (puede cerrarse) | — | — | — | ✓ |

Esta tabla refleja exactamente el requerimiento HU20: el sistema debe poder mostrar el estado del lote para que cualquier usuario sepa si la información está completa o pendiente. Este requerimiento surgió en el Sprint 3 porque el cliente vio que sin estos estados era imposible saber si un lote estaba listo para cerrar.

---

## Síntesis final

A lo largo de este documento se aplicaron al proyecto TamboTrace los conceptos fundamentales del análisis de requerimientos. A modo de síntesis:

| Concepto | Aplicación en TamboTrace |
|---|---|
| Definición e importancia | La necesidad vaga del Sr. Roldán se transformó en 15 RF y 12 RNF mediante el análisis. |
| IEEE 830 | Los requerimientos están documentados con código único, descripción precisa y verificable. |
| Tipos de requerimientos | Se identificaron funcionales, no funcionales, de dominio y de restricción. |
| Ciclo de vida | Los requerimientos evolucionaron en cada sprint: HU19, HU20 y HU21 surgieron del feedback del cliente. |
| Usuarios y roles | Cuatro roles con permisos diferenciados según sus necesidades y restricciones. |
| Stakeholders | Se identificaron usuarios, cliente, planta láctea y organismos de control como partes interesadas. |
| Cuestionarios | Herramienta previa a la entrevista para contextualizar las preguntas. |
| Entrevistas | Técnica principal de relevamiento: semiestructurada con tres roles del cliente. |
| Revisión de registros | Análisis de planillas y cuadernos previos para entender el proceso real. |
| Factibilidad operativa | Riesgo: si la interfaz es compleja, los operarios no la usarán. |
| Factibilidad técnica | Excluye RFID, app nativa y offline completo por costo y complejidad. |
| Factibilidad económica | Costo de USD 6.600 dentro del presupuesto disponible de USD 7.000. |
| Factibilidad legal | Considera Ley 18.331, normativas del MGAP y propiedad intelectual. |
| Árbol de decisión | Formaliza la lógica de inclusión de vacas y cierre de lotes. |
| Tabla de decisión | Define los permisos por rol y los estados del lote según los datos disponibles. |

> El análisis de requerimientos no es un trámite burocrático que se hace antes de programar. Es el trabajo que determina si el sistema que se construye resuelve el problema real o simplemente funciona técnicamente. En TamboTrace, cada corrección realizada durante los sprints fue, en última instancia, un requerimiento que no se había relevado o especificado lo suficientemente bien desde el principio.

---

*Documento preparado para la asignatura Ingeniería de Software — 3.º año Bachillerato Tecnológico — UTU 2026*
