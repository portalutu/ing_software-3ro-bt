# Entrevistas para recabado de requerimientos

El proceso de entrevista para recabado de requerimientos es una técnica utilizada por el equipo de desarrollo para comprender qué necesita realmente el cliente antes de construir un sistema. Su objetivo no es solamente "anotar pedidos", sino descubrir qué problemas existen, qué tareas se quieren resolver, quiénes usarán el software, qué restricciones deben respetarse y qué criterios permitirán considerar exitoso el proyecto.

Una buena entrevista ayuda a transformar una idea general en información concreta y útil para elaborar historias de usuario, criterios de aceptación, prioridades y tareas del backlog. En este proceso, el equipo debe escuchar, ordenar la conversación, validar lo entendido, detectar ambigüedades y hacer preguntas que permitan identificar:

- Requerimientos funcionales: acciones, procesos y servicios que el sistema debe ofrecer.
- Requerimientos no funcionales: calidad esperada, seguridad, rendimiento, usabilidad, disponibilidad, restricciones técnicas, legales u operativas.
- Reglas de negocio: condiciones propias del dominio del cliente.
- Alcance inicial: qué se incluye, qué no se incluye y qué puede quedar para etapas posteriores.

La entrevista no busca que el cliente use lenguaje técnico. El trabajo del equipo es traducir necesidades del negocio en requisitos claros, verificables y priorizables.

## Guía de 20 preguntas clave para entrevistar a un cliente

Estas preguntas no siempre se hacen en el mismo orden, pero sirven como base para conducir una entrevista completa.

1. ¿Cuál es el problema principal que desea resolver con este software?
2. ¿Qué objetivos espera alcanzar al implementar el sistema?
3. ¿Quiénes serán los usuarios del sistema y qué roles tendrán?
4. ¿Qué tareas realizan hoy y cómo las llevan a cabo actualmente?
5. ¿Qué dificultades o errores ocurren con el proceso actual?
6. ¿Qué funciones considera imprescindibles en una primera versión?
7. ¿Qué funciones serían deseables, pero podrían quedar para más adelante?
8. ¿Qué información debe registrar, consultar o modificar el sistema?
9. ¿Existen reglas de negocio que el sistema deba respetar obligatoriamente?
10. ¿Qué reportes, listados o indicadores necesita obtener?
11. ¿Quién puede ver, cargar, modificar o eliminar cada tipo de información?
12. ¿El sistema debe enviar notificaciones, alertas o recordatorios?
13. ¿Debe integrarse con otros sistemas, servicios o dispositivos?
14. ¿Qué nivel de seguridad necesita para proteger usuarios y datos?
15. ¿Qué tan rápido espera que responda el sistema en tareas habituales?
16. ¿Desde qué dispositivos o lugares se utilizará el sistema?
17. ¿Qué disponibilidad necesita: horario laboral, 24/7, días específicos?
18. ¿Existen restricciones legales, normativas o institucionales a cumplir?
19. ¿Cómo sabrán usted y el equipo que el sistema cumple con lo esperado?
20. ¿Qué prioridad, plazo y presupuesto aproximado tiene este proyecto?

---

## Caso 1: Cliente con descripción básica

### Descripción inicial del cliente

"Necesito un sistema para mi clínica odontológica porque hoy manejamos todo en cuadernos y mensajes de WhatsApp. Queremos organizarnos mejor con los pacientes, las citas y los pagos."

### Entrevista

**Equipo:** ¿Cuál es el principal problema del sistema actual?  
**Cliente:** Se nos mezclan los turnos, perdemos información de pacientes y a veces no registramos bien los pagos.

**Equipo:** ¿Quiénes usarían el sistema?  
**Cliente:** La recepcionista, los odontólogos y yo como administrador de la clínica.

**Equipo:** ¿Qué debería poder hacer la recepcionista?  
**Cliente:** Agendar turnos, reprogramarlos, cancelar citas, registrar pacientes y confirmar asistencia.

**Equipo:** ¿Qué deberían poder hacer los odontólogos?  
**Cliente:** Ver su agenda, revisar la ficha del paciente y anotar el tratamiento realizado.

**Equipo:** ¿Qué necesitaría usted como administrador?  
**Cliente:** Ver pagos, deudas pendientes, actividad de la clínica y controlar la agenda general.

**Equipo:** ¿Qué datos del paciente necesitan registrar?  
**Cliente:** Nombre, documento, teléfono, fecha de nacimiento, dirección, antecedentes médicos básicos y tratamientos realizados.

