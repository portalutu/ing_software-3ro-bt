# Historias de usuario

Las historias de usuario son una forma simple y práctica de expresar necesidades del sistema desde la perspectiva de quien obtiene valor. Se usan mucho en enfoques ágiles porque ayudan a conversar sobre el producto, priorizar funcionalidades y organizar el backlog de manera comprensible.

Una historia de usuario no describe todo el detalle técnico de una solución. Su función es representar una necesidad que luego será conversada, refinada y validada con criterios de aceptación.

## Estructura básica

Una estructura muy usada es:

`Como [rol], quiero [necesidad], para [beneficio].`

### Significado de cada parte

- `Como [rol]`: indica quién necesita la funcionalidad.
- `Quiero [necesidad]`: describe qué espera poder hacer.
- `Para [beneficio]`: explica por qué eso aporta valor.

## Ejemplos simples

- Como recepcionista, quiero registrar pacientes, para mantener ordenada la información de la clínica.
- Como alumno, quiero inscribirme a un curso, para reservar mi lugar.
- Como supervisor, quiero recibir alertas de vencimientos, para anticipar mantenimientos.

## ¿Por qué son útiles?

Las historias de usuario ayudan a:

- Pensar el sistema desde el valor para el usuario.
- Evitar descripciones demasiado técnicas al comienzo.
- Priorizar qué construir primero.
- Facilitar conversaciones entre cliente y equipo.
- Relacionar requerimientos con backlog y sprint planning.

## Qué no son las historias de usuario

No son:

- Un diseño técnico completo.
- Un caso de uso detallado.
- Una lista de tareas de programación.
- Una garantía de que ya está todo definido.

La historia de usuario es un punto de partida para conversar y profundizar.

## Buenas prácticas para redactarlas

- Escribirlas en lenguaje claro y simple.
- Identificar bien el rol que recibe valor.
- Expresar una necesidad concreta.
- Explicar el beneficio de negocio o de uso.
- Evitar juntar muchas funciones en una misma historia.
- Asegurarse de que puedan probarse luego.

## Criterios de aceptación

Cada historia de usuario debería acompañarse por criterios de aceptación. Estos indican qué condiciones deben cumplirse para considerar que la historia está correctamente implementada.

### Ejemplo

Historia de usuario:

`Como recepcionista, quiero agendar turnos, para organizar la atención de los pacientes.`

Criterios de aceptación:

- El turno debe asociarse a un paciente y a un odontólogo.
- El sistema debe guardar fecha, hora y duración.
- No debe permitir superposición de turnos para el mismo profesional.

## Características de una buena historia

Una guía muy conocida es el criterio INVEST. Una buena historia debería ser:

- Independent: independiente en lo posible.
- Negotiable: conversable, no cerrada de forma rígida desde el inicio.
- Valuable: valiosa para el usuario o el negocio.
- Estimable: posible de estimar por el equipo.
- Small: lo suficientemente pequeña para planificarla.
- Testable: verificable mediante pruebas o criterios claros.

## Ejemplos aplicados a los casos trabajados

### Caso 1: Clínica odontológica

- Como recepcionista, quiero reprogramar turnos, para mantener actualizada la agenda.
- Como odontólogo, quiero registrar tratamientos realizados, para dejar constancia de la atención brindada.

### Caso 2: Academia de idiomas

- Como alumno, quiero ver los cursos disponibles, para elegir el que mejor se adapte a mi horario.
- Como docente, quiero cargar asistencias, para llevar el seguimiento de mis estudiantes.

### Caso 3: Gestión de flota

- Como supervisor, quiero generar órdenes de trabajo, para organizar el mantenimiento de los vehículos.
- Como gerencia, quiero consultar indicadores operativos, para tomar decisiones basadas en datos.

## Errores comunes al redactar historias

- Escribir historias demasiado grandes.
- No identificar claramente el rol.
- Redactarlas como tareas técnicas.
- No explicar el beneficio.
- Mezclar varias funcionalidades en una sola historia.
- No definir criterios de aceptación.

## Ejemplo de historia mal redactada

`Implementar módulo de pacientes con base de datos y API.`

### ¿Qué problema tiene?

- Está escrita desde la mirada técnica del desarrollo.
- No muestra quién necesita la funcionalidad.
- No explica el valor que genera.

## Versión mejorada

`Como recepcionista, quiero registrar pacientes nuevos, para mantener organizada su información básica.`

## Relación entre historias, tareas y backlog

Es importante distinguir estos conceptos:

- Historia de usuario: expresa una necesidad con valor para el usuario.
- Tarea: describe trabajo técnico o funcional que el equipo debe hacer para completar una historia.
- Backlog: lista priorizada que contiene historias, tareas técnicas, mejoras y otros elementos.

### Ejemplo

Historia de usuario:

`Como alumno, quiero inscribirme a un curso, para reservar mi lugar.`

Tareas posibles:

- Diseñar formulario de inscripción.
- Validar horarios superpuestos.
- Guardar inscripción en base de datos.
- Mostrar mensaje de confirmación.

## Conclusión

Las historias de usuario son una herramienta central para pasar de una necesidad del cliente a un trabajo organizado y priorizable. Bien redactadas, permiten comprender el valor de cada funcionalidad, conversar mejor con el cliente y construir un backlog claro.

Para los estudiantes, aprender a redactarlas bien es fundamental, porque conecta el relevamiento de requerimientos con la planificación real del desarrollo.
