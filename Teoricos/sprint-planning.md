# Sprint Planning

El sprint planning, o planificación del sprint, es una reunión de trabajo en la que el equipo decide qué elementos del backlog va a desarrollar durante el próximo sprint y cómo organizará ese trabajo. Su propósito es transformar una lista priorizada de necesidades en un plan concreto, realista y compartido.

En Scrum, esta instancia permite responder dos preguntas centrales:

1. ¿Qué trabajo se hará durante el sprint?
2. ¿Cómo se realizará ese trabajo?

El resultado esperado es un objetivo de sprint claro, un conjunto de historias seleccionadas y una primera descomposición en tareas técnicas o funcionales que ayuden a comenzar el desarrollo.

## Objetivos del sprint planning

- Comprender el valor de negocio de los elementos priorizados.
- Seleccionar una cantidad de trabajo realista para el sprint.
- Acordar un objetivo común para el equipo.
- Identificar dependencias, riesgos y supuestos.
- Dividir las historias en tareas más pequeñas y manejables.

## Participantes habituales

- Product Owner o representante del cliente: explica prioridades y aclara dudas sobre el backlog.
- Scrum Master o facilitador: ayuda a ordenar la reunión y remover obstáculos.
- Equipo de desarrollo: analiza el trabajo, estima el esfuerzo y define cómo lo implementará.

## Información necesaria antes de planificar

Antes de hacer un sprint planning, el equipo debería contar con:

- Un backlog priorizado.
- Historias de usuario suficientemente claras.
- Criterios de aceptación definidos.
- Una idea de la capacidad del equipo para el sprint.
- Identificación preliminar de dependencias técnicas o funcionales.

## Pasos típicos de un sprint planning

1. Revisar la prioridad del backlog.
2. Aclarar dudas sobre las historias de usuario seleccionadas.
3. Definir el objetivo del sprint.
4. Estimar o revisar el esfuerzo de cada historia.
5. Seleccionar historias según prioridad y capacidad.
6. Descomponer historias en tareas.
7. Detectar riesgos, bloqueos o dependencias.
8. Confirmar el compromiso del equipo con el trabajo planificado.

## Ejemplo didáctico

A continuación se muestra un ejemplo de sprint planning basado en el backlog del sistema para clínica odontológica.

## Contexto del ejemplo

Supongamos que:

- El equipo trabajará en un sprint de 2 semanas.
- El objetivo es entregar una primera versión usable para la gestión básica de pacientes y turnos.
- El equipo está formado por 3 desarrolladores.
- La capacidad estimada del sprint es de 20 puntos.

## Historias candidatas del backlog

Se consideran prioritarias las siguientes historias:

| ID | Historia de usuario | Prioridad | Estimación |
|---|---|---|---|
| HU-01 | Registrar pacientes nuevos | Alta | 3 puntos |
| HU-02 | Agendar turnos | Alta | 5 puntos |
| HU-03 | Reprogramar y cancelar turnos | Alta | 3 puntos |
| HU-04 | Ver agenda diaria del odontólogo | Alta | 3 puntos |
| T-01 | Autenticación y control de acceso por roles | Alta | 5 puntos |
| T-02 | Diseño de base de datos inicial | Alta | 3 puntos |

Total estimado: 22 puntos.

Como la capacidad del sprint es de 20 puntos, el equipo decide ajustar el alcance.

## Decisión del equipo

El equipo resuelve incluir:

- HU-01 Registrar pacientes nuevos.
- HU-02 Agendar turnos.
- HU-03 Reprogramar y cancelar turnos.
- HU-04 Ver agenda diaria del odontólogo.
- T-01 Autenticación y control de acceso por roles.

El equipo decide dejar fuera en este sprint:

- T-02 Diseño de base de datos inicial como elemento independiente, porque parte de ese trabajo se integrará dentro de las tareas necesarias para HU-01 y HU-02, y el resto se refinará luego.

## Objetivo del sprint

`Disponer de una primera versión del sistema que permita registrar pacientes, gestionar turnos y consultar la agenda diaria, con acceso controlado por roles básicos.`

## Desglose de historias en tareas

### HU-01 Registrar pacientes nuevos

- Diseñar estructura de datos de paciente.
- Crear formulario de alta de paciente.
- Validar campos obligatorios.
- Validar documento duplicado.
- Guardar paciente en base de datos.
- Probar alta correcta y casos inválidos.

### HU-02 Agendar turnos

- Diseñar estructura de datos de turno.
- Crear pantalla de agenda.
- Permitir seleccionar paciente, odontólogo, fecha, hora y duración.
- Validar superposición de turnos.
- Guardar turno en el sistema.
- Probar agenda con distintos escenarios.

### HU-03 Reprogramar y cancelar turnos

- Agregar opción de edición de turnos existentes.
- Permitir cambio de fecha y hora.
- Registrar cancelación de turno.
- Mostrar estado actualizado del turno.
- Probar reprogramación y cancelación.

### HU-04 Ver agenda diaria del odontólogo

- Crear vista filtrada por profesional y fecha.
- Mostrar turnos ordenados por hora.
- Verificar acceso correcto según rol.
- Probar visualización de agenda diaria.

### T-01 Autenticación y control de acceso por roles

- Definir roles iniciales: recepcionista, odontólogo y administrador.
- Implementar inicio de sesión.
- Restringir acceso a pantallas según rol.
- Proteger acceso al historial clínico.
- Probar permisos básicos por usuario.

## Riesgos detectados en la planificación

- La validación de superposición de turnos puede requerir reglas adicionales no contempladas inicialmente.
- El modelo de datos puede necesitar ajustes al incorporar historia clínica y pagos en sprints futuros.
- Si la autenticación se retrasa, puede bloquear la validación de permisos en otras historias.

## Supuestos del sprint

- No se desarrollará todavía el módulo de pagos.
- No se incluirán recordatorios automáticos en esta primera entrega.
- La historia clínica quedará limitada en esta etapa a visualización básica o preparada para una iteración posterior.

## Definición de terminado para este sprint

El equipo acuerda que una historia se considerará terminada cuando:

- La funcionalidad esté implementada.
- Cumpla con los criterios de aceptación acordados.
- Haya sido probada por el equipo.
- No presente errores críticos.
- Esté integrada con el resto del trabajo del sprint.

## Resultado esperado del sprint

Al finalizar este sprint, la clínica debería poder:

- Registrar pacientes.
- Crear turnos.
- Reprogramar o cancelar citas.
- Consultar la agenda diaria por odontólogo.
- Ingresar al sistema con roles básicos.

Esto ya representa una primera entrega valiosa, porque permite comenzar a sustituir los registros manuales y validar tempranamente el producto con el cliente.

## Ejemplo de conclusión didáctica

El sprint planning no consiste en "llenar tiempo" con tareas, sino en seleccionar trabajo con sentido, ajustado a la capacidad del equipo y orientado a un objetivo concreto. Un buen sprint planning conecta el backlog con una entrega realista, ayuda a detectar riesgos antes de empezar y permite que todos comprendan qué se busca lograr durante el sprint.