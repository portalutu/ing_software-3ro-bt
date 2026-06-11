# Especificación de Requerimientos y Modelado de Sistemas
### Documento teórico — Ingeniería de Software | 3.º año Bachillerato Tecnológico

---

> Este documento es una guía teórica que explica cada concepto con ejemplos cotidianos para facilitar la comprensión y la memorización. No está atado a un proyecto en particular: usa situaciones de la vida real (una biblioteca, una app de turnos médicos, un cajero automático) para que los conceptos queden claros antes de aplicarlos a un proyecto concreto.

---

# UNIDAD 1 — ESPECIFICACIÓN DE REQUERIMIENTOS

---

## 1.1. Definición e importancia

### ¿Qué es un requerimiento?

Un **requerimiento** es una descripción de lo que un sistema debe hacer o de las condiciones que debe cumplir. Es la traducción formal de una necesidad humana a una instrucción técnica.

La palabra viene del inglés *requirement*, que significa "requisito" o "necesidad". En ingeniería de software, un requerimiento puede describir:

- Una **función**: *"El sistema debe permitir que el usuario recupere su contraseña."*
- Una **restricción de calidad**: *"El sistema debe responder en menos de 2 segundos."*
- Una **regla de negocio**: *"Un turno médico no puede reservarse con menos de 2 horas de anticipación."*

### ¿Por qué son tan importantes?

Hay una estadística que circula en la industria del software desde los años 80 y que sigue siendo válida: la mayoría de los proyectos que fracasan no fallan por problemas técnicos, sino por problemas de comunicación. El equipo construyó algo diferente a lo que el cliente necesitaba.

El costo de corregir un error crece exponencialmente a medida que el proyecto avanza:

| Momento del error | Costo relativo de corrección |
|---|---|
| Durante el relevamiento | x 1 |
| Durante el diseño | x 5 |
| Durante el desarrollo | x 10 |
| Durante las pruebas | x 20 |
| Después de la entrega | x 100 |

Detectar un error en los requerimientos cuesta 100 veces menos que detectarlo después de que el sistema fue entregado al cliente.

**Ejemplo para recordar**: imaginemos que alguien pide un pastel de cumpleaños de chocolate con crema y el pastelero escucha "pastel de cumpleaños" y asume que es de vainilla. Si el error se detecta cuando el pastelero todavía está eligiendo los ingredientes, se corrige en un segundo. Si se detecta cuando el pastel ya está listo, hay que empezar de cero.

Los requerimientos son el contrato técnico entre el cliente y el equipo de desarrollo. Sin ese contrato bien escrito, cada parte tiene una imagen diferente del sistema final.

---

## 1.2. Herramienta ES.RE — Especificación de Requerimientos (IEEE Std. 830-1998)

### ¿Qué es el IEEE?

El **IEEE** (*Institute of Electrical and Electronics Engineers*) es la organización técnica y científica más grande del mundo en el campo de la ingeniería eléctrica, electrónica e informática. Tiene más de 400.000 miembros en 160 países y publica estándares técnicos que sirven de referencia global para la industria.

Uno de esos estándares es el **IEEE 830-1998**, que define las buenas prácticas para escribir un documento de **Especificación de Requerimientos de Software** (ERS), también conocido por su sigla en inglés: **SRS** (*Software Requirements Specification*).

### ¿Qué propone el IEEE 830?

La norma establece que un documento de especificación de requerimientos debe tener estas características:

| Característica | ¿Qué significa? | Ejemplo de violación |
|---|---|---|
| **Correcto** | Cada requerimiento refleja una necesidad real. | Documentar algo que nadie pidió. |
| **No ambiguo** | Tiene una sola interpretación posible. | "El sistema debe ser rápido." (¿cuánto es rápido?) |
| **Completo** | Cubre todas las situaciones relevantes. | Documentar el alta de usuario pero olvidar la baja. |
| **Consistente** | Sin contradicciones entre requerimientos. | RF1: "solo el admin puede eliminar." RF5: "cualquier usuario puede eliminar." |
| **Verificable** | Se puede comprobar si el sistema lo cumple. | "El sistema debe ser seguro." (no verificable tal como está). |
| **Modificable** | Puede actualizarse sin afectar el resto. | Un requerimiento embebido dentro de otro es difícil de modificar. |
| **Trazable** | Se puede rastrear su origen y su impacto. | Cada RF debe poder relacionarse con una historia de usuario o caso de uso. |

**Ejemplo para recordar — el problema de la ambigüedad:**

> Requerimiento malo: *"El sistema debe ser fácil de usar."*
>
> Requerimiento bueno: *"El sistema debe permitir completar el proceso de reserva de turno en no más de 4 pasos desde la pantalla principal."*

El segundo puede verificarse. El primero, no: "fácil" significa cosas distintas para distintas personas.

### Estructura típica de un documento ERS

Un documento ERS bien escrito incluye:

1. **Introducción**: propósito del documento, alcance del sistema, definiciones y abreviaturas.
2. **Descripción general**: contexto del producto, funciones principales, tipos de usuarios y restricciones generales.
3. **Requerimientos específicos**: funcionales, no funcionales, de interfaz y de restricción.
4. **Apéndices**: glosario, modelos complementarios, referencias.

---

## 1.2.1. Tipos de requerimientos

Existen varias formas de clasificar los requerimientos. La más usada en la práctica distingue entre **funcionales** y **no funcionales**, pero también hay otros tipos relevantes:

| Tipo | Pregunta que responde | Ejemplo |
|---|---|---|
| **Funcional** | ¿Qué debe *hacer* el sistema? | "El sistema debe enviar un correo de confirmación al reservar turno." |
| **No funcional** | ¿Cómo debe *ser* el sistema? | "El sistema debe responder en menos de 3 segundos." |
| **De dominio** | ¿Qué reglas del negocio debe respetar? | "Un préstamo de biblioteca no puede extenderse más de dos veces." |
| **De restricción** | ¿Qué limitaciones existen desde afuera? | "El sistema debe funcionar en el navegador Chrome versión 90 o superior." |
| **De interfaz** | ¿Cómo interactúa con otros sistemas o personas? | "El sistema debe importar datos desde archivos CSV." |

**Truco para no confundirlos**: los requerimientos funcionales describen *verbos* (qué hace el sistema), los no funcionales describen *adjetivos* (cómo es el sistema). Los de dominio vienen de las reglas del negocio del cliente, no del equipo técnico.

---

## 1.2.2. Requerimientos funcionales

### Definición

Un **requerimiento funcional** describe una acción, función o servicio específico que el sistema debe ser capaz de realizar. Responde directamente a la pregunta: *¿qué debe hacer el sistema cuando el usuario hace X?*

Los requerimientos funcionales típicamente usan frases como:

- *"El sistema debe permitir..."*
- *"El sistema debe registrar..."*
- *"El sistema debe generar..."*
- *"El sistema debe notificar..."*
- *"El sistema debe validar..."*

### ¿Cómo se identifican?

Un requerimiento funcional nace de una necesidad concreta del usuario. Si el usuario dice *"quiero poder buscar un libro por título"*, eso se convierte en: *"El sistema debe permitir buscar libros por título, autor o ISBN."*

### Ejemplo aplicado: sistema de biblioteca

Supongamos que la biblioteca de una escuela necesita un sistema para gestionar préstamos. Los requerimientos funcionales serían:

| Código | Requerimiento funcional |
|---|---|
| RF1 | El sistema debe permitir registrar socios con nombre, número de documento y dirección. |
| RF2 | El sistema debe permitir registrar libros con título, autor, ISBN y cantidad de ejemplares. |
| RF3 | El sistema debe permitir registrar un préstamo indicando socio, libro, fecha y plazo. |
| RF4 | El sistema debe permitir registrar la devolución de un préstamo. |
| RF5 | El sistema debe impedir prestar un libro si todos los ejemplares están prestados. |
| RF6 | El sistema debe generar una lista de préstamos vencidos. |
| RF7 | El sistema debe enviar un aviso al socio cuando un préstamo está por vencer. |

**Nota clave**: cada requerimiento funcional debe ser *verificable*. RF5, por ejemplo, se puede verificar intentando prestar un libro sin ejemplares disponibles: si el sistema lo impide, el requerimiento está cumplido. Si no lo impide, está fallando.

---

## 1.2.3. Requerimientos no funcionales

### Definición

Un **requerimiento no funcional** describe las *condiciones de calidad* que el sistema debe cumplir, independientemente de lo que hace. No describe funciones sino atributos del sistema: qué tan rápido es, qué tan seguro, desde dónde se puede usar, qué tan fácil es aprender a usarlo.

Los requerimientos no funcionales se agrupan en categorías:

| Categoría | ¿Qué evalúa? | Ejemplo |
|---|---|---|
| **Rendimiento** | Velocidad y capacidad de respuesta. | "El sistema debe soportar 500 usuarios simultáneos." |
| **Usabilidad** | Facilidad de uso y aprendizaje. | "Un usuario nuevo debe poder hacer su primera reserva sin capacitación previa." |
| **Seguridad** | Protección de datos y accesos. | "Las contraseñas deben almacenarse encriptadas con bcrypt." |
| **Disponibilidad** | Tiempo operativo. | "El sistema debe estar disponible el 99% del tiempo en horario laboral." |
| **Escalabilidad** | Capacidad de crecer. | "El sistema debe poder gestionar hasta 100.000 registros sin degradar el rendimiento." |
| **Portabilidad** | Funcionar en distintos entornos. | "El sistema debe funcionar en Chrome, Firefox y Safari." |
| **Mantenibilidad** | Facilidad para actualizar. | "El código debe seguir la guía de estilo PEP 8 para facilitar el mantenimiento." |

