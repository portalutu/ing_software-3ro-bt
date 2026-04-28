# Juego de roles: entrevista para relevamiento de requerimientos

## 1. Propósito de la actividad

Esta actividad busca que los estudiantes practiquen una situación cercana al trabajo real de un equipo de desarrollo de software: entrevistar a un cliente, comprender su problema, identificar usuarios y stakeholders, distinguir requerimientos funcionales y no funcionales, detectar información incompleta y formular preguntas para aclarar necesidades.

El objetivo no es que el equipo “adivine” el sistema, sino que aprenda a **preguntar mejor**, **escuchar con atención**, **registrar evidencia** y **separar lo que el cliente dice de lo que el equipo supone**.

---

## 2. Roles de la actividad

| Rol                  | Tarea principal                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Cliente              | Representa a una empresa pequeña o mediana con una necesidad de software. Puede ser interpretado por un estudiante o por el docente. |
| Equipo entrevistador | Realiza preguntas para obtener requerimientos funcionales, no funcionales, restricciones, usuarios y prioridades.                    |
| Equipos observadores | Toman nota de lo obtenido en la entrevista y detectan requerimientos faltantes, ambiguos o mal interpretados.                        |
| Docente              | Modera, observa, interviene si la entrevista se bloquea y guía la retroalimentación final.                                           |

---

## 3. Personalidades posibles del cliente

Cada escenario puede representarse con una personalidad distinta. La personalidad condiciona la manera en que el cliente responde, no el tipo de sistema requerido.

### Cliente optimista

Cree que todo será fácil. Tiene altas expectativas, espera resultados en poco tiempo, cuenta con presupuesto medio, es expresivo y conoce muy bien su negocio y su nicho. Puede pedir más funcionalidades de las que realmente necesita al inicio.

**Frases típicas:**

> “Esto debe ser sencillo, ¿no? Es solo una página con algunas cosas.”\
> “Me encantaría tenerlo funcionando en dos o tres semanas.”\
> “Ya me imagino a todos mis clientes usando esto desde el celular.”

### Cliente pesimista

Tiene altas expectativas, pero desconfía del equipo porque es un proveedor nuevo. Tiene bajo presupuesto y suele responder con poca información si no se le hacen preguntas concretas. Conoce su negocio, pero ignora varios temas tecnológicos y debe ser convencido con explicaciones claras.

**Frases típicas:**

> “Ya me prometieron sistemas antes y ninguno funcionó bien.”\
> “No quiero gastar mucho porque no sé si esto va a servir.”\
> “Eso de usuarios, permisos y respaldos suena caro. ¿Realmente hace falta?”

### Cliente moderado

Sabe que el proyecto puede tener dificultades. Tiene presupuesto alto, es paciente, colaborador, conoce su negocio, entiende de tecnología y está abierto a sugerencias. Espera que el equipo justifique sus decisiones.

**Frases típicas:**

> “Prefiero hacerlo bien antes que apurarlo.”\
> “Podemos empezar por una primera versión y luego ampliar.”\
> “Me interesa que el sistema sea seguro, mantenible y fácil de usar.”

---

## 4. Regla para el cliente durante la entrevista

El cliente no debe entregar toda la información de inmediato. Debe iniciar con el texto narrativo del escenario y responder los detalles ocultos solo si el equipo hace preguntas adecuadas.

Por ejemplo:

| Si el equipo pregunta...                                | El cliente puede revelar...                 |
| ------------------------------------------------------- | ------------------------------------------- |
| “¿Cuántas personas usarán el sistema?”                  | Usuarios, roles y cantidad aproximada.      |
| “¿Tienen servidor, hosting o computadoras disponibles?” | Infraestructura existente.                  |
| “¿Qué tan urgente es el proyecto?”                      | Plazos esperados y restricciones.           |
| “¿Qué información sensible manejan?”                    | Nivel de seguridad requerido.               |
| “¿Quién aprueba el proyecto?”                           | Sponsor principal y decisores.              |
| “¿Qué pasaría si el sistema deja de funcionar?”         | Riesgo operativo y disponibilidad esperada. |

---

# Escenario 1: Ferretería “El Tornillo Feliz”

## Personalidad asignada del cliente

