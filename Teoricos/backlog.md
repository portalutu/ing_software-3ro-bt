# Del relevamiento al backlog

Luego de entrevistar al cliente y detectar requerimientos, el siguiente paso es transformar esa información en elementos concretos de trabajo para el equipo. En metodologías ágiles, esto suele hacerse mediante historias de usuario, criterios de aceptación y una lista priorizada de trabajo llamada backlog.

Este documento muestra cómo pasar de los requerimientos obtenidos en una entrevista a:

- Historias de usuario redactadas desde la mirada del usuario o del negocio.
- Criterios de aceptación que permitan verificar cada necesidad.
- Un backlog inicial priorizado para comenzar el desarrollo.

## ¿Qué es una historia de usuario?

Una historia de usuario es una forma breve de expresar una necesidad del sistema desde el punto de vista de quien obtiene valor. Una estructura común es:

`Como [rol], quiero [necesidad], para [beneficio].`

Las historias de usuario no reemplazan el análisis detallado, pero ayudan a ordenar el trabajo, conversar con el cliente y priorizar funcionalidades.

## ¿Qué es el backlog?

El backlog es una lista priorizada de trabajo pendiente del producto. Puede incluir historias de usuario, tareas técnicas, mejoras, errores y criterios de calidad. No es una lista cerrada: evoluciona a medida que el equipo aprende más sobre el producto y el cliente ajusta sus prioridades.

## Caso 1: Clínica odontológica

### Historias de usuario derivadas

1. Como recepcionista, quiero registrar nuevos pacientes, para mantener organizada su información básica.
   Criterios de aceptación:
   - Se pueden cargar nombre, documento, teléfono, fecha de nacimiento y dirección.
   - El sistema valida que el documento no esté repetido.

2. Como recepcionista, quiero agendar turnos, para organizar la atención de los pacientes.
   Criterios de aceptación:
   - El turno se asigna a un odontólogo, fecha, hora y duración.
   - El sistema evita superposición de turnos para un mismo profesional.

3. Como recepcionista, quiero reprogramar o cancelar turnos, para mantener actualizada la agenda.
   Criterios de aceptación:
   - Un turno existente puede cambiarse de fecha u hora.
   - La cancelación queda registrada en el sistema.

4. Como odontólogo, quiero consultar la ficha del paciente, para conocer sus antecedentes y tratamientos previos.
   Criterios de aceptación:
   - El odontólogo puede acceder al historial clínico completo.
   - La recepcionista no puede editar el historial clínico.

5. Como odontólogo, quiero registrar el tratamiento realizado, para dejar constancia de la atención brindada.
   Criterios de aceptación:
   - Se puede asociar la atención a una cita y a un paciente.
   - El registro guarda fecha, profesional y observaciones.

6. Como administrador, quiero registrar pagos y deudas, para controlar la situación económica de la clínica.
   Criterios de aceptación:
   - El sistema permite registrar pagos en efectivo, transferencia y tarjeta.
   - Se pueden registrar pagos parciales.

7. Como administrador, quiero consultar reportes de turnos y cobranzas, para tomar decisiones de gestión.
   Criterios de aceptación:
   - Se puede ver el listado de turnos del día.
   - Se pueden consultar pagos cobrados y deudas pendientes.

8. Como clínica, queremos enviar recordatorios automáticos, para reducir ausencias a las consultas.
   Criterios de aceptación:
   - El sistema permite programar avisos el día anterior.
   - El recordatorio puede enviarse por correo o WhatsApp.

### Observación didáctica

En este caso, las historias de usuario nacen a partir de una entrevista muy exploratoria. El equipo debió convertir necesidades generales en funcionalidades concretas, separando claramente quién necesita cada función y para qué.

## Caso 2: Academia de idiomas

### Historias de usuario derivadas

1. Como alumno, quiero registrarme en la plataforma, para poder inscribirme a cursos.
   Criterios de aceptación:
   - El alumno puede crear una cuenta con sus datos básicos.
   - El sistema requiere autenticación para acceder al área personal.