### Los no funcionales son los más difíciles de detectar

Los usuarios casi nunca expresan los no funcionales de forma directa. En cambio, los mencionan dentro de otras frases:

> *"Que no tarde tanto en cargar."* → Requerimiento de rendimiento.
> *"Que se pueda usar desde el celular."* → Requerimiento de portabilidad.
> *"Que no cualquiera pueda ver los sueldos."* → Requerimiento de seguridad.
> *"Que si se va la luz no pierda todo lo que cargué."* → Requerimiento de disponibilidad.

**El error clásico**: muchos equipos documentan solo los funcionales y olvidan los no funcionales. El resultado es un sistema que *hace todo lo que se le pidió* pero que es lento, difícil de usar, inseguro o inaccesible desde celulares. El cliente queda insatisfecho aunque técnicamente el sistema "cumple los requerimientos".

### Comparación directa

| | Funcional | No funcional |
|---|---|---|
| Pregunta | ¿Qué hace? | ¿Cómo es? |
| Ejemplo | "Registrar un turno médico" | "La carga del turno debe completarse en menos de 3 pasos" |
| Analogía | El *motor* del auto | La *comodidad*, *velocidad* y *seguridad* del auto |

---

## 1.3. Ciclo de vida de los requisitos

### Los requerimientos no son eternos ni estáticos

Una de las ideas más importantes en ingeniería de software es que los requerimientos **cambian**. No porque el cliente sea indeciso, sino porque nadie conoce perfectamente sus propias necesidades hasta que empieza a ver el sistema funcionando.

El ciclo de vida de los requisitos describe las etapas por las que pasa un requerimiento, desde que surge como una idea vaga hasta que se implementa, se valida y eventualmente se modifica.

```
  [ ELICITACIÓN ]
       ↓
  [ ANÁLISIS ]
       ↓
  [ ESPECIFICACIÓN ]
       ↓
  [ VALIDACIÓN ]
       ↓
  [ GESTIÓN DEL CAMBIO ]
       ↑___________________|
```

### Descripción de cada etapa

**Elicitación** (descubrimiento)

Es el proceso de *extraer* las necesidades de los stakeholders. "Elicitar" significa hacer salir algo que ya existe pero que no está expresado. El usuario sabe lo que necesita pero no siempre puede articularlo con claridad.

*Técnicas usadas*: entrevistas, cuestionarios, talleres, observación, revisión de documentos.

*Ejemplo*: el dueño de una clínica dice *"quiero que los turnos estén mejor organizados"*. El equipo pregunta: ¿qué significa "mejor"? ¿por especialidad, por médico, por día, por paciente? Ahí empieza la elicitación real.

---

**Análisis** (comprensión y clasificación)

Una vez que se tienen las necesidades relevadas, el equipo las estudia para detectar:
- Requerimientos incompletos (¿qué pasa si...?)
- Requerimientos contradictorios (RF3 dice X pero RF7 dice lo contrario)
- Requerimientos imposibles de implementar en el plazo o presupuesto disponible

*Ejemplo*: el cliente pide que el sistema funcione completamente sin internet. El equipo analiza y detecta que eso implica sincronización offline, lo que duplicaría el costo. Se documenta como restricción y se negocia el alcance.

---

**Especificación** (documentación formal)

Los requerimientos analizados se escriben de forma precisa, con código único, descripción no ambigua y criterio de verificación. Aquí es donde se aplica el estándar IEEE 830.

*Ejemplo*: en lugar de escribir *"el sistema debe ser seguro"*, se especifica: *"El sistema debe bloquear un usuario luego de 5 intentos de inicio de sesión fallidos consecutivos."*

---

**Validación** (confirmación con el cliente)

El documento de requerimientos se presenta al cliente para confirmar que lo que se especificó refleja lo que realmente necesita. Este paso es crítico: un error aquí puede costar caro.

*Técnicas de validación*: revisiones formales, prototipos, demos de pantallas de baja fidelidad.

---

**Gestión del cambio** (control de evolución)

Durante el desarrollo, el cliente inevitablemente pedirá cambios. La gestión del cambio define cómo se evalúa, aprueba y documenta cada modificación a los requerimientos.

Sin gestión del cambio, el alcance del proyecto crece sin control (lo que en ingeniería de software se llama *scope creep*, o "creep de alcance": el proyecto crece poco a poco hasta hacerse inmanejable).

*Ejemplo*: a mitad del desarrollo, el cliente pide agregar la posibilidad de exportar a Excel. El equipo evalúa el impacto (2 días de trabajo), lo documenta como nuevo requerimiento y lo incorpora al plan. No simplemente lo "hace porque no lleva tanto".

---

## 1.4. Usuarios del sistema

### ¿Quiénes son los usuarios?

Los **usuarios del sistema** son todas las personas que interactúan directamente con él: ingresan datos, consultan información, toman decisiones basadas en sus resultados o administran su funcionamiento.

Identificar bien a los usuarios es esencial para diseñar una interfaz adecuada y asignar los permisos correctos. Un sistema diseñado pensando solo en el jefe de administración, ignorando a los operarios que lo usan en el campo, casi siempre termina siendo rechazado por quienes más lo necesitan.

---

## 1.4.1. Tipos de usuarios y clasificación

Los usuarios pueden clasificarse según distintos criterios. Conocer estas clasificaciones ayuda a tomar mejores decisiones de diseño.

### Por nivel de acceso

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Administrador** | Acceso total. Configura el sistema, crea usuarios, ve todo. | El director de sistemas de una empresa. |
| **Usuario con privilegios** | Acceso a funciones de su área. Puede crear y modificar. | El encargado de turno en una clínica. |
| **Usuario básico** | Acceso restringido a las tareas de su rol. | El recepcionista que solo carga turnos. |
| **Usuario de consulta** | Solo puede ver información, no modificarla. | El auditor externo que revisa reportes. |

### Por frecuencia de uso

| Tipo | Descripción | Implicación de diseño |
|---|---|---|
| **Usuario frecuente** | Usa el sistema todos los días o varias veces al día. | Necesita atajos, fluidez y rapidez. Aprende la interfaz rápido. |
| **Usuario esporádico** | Usa el sistema de vez en cuando. | Necesita que la interfaz sea autoexplicativa. No puede depender de la memoria. |

### Por nivel técnico

| Tipo | Descripción | Implicación de diseño |
|---|---|---|
| **Usuario técnico** | Tiene formación informática. Entiende términos técnicos. | Puede acceder a configuraciones avanzadas. |
| **Usuario no técnico** | Sin formación informática. | Mensajes de error en lenguaje claro. Interfaz simple. Sin jerga técnica. |

### Ejemplo aplicado: cajero automático (ATM)

Un cajero automático es usado por millones de personas con perfiles radicalmente distintos:

- Una persona mayor que va una vez al mes a cobrar su jubilación → usuario esporádico, no técnico.
- Un universitario que retira efectivo varias veces a la semana → usuario frecuente, nivel técnico básico.
- El técnico del banco que recarga billetes y hace mantenimiento → usuario técnico, acceso especial.

El diseño del cajero tiene que funcionar bien para todos. Por eso las interfaces de ATM son extremadamente simples: letras grandes, pasos contados, confirmación en cada acción, mensajes de error claros. No es porque los diseñadores no sepan hacer algo más sofisticado, sino porque el usuario menos técnico marca el límite inferior de complejidad.

---

## 1.4.2. Identificación y análisis de stakeholders

### ¿Qué es un stakeholder?

Un **stakeholder** (en español: *parte interesada*) es toda persona, grupo u organización que tiene algún interés en el sistema, sea porque lo usa, porque se ve afectado por sus resultados, porque lo financia o porque participa de su desarrollo.

La diferencia clave respecto al concepto de usuario es que un stakeholder no necesariamente usa el sistema directamente.

**Ejemplo**: en un sistema de gestión de una clínica médica:

| Stakeholder | ¿Usa el sistema? | ¿Por qué le importa? |
|---|---|---|
| Pacientes | Sí (portal web) | Pueden ver su historia clínica y reservar turnos. |
| Médicos | Sí | Consultan y cargan fichas clínicas. |
| Recepcionistas | Sí | Gestionan turnos y datos de pacientes. |
| Director de la clínica | Parcialmente | Ve reportes de productividad y disponibilidad. |
| Obra social | No directamente | Recibe información de prestaciones para liquidar. |
| Ministerio de Salud | No directamente | Puede auditar registros epidemiológicos. |
| Empresa de desarrollo | Sí (construye) | Su reputación y honorarios dependen del éxito. |

### ¿Por qué es importante identificarlos a todos?

Cada stakeholder tiene necesidades y expectativas que pueden diferir entre sí. Si el equipo solo escucha al director de la clínica, el sistema puede estar perfectamente alineado con la visión de gestión pero ser completamente inútil para los médicos que lo usan en el consultorio.

### Análisis de expectativas: cómo pueden chocar

A veces las expectativas de distintos stakeholders entran en conflicto:

| Stakeholder A | Stakeholder B | Conflicto |
|---|---|---|
| El recepcionista quiere una interfaz muy simple, con la menor cantidad de campos posibles. | El director quiere que se registren muchos datos para tener estadísticas completas. | Más datos = interfaz más compleja para el recepcionista. |
| Los médicos quieren tener acceso a toda la historia clínica de sus pacientes. | Los pacientes quieren control sobre qué datos comparten. | Privacidad vs. utilidad clínica. |
| El equipo de desarrollo quiere más tiempo para hacer el sistema más robusto. | El director quiere la primera versión en 2 meses. | Calidad vs. plazo. |