**Optimista.**\
El cliente cree que el sistema será sencillo de construir porque “solo hay que ordenar productos y ventas”. Habla con entusiasmo, propone muchas ideas y espera una primera versión rápidamente. Conoce muy bien la ferretería, los clientes frecuentes y los problemas del depósito, pero tiende a subestimar el esfuerzo técnico.

## Texto inicial para representar al cliente

Soy dueño de una ferretería familiar que funciona desde hace más de veinte años. Tenemos venta al público, algunos clientes de cuenta corriente, varios proveedores y un depósito bastante desordenado. Hoy usamos cuadernos, planillas y mensajes de WhatsApp para casi todo.

El problema principal es el stock. A veces vendemos productos que creemos tener, pero después no aparecen. Otras veces compramos de más porque nadie anotó que ya había suficiente mercadería. También nos pasa que algunos clientes llevan productos “a cuenta” y después cuesta saber cuánto deben.

Me gustaría tener un sistema sencillo, que podamos usar desde la computadora del mostrador y también desde el celular. No quiero algo enorme, pero sí necesito ordenar las ventas, las compras, los productos, los clientes y los proveedores.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

> **Uso docente:** esta información no debe entregarse al inicio. El cliente solo debe revelarla si el equipo realiza preguntas pertinentes.

| Categoría                  | Detalle oculto                                                                                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Presupuesto                | Presupuesto medio. Puede pagar una solución básica, pero no un sistema grande con muchas integraciones externas desde el inicio.                |
| Plazo esperado             | Quiere una primera versión en 4 semanas, aunque aceptaría 6 semanas si le explican claramente el alcance.                                       |
| Usuarios del sistema       | Dueño, 2 vendedores, 1 encargado de depósito y un contador externo que solo necesita reportes.                                                  |
| Sponsor principal          | El dueño de la ferretería. Es quien aprueba presupuesto, prioridades y cambios.                                                                 |
| Infraestructura disponible | Tiene una computadora de escritorio en el mostrador, una notebook antigua en la oficina y conexión a internet básica. No tiene servidor propio. |
| Seguridad requerida        | Nivel medio. Se manejan datos de clientes, deudas, precios y movimientos de stock. No se manejan datos médicos ni financieros complejos.        |
| Datos existentes           | Hay una planilla con productos, pero está incompleta y tiene nombres repetidos. Las deudas están en un cuaderno.                                |
| Restricción operativa      | No se puede cerrar la ferretería para cargar datos; la migración debe hacerse de forma gradual.                                                 |
| Riesgo principal           | Que el stock quede mal cargado y el sistema pierda confianza entre los vendedores.                                                              |
| Prioridad real             | Control de stock, ventas y cuentas corrientes. Los reportes son importantes, pero pueden quedar para una segunda etapa.                         |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                                                   |
| ------ | ----------------------------------------------------------------------------------------- |
| RF1    | Registrar productos con nombre, código, categoría, marca, precio de venta y stock actual. |
| RF2    | Registrar ventas al contado y ventas a crédito.                                           |
| RF3    | Descontar automáticamente el stock cuando se realiza una venta.                           |
| RF4    | Registrar compras a proveedores y aumentar el stock correspondiente.                      |
| RF5    | Gestionar clientes con cuenta corriente.                                                  |
| RF6    | Consultar deuda actual de cada cliente.                                                   |
| RF7    | Generar comprobantes simples de venta.                                                    |
| RF8    | Buscar productos por nombre, código o categoría.                                          |
| RF9    | Emitir alertas cuando un producto llegue al stock mínimo.                                 |
| RF10   | Generar reportes de ventas, productos más vendidos y productos con bajo stock.            |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                                       |
| ------ | -------------------------------------------------------------------------------- |
| RNF1   | El sistema debe ser fácil de usar por personas con poca experiencia informática. |
| RNF2   | Debe funcionar correctamente en computadoras de escritorio y celulares.          |
| RNF3   | Las búsquedas de productos deben responder en pocos segundos.                    |
| RNF4   | Debe permitir copias de seguridad periódicas.                                    |
| RNF5   | Debe manejar usuarios con permisos diferentes: dueño, vendedor y administrador.  |
| RNF6   | Debe conservar un historial de movimientos de stock.                             |
| RNF7   | Debe funcionar de forma estable durante el horario comercial.                    |
| RNF8   | La interfaz debe ser clara, con botones visibles y textos simples.               |
| RNF9   | Los datos de ventas y clientes deben protegerse con usuario y contraseña.        |
| RNF10  | El sistema debe permitir crecer en cantidad de productos sin volverse lento.     |

