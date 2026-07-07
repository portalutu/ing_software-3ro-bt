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

---

# 2. Análisis de Diseño de Base de Datos y Modelado UML

## 2.1. Modelo Entidad-Relación (MER)

### ¿Qué es el Modelo Entidad-Relación?

El **Modelo Entidad-Relación** (MER) es un modelo conceptual de datos que describe la estructura lógica de una base de datos de forma independiente de cualquier tecnología específica. Su objetivo es representar de manera clara y organizada cómo se relacionan los datos que maneja un sistema.

En términos sencillos: el MER es un "plano" que muestra qué información necesita guardar el sistema, en qué tablas (entidades) se organiza, y cómo esas tablas están conectadas entre sí (relaciones).

El MER fue creado por **Peter Chen en 1976** y se ha convertido en el estándar de facto para el diseño de bases de datos relacionales. Es independiente del lenguaje de programación o del gestor de base de datos que se use (PostgreSQL, MySQL, SQL Server, etc.).

### Conceptos fundamentales del MER

#### Entidad

Una **entidad** es un objeto, cosa o concepto del mundo real que queremos guardar información sobre él. En una base de datos, cada entidad se convierte en una tabla.

**Ejemplos de entidades en TamboTrace:**
- **Vaca**: cada animal del tambo.
- **Ordeñe**: cada proceso de ordeñe realizado.
- **Lote**: cada lote de leche producido.
- **Usuario**: cada persona que accede al sistema.
- **Tanque**: cada tanque de almacenamiento de leche.

Las entidades se representan en el diagrama MER como **rectángulos** con el nombre de la entidad adentro.

#### Atributo

Un **atributo** es una propiedad o característica de una entidad. Cada atributo almacena un tipo específico de dato.

**Ejemplos de atributos de la entidad Vaca:**
- Número de caravana (texto, único)
- Nombre (texto, opcional)
- Raza (texto)
- Fecha de nacimiento (fecha)
- Estado (texto: "en producción", "secado", "tratamiento", "baja")
- Observaciones (texto)

Un atributo es **obligatorio** si siempre debe tener un valor, u **opcional** si puede no tener valor. En TamboTrace, el número de caravana es obligatorio (RF3), pero el nombre es opcional.

Los atributos se representan en el diagrama MER como **óvalos** conectados a la entidad.

#### Clave primaria

Una **clave primaria** es un atributo (o conjunto de atributos) que identifica de forma única a cada instancia de una entidad. Cada fila en la tabla debe tener un valor único en la clave primaria.

**En TamboTrace:**
- La clave primaria de Vaca es el número de caravana (es único dentro del tambo).
- La clave primaria de Ordeñe es un ID auto-incrementable (porque el mismo día pueden haber múltiples ordeñes).

Sin una clave primaria bien definida, es imposible garantizar que no haya registros duplicados o confusos.

#### Relación

Una **relación** describe cómo dos o más entidades están asociadas entre sí. No todas las entidades están relacionadas; solo aquellas que tienen una asociación lógica en el negocio.

**Ejemplos de relaciones en TamboTrace:**
- Una **Vaca** participa en múltiples **Ordeñes**.
- Un **Ordeñe** genera un **Lote** de leche.
- Un **Lote** se almacena en un **Tanque**.
- Un **Usuario** registra múltiples **Ordeñes**.

Las relaciones se representan en el diagrama MER como **líneas** que conectan dos entidades.

#### Cardinalidad

La **cardinalidad** describe cuántas instancias de una entidad se pueden relacionar con instancias de otra entidad. Las cardinalidades más comunes son:

| Cardinalidad | Notación | Significado | Ejemplo |
|---|---|---|---|
| **1:1** (uno a uno) | 1 — 1 | Una instancia de A se relaciona con una de B, y viceversa. | Un tanque contiene exactamente una leche (simplificado). |
| **1:N** (uno a muchos) | 1 — N | Una instancia de A se relaciona con múltiples de B. | Un usuario registra múltiples ordeñes. |
| **N:M** (muchos a muchos) | N — M | Múltiples instancias de A se relacionan con múltiples de B. | Múltiples vacas participan en múltiples ordeñes. |

### Diagrama MER de TamboTrace

El siguiente diagrama muestra las entidades y relaciones principales del sistema:

```
┌─────────────┐
│   USUARIO   │
├─────────────┤
│ id          │ (PK)
│ nombre      │
│ email       │
│ rol         │
│ activo      │
└─────────────┘
      │ 1
      │ registra
      │ N
      ▼
┌──────────────┐
│   ORDEÑE     │
├──────────────┤
│ id           │ (PK)
│ fecha        │
│ turno        │
│ responsable  │ (FK → USUARIO)
│ tanque       │ (FK → TANQUE)
│ observaciones│
└──────────────┘
      │ 1
      │ genera
      │ 1
      ▼
┌──────────────┐      ┌───────────────┐
│    LOTE      │ M ◄─► N │    VACA     │
├──────────────┤      ├───────────────┤
│ id           │ (PK) │ caravana      │ (PK)
│ ordeñe       │ (FK) │ nombre        │
│ litros       │      │ raza          │
│ temperatura  │      │ fecha_nac     │
│ grasa        │      │ estado        │
│ proteína     │      │ observaciones │
│ células_som  │      └───────────────┘
│ antibióticos│
│ estado       │
│ fecha_cierre │
└──────────────┘
      │ 1
      │ se almacena en
      │ 1
      ▼
┌──────────────┐
│    TANQUE    │
├──────────────┤
│ id           │ (PK)
│ número       │
│ ubicación    │
│ capacidad    │
└──────────────┘

┌──────────────────────┐
│  LOTE_VACA_EXCLUIDA  │ (tabla de relación)
├──────────────────────┤
│ id                   │ (PK)
│ lote                 │ (FK → LOTE)
│ vaca                 │ (FK → VACA)
│ motivo               │
│ fecha_exclusión      │
└──────────────────────┘
```

**Explicación de las relaciones:**

1. **USUARIO → ORDEÑE (1:N)**: Un usuario registra muchos ordeñes. La relación se implementa con una clave foránea en ORDEÑE que apunta a USUARIO.

2. **ORDEÑE → LOTE (1:1)**: Un ordeñe genera un lote (relación simplificada para esta versión). La relación se implementa con una clave foránea en LOTE que apunta a ORDEÑE.

3. **VACA ◄→ LOTE (N:M)**: Un lote contiene múltiples vacas, y una vaca puede participar en múltiples lotes. Esta relación se implementa mediante una **tabla de relación** llamada LOTE_VACA que tiene dos claves foráneas.

4. **LOTE → TANQUE (1:1)**: Un lote se almacena en un tanque. La relación se implementa con una clave foránea en LOTE que apunta a TANQUE.

5. **LOTE_VACA_EXCLUIDA**: Es una tabla adicional que registra las exclusiones de vacas en ordeñes, implementando la funcionalidad de RF7.

---

## 2.2. Normalización y Formas Normales

### ¿Qué es la normalización?

La **normalización** es un proceso sistemático que organiza los datos de una base de datos para:

1. **Eliminar redundancia**: evitar que el mismo dato esté repetido en múltiples lugares.
2. **Garantizar integridad**: asegurar que los datos sean consistentes y confiables.
3. **Facilitar el mantenimiento**: simplificar las operaciones de actualización, inserción y eliminación.

Sin normalización, una base de datos puede caer en inconsistencias graves. Por ejemplo, si se guarda el nombre de un usuario en múltiples tablas y ese nombre cambia, hay riesgo de que quede diferente en cada lugar.

### Las Formas Normales

Las formas normales son niveles progresivos de normalización. A mayor número de forma normal, menos redundancia y mayor integridad de datos.

Las tres primeras formas normales (1FN, 2FN, 3FN) son las más utilizadas en la práctica:

#### Primera Forma Normal (1FN)

**Regla de 1FN**: Cada atributo debe contener un único valor (no listas ni conjuntos).

**Problema sin 1FN:**

Imagine una tabla así:

| id_ordeñe | vacas_participantes | observaciones |
|---|---|---|
| 1 | 001, 002, 003 | Vaca 001 con mastitis |
| 2 | 002, 005 | Temperatura baja |

El atributo `vacas_participantes` contiene múltiples valores separados por comas. Esto dificulta consultar, filtrar y actualizar los datos. ¿Cómo buscar todas las ordeñes en las que participó la vaca 002?

**Solución 1FN:**

Se crea una tabla de relación separada:

**Tabla ORDEÑE:**

| id_ordeñe | fecha | turno |
|---|---|---|
| 1 | 2026-07-01 | Mañana |
| 2 | 2026-07-01 | Tarde |

**Tabla ORDEÑE_VACA:**

| id | ordeñe | vaca |
|---|---|---|
| 1 | 1 | 001 |
| 2 | 1 | 002 |
| 3 | 1 | 003 |
| 4 | 2 | 002 |
| 5 | 2 | 005 |