La tarea del equipo es identificar estos conflictos temprano, documentarlos y negociar soluciones con los stakeholders antes de empezar a programar.

### Herramienta: mapa de stakeholders

Una forma simple de organizar la información de los stakeholders es una tabla con cuatro columnas:

| Stakeholder | Relación con el sistema | Necesidades principales | Expectativas |
|---|---|---|---|
| ... | ... | ... | ... |

Completar esta tabla al inicio del proyecto evita sorpresas desagradables cuando el sistema ya está casi terminado.

---

## 1.5. Técnicas de relevamiento

### ¿Qué significa "relevar" requerimientos?

Relevar significa *descubrir y recopilar*. El proceso de relevamiento de requerimientos consiste en hacer que las personas cuenten lo que necesitan, aunque a veces no sepan cómo expresarlo con claridad técnica.

No existe una única técnica que sirva para todos los proyectos. En la práctica, los equipos combinan varias, cada una aporta un ángulo diferente.

---

## 1.5.1. Cuestionarios

### ¿Qué son?

Un **cuestionario** es un conjunto de preguntas escritas que se envían a los usuarios para recopilar información de forma sistemática. Las respuestas pueden ser abiertas (el usuario escribe libremente) o cerradas (elige entre opciones predefinidas).

### ¿Cuándo se usan?

- Cuando hay muchos usuarios dispersos geográficamente.
- Como preparación para una entrevista (para llegar con contexto previo).
- Para validar si una suposición del equipo es correcta.
- Cuando se quiere anonimato en las respuestas.

### Ventajas y desventajas

| Ventajas | Desventajas |
|---|---|
| Llegan a muchas personas al mismo tiempo. | Las preguntas mal redactadas generan respuestas inútiles. |
| Permiten comparar respuestas fácilmente. | No se puede explorar en profundidad una respuesta interesante. |
| Son más económicos que las entrevistas. | Dependen de la voluntad del usuario de responderlos. |
| Permiten el anonimato. | Pueden tener tasa de respuesta baja. |

### Tipos de preguntas en un cuestionario

| Tipo | Cuándo usarlo | Ejemplo |
|---|---|---|
| **Pregunta cerrada** | Para datos concretos o para comparar grupos. | "¿Con qué frecuencia usas el sistema actual? (Diario / Semanal / Mensual)" |
| **Escala de valoración** | Para medir niveles de satisfacción o prioridad. | "En una escala del 1 al 5, ¿qué tan difícil es encontrar la información que necesitas?" |
| **Pregunta abierta** | Para obtener opiniones, sugerencias o relatos. | "¿Qué cambiarías del proceso de registro actual?" |

### Ejemplo para recordar

Un equipo que va a desarrollar un sistema de turnos para un hospital envía un cuestionario previo a 15 médicos:

> 1. ¿Cuántos pacientes atiendes en promedio por día?
> 2. ¿Actualmente cómo anotas los turnos? (agenda papel / planilla Excel / sistema / otro)
> 3. ¿Qué información necesitas ver de un paciente antes de que entre al consultorio?
> 4. ¿Hay alguna situación frecuente que el sistema actual no resuelve bien?
> 5. ¿Preferirías acceder al sistema desde la computadora, el celular o ambos?

Con estas respuestas antes de la entrevista, el equipo ya sabe el volumen de trabajo, las herramientas actuales y las prioridades de cada médico. La entrevista puede dedicarse a explorar en profundidad, no a preguntar lo básico.

---

## 1.5.2. Entrevistas

### ¿Qué son?

Una **entrevista** es una conversación estructurada o semiestructurada entre el equipo de desarrollo y uno o más representantes del cliente o usuarios, con el objetivo de relevar necesidades, entender procesos y descubrir restricciones.

Es la técnica de relevamiento más poderosa porque permite explorar, preguntar, repreguntar y capturar matices que un cuestionario nunca capturaría.

### Tipos de entrevistas

| Tipo | Descripción | Cuándo usarlo |
|---|---|---|
| **Estructurada** | Preguntas fijas preparadas con anticipación. El entrevistador no se desvía. | Cuando se necesita comparar respuestas de varias personas de forma precisa. |
| **Semiestructurada** | Hay preguntas guía pero se permite explorar temas emergentes. | El más usado en proyectos de software: balance entre orden y flexibilidad. |
| **No estructurada** | Conversación abierta sin guión fijo. | En etapas muy tempranas, cuando el equipo no sabe aún qué preguntar. |

### Fases de una buena entrevista

1. **Preparación**: definir objetivos, preparar preguntas, estudiar el contexto del negocio.
2. **Apertura**: presentarse, explicar el propósito, generar un clima de confianza.
3. **Desarrollo**: hacer las preguntas, escuchar activamente, tomar notas, explorar respuestas interesantes.
4. **Cierre**: resumir lo entendido, preguntar si hay algo más, acordar próximos pasos.
5. **Documentación**: redactar un informe con los hallazgos principales.

### Técnicas para hacer mejores preguntas

| Técnica | Descripción | Ejemplo |
|---|---|---|
| **Preguntas abiertas** | Invitan a describir en detalle. | "¿Cómo funciona actualmente el proceso de aprobación de facturas?" |
| **Preguntas de escenario** | Piden al usuario que describa una situación concreta. | "¿Puede contarme cómo fue la última vez que tuvo que buscar información de un cliente antiguo?" |
| **¿Qué pasaría si...?** | Ayudan a descubrir casos bordes. | "¿Qué pasa si dos vendedores quieren modificar el mismo pedido al mismo tiempo?" |
| **Repreguntar** | Profundizar en algo mencionado de pasada. | "Mencionó que a veces el proceso falla, ¿puede contarme más sobre eso?" |

### El error más común en entrevistas

Hacer preguntas que ya sugieren la respuesta:

> *"¿No te parece que sería mejor tener un acceso directo desde la pantalla principal?"*

Esta pregunta guía al entrevistado hacia una respuesta específica. Lo correcto es preguntar:

> *"¿Cómo preferirías acceder a las funciones que usas con más frecuencia?"*

### Ejemplo para recordar

Un equipo entrevista al encargado de almacén de una empresa distribuidora:

> **Equipo**: ¿Qué es lo que más le cuesta del sistema actual?
>
> **Encargado**: Buscar productos. Tengo que saber el código exacto o no encuentra nada.
>
> **Equipo**: ¿Qué tan seguido no recuerda el código?
>
> **Encargado**: Todos los días. Los repositores nuevos no saben los códigos de memoria.
>
> **Equipo**: ¿Qué información sí tiene disponible cuando no sabe el código?
>
> **Encargado**: El nombre parcial del producto, la marca, o el color del envase.

De esta entrevista surgió un requerimiento que no estaba en ningún documento: *"El sistema debe permitir buscar productos por nombre parcial, marca y descripción, no solo por código."* Sin la entrevista, el equipo hubiera copiado el comportamiento del sistema anterior y el problema hubiera persistido.

---

## 1.5.3. Revisión de registros

### ¿Qué es?

La **revisión de registros** consiste en analizar documentos, planillas, formularios, reportes o sistemas existentes que el cliente ya usa, para entender cómo trabaja actualmente y qué información maneja.

Es una técnica de observación indirecta: en lugar de preguntar cómo trabaja el usuario, el equipo ve evidencia de cómo trabaja realmente.

### ¿Por qué es valiosa?

Los usuarios frecuentemente olvidan mencionar aspectos de su trabajo porque los dan por sentados. Llevan años haciendo lo mismo y ya no "ven" sus propios procesos. Al revisar sus registros, el equipo descubre:

- Qué datos se usan en la práctica (aunque el usuario no los haya mencionado).
- Qué campos están siempre vacíos (quizás son innecesarios).
- Qué información se busca con frecuencia.
- Qué problemas existen en los registros actuales (inconsistencias, datos duplicados, campos mal definidos).

### Documentos típicos a revisar

| Tipo de documento | Qué se busca |
|---|---|
| Planillas de cálculo (Excel) | Qué columnas existen, qué fórmulas se usan, qué datos se calculan manualmente. |
| Formularios en papel | Qué campos se piden, cuáles quedan vacíos, qué anotaciones se hacen al margen. |
| Reportes periódicos | Qué información se considera importante para la toma de decisiones. |
| Registros en cuadernos | Procesos informales que no están documentados en ningún sistema. |
| Sistema anterior (si existe) | Funcionalidades que se usaron y que el cliente quiere conservar o mejorar. |

### Ventajas y limitaciones

| Ventajas | Limitaciones |
|---|---|
| Muestra la realidad sin interpretaciones. | Los registros pueden estar desactualizados. |
| Descubre procesos que el usuario da por obvios. | Puede ser difícil acceder a documentos confidenciales. |
| Complementa lo dicho en la entrevista. | Formatos antiguos o caóticos pueden ser difíciles de interpretar. |

### Ejemplo para recordar

Un equipo va a desarrollar un sistema de inventario para una ferretería. Antes de la entrevista, el dueño les muestra tres cuadernos con los movimientos de stock de los últimos dos años.

Al revisarlos, el equipo descubre:
- Algunos productos tienen hasta 4 nombres distintos según quién los anotó. → Necesitan un campo de "nombre normalizado".
- Hay columnas de "ubicación en el depósito" que el dueño nunca mencionó. → El sistema necesita gestionar ubicaciones físicas.
- Las anotaciones de devoluciones son muy confusas, mezcladas con las entradas normales. → El sistema necesita distinguir claramente entre entradas nuevas y devoluciones.