---

# Escenario 2: Consultorio odontológico “Sonrisa Sur”

## Personalidad asignada del cliente

**Moderado.**\
El cliente sabe que el sistema debe hacerse con cuidado porque maneja información personal y clínica. Es colaborador, responde con claridad y está dispuesto a priorizar. Tiene presupuesto suficiente, pero espera una solución segura, ordenada y mantenible.

## Texto inicial para representar al cliente

Tengo un consultorio odontológico pequeño con tres profesionales. Atendemos pacientes por agenda, recibimos consultas por WhatsApp y teléfono, y llevamos las historias clínicas en carpetas de papel. Esto nos está generando bastante desorden.

A veces dos personas anotan turnos al mismo horario. También nos pasa que un paciente viene y no encontramos rápido su ficha. Además, queremos recordarles los turnos para reducir las faltas, porque cada hora perdida afecta mucho.

Me gustaría un sistema para organizar la agenda, los pacientes, los tratamientos y los pagos. No necesito algo demasiado complejo, pero sí debe ser serio, porque manejamos información personal y médica.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

| Categoría                  | Detalle oculto                                                                                                                          |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Presupuesto                | Presupuesto alto para una primera versión profesional. Está dispuesto a pagar más si se justifica por seguridad, respaldo y calidad.    |
| Plazo esperado             | Espera una versión inicial en 8 a 10 semanas. Prefiere no apurar el proyecto si eso compromete la seguridad.                            |
| Usuarios del sistema       | 3 odontólogos, 2 personas de recepción y 1 administrador general.                                                                       |
| Sponsor principal          | La directora del consultorio. Es odontóloga y también socia principal.                                                                  |
| Infraestructura disponible | Tienen 2 computadoras en recepción, tablets personales de los odontólogos y buena conexión a internet. No tienen servidor propio.       |
| Seguridad requerida        | Nivel alto. Se manejan datos personales, historia clínica, tratamientos y pagos. Requiere acceso por roles y registro de cambios.       |
| Datos existentes           | Hay fichas en papel y algunas planillas de pacientes. La migración completa será lenta porque muchos datos deben revisarse manualmente. |
| Restricción legal/ética    | La información clínica no debe ser visible para personal que no corresponda. Recepción no debería editar observaciones clínicas.        |
| Riesgo principal           | Pérdida o exposición de información sensible de pacientes.                                                                              |
| Prioridad real             | Agenda, datos de pacientes, historia clínica básica y control de permisos. Recordatorios y reportes pueden implementarse después.       |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                      |
| ------ | ------------------------------------------------------------ |
| RF1    | Registrar pacientes con datos personales y de contacto.      |
| RF2    | Crear, modificar y cancelar turnos.                          |
| RF3    | Evitar la superposición de turnos para el mismo profesional. |
| RF4    | Registrar historia clínica básica del paciente.              |
| RF5    | Registrar tratamientos realizados y observaciones.           |
| RF6    | Registrar pagos, deudas y presupuestos.                      |
| RF7    | Enviar recordatorios de turnos por correo o mensaje.         |
| RF8    | Consultar agenda por día, semana y profesional.              |
| RF9    | Buscar pacientes por nombre, documento o teléfono.           |
| RF10   | Generar reportes de turnos, ausencias y pagos pendientes.    |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                                   |
| ------ | ---------------------------------------------------------------------------- |
| RNF1   | Debe proteger la información personal y clínica de los pacientes.            |
| RNF2   | Debe tener acceso mediante usuario y contraseña.                             |
| RNF3   | Debe permitir roles: odontólogo, recepción y administrador.                  |
| RNF4   | Debe ser usable desde una computadora de recepción y desde tablet o celular. |
| RNF5   | Debe realizar respaldos frecuentes de la información.                        |
| RNF6   | La agenda debe cargar rápido para evitar demoras en recepción.               |
| RNF7   | El sistema debe mantener registro de quién modificó datos importantes.       |
| RNF8   | Debe tener una interfaz simple, ordenada y sin exceso de opciones.           |
| RNF9   | Debe evitar la pérdida de datos ante cortes o cierres inesperados.           |
| RNF10  | Debe estar preparado para agregar más profesionales en el futuro.            |