Ahora cada registro tiene un único valor en cada atributo. La consulta "¿en cuántas ordeñes participó la vaca 002?" es simple y eficiente.

#### Segunda Forma Normal (2FN)

**Regla de 2FN**: La tabla debe estar en 1FN Y todos los atributos no-clave deben depender de la clave primaria completa, no de parte de ella.

**Problema sin 2FN:**

Suponga una tabla con clave primaria compuesta (ordeñe, vaca):

| ordeñe | vaca | fecha | turno | estado |
|---|---|---|---|---|
| 1 | 001 | 2026-07-01 | Mañana | Incluida |
| 1 | 002 | 2026-07-01 | Mañana | Incluida |

El problema: `fecha` y `turno` dependen solo del ordeñe, no de la combinación (ordeñe, vaca). Si queremos cambiar la fecha del ordeñe 1 de 2026-07-01 a 2026-07-02, debemos actualizarla en múltiples filas. Esto genera redundancia y riesgo de inconsistencia.

**Solución 2FN:**

Se separan los atributos según de qué dependen:

**Tabla ORDEÑE:**

| id | fecha | turno |
|---|---|---|
| 1 | 2026-07-01 | Mañana |

**Tabla ORDEÑE_VACA:**

| ordeñe | vaca | estado |
|---|---|---|
| 1 | 001 | Incluida |
| 1 | 002 | Incluida |

Ahora:
- Los atributos `fecha` y `turno` están en ORDEÑE, donde dependen de la clave primaria completa (id del ordeñe).
- El atributo `estado` está en ORDEÑE_VACA, donde depende de la clave primaria completa (ordeñe, vaca).

#### Tercera Forma Normal (3FN)

**Regla de 3FN**: La tabla debe estar en 2FN Y ningún atributo no-clave debe depender de otro atributo no-clave.

**Problema sin 3FN:**

| id_vaca | nombre | raza | raza_descripción |
|---|---|---|---|
| 001 | Margarita | Holstein | Vaca lechera de origen holandés, alta producción |
| 002 | Blanca | Holstein | Vaca lechera de origen holandés, alta producción |
| 003 | Rosa | Jersey | Vaca lechera de origen británico, leche con más grasa |

El problema: `raza_descripción` depende de `raza`, no de `id_vaca`. Si la descripción de Holstein cambia, debemos actualizarla en múltiples filas. Además, la tabla ocupa más espacio de lo necesario.

**Solución 3FN:**

Se crea una tabla separada para razas:

**Tabla VACA:**

| id | nombre | raza_id |
|---|---|---|
| 001 | Margarita | 1 |
| 002 | Blanca | 1 |
| 003 | Rosa | 2 |

**Tabla RAZA:**

| id | nombre | descripción |
|---|---|---|
| 1 | Holstein | Vaca lechera de origen holandés, alta producción |
| 2 | Jersey | Vaca lechera de origen británico, leche con más grasa |

Ahora:
- La descripción de la raza se guarda una sola vez en la tabla RAZA.
- Si cambia, se actualiza en un solo lugar.
- La tabla VACA es más compacta y eficiente.

### Estructura 3FN de TamboTrace

La base de datos de TamboTrace está diseñada hasta 3FN. Aquí está la estructura completa:

**Tabla USUARIO** (almacena personas que acceden al sistema)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| nombre | VARCHAR(100) | NOT NULL | Nombre completo |
| email | VARCHAR(100) | UNIQUE | Email para acceso |
| contraseña_hash | VARCHAR(255) | NOT NULL | Contraseña encriptada |
| rol | VARCHAR(50) | NOT NULL | admin, encargado, operario, veterinario |
| activo | BOOLEAN | DEFAULT TRUE | Si la cuenta está activa |
| fecha_creación | TIMESTAMP | DEFAULT NOW() | Cuándo se creó la cuenta |

**Tabla VACA** (animales del tambo)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| caravana | VARCHAR(10) | PRIMARY KEY | Número único de la vaca |
| nombre | VARCHAR(100) | NULLABLE | Nombre opcional |
| raza_id | INT | FOREIGN KEY → RAZA | Referencia a la tabla RAZA |
| fecha_nacimiento | DATE | NOT NULL | Fecha de nacimiento |
| estado | ENUM | NOT NULL | en_producción, secado, tratamiento, baja |
| observaciones | TEXT | NULLABLE | Notas sobre la vaca |
| fecha_registro | TIMESTAMP | DEFAULT NOW() | Cuándo se registró |

**Tabla RAZA** (catálogo de razas)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| nombre | VARCHAR(100) | NOT NULL | Nombre de la raza (Holstein, Jersey, etc.) |
| descripción | TEXT | NULLABLE | Características de la raza |