**Equipo:** ¿Los turnos tienen duración fija?  
**Cliente:** No. Algunas consultas duran 30 minutos y otras 1 hora.

**Equipo:** ¿Necesitan enviar recordatorios?  
**Cliente:** Sí, por WhatsApp o por correo el día anterior.

**Equipo:** ¿Cómo registran los pagos?  
**Cliente:** En efectivo, transferencia y a veces tarjeta.

**Equipo:** ¿Necesitan manejar deudas o pagos parciales?  
**Cliente:** Sí, porque algunos tratamientos se pagan en varias veces.

**Equipo:** ¿Cualquier odontólogo puede ver cualquier paciente?  
**Cliente:** Sí, pero solo el odontólogo debe poder editar el historial clínico.

**Equipo:** ¿La recepcionista puede ver la historia clínica completa?  
**Cliente:** No. Solo datos básicos y próximas citas.

**Equipo:** ¿Necesitan reportes?  
**Cliente:** Sí. Turnos del día, pagos cobrados, deudas pendientes y cantidad de pacientes atendidos por mes.

**Equipo:** ¿El sistema se usará solo dentro de la clínica?  
**Cliente:** Principalmente sí, pero yo quisiera verlo también desde mi casa.

**Equipo:** ¿Qué pasa si se corta Internet?  
**Cliente:** Sería complicado. Idealmente no deberíamos perder la información cargada.

**Equipo:** ¿Tienen una fecha objetivo para empezar a usarlo?  
**Cliente:** En tres meses sería ideal.

### Requerimientos detectados

**Funcionales**

- Registrar pacientes con datos personales y antecedentes médicos básicos.
- Gestionar turnos: alta, modificación, cancelación y consulta.
- Permitir duraciones variables de las citas.
- Mostrar agenda por odontólogo y agenda general.
- Permitir a los odontólogos registrar tratamientos e historial clínico.
- Registrar pagos por distintos medios.
- Gestionar pagos parciales y deudas pendientes.
- Enviar recordatorios de turnos por WhatsApp o correo.
- Generar reportes de turnos, pagos, deudas y pacientes atendidos.
- Permitir acceso remoto al administrador.

**No funcionales**

- Control de acceso por roles: recepcionista, odontólogo y administrador.
- Protección especial de la historia clínica.
- Disponibilidad suficiente para uso diario de la clínica.
- Respaldo de la información para evitar pérdidas.
- Uso sencillo para personal administrativo.
- Posibilidad de acceso web desde fuera de la clínica.

### Conclusiones del equipo

El cliente llegó con una necesidad general, pero la entrevista permitió descubrir procesos concretos, roles, restricciones de acceso y necesidades de comunicación con pacientes. También surgieron requerimientos no funcionales importantes, como seguridad, respaldo y acceso remoto. Con esta información ya es posible comenzar a definir épicas como gestión de pacientes, agenda, historia clínica, cobranzas y reportes.

---

## Caso 2: Cliente con descripción bastante completa

### Descripción inicial del cliente

"Somos una academia de idiomas y queremos un sistema web para administrar inscripciones, cursos, pagos y seguimiento de estudiantes. Necesitamos que los alumnos puedan registrarse, elegir cursos y ver materiales. Los docentes deben cargar asistencias y calificaciones. La coordinación académica debe poder crear grupos, asignar docentes y consultar reportes."

### Entrevista para ajustar detalles faltantes

**Equipo:** ¿Qué tipos de usuarios tendrá el sistema?  
**Cliente:** Alumnos, docentes, coordinación académica y administración.

**Equipo:** ¿Los alumnos podrán inscribirse por sí solos?  
**Cliente:** Sí, pero la inscripción queda pendiente hasta confirmar el pago.

**Equipo:** ¿Cómo se organiza la oferta de cursos?  
**Cliente:** Por idioma, nivel, horario, modalidad y docente asignado.

**Equipo:** ¿Un alumno puede inscribirse a más de un curso?  
**Cliente:** Sí, siempre que no se superpongan los horarios.

**Equipo:** ¿Cómo se controla esa superposición?  
**Cliente:** El sistema debería avisarlo y no permitir inscripciones incompatibles.

**Equipo:** ¿Qué materiales deben ver los estudiantes?  
**Cliente:** Archivos PDF, enlaces y tareas publicadas por el docente.

