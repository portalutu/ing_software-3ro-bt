# TamboTrace
## Presentación del proyecto — Nodo San José

**Institución:** UTU — Bachillerato Tecnológico en Informática  
**Grupo:** 3.º año de Informática  
**Proyecto:** Sistema de trazabilidad para producción lechera  
**Nombre del producto:** TamboTrace  

---

## Quiénes somos

Somos el grupo [....] de tercero de Informática del bachillerato tecnológico del Nodo San José.

Este año elegimos hacer algo diferente para nuestro proyecto de egreso: en lugar de construir un sistema ficticio o resolver un caso inventado, fuimos a buscar un problema real, en una empresa real, y lo resolvimos de verdad.

Así nació TamboTrace.

---

## El problema que encontramos

Nuestro cliente es el dueño de un establecimiento lechero mediano ubicado en el litoral uruguayo, con alrededor de 280 vacas en producción.

Cuando lo conocimos, la situación era esta: el tambo funcionaba, producía, vendía. Pero toda la información que generaba cada día —qué vacas se ordeñaron, en qué turno, a qué tanque fue la leche, qué resultados de calidad tuvo ese lote— vivía repartida en cuadernos, planillas de papel y archivos sueltos que no hablaban entre sí.

El problema concreto aparecía cuando alguien le preguntaba al establecimiento algo tan simple como: *"¿de qué vacas salió el lote del 12 de mayo, turno mañana, tanque 1?"*

Responder eso podía llevar horas. O directamente no era posible hacerlo con certeza.

Y eso tenía consecuencias reales. Si el tambo quería avanzar hacia mercados más exigentes o hacia la exportación, necesitaba poder demostrar trazabilidad: saber exactamente qué animales produjeron cada lote, en qué condiciones, con qué controles de calidad. Sin esa información organizada y confiable, esa puerta estaba cerrada.

---

## Cómo analizamos el problema

Antes de escribir una sola línea de código, nos sentamos con el cliente a entender cómo trabajaba de verdad.

Eso nos obligó a hacernos preguntas que al principio no eran obvias:

- ¿Cómo se identifica cada vaca? ¿Por caravana, por nombre, por chip?
- ¿Qué significa exactamente un "lote de leche" para este cliente?
- ¿Todos los datos del lote se registran en el momento del ordeñe, o algunos llegan después desde el laboratorio?
- ¿Quiénes van a usar el sistema? ¿Desde qué dispositivos?
- ¿Hay internet estable en la sala de ordeñe?

Cada respuesta nos cambió algo del diseño. Por ejemplo: descubrimos que los resultados de laboratorio (grasa, proteína, células somáticas) llegan días después del ordeñe, así que el sistema tenía que permitir completar esos datos más tarde sin bloquear el flujo de trabajo. O que en la sala de ordeñe la conexión a internet era irregular, así que las pantallas de carga tenían que ser simples y rápidas, sin depender de consultas pesadas.

De la entrevista también surgió algo importante: el cliente no quería un sistema que dependiera de una sola persona. Si el encargado del tambo faltaba, el operario tenía que poder registrar el ordeñe igual. Eso nos llevó a diseñar roles diferenciados: administrador, encargado, operario y veterinario, cada uno con acceso solo a lo que necesita.

Con toda esa información levantada, definimos los requerimientos del sistema. En total identificamos **15 requerimientos funcionales** y **12 requerimientos no funcionales**, que cubrían desde el comportamiento esperado del sistema hasta las condiciones de rendimiento, seguridad y disponibilidad.

---

## El producto que construimos

Diseñamos y desarrollamos **TamboTrace**: un sistema web de trazabilidad para producción lechera.

La idea central es simple: que el tambo pueda reconstruir la historia completa de cualquier lote de leche, desde las vacas que participaron hasta los resultados de calidad, en segundos.

### ¿Qué hace TamboTrace?

**Gestión de animales**  
Cada vaca se registra con su número de caravana, nombre opcional, raza, fecha de nacimiento y estado: en producción, en secado, en tratamiento o de baja. Esto permite saber en todo momento qué animales están activos y cuáles fueron excluidos de un ordeñe, y por qué.

**Registro de ordeñes**  
Cada ordeñe se documenta con fecha, turno, tanque, responsable y las vacas que participaron. En lugar de tener que seleccionar las vacas una por una, el sistema permite agregar automáticamente todas las vacas en producción y luego excluir las que corresponda, indicando el motivo. Eso fue una mejora que surgió del propio cliente al ver el sistema en funcionamiento.

**Gestión de lotes de leche**  
A partir de un ordeñe se genera un lote de leche. El lote tiene sus propias propiedades: litros estimados, temperatura, tanque de destino, y los resultados de laboratorio que pueden cargarse más tarde —grasa, proteína, células somáticas, resultado de antibióticos. El lote tiene estados (borrador, pendiente de análisis, completo, cerrado) para que siempre quede claro si la información está completa o no.