---

# Escenario 3: Taller mecánico “Ruta 8 Service”

## Personalidad asignada del cliente

**Pesimista.**\
El cliente tuvo malas experiencias con soluciones anteriores. Desconfía de promesas amplias y se preocupa mucho por el costo. No suele dar detalles si no se le pregunta. Conoce muy bien el funcionamiento del taller, pero considera que “la tecnología hace perder tiempo” si no se adapta al ritmo real de trabajo.

## Texto inicial para representar al cliente

Tengo un taller mecánico con seis empleados. Atendemos autos particulares y algunas camionetas de empresas. Hoy anotamos los trabajos en una libreta y cada mecánico recuerda “más o menos” lo que hizo. Eso nos genera problemas cuando un cliente vuelve a consultar o reclama algo.

Necesito saber qué vehículo entró, qué problema tenía, qué repuestos se usaron, quién trabajó en él y cuánto se cobró. También quiero avisar a los clientes cuando el vehículo está pronto o cuando encontramos un problema extra.

No quiero perder tiempo cargando datos eternamente. El taller se mueve rápido y necesito que el sistema acompañe el trabajo, no que lo complique.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

| Categoría                  | Detalle oculto                                                                                                                                     |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Presupuesto                | Presupuesto bajo. Quiere pagar solo por lo esencial y necesita ver resultados antes de ampliar el proyecto.                                        |
| Plazo esperado             | Quiere una versión funcional en 5 semanas. No acepta un proyecto largo sin entregas visibles.                                                      |
| Usuarios del sistema       | Dueño, 1 administrativo, 4 mecánicos y 1 encargado de repuestos.                                                                                   |
| Sponsor principal          | El dueño del taller. Tiene la decisión final, pero el administrativo influye mucho porque usará el sistema todos los días.                         |
| Infraestructura disponible | Tienen una computadora en oficina, celulares personales y conexión Wi-Fi irregular en el taller. No hay tablets ni servidor.                       |
| Seguridad requerida        | Nivel medio. Hay datos de clientes, vehículos, presupuestos y cobros. Los mecánicos no deberían modificar precios finales.                         |
| Datos existentes           | No hay base digital confiable. La información histórica está en libretas y facturas viejas.                                                        |
| Restricción operativa      | Los mecánicos no pueden dedicar mucho tiempo a escribir. El sistema debe permitir carga rápida, idealmente con campos simples y estados claros.    |
| Riesgo principal           | Que el equipo abandone el sistema si lo siente lento o complicado.                                                                                 |
| Prioridad real             | Órdenes de trabajo, estado del vehículo, repuestos usados e historial por vehículo. Los avisos automáticos pueden quedar para una etapa posterior. |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                                                         |
| ------ | ----------------------------------------------------------------------------------------------- |
| RF1    | Registrar clientes con datos de contacto.                                                       |
| RF2    | Registrar vehículos asociados a cada cliente.                                                   |
| RF3    | Crear órdenes de trabajo para cada ingreso al taller.                                           |
| RF4    | Registrar diagnóstico inicial del vehículo.                                                     |
| RF5    | Registrar tareas realizadas por los mecánicos.                                                  |
| RF6    | Registrar repuestos utilizados y su costo.                                                      |
| RF7    | Cambiar el estado de una orden: recibida, en reparación, esperando repuesto, pronta, entregada. |
| RF8    | Enviar aviso al cliente cuando el vehículo esté pronto o requiera aprobación.                   |
| RF9    | Generar presupuesto antes de realizar trabajos importantes.                                     |
| RF10   | Consultar historial de reparaciones por vehículo.                                               |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                                     |
| ------ | ------------------------------------------------------------------------------ |
| RNF1   | La carga de una orden de trabajo debe ser rápida y simple.                     |
| RNF2   | El sistema debe funcionar correctamente en tablet o celular dentro del taller. |
| RNF3   | Debe permitir roles: dueño, administrativo y mecánico.                         |
| RNF4   | Debe soportar uso en ambiente con polvo, ruido y poco tiempo de atención.      |
| RNF5   | Debe guardar historial de cambios en órdenes de trabajo.                       |
| RNF6   | Debe permitir respaldo automático de la información.                           |
| RNF7   | Debe responder rápido al buscar clientes o vehículos.                          |
| RNF8   | Debe evitar que usuarios sin permiso modifiquen precios o cobros.              |
| RNF9   | La interfaz debe ser clara, con estados visibles por colores o etiquetas.      |
| RNF10  | Debe poder crecer si el taller abre otra sucursal.                             |