**Tabla TANQUE** (almacenamiento de leche)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| número | VARCHAR(50) | NOT NULL | Número o nombre del tanque |
| ubicación | VARCHAR(200) | NULLABLE | Dónde se encuentra |
| capacidad_litros | INT | NOT NULL | Capacidad en litros |

**Tabla ORDEÑE** (cada sesión de ordeñe)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| fecha | DATE | NOT NULL | Fecha del ordeñe |
| turno | ENUM | NOT NULL | mañana, tarde, noche |
| usuario_responsable | INT | FOREIGN KEY → USUARIO | Quién registró el ordeñe |
| tanque_id | INT | FOREIGN KEY → TANQUE | Tanque usado en este ordeñe |
| observaciones | TEXT | NULLABLE | Notas del ordeñe |
| fecha_registro | TIMESTAMP | DEFAULT NOW() | Cuándo se registró |
| CONSTRAINT único_turno | UNIQUE | (fecha, turno, tanque_id) | No hay dos ordeñes iguales |

**Tabla LOTE** (lotes de leche producidos)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| ordeñe_id | INT | FOREIGN KEY → ORDEÑE | Ordeñe que generó este lote |
| litros_estimados | DECIMAL(8,2) | NOT NULL | Volumen en litros |
| temperatura | DECIMAL(5,2) | NULLABLE | Temperatura en °C |
| grasa_porcentaje | DECIMAL(5,2) | NULLABLE | % de grasa |
| proteína_porcentaje | DECIMAL(5,2) | NULLABLE | % de proteína |
| células_somáticas | INT | NULLABLE | Células por mL de leche |
| resultado_antibióticos | VARCHAR(50) | NULLABLE | Presencia de antibióticos |
| estado | ENUM | NOT NULL | BORRADOR, INCOMPLETO, PENDIENTE_ANÁLISIS, COMPLETO, CERRADO |
| fecha_cierre | TIMESTAMP | NULLABLE | Cuándo se cerró el lote |
| usuario_cierre | INT | FOREIGN KEY → USUARIO | Quién cerró el lote |
| observaciones | TEXT | NULLABLE | Notas adicionales |
| fecha_creación | TIMESTAMP | DEFAULT NOW() | Cuándo se creó |

**Tabla ORDEÑE_VACA** (relación N:M entre ordeñes y vacas)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| ordeñe_id | INT | FOREIGN KEY → ORDEÑE | Referencia al ordeñe |
| vaca_caravana | VARCHAR(10) | FOREIGN KEY → VACA | Referencia a la vaca |
| incluida | BOOLEAN | DEFAULT TRUE | Si está incluida o excluida |
| motivo_exclusión | VARCHAR(200) | NULLABLE | Si está excluida, por qué |
| fecha_registro | TIMESTAMP | DEFAULT NOW() | Cuándo se registró |
| CONSTRAINT único_participación | UNIQUE | (ordeñe_id, vaca_caravana) | Cada vaca aparece una sola vez por ordeñe |

**Tabla HISTORIAL_CAMBIOS** (registro de auditoría, RF15)

| Columna | Tipo | Restricción | Descripción |
|---|---|---|---|
| id | INT | PRIMARY KEY | Identificador único |
| lote_id | INT | FOREIGN KEY → LOTE | Lote afectado |
| usuario_id | INT | FOREIGN KEY → USUARIO | Quién hizo el cambio |
| tipo_cambio | VARCHAR(100) | NOT NULL | qué cambió (cierre, edición, etc.) |
| valor_anterior | TEXT | NULLABLE | Valor antes del cambio |
| valor_nuevo | TEXT | NULLABLE | Valor después del cambio |
| fecha_cambio | TIMESTAMP | DEFAULT NOW() | Cuándo ocurrió el cambio |
| ip_origen | VARCHAR(50) | NULLABLE | IP desde donde se hizo |

### ¿Por qué 3FN en TamboTrace?

La decisión de normalizar hasta 3FN responde a:

1. **Integridad**: Los datos de referencia (razas, usuarios) se guardan una sola vez y se reutilizan.
2. **Escalabilidad**: Cuando el sistema crezca (más vacas, más lotes), la estructura no necesita rediseño.
3. **Mantenimiento**: Si se necesita cambiar la descripción de una raza, se hace en un lugar.
4. **Eficiencia**: Las consultas son más rápidas porque los índices sobre claves primarias y foráneas son efectivos.