**Equipo:** ¿Los docentes cargan solo asistencia y notas o también contenidos?  
**Cliente:** También contenidos, observaciones y tareas.

**Equipo:** ¿Qué reportes necesita coordinación?  
**Cliente:** Cantidad de inscriptos por curso, porcentaje de asistencia, rendimiento por grupo y alumnos con pagos pendientes.

**Equipo:** ¿Qué tareas realiza administración?  
**Cliente:** Confirmar pagos, emitir comprobantes y controlar morosidad.

**Equipo:** ¿Qué medios de pago aceptan?  
**Cliente:** Transferencia, tarjeta y efectivo en sede.

**Equipo:** ¿Necesitan facturación electrónica?  
**Cliente:** No en una primera etapa.

**Equipo:** ¿El sistema debe enviar avisos automáticos?  
**Cliente:** Sí. Confirmación de inscripción, recordatorios de inicio de curso y alertas por falta de pago.

**Equipo:** ¿Las clases son presenciales, virtuales o mixtas?  
**Cliente:** Tenemos las tres modalidades.

**Equipo:** ¿Debe integrarse con alguna plataforma de videollamadas?  
**Cliente:** No al inicio, pero sí guardar el enlace de la clase virtual.

**Equipo:** ¿Qué restricciones de seguridad consideran importantes?  
**Cliente:** Cada usuario debe ver solo lo que le corresponde y los datos de pago deben estar protegidos.

**Equipo:** ¿Hay períodos de alta demanda?  
**Cliente:** Sí, al inicio de cada semestre, cuando se abren inscripciones.

**Equipo:** ¿Qué esperan en términos de rendimiento?  
**Cliente:** Que aunque haya muchos alumnos entrando al mismo tiempo, el sistema siga respondiendo bien.

### Requerimientos detectados

**Funcionales**

- Registro y autenticación de alumnos, docentes, coordinación y administración.
- Publicación de cursos por idioma, nivel, horario, modalidad y docente.
- Inscripción de alumnos con validación de cupos y superposición horaria.
- Confirmación de inscripción condicionada al pago.
- Gestión de grupos y asignación de docentes.
- Publicación de materiales, tareas y enlaces de clase.
- Registro de asistencia, calificaciones y observaciones.
- Confirmación de pagos y emisión de comprobantes.
- Gestión de deuda y seguimiento de morosidad.
- Envío de notificaciones automáticas.
- Generación de reportes académicos y administrativos.

**No funcionales**

- Aplicación web accesible desde distintos dispositivos.
- Buen rendimiento en picos de inscripción.
- Seguridad por roles y protección de datos personales y de pago.
- Interfaz clara para usuarios con distinto nivel técnico.
- Escalabilidad para incorporar integraciones futuras.

### Conclusiones del equipo

En este caso el cliente ya traía una visión bastante desarrollada del sistema. La entrevista no se centró en descubrir el problema desde cero, sino en cerrar vacíos importantes: validaciones, reglas de negocio, restricciones por horarios, estados de inscripción, manejo de pagos y exigencias de rendimiento. El resultado permite redactar historias de usuario mucho más precisas y separar claramente el alcance de una primera versión de posibles mejoras futuras.

---

## Caso 3: Cliente con descripción muy clara

### Descripción inicial del cliente

"Necesitamos una plataforma para gestión de mantenimiento de flota de camiones. El sistema debe permitir registrar vehículos, conductores, talleres y planes de mantenimiento preventivo. Debe generar órdenes de trabajo, registrar mantenimientos correctivos, controlar vencimientos de documentos, neumáticos y servicios por kilometraje. Los supervisores deben ver indicadores operativos y recibir alertas automáticas. El personal de taller debe cargar tareas realizadas, repuestos utilizados, horas de trabajo y observaciones. El sistema debe ser web, responsive y contar con auditoría de cambios."

### Entrevista para aclarar detalles finos

**Equipo:** ¿Qué roles principales van a usar la plataforma?  
**Cliente:** Administrador, supervisor de flota, personal de taller y consulta gerencial.

**Equipo:** ¿Los conductores ingresan al sistema?  
**Cliente:** No en esta etapa.

**Equipo:** ¿Cómo se define el mantenimiento preventivo?  
**Cliente:** Por kilometraje, por fecha o por horas de uso, según el vehículo.

**Equipo:** ¿Una orden de trabajo puede incluir más de una tarea?  
**Cliente:** Sí, y también puede incluir repuestos, mano de obra y tercerizaciones.