---

# Escenario 4: Academia de cursos “Aprender Más”

## Personalidad asignada del cliente

**Optimista.**\
El cliente está convencido de que el sistema puede resolver rápidamente todos los problemas de gestión de la academia. Habla mucho, imagina muchas funciones y cree que todos los docentes lo usarán sin dificultad. Conoce bien la operación diaria, pero no siempre distingue entre lo urgente y lo deseable.

## Texto inicial para representar al cliente

Dirijo una academia pequeña que ofrece cursos de informática, inglés y apoyo liceal. Tenemos grupos presenciales y algunos cursos virtuales. La inscripción se hace por WhatsApp, los pagos se controlan en una planilla y la asistencia se marca en papel.

El problema es que estamos creciendo y ya no sabemos bien quién pagó, quién debe, quién abandonó el curso y qué grupos tienen cupos disponibles. Los docentes también nos piden una forma más simple de marcar asistencia y dejar observaciones.

Quiero un sistema que nos permita organizar estudiantes, cursos, grupos, pagos, asistencia y certificados. Me interesa que sea práctico, porque no todos los docentes son expertos en tecnología.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

| Categoría                  | Detalle oculto                                                                                                                                      |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Presupuesto                | Presupuesto medio. Puede pagar por una solución inicial, pero no por una plataforma educativa completa desde el primer día.                         |
| Plazo esperado             | Quiere comenzar a usarlo antes del próximo período de inscripciones, en aproximadamente 6 semanas.                                                  |
| Usuarios del sistema       | Dirección, 2 administrativos, 8 docentes y eventualmente estudiantes para consultar materiales o pagos, aunque esto último no es prioridad inicial. |
| Sponsor principal          | La directora de la academia. También participa una socia encargada de administración y pagos.                                                       |
| Infraestructura disponible | Tienen laptops, conexión a internet y cuentas de correo institucionales. No tienen servidor propio. Usan Drive y planillas compartidas.             |
| Seguridad requerida        | Nivel medio. Se manejan datos personales de estudiantes, menores de edad en algunos casos, pagos y registros de asistencia.                         |
| Datos existentes           | Hay planillas separadas para estudiantes, pagos y grupos. No siempre coinciden los nombres ni los estados de pago.                                  |
| Restricción operativa      | Los docentes no quieren perder tiempo en tareas administrativas. Marcar asistencia debe tomar menos de unos minutos por clase.                      |
| Riesgo principal           | Que la dirección quiera incluir demasiadas funciones desde el inicio y el proyecto se vuelva inmanejable.                                           |
| Prioridad real             | Inscripciones, grupos, pagos y asistencia. Certificados y acceso de estudiantes pueden quedar para una segunda etapa.                               |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                             |
| ------ | ------------------------------------------------------------------- |
| RF1    | Registrar estudiantes con datos personales y de contacto.           |
| RF2    | Registrar cursos con nombre, duración, modalidad y costo.           |
| RF3    | Crear grupos asociados a cursos, horarios y docentes.               |
| RF4    | Inscribir estudiantes en grupos.                                    |
| RF5    | Controlar cupos disponibles por grupo.                              |
| RF6    | Registrar pagos, cuotas y deudas.                                   |
| RF7    | Registrar asistencia por clase.                                     |
| RF8    | Permitir a docentes cargar observaciones de estudiantes.            |
| RF9    | Generar certificados de finalización.                               |
| RF10   | Generar reportes de morosidad, asistencia y cantidad de inscriptos. |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                              |
| ------ | ----------------------------------------------------------------------- |
| RNF1   | El sistema debe ser fácil de usar para administrativos y docentes.      |
| RNF2   | Debe funcionar desde computadoras y celulares.                          |
| RNF3   | Debe permitir roles: dirección, administración y docente.               |
| RNF4   | Los docentes solo deben ver sus propios grupos.                         |
| RNF5   | Debe proteger los datos personales de los estudiantes.                  |
| RNF6   | Debe generar certificados con formato claro y consistente.              |
| RNF7   | Debe permitir respaldos periódicos.                                     |
| RNF8   | Debe responder rápido al consultar listas de grupo.                     |
| RNF9   | Debe permitir incorporar nuevos cursos sin modificar el sistema.        |
| RNF10  | La interfaz debe ser ordenada y comprensible para usuarios no técnicos. |