Normalizaciones más allá de 3FN (BCNF, 4FN, 5FN) son raramente necesarias en sistemas de negocio como este. Su mayor complejidad no suele justificar el beneficio.

---

## 2.3. Introducción a UML

### ¿Qué es UML?

**UML** significa *Unified Modeling Language* (Lenguaje Unificado de Modelado). Es un estándar internacional para crear diagramas que representen sistemas de software desde diferentes perspectivas.

A diferencia del MER que se enfoca específicamente en datos, UML es más general y permite modelar:

- **Estructura estática**: clases, componentes, arquitectura.
- **Comportamiento dinámico**: interacciones, estados, flujos.
- **Casos de uso**: quién usa el sistema y qué puede hacer.

UML existe porque el software es más que una base de datos. Incluye lógica, interfaces, procesos, y UML proporciona los diagramas para representar todo esto de forma estándar.

### Tipos de diagramas UML

Hay 14 tipos de diagramas UML, pero los más utilizados en proyectos de software son:

| Diagrama | Propósito | Cuándo usarlo |
|---|---|---|
| **Casos de uso** | Muestra usuarios y qué pueden hacer en el sistema. | Al inicio, para entender el alcance funcional. |
| **Clases** | Muestra clases, atributos, métodos y relaciones entre clases. | Durante el diseño, antes de programar. |
| **Secuencia** | Muestra el orden de mensajes entre objetos a lo largo del tiempo. | Para flujos complejos que cruzan múltiples clases. |
| **Estados** | Muestra los estados posibles de un objeto y las transiciones entre ellos. | Cuando un objeto tiene ciclo de vida (borrador → completo → cerrado). |
| **Actividad** | Muestra pasos de un proceso y decisiones. | Para representar algoritmos o flujos de negocio. |
| **Componentes** | Muestra la estructura técnica del sistema (módulos, librerías). | Para arquitectura de software. |

En esta sección nos enfocamos en **Diagrama de Clases**, que es el más importante para modelar la lógica del sistema.

---

## 2.4. Diagrama de Clases UML para TamboTrace

### ¿Qué es una clase en UML?

Una **clase** es una plantilla que define la estructura y comportamiento de los objetos en un programa. Cada clase tiene:

- **Atributos**: datos que guarda.
- **Métodos**: acciones que puede realizar.

En UML, una clase se representa con un rectángulo dividido en tres secciones:

```
┌─────────────────────────────┐
│ Nombre de la clase          │
├─────────────────────────────┤
│ Atributos                   │
│ - atributo1: tipo           │
│ - atributo2: tipo           │
├─────────────────────────────┤
│ Métodos                     │
│ + método1(): tipo           │
│ + método2(param): tipo      │
└─────────────────────────────┘
```

**Notación:**
- El signo `+` indica un método o atributo público (accesible desde afuera).
- El signo `-` indica privado (solo accesible dentro de la clase).
- El signo `#` indica protegido (accesible en la clase y sus subclases).

### Diagrama de Clases de TamboTrace