Ninguno de estos tres hallazgos surgió en la entrevista. Los registros los hicieron visibles.

---

## 1.6. Factibilidades del sistema

### ¿Para qué sirve un estudio de factibilidad?

Antes de comprometerse a construir un sistema, el equipo debe responder una pregunta fundamental: *¿tiene sentido hacerlo?*

El **estudio de factibilidad** analiza si el proyecto propuesto es viable desde diferentes perspectivas. No busca garantizar el éxito, sino identificar los riesgos más importantes y verificar que el proyecto tiene base suficiente para avanzar.

Un proyecto puede fallar por razones muy distintas: porque los usuarios no lo adoptarán, porque la tecnología no existe o es demasiado cara, porque el cliente no tiene el presupuesto, o porque viola alguna ley. El estudio de factibilidad anticipa estos problemas antes de que sea costoso resolverlos.

---

## 1.6.1. Factibilidad operativa

### ¿Qué evalúa?

La **factibilidad operativa** analiza si el sistema será realmente utilizado en el entorno en el que se va a operar. Un sistema técnicamente perfecto que nadie usa es un fracaso completo.

### Preguntas clave

- ¿Los usuarios tienen disposición para cambiar sus procesos actuales?
- ¿Tienen las habilidades mínimas necesarias para usar el sistema?
- ¿El proceso de trabajo actual permite incorporar el sistema sin disrupciones graves?
- ¿El sistema resuelve un problema real o crea nuevos problemas?

### Riesgos operativos típicos

| Riesgo | Ejemplo | Mitigación |
|---|---|---|
| Resistencia al cambio | Los empleados están cómodos con las planillas de Excel y no quieren aprender un sistema nuevo. | Involucrarlos en el diseño, capacitación, período de transición paralelo. |
| Falta de habilidades | Los operarios de campo no tienen experiencia con tecnología. | Interfaz muy simple, capacitación en sitio, soporte inicial intensivo. |
| Proceso inadaptable | El flujo de trabajo actual no puede interrumpirse para ingresar datos al sistema. | Diseñar la carga de datos para que se haga en momentos naturales del proceso. |

### Ejemplo para recordar

Una clínica decide implementar un sistema de fichas clínicas digitales. El médico más antiguo del staff, que lleva 30 años escribiendo en papel, dice que no va a usar la computadora durante las consultas porque le quita atención al paciente.

Si el equipo ignora este dato y entrega el sistema sin más, la resistencia de ese médico (y posiblemente de otros que comparten su visión) puede hundir la adopción del sistema entero.

La factibilidad operativa detecta este riesgo antes. La solución puede ser: permitir que el médico dicte las notas y una asistente las cargue después, o usar tablets con dictado por voz, o simplemente reconocer que la implementación necesita una estrategia de cambio cultural que va más allá del software.

---

## 1.6.2. Factibilidad técnica

### ¿Qué evalúa?

La **factibilidad técnica** analiza si la tecnología necesaria para construir el sistema existe, está disponible, es accesible para el equipo y es compatible con la infraestructura del cliente.

### Preguntas clave

- ¿La tecnología requerida existe y es madura?
- ¿El equipo tiene las habilidades técnicas necesarias?
- ¿La infraestructura del cliente puede soportar el sistema?
- ¿El tiempo disponible es suficiente para construir lo que se solicita?

### Dimensiones de la factibilidad técnica

| Dimensión | Preguntas |
|---|---|
| **Tecnología disponible** | ¿Existen frameworks, bases de datos, APIs que resuelvan lo que se necesita? |
| **Capacidad del equipo** | ¿El equipo sabe usar las tecnologías necesarias? ¿Necesita capacitación? |
| **Infraestructura del cliente** | ¿Tiene servidores, internet estable, dispositivos compatibles? |
| **Integración con otros sistemas** | ¿El sistema nuevo debe conectarse con sistemas existentes? ¿Tienen APIs abiertas? |
| **Complejidad técnica** | ¿Alguna funcionalidad requiere investigación, prototipos o tecnología experimental? |

### Ejemplo para recordar

Un cliente pequeño pide un sistema que reconozca automáticamente las caras de los empleados para marcar asistencia. El equipo evalúa:

- El reconocimiento facial es tecnológicamente posible (existen APIs y librerías).
- Pero requiere cámaras de buena calidad en cada punto de acceso.
- La implementación confiable requiere conocimientos de machine learning que el equipo no tiene.
- El cliente tiene una conexión a internet de 5 Mbps que no soporta el procesamiento en la nube en tiempo real.

Conclusión: técnicamente posible en abstracto, pero **no factible en este contexto** con este equipo, esta infraestructura y este presupuesto.

La factibilidad técnica no pregunta *"¿existe esta tecnología en el mundo?"* sino *"¿podemos construirlo nosotros, aquí, con estos recursos?"*

---

## 1.6.3. Factibilidad económica

### ¿Qué evalúa?

La **factibilidad económica** analiza si el proyecto tiene justificación financiera: si el costo de construirlo es razonable en relación con el valor que genera para el cliente.

### Preguntas clave

- ¿Cuánto costará desarrollar el sistema?
- ¿El cliente puede pagar ese costo?
- ¿Los beneficios (directos o indirectos) justifican la inversión?
- ¿Cuánto costará mantenerlo después de entregado?

### Componentes del costo de un proyecto de software

| Costo | Descripción |
|---|---|
| **Costo de desarrollo** | Salarios del equipo, herramientas, licencias. |
| **Costo de infraestructura** | Servidores, hosting, dominio, hardware necesario. |
| **Costo de capacitación** | Tiempo y recursos para enseñar a los usuarios a usar el sistema. |
| **Costo de mantenimiento** | Correcciones, actualizaciones y soporte posterior a la entrega. |
| **Costo de oportunidad** | Lo que el cliente deja de hacer mientras espera el sistema. |

### Tipos de beneficios

No todos los beneficios de un sistema se miden en dinero directo:

| Tipo de beneficio | Ejemplo |
|---|---|
| **Directo y cuantificable** | Se reducen 3 horas diarias de trabajo manual → ahorro de USD 600/mes. |
| **Indirecto y estimable** | Menos errores en pedidos → menos devoluciones → menos costo logístico. |
| **Estratégico** | El sistema permite acceder a nuevos mercados o cumplir requisitos de exportación. |
| **Intangible** | Mejor imagen ante los clientes, mayor satisfacción de los empleados. |

### Ejemplo para recordar

Una empresa de transporte tiene 5 administrativos que pasan 4 horas al día consolidando planillas de rutas a mano. Cada administrativo cobra USD 800/mes.

Costo del trabajo manual mensual = 5 × USD 800 × (4h/8h) = USD 2.000/mes.

El sistema propuesto cuesta USD 18.000 y automatiría completamente ese proceso. El retorno de inversión (ROI) sería de 9 meses. A partir del mes 10, el sistema genera ahorro neto.

Este cálculo convierte una decisión de *"si nos alcanza el presupuesto"* en una decisión informada de *"cuánto tiempo tarda en pagarse solo"*.

---

## 1.6.4. Factibilidad legal

### ¿Qué evalúa?

La **factibilidad legal** analiza si el sistema puede construirse y operarse sin violar leyes, normas, regulaciones sectoriales o acuerdos contractuales vigentes.

### Preguntas clave

- ¿El sistema maneja datos personales que requieren protección por ley?
- ¿El sector del cliente tiene regulaciones específicas que el sistema debe respetar?
- ¿Las licencias de las tecnologías usadas permiten el uso comercial previsto?
- ¿Quién es el dueño del código fuente entregado?

### Áreas legales comunes en proyectos de software

| Área legal | Descripción | Ejemplo |
|---|---|---|
| **Protección de datos personales** | Las leyes obligan a proteger los datos de personas físicas. | En Uruguay: Ley 18.331. En Europa: GDPR. Se aplica a cualquier sistema que almacene nombres, documentos o datos de salud. |
| **Normativas sectoriales** | Ciertos sectores tienen regulaciones específicas sobre qué datos deben registrarse y cómo. | Sistemas de salud (normas del MSP), sistemas financieros (normas del BCU), sistemas de trazabilidad agropecuaria (normas del MGAP). |
| **Licencias de software** | Las tecnologías de terceros tienen licencias que limitan cómo pueden usarse. | Una librería con licencia GPL puede requerir que el código que la usa sea open source. Una API comercial puede tener costo por uso o restricciones de volumen. |
| **Propiedad intelectual** | El contrato debe definir a quién pertenece el código fuente y el sistema entregado. | Sin cláusula explícita, pueden surgir disputas: ¿el cliente puede contratar a otro equipo para modificar el sistema? |
| **Accesibilidad** | Algunos servicios públicos están obligados por ley a ser accesibles para personas con discapacidad. | Pautas WCAG 2.1 de accesibilidad web. |

### Ejemplo para recordar

Un equipo desarrolla un sistema para una escuela que registra datos de estudiantes menores de edad: nombre, documento, dirección, rendimiento académico y situación familiar.

Sin análisis de factibilidad legal, el equipo podría almacenar todos esos datos en un servidor sin cifrado, sin política de acceso y sin mecanismo para que los padres soliciten la eliminación de los datos.

La ley uruguaya de protección de datos personales (Ley 18.331) exige:
- Que los datos se almacenen con medidas de seguridad adecuadas.
- Que se informe a los titulares sobre el uso de sus datos.
- Que exista un mecanismo para que los titulares accedan, corrijan o soliciten la eliminación de sus datos.