2. Como alumno, quiero inscribirme a un curso, para reservar mi lugar en la propuesta elegida.
   Criterios de aceptación:
   - El sistema muestra cursos con idioma, nivel, horario y modalidad.
   - No permite inscribirse en cursos con horarios superpuestos.

3. Como administración, quiero confirmar pagos, para validar la inscripción definitiva del alumno.
   Criterios de aceptación:
   - La inscripción queda en estado pendiente hasta confirmar el pago.
   - El sistema registra medio de pago y fecha.

4. Como docente, quiero cargar asistencia y calificaciones, para llevar el seguimiento académico del grupo.
   Criterios de aceptación:
   - Se puede registrar asistencia por clase.
   - Se pueden cargar notas y observaciones por alumno.

5. Como docente, quiero publicar materiales y tareas, para que los alumnos accedan al contenido del curso.
   Criterios de aceptación:
   - Se pueden adjuntar archivos y enlaces.
   - Los alumnos del curso pueden visualizar el material correspondiente.

6. Como coordinación académica, quiero crear grupos y asignar docentes, para organizar la oferta educativa.
   Criterios de aceptación:
   - Se puede crear un grupo indicando curso, horario y modalidad.
   - Se puede asignar un docente responsable.

7. Como coordinación académica, quiero consultar reportes académicos, para evaluar asistencia y rendimiento.
   Criterios de aceptación:
   - El sistema informa porcentaje de asistencia por grupo.
   - El sistema muestra rendimiento académico por curso.

8. Como administración, quiero identificar alumnos con pagos pendientes, para hacer seguimiento de morosidad.
   Criterios de aceptación:
   - El sistema lista inscripciones impagas o parcialmente pagas.
   - Se pueden emitir comprobantes de pago registrados.

9. Como academia, queremos enviar notificaciones automáticas, para mantener informados a alumnos y docentes.
   Criterios de aceptación:
   - Se envía confirmación al registrar una inscripción.
   - Se pueden emitir recordatorios de inicio de curso y alertas de falta de pago.

### Observación didáctica

Aquí el cliente ya describía muchas funciones, por lo que el trabajo del equipo consistió en completar reglas de negocio y validar condiciones importantes, como superposición horaria, estados de inscripción y manejo de pagos.

## Caso 3: Gestión de mantenimiento de flota

### Historias de usuario derivadas

1. Como supervisor de flota, quiero registrar vehículos y sus planes de mantenimiento, para controlar el estado de cada unidad.
   Criterios de aceptación:
   - Se pueden registrar datos del vehículo y su plan preventivo.
   - El plan puede definirse por fecha, kilometraje u horas de uso.

2. Como supervisor de flota, quiero generar órdenes de trabajo, para organizar mantenimientos preventivos y correctivos.
   Criterios de aceptación:
   - La orden puede incluir una o varias tareas.
   - La orden queda asociada a un vehículo y a un taller.

3. Como personal de taller, quiero registrar tareas realizadas, repuestos y horas de trabajo, para documentar correctamente cada intervención.
   Criterios de aceptación:
   - Se pueden cargar tareas, repuestos y horas trabajadas.
   - La información queda vinculada a una orden de trabajo.

4. Como supervisor, quiero recibir alertas de vencimientos, para anticipar mantenimientos y renovaciones.
   Criterios de aceptación:
   - El sistema alerta por vencimiento de documentos, servicios y neumáticos.
   - La anticipación de la alerta es configurable.

5. Como gerencia, quiero consultar indicadores operativos, para tomar decisiones basadas en datos.
   Criterios de aceptación:
   - El sistema muestra costos por unidad y mantenimientos vencidos.
   - El sistema informa vehículos fuera de servicio y tiempo promedio de reparación.

6. Como administrador, quiero definir aprobaciones para trabajos costosos, para controlar gastos extraordinarios.
   Criterios de aceptación:
   - Una orden puede requerir aprobación si supera un monto definido.
   - El sistema registra el estado de aprobación.