```
┌─────────────────────────────────┐
│         Usuario                 │
├─────────────────────────────────┤
│ - id: int                       │
│ - nombre: String                │
│ - email: String                 │
│ - rol: Rol (enum)               │
│ - activo: boolean               │
├─────────────────────────────────┤
│ + getId(): int                  │
│ + getNombre(): String           │
│ + setNombre(String): void       │
│ + validarCredenciales(): bool   │
│ + asignarRol(Rol): void         │
│ + desactivar(): void            │
└─────────────────────────────────┘
            ▲
            │ hereda
            │
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│  │   Administrador  │  │   Encargado      │  │    Operario      │
│  ├──────────────────┤  ├──────────────────┤  ├──────────────────┤
│  │ - permisos: []   │  │ - sector: String │  │ - turno: String  │
│  ├──────────────────┤  ├──────────────────┤  ├──────────────────┤
│  │ + crearUsuario() │  │ + registrarVaca()│  │ + cargarOrdeñe() │
│  │ + verHistorial() │  │ + cerrarLote()   │  │ + seleccVacas()  │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘

        ┌─────────────────────────────┐
        │        Vaca                 │
        ├─────────────────────────────┤
        │ - caravana: String (PK)     │
        │ - nombre: String            │
        │ - raza: Raza                │
        │ - fechaNacimiento: Date     │
        │ - estado: EstadoVaca (enum) │
        │ - observaciones: String     │
        ├─────────────────────────────┤
        │ + getCaravana(): String     │
        │ + getEstado(): EstadoVaca   │
        │ + cambiarEstado(Enum): void │
        │ + puedeParticipar(): bool   │
        │ + registrarTratamiento(): v │
        └─────────────────────────────┘
                │ 1
                │ pertenece a
                │ N
                ▼
        ┌──────────────────────┐
        │       Raza           │
        ├──────────────────────┤
        │ - id: int (PK)       │
        │ - nombre: String     │
        │ - descripción: String│
        ├──────────────────────┤
        │ + getNombre(): String│
        │ + getCaracterísticas()
        └──────────────────────┘

        ┌──────────────────────────────┐
        │       Ordeñe                 │
        ├──────────────────────────────┤
        │ - id: int (PK)               │
        │ - fecha: Date                │
        │ - turno: Turno (enum)        │
        │ - responsable: Usuario       │
        │ - tanque: Tanque             │
        │ - observaciones: String      │
        ├──────────────────────────────┤
        │ + getId(): int               │
        │ + agregarVaca(Vaca): void    │
        │ + excluirVaca(Vaca, mot): v  │
        │ + generarLote(): Lote        │
        │ + getVacasParticipantes(): []│
        │ + validar(): bool            │
        └──────────────────────────────┘
                  │ 1
                  │ genera
                  │ 1
                  ▼
        ┌────────────────────────────────┐
        │         Lote                   │
        ├────────────────────────────────┤
        │ - id: int (PK)                 │
        │ - ordeñe: Ordeñe               │
        │ - litrosEstimados: decimal     │
        │ - temperatura: decimal         │
        │ - grasa: decimal               │
        │ - proteína: decimal            │
        │ - célulasSomáticas: int        │
        │ - antibióticos: String         │
        │ - estado: EstadoLote (enum)    │
        │ - fechaCierre: Date            │
        │ - usuarioCierre: Usuario       │
        │ - vacas: List<Vaca>            │
        │ - vacasExcluidas: List<Vaca>   │
        ├────────────────────────────────┤
        │ + getId(): int                 │
        │ + agregarPropiedad(prop, val)  │
        │ + puedeCerrarse(): bool        │
        │ + cerrar(): void               │
        │ + getEstado(): EstadoLote      │
        │ + getTrazabilidad(): String    │
        │ + generarReporte(): PDF        │
        │ + registrarCambio(Cambio): v   │
        │ + validarIntegridad(): bool    │
        └────────────────────────────────┘
                  │
                  │ registra cambios en
                  ▼
        ┌────────────────────────────────┐
        │  HistorialCambios              │
        ├────────────────────────────────┤
        │ - id: int (PK)                 │
        │ - lote: Lote                   │
        │ - usuario: Usuario             │
        │ - tipoC ambio: String          │
        │ - valorAnterior: String        │
        │ - valorNuevo: String           │
        │ - fecha: Timestamp             │
        ├────────────────────────────────┤
        │ + registrar(): void            │
        │ + getDescripción(): String     │
        └────────────────────────────────┘

        ┌────────────────────────┐
        │       Tanque           │
        ├────────────────────────┤
        │ - id: int (PK)         │
        │ - número: String       │
        │ - ubicación: String    │
        │ - capacidad: int       │
        ├────────────────────────┤
        │ + getCapacidad(): int  │
        │ + estaDisponible(): b  │
        └────────────────────────┘
```

### Explicación de las relaciones entre clases

#### Relación de Herencia

La clase **Usuario** tiene tres subclases especializadas: **Administrador**, **Encargado** y **Operario**. La herencia significa que:

- Cada subclase *hereda* todos los atributos y métodos de Usuario.
- Cada subclase puede tener atributos y métodos propios adicionales.
- Cada subclase implementa la interfaz de Usuario pero con comportamiento específico.

**En código (pseudocódigo):**

```javascript
class Usuario {
  constructor(nombre, email, rol) {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
  }
  desactivar() { /* ... */ }
}

class Operario extends Usuario {
  constructor(nombre, email, turno) {
    super(nombre, email, "operario");
    this.turno = turno;
  }
  cargarOrdeñe(ordeñe) { /* ... */ }
  seleccionarVacas(vacas) { /* ... */ }
}
```

#### Asociaciones uno a muchos

- **Vaca → Raza (N:1)**: Muchas vacas pertenecen a una raza.
- **Ordeñe → Lote (1:1)**: Un ordeñe genera un lote.
- **Lote → HistorialCambios (1:N)**: Un lote puede tener múltiples registros de cambios.

#### Composición y agregación

- **Ordeñe contiene Vacas**: Un ordeñe tiene una lista de vacas que participan.
- **Lote contiene propiedades**: temperatura, grasa, etc., que le pertenecen completamente.