Ignorar estas obligaciones no es un descuido técnico: puede derivar en sanciones legales para la escuela y para la empresa que desarrolló el sistema.

---

## 1.7. Lógica del sistema

### ¿Qué es la lógica del sistema?

La **lógica del sistema** describe las reglas y decisiones que el sistema debe tomar ante distintas situaciones. Formalizar esta lógica es fundamental para que los desarrolladores programen el comportamiento correcto sin ambigüedades.

Cuando una decisión tiene múltiples condiciones posibles, la lógica puede ser difícil de expresar solo con texto. Las herramientas más usadas para formalizarla son el **árbol de decisión** y la **tabla de decisión**.

---

## 1.7.1. Árbol de decisión

### ¿Qué es?

Un **árbol de decisión** es un diagrama que representa una secuencia de decisiones y sus posibles resultados en forma de árbol ramificado. Cada nodo es una pregunta o condición, cada rama es una respuesta posible, y cada hoja (extremo de una rama) es un resultado o acción final.

### ¿Cuándo usarlo?

Los árboles de decisión son especialmente útiles cuando las condiciones se evalúan en **secuencia**: primero se pregunta A, y dependiendo de la respuesta se pregunta B o se va directamente a una acción.

### Estructura básica

```
      [ Condición 1 ]
       /           \
     SÍ            NO
     /               \
[ Condición 2 ]   [ Resultado X ]
   /        \
 SÍ          NO
 /             \
[Resultado A] [Resultado B]
```

### Ejemplo 1: ¿puede un socio de biblioteca tomar un libro prestado?

```
¿El socio está registrado?
│
├── NO → No puede pedir préstamo. [Acción: registrar al socio primero]
│
└── SÍ
    │
    ¿El socio tiene préstamos vencidos?
    │
    ├── SÍ → No puede pedir préstamo. [Acción: informar deuda pendiente]
    │
    └── NO
        │
        ¿Hay ejemplares disponibles del libro?
        │
        ├── NO → No puede pedir préstamo. [Acción: agregar a lista de espera]
        │
        └── SÍ → Préstamo autorizado. [Acción: registrar préstamo]
```

Este árbol muestra claramente que hay tres razones distintas por las que un préstamo puede rechazarse, y que tienen distinto tratamiento. Sin este diagrama, un programador podría implementar solo una de las tres condiciones.

---

### Ejemplo 2: ¿qué descuento aplica a un cliente de una tienda online?

```
¿El cliente tiene cuenta registrada?
│
├── NO → Sin descuento (cliente anónimo).
│
└── SÍ
    │
    ¿Es la primera compra del cliente?
    │
    ├── SÍ → Descuento de bienvenida: 10%.
    │
    └── NO
        │
        ¿El total de la compra supera USD 100?
        │
        ├── SÍ
        │    │
        │    ¿El cliente tiene membresía premium?
        │    │
        │    ├── SÍ → Descuento premium: 20%.
        │    └── NO → Descuento por monto: 10%.
        │
        └── NO → Sin descuento.
```

Este árbol hace visible la complejidad real de una regla de negocio que parecía simple: *"los mejores clientes reciben descuentos"*.

### Ventajas y limitaciones

| Ventajas | Limitaciones |
|---|---|
| Fácil de leer visualmente. | Puede crecer mucho si hay muchas condiciones. |
| Muestra el orden de evaluación de las condiciones. | No es ideal cuando todas las condiciones se evalúan simultáneamente. |
| Hace visibles los casos bordes y excepciones. | Para muchas combinaciones, la tabla de decisión es más compacta. |

---

## 1.7.2. Tabla de decisión

### ¿Qué es?

Una **tabla de decisión** es una representación matricial que muestra todas las combinaciones posibles de condiciones y las acciones que el sistema debe ejecutar en cada caso. Es especialmente útil cuando hay varias condiciones que se evalúan **de forma simultánea** y no secuencial.

### Estructura de una tabla de decisión

Una tabla de decisión tiene cuatro zonas:

```
+-------------------+----+----+----+----+
|   CONDICIONES     | C1 | C2 | C3 | C4 |  ← cada columna es una combinación
+-------------------+----+----+----+----+
| Condición A       | S  | S  | N  | N  |  ← S = Sí, N = No
| Condición B       | S  | N  | S  | N  |
+-------------------+----+----+----+----+
|   ACCIONES        |    |    |    |    |
+-------------------+----+----+----+----+
| Acción 1          | ✓  |    | ✓  |    |
| Acción 2          |    | ✓  |    |    |
| Acción 3          |    |    |    | ✓  |
+-------------------+----+----+----+----+
```

Cada columna (C1, C2, C3, C4) representa una combinación específica de respuestas a las condiciones. Las marcas (✓) indican qué acciones aplican en cada combinación.

### ¿Cuándo usarla?

Las tablas de decisión son ideales cuando:
- Hay dos o más condiciones que se evalúan al mismo tiempo.
- La misma combinación de condiciones puede llevar a múltiples acciones.
- Se quiere garantizar que ninguna combinación fue olvidada.

### Ejemplo 1: sistema de préstamos bancarios

Un banco evalúa dos condiciones para aprobar un préstamo: si el solicitante tiene ingresos suficientes y si tiene historial crediticio positivo.

| Condición / Caso | C1 | C2 | C3 | C4 |
|---|:---:|:---:|:---:|:---:|
| ¿Tiene ingresos suficientes? | Sí | Sí | No | No |
| ¿Tiene historial crediticio positivo? | Sí | No | Sí | No |
| **ACCIONES** | | | | |
| Aprobar préstamo | ✓ | | | |
| Aprobar préstamo con aval | | ✓ | ✓ | |
| Rechazar préstamo | | | | ✓ |
| Solicitar documentación adicional | | ✓ | ✓ | |

Esta tabla muestra que hay 4 combinaciones posibles y que el resultado en cada caso es distinto. Sin esta formalización, podría programarse que la falta de historial crediticio rechaza automáticamente el préstamo, cuando en realidad solo requiere un aval.

### Ejemplo 2: acceso a funciones según rol y estado del objeto

Un sistema de gestión de proyectos define qué puede hacer cada usuario con una tarea según su rol y el estado de la tarea:

| Condición / Caso | C1 | C2 | C3 | C4 | C5 | C6 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| ¿La tarea está cerrada? | No | No | No | Sí | Sí | Sí |
| ¿El usuario es administrador? | Sí | No | No | Sí | No | No |
| ¿El usuario es el asignado a la tarea? | — | Sí | No | — | Sí | No |
| **ACCIONES** | | | | | | |
| Puede editar la tarea | ✓ | ✓ | | | | |
| Puede cambiar el estado | ✓ | ✓ | | | | |
| Solo puede ver la tarea | | | ✓ | ✓ | ✓ | ✓ |
| Puede reabrir la tarea | | | | ✓ | | |
| Muestra mensaje "sin acceso" | | | | | | ✓ |

### Comparación: árbol vs. tabla

| Característica | Árbol de decisión | Tabla de decisión |
|---|---|---|
| Mejor para... | Condiciones secuenciales (si A entonces preguntar B) | Condiciones simultáneas (A y B y C al mismo tiempo) |
| Legibilidad visual | Muy intuitivo para pocas condiciones | Más compacto cuando hay muchas combinaciones |
| Riesgo de omitir casos | Puede haber ramas no exploradas | La estructura matricial fuerza a cubrir todas las combinaciones |
| Uso típico | Flujos de proceso, validaciones paso a paso | Reglas de negocio complejas, sistemas de permisos |

---

# UNIDAD 2 — MODELADO DE SISTEMAS

---

## 2.1. Modelo Esencial

### ¿Qué es el modelo esencial?

El **modelo esencial** es una forma de describir un sistema concentrándose en *qué debe hacer* y *para qué existe*, sin entrar en detalles de cómo se va a implementar tecnológicamente.

El modelo esencial responde a la pregunta: *¿si este sistema existiera en forma perfecta e infinitamente barata, cómo funcionaría?*

Al hacer abstracción de la tecnología, el modelo esencial permite al equipo y al cliente entender y discutir el sistema en términos de negocio, no de código.

El modelo esencial se compone de dos partes complementarias: el **modelo ambiental** y el **modelo de comportamiento**.

---

## 2.1.1. Modelo Ambiental

### ¿Qué es?

El **modelo ambiental** describe el contexto en el que el sistema va a funcionar: quiénes interactúan con él desde afuera (entidades externas) y qué información entra y sale del sistema.

El modelo ambiental define los **límites del sistema**: qué está adentro (lo que el sistema controla) y qué está afuera (lo que el sistema no controla pero con lo que interactúa).

### Elementos del modelo ambiental

| Elemento | Descripción | Ejemplo |
|---|---|---|
| **Sistema** | El software que se va a construir. | Sistema de reservas de turnos. |
| **Entidades externas** | Personas, organizaciones o sistemas que interactúan con el sistema. | Pacientes, médicos, obra social. |
| **Flujos de datos** | Información que entra o sale del sistema. | "Solicitud de turno" entra. "Confirmación de turno" sale. |

### Diagrama de contexto

El diagrama de contexto es la representación visual del modelo ambiental. Muestra el sistema como una caja central rodeada por sus entidades externas, conectadas por flechas que representan los flujos de datos.

```
              [ PACIENTE ]
                   |
        "Solicitud de turno"
                   ↓
[ OBRA SOCIAL ] → [ SISTEMA DE TURNOS ] → [ MÉDICO ]
  "Cobertura"          |           "Agenda asignada"
                       ↓
               [ BASE DE DATOS ]
               "Turnos registrados"
```

### Ejemplo para recordar