---

# Escenario 5: Distribuidora de alimentos “La Esquina Mayorista”

## Personalidad asignada del cliente

**Pesimista.**\
El cliente está preocupado por los errores de pedidos y el vencimiento de mercadería. Desconfía de los sistemas porque piensa que pueden complicar la operativa del depósito. Tiene poco presupuesto disponible y necesita que el equipo demuestre que la solución reducirá errores reales.

## Texto inicial para representar al cliente

Tengo una distribuidora que vende alimentos a almacenes, cantinas y pequeños comercios. Trabajamos con pedidos por teléfono, WhatsApp y vendedores que recorren zonas. Después armamos los pedidos en el depósito y los repartimos con dos camionetas.

El problema es que los pedidos se mezclan. A veces falta mercadería, otras veces se entrega algo que el cliente no pidió, y cuesta planificar qué camioneta lleva cada pedido. También necesitamos controlar vencimientos, porque algunos productos tienen fecha corta.

Quiero un sistema que ayude a tomar pedidos, preparar entregas, controlar stock y saber qué clientes compran más. No busco algo gigante, pero sí algo que ordene el trabajo diario.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

| Categoría                  | Detalle oculto                                                                                                                                 |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Presupuesto                | Presupuesto bajo a medio. Solo aprobará el proyecto si la primera versión reduce errores de pedidos y pérdidas por vencimiento.                |
| Plazo esperado             | Necesita una primera versión en 6 a 8 semanas, antes de una temporada de mayor demanda.                                                        |
| Usuarios del sistema       | Dueño, 2 vendedores, 2 personas de depósito, 2 repartidores y 1 administrativo.                                                                |
| Sponsor principal          | El dueño de la distribuidora. Los vendedores también son stakeholders importantes porque tomarán pedidos.                                      |
| Infraestructura disponible | Hay una computadora en administración y celulares personales de vendedores. En el depósito la conexión Wi-Fi es débil. No hay servidor propio. |
| Seguridad requerida        | Nivel medio. Hay precios por cliente, cuentas corrientes, direcciones, pedidos y datos comerciales.                                            |
| Datos existentes           | Productos y precios están en planillas. Los clientes están en contactos de celulares y libretas.                                               |
| Restricción operativa      | Los pedidos deben cargarse rápido. El depósito necesita listas claras, no pantallas complejas.                                                 |
| Riesgo principal           | Que el stock no coincida con la realidad física o que los vendedores sigan tomando pedidos por fuera del sistema.                              |
| Prioridad real             | Pedidos, stock, preparación y reparto. Reportes avanzados y análisis por zona pueden quedar para una segunda etapa.                            |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                                          |
| ------ | -------------------------------------------------------------------------------- |
| RF1    | Registrar clientes comerciales con dirección, zona y datos de contacto.          |
| RF2    | Registrar productos con precio, stock y fecha de vencimiento cuando corresponda. |
| RF3    | Crear pedidos de clientes.                                                       |
| RF4    | Reservar stock al confirmar un pedido.                                           |
| RF5    | Generar lista de preparación de pedidos para depósito.                           |
| RF6    | Organizar pedidos por ruta o zona de reparto.                                    |
| RF7    | Registrar entregas realizadas, pendientes o rechazadas.                          |
| RF8    | Registrar pagos o estado de cuenta de clientes.                                  |
| RF9    | Alertar sobre productos con bajo stock o próximo vencimiento.                    |
| RF10   | Generar reportes de ventas por cliente, producto, zona y período.                |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                                                  |
| ------ | ------------------------------------------------------------------------------------------- |
| RNF1   | El sistema debe funcionar desde dispositivos móviles para vendedores.                       |
| RNF2   | Debe ser rápido al cargar pedidos.                                                          |
| RNF3   | Debe permitir roles: administrador, vendedor, depósito y reparto.                           |
| RNF4   | Debe evitar que un vendedor vea información que no corresponde a su zona, si así se define. |
| RNF5   | Debe mantener integridad entre pedidos, stock y entregas.                                   |
| RNF6   | Debe soportar crecimiento en cantidad de productos y clientes.                              |
| RNF7   | Debe permitir respaldo automático de datos.                                                 |
| RNF8   | Debe funcionar de forma estable durante horarios de preparación y reparto.                  |
| RNF9   | Debe tener una interfaz simple para uso rápido en depósito.                                 |
| RNF10  | Debe registrar cambios importantes para poder revisar errores.                              |