### Métodos principales de TamboTrace

#### Clase Vaca

```javascript
class Vaca {
  puedeParticipar() {
    // Responde a la lógica del árbol de decisión de la Sección 1.7
    if (this.estado === "baja" || this.estado === "secado") {
      return false;
    }
    if (this.estado === "tratamiento") {
      // Depende de si hay exclusión documentada
      return null; // Requiere exclusión explícita
    }
    return this.estado === "en_producción";
  }
}
```

#### Clase Lote

```javascript
class Lote {
  puedeCerrarse() {
    // Responde al árbol de decisión de cierre de lote
    if (this.estado === "cerrado") {
      throw new Error("Lote ya cerrado");
    }
    if (!this.litrosEstimados) {
      throw new Error("Faltan litros estimados");
    }
    if (this.vacas.length === 0) {
      throw new Error("No hay vacas participantes");
    }
    return true;
  }

  cerrar(usuario) {
    if (!this.puedeCerrarse()) return;
    
    this.estado = "cerrado";
    this.fechaCierre = new Date();
    this.usuarioCierre = usuario;
    
    // Registra el cambio en el historial (RF15)
    this.registrarCambio({
      tipo: "cierre",
      usuario: usuario,
      fecha: new Date()
    });
  }

  getTrazabilidad() {
    // Responde a RF12
    return {
      fecha: this.ordeñe.fecha,
      turno: this.ordeñe.turno,
      responsable: this.ordeñe.responsable.nombre,
      vacasIncluidas: this.vacas,
      vacasExcluidas: this.vacasExcluidas,
      propiedades: {
        litros: this.litrosEstimados,
        temperatura: this.temperatura,
        grasa: this.grasa,
        proteína: this.proteína,
        antibióticos: this.antibióticos
      }
    };
  }
}
```

#### Clase Ordeñe

```javascript
class Ordeñe {
  agregarVaca(vaca) {
    if (!vaca.puedeParticipar()) {
      throw new Error("Vaca no puede participar");
    }
    this.vacas.push(vaca);
  }

  excluirVaca(vaca, motivo) {
    // Implementa RF7
    this.vacas.remove(vaca);
    this.vacasExcluidas.push({
      vaca: vaca,
      motivo: motivo,
      fecha: new Date()
    });
  }

  generarLote() {
    // Implementa RF8
    if (this.vacas.length === 0) {
      throw new Error("No hay vacas en el ordeñe");
    }
    
    let lote = new Lote();
    lote.ordeñe = this;
    lote.vacas = this.vacas;
    lote.vacasExcluidas = this.vacasExcluidas;
    return lote;
  }
}
```

### Correspondencia entre MER, UML y Código

Es importante entender que:

- El **MER** define la estructura de la base de datos (tablas, columnas, relaciones).
- El **Diagrama de Clases UML** define la estructura del código (clases, atributos, métodos).
- Una clase UML generalmente corresponde a una tabla del MER.
- Un atributo en UML corresponde a una columna en la tabla.
- Una relación en UML corresponde a una clave foránea en la base de datos.

**Ejemplo:**

| Aspecto | MER | UML | Base de Datos |
|---|---|---|---|
| **Concepto** | Entidad VACA | Clase Vaca | Tabla VACA |
| **Propiedad** | Atributo caravana | Atributo caravana: String | Columna caravana VARCHAR(10) |
| **Relación** | VACA → RAZA (N:1) | Atributo raza: Raza | FK raza_id INT |

Cuando el equipo desarrollador programa, generalmente:

1. Diseña el MER (estructura de datos).
2. Diseña el Diagrama de Clases UML (estructura de código).
3. Crea la base de datos basada en el MER.
4. Escribe clases basadas en el UML.
5. Usa ORM u mapeadores para conectar clases con tablas.

---

## 2.5. Diagrama de Casos de Uso de TamboTrace

### ¿Qué es un caso de uso?

Un **caso de uso** es una descripción de una secuencia de acciones que un usuario realiza en el sistema para lograr un objetivo. Responde a la pregunta: *¿qué puede hacer alguien con el sistema?*

Los casos de uso son directamente derivados de los requerimientos funcionales (RF1 a RF15).

### Notación de Casos de Uso

```
┌────────────────────┐
│  Nombre del actor  │ (usuario del sistema)
└────────────────────┘
       │ interactúa
       │
       ▼
┌──────────────────────────────────────┐
│                                      │
│       Sistema TamboTrace            │
│                                      │
│  ┌──────────────────────────────┐   │
│  │   Caso de Uso (acción)       │   │
│  │   - Registrar vaca           │   │
│  │   - Crear ordeñe             │   │
│  │   - Generar reporte          │   │
│  └──────────────────────────────┘   │
│                                      │
└──────────────────────────────────────┘
```