**Cierre y protección de lotes**  
Un lote cerrado no puede modificarse sin autorización. El sistema tampoco permite cerrarlo si faltan datos obligatorios. Eso fue otra mejora que pedió el cliente en el camino, porque necesitaba garantías de integridad para los reportes.

**Trazabilidad y reportes**  
Cualquier usuario con permiso puede consultar un lote y ver en una sola pantalla: fecha, turno, tanque, responsable, vacas incluidas, vacas excluidas con motivo, y todas las propiedades registradas. Ese reporte es exportable en PDF y está pensado para presentarse en auditorías o ante clientes industriales.

**Auditoría básica**  
El sistema registra quién hizo qué y cuándo en los cambios críticos: modificaciones a lotes, cambios de estado de animales, acciones sobre usuarios. Eso da trazabilidad no solo del producto, sino del proceso.

### Tecnología y arquitectura

El sistema es una **aplicación web responsive**: funciona desde computadora, tablet o celular, con cualquier navegador, sin necesidad de instalar nada. Está desplegado en hosting externo porque el establecimiento no tiene servidor propio.

El acceso está protegido por autenticación con usuario y contraseña, y cada rol tiene permisos específicos sobre lo que puede ver y hacer.

---

## Cómo trabajamos con el cliente

Una de las decisiones más importantes que tomamos fue elegir la metodología con la que íbamos a trabajar. Decidimos usar **Scrum**, una metodología ágil que organiza el desarrollo en ciclos cortos llamados sprints, con entregas parciales al final de cada uno.

Trabajamos en **cuatro sprints de dos semanas**, y al final de cada sprint le mostrábamos al cliente lo que habíamos construido. Eso no era solo una formalidad: en dos de los cuatro sprints, el cliente vio el sistema funcionando y nos pidió cambios que no habíamos previsto.

En el sprint 2, después de ver cómo seleccionaba las vacas participantes de un ordeñe, nos dijo que hacerlo vaca por vaca era demasiado lento para la operación real. Tenía razón. Lo que técnicamente funcionaba, en la práctica no servía. Ajustamos el diseño y agregamos la selección automática por estado.

En el sprint 3, al ver cómo se cargaban los datos de calidad del lote, nos pidió que quedara claro si un lote tenía información pendiente del laboratorio. Eso derivó en el sistema de estados de lote que hoy es una de las funcionalidades más valoradas.

Esas correcciones no fueron errores del proyecto: son exactamente para lo que sirve trabajar en ciclos cortos. Cada sprint nos permitió ajustar el rumbo sin tirar nada.

El cliente participó activamente en cada revisión. Al cierre del proyecto nos dijo que el sistema refleja cómo trabaja el tambo de verdad, no cómo alguien desde afuera imaginó que trabajaba.

---

## Qué logramos

Al cierre del proyecto, TamboTrace cubre:

| Área | Estado |
|---|---|
| Usuarios y roles | Entregado |
| Registro y búsqueda de vacas | Entregado |
| Estados de animales | Entregado |
| Registro de ordeñes con selección rápida | Entregado |
| Exclusión de animales con motivo | Entregado |
| Creación de lotes desde ordeñes | Entregado |
| Propiedades de calidad del lote | Entregado |
| Estados de lote | Entregado |
| Cierre de lote con validación | Entregado |
| Reporte de trazabilidad por lote | Entregado |
| Exportación en PDF | Entregado |
| Historial de cambios críticos | Entregado |
| Capacitación básica y guía de uso | Entregado |
| Integración con laboratorio | Segunda etapa |
| Módulo veterinario completo | Segunda etapa |
| Sincronización offline | Segunda etapa |

El establecimiento ya tiene el sistema funcionando. No es un prototipo ni una demo: es una herramienta que el encargado del tambo usa para registrar los ordeñes diarios y que administración usa para consultar trazabilidad.

---

## Por qué este proyecto importa más allá del aula

TamboTrace no es un trabajo de clase. Es un producto real, para un cliente real, que lo usa de verdad.

Para nosotros, eso marca una diferencia importante. Durante el proyecto tuvimos que tomar decisiones reales: priorizar funcionalidades cuando el tiempo no alcanzaba para todo, negociar alcance sin dejar de entregarle valor al cliente, y defender decisiones técnicas con argumentos concretos.

Aprendimos que desarrollar software no es solo programar. Es entender un negocio, hacer las preguntas correctas, organizar el trabajo, comunicarse con el cliente, y construir algo que sirva de verdad en el lugar donde va a usarse.

Este proyecto es también una apuesta de nuestra institución: la idea de que los estudiantes pueden construir productos reales para problemas reales de la comunidad, generando valor ahora y dejando algo que otros puedan continuar.

TamboTrace tiene continuidad. Las funcionalidades que quedaron fuera de esta primera versión están documentadas y priorizadas. El sistema está desplegado, el cliente está capacitado, y el código queda disponible para que el proyecto pueda seguir creciendo.

Eso, para nosotros, es lo que significa hacer software con propósito.