---

# Escenario 6: Inmobiliaria “Costa Hogar”

## Personalidad asignada del cliente

**Moderado.**\
El cliente entiende que el sistema requiere varias etapas. Tiene presupuesto alto, conoce el negocio inmobiliario y está abierto a recomendaciones técnicas. Quiere una solución profesional, con buena imagen y protección adecuada de documentos y datos privados.

## Texto inicial para representar al cliente

Trabajo en una inmobiliaria mediana. Administramos alquileres, mostramos propiedades en venta y hacemos seguimiento de clientes interesados. Hoy tenemos fotos en carpetas, datos en planillas, contratos en documentos sueltos y consultas que llegan por redes, WhatsApp y teléfono.

Nos pasa que una propiedad queda publicada aunque ya se alquiló. También perdemos interesados porque nadie recuerda quién consultó por cuál casa. Además, necesitamos tener ordenados los vencimientos de contratos, pagos de alquiler y datos de propietarios.

Me gustaría un sistema que nos permita manejar propiedades, clientes, propietarios, visitas, contratos y pagos. También sería bueno poder publicar algunas propiedades en una web simple.

## Detalles ocultos que el grupo deberá obtener mediante preguntas

| Categoría                  | Detalle oculto                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Presupuesto                | Presupuesto alto. Puede financiar una solución por etapas, incluyendo gestión interna y catálogo público.                                        |
| Plazo esperado             | Acepta una primera versión interna en 10 semanas y una publicación web posterior.                                                                |
| Usuarios del sistema       | 1 administrador, 5 agentes inmobiliarios, 1 persona de administración y eventualmente clientes externos que consulten propiedades publicadas.    |
| Sponsor principal          | El gerente de la inmobiliaria. La persona de administración es stakeholder clave por contratos y pagos.                                          |
| Infraestructura disponible | Tienen computadoras, celulares de trabajo, internet estable y dominio web. No tienen servidor propio, pero están dispuestos a contratar hosting. |
| Seguridad requerida        | Nivel alto. Se manejan contratos, documentos personales, datos de propietarios, pagos, señas y datos de interesados.                             |
| Datos existentes           | Hay planillas de propiedades, carpetas con fotos, contratos en documentos y consultas dispersas en WhatsApp, redes y correo.                     |
| Restricción operativa      | La información pública debe separarse claramente de la información privada. No todo lo cargado en el sistema debe publicarse.                    |
| Riesgo principal           | Publicar información incorrecta o exponer documentos privados por error.                                                                         |
| Prioridad real             | Gestión de propiedades, propietarios, interesados, visitas y estados. La web pública puede ser una segunda etapa si el alcance se vuelve grande. |

## Requerimientos funcionales esperados

| Código | Requerimiento funcional                                                               |
| ------ | ------------------------------------------------------------------------------------- |
| RF1    | Registrar propiedades con dirección, tipo, precio, estado y características.          |
| RF2    | Cargar fotos y documentos asociados a cada propiedad.                                 |
| RF3    | Registrar propietarios y vincularlos con sus propiedades.                             |
| RF4    | Registrar clientes interesados y sus preferencias.                                    |
| RF5    | Agendar visitas a propiedades.                                                        |
| RF6    | Cambiar estado de propiedad: disponible, reservada, alquilada, vendida, pausada.      |
| RF7    | Registrar contratos de alquiler con fechas de inicio y vencimiento.                   |
| RF8    | Registrar pagos de alquiler, comisiones o señas.                                      |
| RF9    | Publicar propiedades seleccionadas en una web o catálogo público.                     |
| RF10   | Generar reportes de propiedades disponibles, contratos por vencer y pagos pendientes. |