### Diagrama de Casos de Uso de TamboTrace

```
                    ┌─────────────────────────┐
                    │   Administrador         │
                    │   (Sr. Roldán)          │
                    └────────────┬────────────┘
                                 │
                    ┌────────────┤
                    │            │
                    ▼            ▼
              ┌──────────┐  ┌────────────────┐
              │ Gestionar│  │ Ver Historial  │
              │ Usuarios │  │ de Cambios     │
              └──────────┘  └────────────────┘

              ┌─────────────────────────┐
              │   Encargado de Tambo    │
              │   (Carlos Cáceres)      │
              └────────────┬────────────┘
                           │
         ┌─────────────────┼─────────────────┐
         │                 │                 │
         ▼                 ▼                 ▼
    ┌──────────┐    ┌─────────────┐    ┌──────────┐
    │Registrar │    │Registrar    │    │Crear     │
    │Vacas     │    │Ordeñes      │    │Lotes     │
    └──────────┘    └─────────────┘    └──────────┘
         │                 │                 │
         ▼                 ▼                 ▼
    ┌──────────┐    ┌─────────────┐    ┌──────────┐
    │Buscar    │    │Seleccionar  │    │Cerrar    │
    │Vacas     │    │Vacas        │    │Lotes     │
    └──────────┘    └─────────────┘    └──────────┘
                          │
                          ▼
                    ┌─────────────┐
                    │Excluir      │
                    │Vacas        │
                    └─────────────┘

              ┌─────────────────────────┐
              │   Operario de Ordeñe    │
              │   (Lucía Echera)        │
              └────────────┬────────────┘
                           │
         ┌─────────────────┴──────────────────┐
         │                                    │
         ▼                                    ▼
    ┌──────────────┐               ┌────────────────┐
    │Cargar Ordeñe │◄─────────────►│Seleccionar     │
    │             │  (se hace en  │Vacas que       │
    │(desde campo) │   el campo)    │participan      │
    └──────────────┘               └────────────────┘

              ┌──────────────────────────┐
              │   Veterinario            │
              │   (Sin nombre)           │
              └────────┬─────────────────┘
                       │
         ┌─────────────┴─────────────┐
         │                           │
         ▼                           ▼
    ┌──────────────┐        ┌──────────────┐
    │Consultar     │        │Cargar datos  │
    │Datos         │        │sanitarios    │
    │Sanitarios    │        │              │
    └──────────────┘        └──────────────┘

              ┌──────────────────────────────┐
              │  Todos los usuarios pueden:  │
              │  (roles anteriores)          │
              └────────────────┬─────────────┘
                               │
         ┌─────────────────────┼──────────────────────┐
         │                     │                      │
         ▼                     ▼                      ▼
    ┌──────────────┐  ┌──────────────────┐  ┌─────────────┐
    │Iniciar       │  │Consultar         │  │Generar      │
    │Sesión        │  │Trazabilidad      │  │Reportes     │
    │(RFC1)        │  │de Lotes (RF12)   │  │(RF14)       │
    └──────────────┘  └──────────────────┘  └─────────────┘
```

### Especificación de un caso de uso

Cada caso de uso se especifica con:

**Caso de Uso: Cerrar Lote** (corresponde a RF11)

| Aspecto | Descripción |
|---|---|
| **Nombre** | Cerrar Lote |
| **Actores** | Administrador, Encargado |
| **Precondiciones** | El lote existe, está en estado COMPLETO, el usuario está autenticado. |
| **Flujo principal** | 1. El usuario selecciona un lote.<br>2. El sistema verifica que tenga datos obligatorios (litros, vacas).<br>3. El usuario confirma el cierre.<br>4. El sistema cierra el lote, asigna fecha y usuario de cierre.<br>5. El sistema registra el cambio en el historial (RF15).<br>6. El sistema muestra confirmación. |
| **Flujos alternativos** | Si el lote ya está cerrado: mostrar advertencia.<br>Si faltan datos: mostrar campo faltante y no permitir cierre. |
| **Postcondiciones** | El lote está cerrado, no puede modificarse, se registró en el historial. |

---

## Síntesis final

A lo largo de este documento se aplicaron al proyecto TamboTrace los conceptos fundamentales del análisis de requerimientos, modelado de datos y diseño orientado a objetos. A modo de síntesis:

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