Para un sistema de gestión de una biblioteca escolar:

**Entidades externas**: Alumno, Docente, Bibliotecaria, Sistema de facturación.

**Flujos de entrada**:
- Alumno → Sistema: "Solicitud de préstamo"
- Bibliotecaria → Sistema: "Alta de libro"
- Docente → Sistema: "Lista de lecturas recomendadas"

**Flujos de salida**:
- Sistema → Alumno: "Comprobante de préstamo"
- Sistema → Bibliotecaria: "Listado de libros vencidos"
- Sistema → Sistema de facturación: "Multas pendientes"

El diagrama de contexto no muestra cómo funciona el sistema internamente. Solo muestra qué entra, qué sale y quiénes participan. Es la vista más externa y más general posible.

---

## 2.1.2. Modelo de comportamiento

### ¿Qué es?

El **modelo de comportamiento** describe qué hace el sistema internamente para transformar los datos de entrada en datos de salida. Muestra los procesos, los almacenes de datos y los flujos de información dentro del sistema.

La herramienta principal del modelo de comportamiento es el **Diagrama de Flujo de Datos (DFD)**, que descompone el sistema en procesos más pequeños y muestra cómo fluye la información entre ellos.

### Elementos de un DFD

| Símbolo | Nombre | Descripción |
|---|---|---|
| Círculo / óvalo | **Proceso** | Transforma datos de entrada en datos de salida. Siempre tiene un nombre con un verbo: "Registrar turno", "Calcular descuento". |
| Rectángulo | **Entidad externa** | Fuente o destino de datos fuera del sistema. |
| Línea con flecha | **Flujo de datos** | Información que se mueve entre procesos, entidades o almacenes. |
| Rectángulo abierto / paralelas | **Almacén de datos** | Donde se guarda la información: archivos, tablas de base de datos. |

### Niveles de un DFD

Los DFD pueden tener distintos niveles de detalle:

- **Nivel 0 (diagrama de contexto)**: el sistema como una sola caja, mostrando solo entidades externas.
- **Nivel 1**: los procesos principales del sistema y sus conexiones.
- **Nivel 2, 3...**: cada proceso principal se descompone en subprocesos más detallados.

### Ejemplo simplificado: sistema de préstamos de biblioteca (nivel 1)

```
[ALUMNO] → "Solicitud de préstamo"
                    ↓
         (1) Verificar disponibilidad
                    ↓
              [CATÁLOGO]  ←──── "Consulta libro"
                    ↓
         "Libro disponible / No disponible"
                    ↓
         (2) Registrar préstamo
              ↓           ↓
        [PRÉSTAMOS]   "Comprobante" → [ALUMNO]
```

---

## 2.1.3. Lista de acontecimientos

### ¿Qué es?

La **lista de acontecimientos** (o lista de eventos) es un inventario de todos los eventos que pueden desencadenar una respuesta del sistema. Es la base para construir el modelo de comportamiento.

Un **acontecimiento** es algo que sucede en el entorno del sistema y que requiere que el sistema haga algo en respuesta.

### Tipos de eventos

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Evento externo** | Una entidad externa hace algo que el sistema debe procesar. | Un alumno solicita un préstamo. |
| **Evento temporal** | El sistema debe hacer algo en un momento determinado o con cierta periodicidad. | Todos los viernes a las 18:00, el sistema genera el listado de libros vencidos. |
| **Evento de control** | Una condición interna llega a cierto estado y desencadena una acción. | Cuando el stock de un producto baja de 5 unidades, el sistema genera una alerta. |

### Ejemplo aplicado: sistema de turnos médicos

| N° | Acontecimiento | Tipo | Respuesta del sistema |
|---|---|---|---|
| 1 | El paciente solicita un turno. | Externo | Verificar disponibilidad y registrar o rechazar el turno. |
| 2 | El médico cancela su agenda del día. | Externo | Notificar a los pacientes con turno ese día y liberar los horarios. |
| 3 | Todos los días a las 8:00 AM. | Temporal | Enviar recordatorio a los pacientes con turno del día. |
| 4 | Un turno lleva más de 30 minutos sin confirmación. | Control | Liberar el turno reservado automáticamente. |
| 5 | La obra social del paciente cambia. | Externo | Actualizar el perfil del paciente y verificar cobertura activa. |

La lista de acontecimientos es una herramienta poderosa porque fuerza al equipo a pensar en *todos* los casos posibles, no solo en el flujo principal. El error clásico es diseñar el sistema pensando solo en el caso ideal (el usuario hace exactamente lo esperado) y olvidar los eventos de cancelación, error, timeout o cambio de condiciones.

---

## 2.2. UML — Lenguaje Unificado de Modelado

### ¿Qué es UML?

El **UML** (*Unified Modeling Language*, Lenguaje Unificado de Modelado) es un lenguaje estándar para visualizar, especificar, construir y documentar sistemas de software.

Fue desarrollado en los años 90 por Grady Booch, Ivar Jacobson y James Rumbaugh (conocidos como "los tres amigos") y es hoy el estándar más usado en la industria para modelar sistemas orientados a objetos.

La palabra *unificado* hace referencia a que integró en un solo lenguaje varias notaciones que existían por separado y que no eran compatibles entre sí.

### ¿Para qué sirve UML?

UML no es un lenguaje de programación. Es un lenguaje de modelado: sirve para *dibujar* un sistema antes de construirlo, para *documentar* cómo está construido, y para *comunicar* ideas entre diseñadores, programadores y clientes.

Piensen en UML como los planos de un edificio: el plano no es el edificio, pero sin el plano es muy difícil construir el edificio correctamente y coordinar a todos los que participan.

---

## 2.2.1. Clasificación de diagramas UML

UML define 14 tipos de diagramas agrupados en dos grandes categorías:

### Diagramas estructurales (¿cómo está construido?)

Muestran la estructura estática del sistema: sus componentes, clases, interfaces y relaciones.

| Diagrama | Descripción |
|---|---|
| **Clases** | Muestra las clases del sistema, sus atributos, métodos y relaciones. |
| **Objetos** | Muestra instancias concretas de clases en un momento dado. |
| **Componentes** | Muestra los módulos de software y sus dependencias. |
| **Despliegue** | Muestra cómo se distribuye el software en hardware físico. |
| **Paquetes** | Organiza los elementos del sistema en grupos. |

### Diagramas de comportamiento (¿cómo se comporta?)

Muestran la dinámica del sistema: cómo interactúan sus partes, qué secuencias de acciones ocurren.

| Diagrama | Descripción |
|---|---|
| **Casos de uso** | Muestra qué puede hacer cada actor con el sistema. |
| **Actividad** | Muestra el flujo de actividades y decisiones dentro de un proceso. |
| **Secuencia** | Muestra la secuencia de mensajes entre objetos a lo largo del tiempo. |
| **Estado** | Muestra los distintos estados de un objeto y las transiciones entre ellos. |
| **Comunicación** | Muestra las interacciones entre objetos con énfasis en las relaciones. |

En este curso, los diagramas más importantes son: **casos de uso**, **clases**, **secuencia** y **actividad**.

---

## 2.2.1.1. Diagrama de Navegabilidad

### ¿Qué es?

El **diagrama de navegabilidad** (o mapa de navegación) muestra las pantallas o vistas de un sistema y cómo el usuario puede moverse entre ellas. Es especialmente útil en el diseño de interfaces web o aplicaciones móviles.

No es un diagrama UML estándar, sino una herramienta de diseño de experiencia de usuario (UX) que complementa los diagramas técnicos.

### Elementos

| Elemento | Descripción |
|---|---|
| **Rectángulo** | Representa una pantalla o vista del sistema. |
| **Flecha** | Indica que desde una pantalla se puede llegar a otra. |
| **Etiqueta en la flecha** | Describe la acción que dispara la navegación (botón, link, evento). |

### Ejemplo: aplicación de reserva de turnos médicos

```
[ Pantalla de inicio ]
        |
   "Iniciar sesión"
        ↓
[ Panel principal ]
    /         \
"Ver turnos"  "Reservar turno"
    ↓               ↓
[ Mis turnos ]  [ Elegir especialidad ]
    |                   ↓
"Cancelar"      [ Elegir médico ]
    ↓                   ↓
[ Confirmación  [ Elegir fecha y hora ]
  de cancelación]       ↓
               [ Confirmar reserva ]
                        ↓
               [ Comprobante de turno ]
```

El diagrama de navegabilidad permite detectar problemas de diseño antes de programar: ¿desde dónde puede volver el usuario si se equivocó? ¿hay pantallas sin salida? ¿el flujo principal es claro y directo?

---

## 2.2.1.2. Diagramas de casos de uso

### ¿Qué es?

Un **diagrama de casos de uso** es un diagrama UML que muestra qué puede hacer cada tipo de usuario con el sistema, representado desde la perspectiva del usuario externo, no de la implementación interna.

Es el diagrama que más se usa para comunicarse con el cliente, porque es visual, intuitivo y no requiere conocimientos técnicos para interpretarlo.

### ¿Qué muestra?

- Quiénes interactúan con el sistema (**actores**).
- Qué pueden hacer con él (**casos de uso**).
- Las relaciones entre actores y casos de uso.

### Elementos básicos

| Elemento | Símbolo | Descripción |
|---|---|---|
| **Actor** | Figura humana (stickman) | Representa un usuario o sistema externo que interactúa con el sistema. |
| **Caso de uso** | Óvalo | Representa una función o tarea que el sistema realiza para un actor. |
| **Sistema** | Rectángulo | El borde que delimita qué está dentro del sistema. |
| **Asociación** | Línea simple | Conecta un actor con los casos de uso que puede ejecutar. |