## Requerimientos no funcionales esperados

| Código | Requerimiento no funcional                                                           |
| ------ | ------------------------------------------------------------------------------------ |
| RNF1   | El sistema debe proteger datos personales, contratos y documentos privados.          |
| RNF2   | Debe permitir roles: administrador, agente inmobiliario y consulta limitada.         |
| RNF3   | Debe funcionar correctamente en computadoras y celulares.                            |
| RNF4   | Las fotos deben cargarse sin volver lento el sistema.                                |
| RNF5   | El catálogo público debe ser fácil de navegar.                                       |
| RNF6   | Debe permitir búsquedas rápidas por zona, precio, tipo y estado.                     |
| RNF7   | Debe realizar respaldos periódicos.                                                  |
| RNF8   | Debe mantener registro de cambios en propiedades y contratos.                        |
| RNF9   | Debe ser escalable para agregar más agentes o sucursales.                            |
| RNF10  | Debe tener una interfaz clara, profesional y comprensible para usuarios no técnicos. |

---

# 5. Guía de observación para los equipos que no entrevistan

Mientras un equipo entrevista al cliente, los demás equipos deberán observar y registrar evidencias.

| Aspecto observado                       | Preguntas guía                                                                                  |
| --------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Requerimientos funcionales obtenidos    | ¿Qué acciones concretas deberá poder hacer el sistema?                                          |
| Requerimientos no funcionales obtenidos | ¿Qué condiciones de calidad, seguridad, rendimiento o usabilidad se identificaron?              |
| Usuarios del sistema                    | ¿Quiénes usarán el sistema? ¿Tendrán permisos diferentes?                                       |
| Stakeholders                            | ¿Quién aprueba, quién usa, quién se ve afectado y quién aporta información?                     |
| Datos necesarios                        | ¿Qué datos deben cargarse, consultarse, modificarse o protegerse?                               |
| Restricciones                           | ¿Hay límites de presupuesto, tiempo, infraestructura, conectividad o conocimientos del usuario? |
| Supuestos                               | ¿Qué cosas asumió el equipo sin confirmarlas con el cliente?                                    |
| Ambigüedades                            | ¿Qué respuestas quedaron poco claras y deberían repreguntarse?                                  |
| Riesgos                                 | ¿Qué podría salir mal si no se define correctamente?                                            |
| Priorización                            | ¿Qué es indispensable para una primera versión y qué puede quedar para después?                 |

---

# 6. Entregable final de cada equipo

Al finalizar la entrevista, cada equipo deberá entregar un documento breve con la siguiente estructura:

1. **Nombre del escenario.**
2. **Resumen del problema del cliente.**
3. **Usuarios identificados.**
4. **Stakeholders identificados.**
5. **Requerimientos funcionales relevados.**
6. **Requerimientos no funcionales relevados.**
7. **Restricciones detectadas:** presupuesto, plazos, infraestructura, conectividad, seguridad, operación diaria.
8. **Dudas pendientes.**
9. **Supuestos realizados por el equipo.**
10. **Propuesta de alcance para una primera versión del sistema.**

---

# 7. Cierre de la actividad

Para cerrar la dinámica, se recomienda realizar una puesta en común donde el equipo entrevistador compare su relevamiento con las observaciones de los otros equipos.

El docente puede orientar la discusión con estas preguntas:

- ¿Qué información importante apareció recién cuando alguien repreguntó?
- ¿Qué requerimientos funcionales fueron fáciles de detectar?
- ¿Qué requerimientos no funcionales quedaron más ocultos?
- ¿Qué supuestos hizo el equipo sin validarlos?
- ¿Qué preguntas fueron más efectivas?
- ¿Qué diferencias hubo entre entrevistar a un cliente optimista, pesimista o moderado?
- ¿Qué debería incluirse en una primera versión del sistema y qué debería postergarse?

El objetivo del cierre no es encontrar una única respuesta correcta, sino evidenciar que un buen relevamiento depende de la calidad de las preguntas, la escucha activa, la validación con el cliente y la documentación clara de lo acordado.