**Equipo:** ¿Qué estados debe tener una orden de trabajo?  
**Cliente:** Pendiente, en curso, pausada, finalizada y cancelada.

**Equipo:** ¿Necesitan aprobación antes de ejecutar ciertos trabajos?  
**Cliente:** Sí, cuando el costo supere un monto definido por la gerencia.

**Equipo:** ¿Cómo se controlan los vencimientos?  
**Cliente:** El sistema debe alertar con anticipación configurable: por ejemplo 30, 15 y 7 días antes.

**Equipo:** ¿Qué indicadores quieren ver los supervisores?  
**Cliente:** Vehículos fuera de servicio, costos por unidad, mantenimientos vencidos, próximos servicios y tiempo promedio de reparación.

**Equipo:** ¿Deben adjuntarse documentos o fotos?  
**Cliente:** Sí, fotos de daños, facturas y comprobantes de servicio.

**Equipo:** ¿Qué trazabilidad esperan del sistema?  
**Cliente:** Que quede registrado quién cambió qué dato, cuándo y cuál era el valor anterior.

**Equipo:** ¿Hay talleres externos además del taller interno?  
**Cliente:** Sí, y necesitamos distinguirlos.

**Equipo:** ¿El sistema debe funcionar desde celulares?  
**Cliente:** Sí, especialmente para supervisores y taller.

**Equipo:** ¿Hay restricciones de disponibilidad?  
**Cliente:** Debe estar operativo todo el tiempo porque la flota trabaja los 7 días de la semana.

**Equipo:** ¿Qué importancia tiene la velocidad de respuesta?  
**Cliente:** Alta. Consultar el estado de un camión o cargar una orden no debería demorar más de unos segundos.

**Equipo:** ¿Requieren exportar información?  
**Cliente:** Sí, a Excel y PDF para auditorías y reuniones de gestión.

**Equipo:** ¿Cómo medirán si la primera versión fue exitosa?  
**Cliente:** Si logramos reducir mantenimientos vencidos, tener trazabilidad completa y acceder a reportes confiables en tiempo real.

### Requerimientos detectados

**Funcionales**

- Registrar vehículos, talleres, conductores y planes de mantenimiento.
- Configurar mantenimientos preventivos por kilometraje, fecha u horas de uso.
- Generar y gestionar órdenes de trabajo con múltiples tareas.
- Registrar mantenimientos correctivos.
- Asociar repuestos, horas de trabajo, costos y tercerizaciones.
- Gestionar estados de órdenes de trabajo.
- Solicitar aprobación en trabajos que superen un costo configurado.
- Controlar vencimientos de documentos, servicios y neumáticos.
- Enviar alertas automáticas configurables.
- Adjuntar fotos y documentos.
- Consultar indicadores operativos y reportes.
- Exportar información a Excel y PDF.
- Mantener auditoría completa de cambios.

**No funcionales**

- Sistema web responsive usable en computadoras y celulares.
- Alta disponibilidad para operación continua.
- Tiempo de respuesta bajo en consultas y cargas operativas.
- Seguridad por perfiles de usuario.
- Trazabilidad completa y confiable.
- Capacidad de manejar información operativa en tiempo real.

### Conclusiones del equipo

Aquí el cliente presentó una necesidad muy bien definida, por lo que la entrevista se utilizó para afinar reglas, estados, umbrales, criterios de éxito y necesidades de auditoría. Este tipo de situación muestra que incluso cuando la descripción inicial es excelente, la entrevista sigue siendo necesaria para convertir una visión clara en requisitos implementables y verificables. La información obtenida permite construir un backlog detallado, con prioridades, criterios de aceptación y restricciones explícitas.

## Cierre didáctico

Los tres casos muestran que la entrevista siempre agrega valor, aunque el nivel de detalle inicial del cliente sea diferente. Cuando la descripción es básica, la entrevista descubre el problema y el alcance. Cuando la descripción es intermedia, ayuda a completar reglas y casos faltantes. Cuando la descripción es muy clara, permite afinar condiciones, validaciones y criterios de aceptación.

Para elaborar un backlog útil, el equipo no debe conformarse con "lo que el cliente pide" en una sola frase. Debe profundizar hasta obtener requerimientos comprensibles, priorizables y verificables. Entrevistar bien al cliente es uno de los pasos más importantes para evitar malentendidos y construir un software que realmente aporte valor.