### Relaciones entre casos de uso

| Relación | Notación | Descripción |
|---|---|---|
| **Include (incluir)** | `<<include>>` | El caso de uso A *siempre* ejecuta el caso de uso B como parte de su flujo. |
| **Extend (extender)** | `<<extend>>` | El caso de uso B *a veces* extiende el comportamiento de A (es opcional o condicional). |
| **Generalización** | Flecha vacía | Un actor o caso de uso hereda el comportamiento de otro más general. |

### Diferencia entre include y extend

**Include**: es obligatorio y siempre ocurre.

> Reservar turno *incluye* Verificar disponibilidad. No se puede reservar sin verificar.

**Extend**: es opcional o condicional.

> Reservar turno *puede extenderse con* Aplicar descuento especial, pero solo si el paciente tiene cierta cobertura.

### Ejemplo: sistema de turnos médicos

```
                    +----------------------------------------+
                    |      SISTEMA DE TURNOS MÉDICOS         |
   [Paciente]       |                                        |
       O────────────── Reservar turno                        |
      /|\           |       |                                |
       |            |   <<include>>                          |
      / \           |       ↓                                |
                    |   Verificar disponibilidad              |
                    |                                        |
       O────────────── Cancelar turno                        |
   [Paciente]       |       ↑                                |
                    |   <<extend>>                           |
                    |   Enviar notificación de cancelación   |
                    |                                        |
   [Médico]         |                                        |
       O────────────── Ver agenda del día                    |
      /|\           |                                        |
       |            |                                        |
      / \           |                                        |
                    |                                        |
[Administrador]     |                                        |
       O────────────── Gestionar usuarios                    |
      /|\           |                                        |
       |   hereda   |                                        |
      / \     ↑     |                                        |
   [Médico]         |                                        |
   [Paciente]       |                                        |
                    +----------------------------------------+
```

---

## 2.2.1.3. Elementos básicos: actores y relaciones

### Actores

Un **actor** en UML no es necesariamente una persona. Es cualquier entidad *externa* al sistema que interactúa con él.

| Tipo de actor | Descripción | Ejemplo |
|---|---|---|
| **Actor primario** | Quien inicia la interacción para obtener un beneficio. | El paciente que reserva un turno. |
| **Actor secundario** | Apoya al sistema para que el actor primario logre su objetivo. | El servicio de email que envía la confirmación. |
| **Actor sistema** | Otro sistema externo con el que el sistema se comunica. | El sistema de la obra social para verificar cobertura. |

### Relaciones entre actores

**Generalización de actores**: cuando un tipo de actor hereda todos los casos de uso de otro actor más general.

```
        [Usuario]
           ↑
    ┌──────┴──────┐
[Médico]     [Paciente]
```

En este ejemplo, tanto Médico como Paciente pueden iniciar sesión y ver su perfil (casos de uso del actor general Usuario), pero además cada uno tiene sus propios casos de uso específicos.

---

## 2.2.1.4. Diagramas de clases

### ¿Qué es?

El **diagrama de clases** es el diagrama UML más importante para el desarrollo de software orientado a objetos. Muestra las clases del sistema, sus atributos, sus métodos y las relaciones entre ellas.

Es el "mapa" de la estructura del sistema: al leerlo, un programador puede entender cómo están organizados los datos y las responsabilidades del código.

---

## 2.2.1.5. Conceptos fundamentales: clases, atributos, métodos y relaciones

### ¿Qué es una clase?

Una **clase** es una plantilla o molde que define las características y comportamientos de un tipo de objeto. Por ejemplo, "Vaca", "Libro", "Usuario", "Factura" son clases.

### Representación de una clase en UML

Una clase se dibuja como un rectángulo dividido en tres secciones:

```
+---------------------------+
|        NombreClase        |  ← Nombre
+---------------------------+
| - atributo1: tipo         |  ← Atributos
| - atributo2: tipo         |
| + atributo3: tipo         |
+---------------------------+
| + metodo1(): tipo         |  ← Métodos
| + metodo2(param): tipo    |
| - metodo3(): void         |
+---------------------------+
```

La visibilidad de atributos y métodos se indica con:
- `+` público: accesible desde cualquier parte.
- `-` privado: accesible solo dentro de la clase.
- `#` protegido: accesible dentro de la clase y sus subclases.

### Ejemplo de clase

```
+-------------------------------+
|           Libro               |
+-------------------------------+
| - isbn: String                |
| - titulo: String              |
| - autor: String               |
| - cantidadEjemplares: Integer |
| - disponible: Boolean         |
+-------------------------------+
| + registrar(): void           |
| + verificarDisponibilidad():  |
|   Boolean                     |
| + getISBN(): String           |
+-------------------------------+
```

### Relaciones entre clases

Las relaciones entre clases son fundamentales para entender cómo interactúan los objetos del sistema.

#### Herencia (generalización)

La **herencia** expresa que una clase *es un tipo de* otra clase. La clase hija hereda los atributos y métodos de la clase padre.

**Notación**: flecha con punta vacía (triángulo), apuntando hacia la clase padre.

```
           +-----------+
           |  Usuario  |
           +-----------+
           | - nombre  |
           | - email   |
           +-----------+
           | + login() |
           +-----------+
                 ↑
        ┌────────┴────────┐
        │                 │
  +----------+      +----------+
  |  Médico  |      | Paciente |
  +----------+      +----------+
  | - matric.|      | - obras. |
  +----------+      +----------+
  | + verAg.)|      | + resTV() |
  +----------+      +----------+
```

Médico y Paciente heredan nombre, email y login() de Usuario. Cada uno agrega sus propios atributos y métodos.

**Regla mnemotécnica**: herencia = "ES UN". Un Médico ES UN Usuario. Un Perro ES UN Animal. Un Cuadrado ES UN Polígono.

---

#### Asociación

La **asociación** indica que dos clases tienen una relación: los objetos de una clase conocen o usan a los objetos de la otra.

**Notación**: línea simple, con multiplicidades en los extremos.

```
+----------+          +---------+
| Paciente |----------| Médico  |
+----------+   0..*   +---------+
                1
```

*Un Médico atiende a 0 o más Pacientes. Un Paciente tiene 1 Médico tratante.*

**Multiplicidades comunes:**

| Notación | Significado |
|---|---|
| `1` | Exactamente uno |
| `0..1` | Cero o uno (opcional) |
| `1..*` | Uno o más |
| `0..*` o `*` | Cero o más |
| `n..m` | Entre n y m |

---

#### Agregación

La **agregación** expresa que una clase *contiene* o *agrupa* objetos de otra clase, pero los objetos contenidos pueden existir independientemente del contenedor.

**Notación**: línea con rombo vacío en el lado del contenedor.

```
+----------+        +---------+
|  Equipo  |◇───────| Jugador |
+----------+        +---------+
```

*Un Equipo tiene Jugadores, pero si el equipo se disuelve, los Jugadores siguen existiendo (pueden ir a otro equipo).*

**Regla mnemotécnica**: agregación = "TIENE UN" con vida independiente.

---

#### Composición

La **composición** es una agregación más fuerte: los objetos contenidos no pueden existir sin el contenedor. Si el contenedor se destruye, los contenidos también.

**Notación**: línea con rombo relleno (sólido) en el lado del contenedor.

```
+---------+        +----------+
|  Casa   |◆───────| Habitaci.|
+---------+        +----------+
```

*Una Casa tiene Habitaciones, pero si la Casa se demuele, las Habitaciones dejan de existir como tales.*

**Regla mnemotécnica**: composición = "TIENE UN" con vida dependiente.

---

#### Tabla comparativa de relaciones

| Relación | Pregunta | Ejemplo | Notación |
|---|---|---|---|
| **Herencia** | ¿ES UN tipo de? | Médico ES UN Usuario | Flecha con triángulo vacío |
| **Asociación** | ¿CONOCE A / USA A? | Paciente tiene un Médico asignado | Línea simple |
| **Agregación** | ¿TIENE UN (independiente)? | Equipo tiene Jugadores | Rombo vacío |
| **Composición** | ¿TIENE UN (dependiente)? | Casa tiene Habitaciones | Rombo relleno |

### Ejemplo completo: sistema de biblioteca

```
+-------------+       +------------------+       +-----------+
|   Socio     |       |    Prestamo      |       |   Libro   |
+-------------+       +------------------+       +-----------+
| - nroDoc    |1    *,| - fechaInicio    |*     1| - isbn    |
| - nombre    |───────| - fechaDevol     |───────| - titulo  |
| - email     |       | - estado         |       | - autor   |
+-------------+       +------------------+       +-----------+
| + registrar |       | + registrar()    |       | + buscar()|
| + buscar()  |       | + cerrar()       |       | + alta()  |
+-------------+       | + estaVencido()  |       +-----------+
                      +------------------+
```

---

## 2.2.1.6. Diagramas de secuencia

### ¿Qué es?

El **diagrama de secuencia** muestra la interacción entre objetos o componentes del sistema a lo largo del tiempo, enfocándose en el **orden** en que se producen los mensajes.

Es especialmente útil para modelar el flujo de un caso de uso concreto: qué pasa, paso a paso, cuando un usuario ejecuta una función del sistema.

---

## 2.2.1.6.1. Elementos y notaciones: objetos, mensajes, activaciones y líneas de vida

### Líneas de vida

Cada participante en el diagrama (objeto, componente, actor) se representa con una **línea de vida**: su nombre en un rectángulo en la parte superior y una línea vertical discontinua hacia abajo que representa su existencia a lo largo del tiempo.