7. Como supervisor o auditor, quiero ver el historial de cambios, para asegurar trazabilidad completa.
   Criterios de aceptación:
   - El sistema registra usuario, fecha, dato modificado y valor anterior.
   - La auditoría puede consultarse posteriormente.

8. Como usuario operativo, quiero usar el sistema desde el celular, para registrar y consultar información en campo.
   Criterios de aceptación:
   - La interfaz se adapta a pantallas móviles.
   - Las funciones principales pueden utilizarse desde dispositivos móviles.

### Observación didáctica

En este caso, la entrevista refinó una visión ya madura. Las historias resultantes son más específicas y están más cerca de convertirse en trabajo de desarrollo listo para priorizar.

## Ejemplo de backlog inicial

A continuación se muestra un backlog inicial basado en el caso 1, clínica odontológica. Se trata de un ejemplo didáctico: en un proyecto real, el backlog se refina continuamente junto al cliente.

## Backlog inicial del sistema para clínica odontológica

| ID | Tipo | Prioridad | Elemento del backlog | Valor para el negocio |
|---|---|---|---|---|
| HU-01 | Historia de usuario | Alta | Como recepcionista, quiero registrar pacientes nuevos, para mantener ordenada la información básica. | Permite comenzar a centralizar datos. |
| HU-02 | Historia de usuario | Alta | Como recepcionista, quiero agendar turnos, para organizar la atención diaria. | Reduce errores y superposiciones. |
| HU-03 | Historia de usuario | Alta | Como recepcionista, quiero reprogramar y cancelar turnos, para mantener la agenda actualizada. | Mejora la gestión operativa. |
| HU-04 | Historia de usuario | Alta | Como odontólogo, quiero ver mi agenda diaria, para organizar mis consultas. | Facilita el trabajo profesional. |
| HU-05 | Historia de usuario | Alta | Como odontólogo, quiero consultar la ficha del paciente, para conocer antecedentes y tratamientos previos. | Mejora la calidad de atención. |
| HU-06 | Historia de usuario | Alta | Como odontólogo, quiero registrar tratamientos realizados, para actualizar la historia clínica. | Asegura trazabilidad clínica. |
| HU-07 | Historia de usuario | Media | Como administrador, quiero registrar pagos, para controlar ingresos. | Ordena la gestión económica. |
| HU-08 | Historia de usuario | Media | Como administrador, quiero gestionar pagos parciales y deudas, para hacer seguimiento de cobranzas. | Permite controlar saldos pendientes. |
| HU-09 | Historia de usuario | Media | Como clínica, queremos enviar recordatorios de turnos, para reducir ausencias. | Disminuye inasistencias. |
| HU-10 | Historia de usuario | Media | Como administrador, quiero ver reportes de turnos y cobranzas, para apoyar decisiones de gestión. | Mejora el control del negocio. |
| T-01 | Tarea técnica | Alta | Implementar autenticación y control de acceso por roles. | Protege información sensible. |
| T-02 | Tarea técnica | Alta | Diseñar base de datos de pacientes, turnos, pagos e historial clínico. | Sostiene las funciones principales. |
| T-03 | Tarea técnica | Media | Configurar respaldo automático de datos. | Reduce riesgo de pérdida de información. |
| T-04 | Tarea técnica | Media | Preparar acceso web remoto para administrador. | Extiende disponibilidad del sistema. |

## Posible orden para un primer sprint

Si el equipo debiera comenzar por una primera entrega pequeña y valiosa, podría priorizar:

1. Registro de pacientes.
2. Agenda de turnos.
3. Reprogramación y cancelación de citas.
4. Visualización de agenda por odontólogo.
5. Autenticación con roles básicos.

Con este conjunto, la clínica ya podría abandonar parcialmente el uso de cuadernos y empezar a trabajar con información centralizada.

## Conclusión

El pasaje de entrevista a backlog no es automático: requiere interpretar, agrupar, priorizar y redactar necesidades de forma clara. Las historias de usuario ayudan a ordenar el trabajo desde la perspectiva del valor, mientras que el backlog permite decidir qué construir primero.