```
:Usuario        :Sistema        :BaseDatos
   |                |               |
   |                |               |
   |                |               |
   |                |               |
```

El tiempo avanza hacia abajo: lo que está más arriba ocurre antes.

### Mensajes

Los **mensajes** son las comunicaciones entre objetos, representadas por flechas horizontales entre las líneas de vida.

| Tipo de mensaje | Notación | Descripción |
|---|---|---|
| **Síncrono** | Flecha con punta rellena → | El emisor espera la respuesta antes de continuar. El más común. |
| **Asíncrono** | Flecha con punta abierta → | El emisor no espera respuesta. Continúa ejecutando. |
| **Retorno** | Flecha discontinua ← | Respuesta a un mensaje síncrono. |
| **Autocall** | Flecha que sale y vuelve al mismo objeto | Un objeto se envía un mensaje a sí mismo (llama a otro de sus métodos). |

### Activaciones

Una **activación** (o foco de control) es un rectángulo delgado sobre la línea de vida que indica el período durante el cual ese objeto está ejecutando algo o esperando una respuesta.

### Ejemplo: reservar turno médico

```
:Paciente      :SistemaWeb      :CtrlTurnos      :BaseDatos
    |                |                |               |
    |──reservarTurno(fecha, médico)──→|               |
    |                |                |               |
    |                |──verificarDisp(fecha, médico)──→
    |                |                |               |
    |                |                |←── disponible ─
    |                |                |               |
    |                |──registrarTurno(datos)─────────→
    |                |                |               |
    |                |                |←── turnoId ───
    |                |                |               |
    |←─ confirmación(turnoId) ────────|               |
    |                |                |               |
```

Este diagrama muestra claramente que:
1. El paciente inicia la reserva.
2. El sistema verifica disponibilidad.
3. Si hay disponibilidad, registra el turno.
4. Confirma al paciente con el ID del turno.

Todo esto podría describirse en texto, pero el diagrama de secuencia lo hace mucho más fácil de leer y de verificar con el cliente.

### ¿Para qué se usa?

- Para modelar el flujo interno de un caso de uso importante.
- Para diseñar la API de un sistema antes de programarla.
- Para documentar un proceso complejo que involucra múltiples componentes.
- Para encontrar inconsistencias en el diseño: si un mensaje llega a un objeto que no debería existir en ese momento, hay un error de diseño.

---

## 2.2.1.7. Diagramas de actividad

### ¿Qué es?

El **diagrama de actividad** es el diagrama UML para representar flujos de trabajo y procesos. Muestra la secuencia de actividades, las decisiones, los caminos paralelos y los puntos de inicio y fin.

Es similar a un diagrama de flujo tradicional, pero con notación UML más expresiva y con soporte para actividades concurrentes (cosas que pasan al mismo tiempo).

---

## 2.2.1.7.1. Actividades, decisiones, flujos de control y objetos

### Elementos principales

| Elemento | Símbolo | Descripción |
|---|---|---|
| **Nodo inicial** | Círculo relleno ● | Punto de inicio del flujo. Solo hay uno. |
| **Nodo final** | Círculo con punto dentro ⊙ | Punto de fin del flujo. Puede haber varios. |
| **Actividad** | Rectángulo con esquinas redondeadas | Una acción o tarea dentro del proceso. |
| **Decisión** | Rombo ◇ | Un punto donde el flujo se bifurca según una condición. |
| **Fusión** | Rombo ◇ | Une los caminos divergentes de una decisión. |
| **Fork (bifurcación)** | Barra horizontal gruesa | Divide el flujo en caminos paralelos. |
| **Join (unión)** | Barra horizontal gruesa | Une caminos paralelos antes de continuar. |
| **Flujo de control** | Flecha → | Conecta los elementos y define el orden. |
| **Guardia** | `[condición]` sobre la flecha | Condición que debe cumplirse para seguir por ese camino. |

### Ejemplo 1: proceso de reserva de turno médico

```
         ●
         |
         ▼
  [Ingresar fecha y médico]
         |
         ▼
  ¿Hay disponibilidad? ◇
   [Sí] /     \ [No]
       /         \
      ▼            ▼
[Registrar      [Mostrar mensaje
 el turno]       "Sin disponibilidad"]
      |                 |
      ▼                 ▼
[Enviar         [Ofrecer lista
 confirmación]   de espera]
      |                 |
      └────────┬─────────┘
               ▼
              ⊙
```

### Ejemplo 2: proceso con actividades paralelas (preparar pedido en una tienda)

```
         ●
         |
         ▼
  [Recibir pedido]
         |
         ▼
  ══════════════════  ← Fork (comienzan al mismo tiempo)
  |                |
  ▼                ▼
[Preparar       [Emitir
 productos]      factura]
  |                |
  ▼                ▼
[Embalar        [Enviar
 paquete]        factura por email]
  |                |
  ══════════════════  ← Join (ambos deben terminar antes de continuar)
         |
         ▼
  [Enviar paquete al cliente]
         |
         ▼
        ⊙
```

El Fork y el Join son únicos en los diagramas de actividad: permiten modelar que dos cosas suceden en paralelo (como preparar el pedido y emitir la factura al mismo tiempo) y que el flujo solo puede continuar cuando ambas terminan.

### Swimlanes (carriles)

Los diagramas de actividad pueden dividirse en **carriles** (*swimlanes*), que asignan cada actividad a un responsable o componente específico. Esto hace visible quién hace qué dentro del proceso.

```
|  PACIENTE  |  SISTEMA WEB  |  MÉDICO  |
|────────────|───────────────|──────────|
|     ●      |               |          |
|     ↓      |               |          |
| Solicit.   |               |          |
| turno ─────→  Verifica     |          |
|            |  disponib.    |          |
|            |      ↓        |          |
|            | [Disponible]  |          |
|            |  Registra ────→  Recibe  |
|            |  turno        |  agenda  |
|  Recibe ←─ | Confirma      |          |
|  confirm.  |               |          |
|     ↓      |               |          |
|     ⊙      |               |          |
```

Los swimlanes convierten el diagrama de actividad en una herramienta de análisis de procesos organizacionales: permiten ver si hay cuellos de botella, si algún actor tiene demasiadas responsabilidades o si hay actividades que deberían estar en otro carril.

### ¿Cuándo usar cada diagrama?

| Situación | Diagrama recomendado |
|---|---|
| Quiero mostrar qué puede hacer cada usuario | Casos de uso |
| Quiero mostrar la estructura del código | Clases |
| Quiero mostrar el flujo de mensajes entre objetos | Secuencia |
| Quiero mostrar el flujo de un proceso de negocio | Actividad |
| Quiero mostrar las pantallas y la navegación | Navegabilidad |
| Quiero mostrar el contexto del sistema | Diagrama de contexto (DFD nivel 0) |

---

## Síntesis de los diagramas UML estudiados

| Diagrama | Responde a... | Público objetivo |
|---|---|---|
| **Casos de uso** | ¿Qué puede hacer cada usuario? | Cliente, analistas, todo el equipo |
| **Clases** | ¿Cómo está estructurado el código? | Desarrolladores, arquitectos |
| **Secuencia** | ¿Cómo interactúan los objetos paso a paso? | Desarrolladores, diseñadores |
| **Actividad** | ¿Cómo fluye el proceso? | Analistas, cliente, desarrolladores |
| **Navegabilidad** | ¿Cómo se mueve el usuario entre pantallas? | Diseñadores UX, cliente |

---

## Tabla resumen general de la unidad

| Concepto | Pregunta que responde | Herramienta principal |
|---|---|---|
| Requerimiento | ¿Qué necesita el sistema? | IEEE 830 / ERS |
| Requerimiento funcional | ¿Qué debe hacer? | Lista de RF con código |
| Requerimiento no funcional | ¿Cómo debe ser? | Lista de RNF con categoría |
| Ciclo de vida | ¿Cómo evolucionan los requerimientos? | Elicitación → Especificación → Validación → Cambio |
| Stakeholders | ¿Quiénes están involucrados? | Mapa de stakeholders |
| Cuestionario | ¿Cómo relevar a muchos usuarios? | Preguntas abiertas y cerradas |
| Entrevista | ¿Cómo relevar en profundidad? | Guía de entrevista semiestructurada |
| Revisión de registros | ¿Qué muestra la realidad actual? | Análisis de documentos existentes |
| Factibilidad operativa | ¿Será usado? | Análisis de usuarios y procesos |
| Factibilidad técnica | ¿Puede construirse? | Evaluación de tecnología e infraestructura |
| Factibilidad económica | ¿Justifica la inversión? | Cálculo de costo vs. beneficio |
| Factibilidad legal | ¿Es legal? | Revisión de normativas aplicables |
| Árbol de decisión | ¿Cómo se evalúan condiciones en secuencia? | Diagrama de árbol |
| Tabla de decisión | ¿Cómo se evalúan condiciones simultáneas? | Matriz condición/acción |
| Modelo esencial | ¿Qué hace el sistema sin hablar de tecnología? | DFD + Lista de eventos |
| Casos de uso | ¿Qué puede hacer cada actor? | Diagrama UML de casos de uso |
| Clases | ¿Cómo está estructurado el sistema? | Diagrama UML de clases |
| Secuencia | ¿Qué mensajes se intercambian y en qué orden? | Diagrama UML de secuencia |
| Actividad | ¿Cómo fluye un proceso paso a paso? | Diagrama UML de actividad |

---

*Documento preparado para la asignatura Ingeniería de Software — 3.º año Bachillerato Tecnológico — UTU 2026*
