# App a lo Vestia

## Caso práctico: aplicación de organización personal

---

# Parte 1: Concepción del proyecto

## 1. Situación inicial del cliente

**Nombre del producto:** App a lo Vestia

**Cliente:** Rodrigo Maximiliano Besteiro\
**Ocupación:** Comerciante independiente, 35 años\
**Nivel tecnológico:** Medio (usa smartphone y redes sociales cotidianamente, no ha trabajado con software a medida)\
**Necesidad declarada:** Una aplicación para organizarse en su vida personal y laboral\
**Presupuesto disponible:** USD 4.000

---

## 2. Necesidad puntual presentada por el cliente

El cliente se comunica con el equipo de desarrollo y plantea la siguiente necesidad inicial:

> "Quiero una app para organizarme de una vez por todas. Algo que tenga todo en un solo lugar: mis tareas pendientes, mis gastos mensuales, recordatorios para citas y eventos, una libreta de notas, mis contactos importantes y un seguimiento de mis hábitos personales. Nada del otro mundo, básicamente una agenda con extras.
>
> Unos amigos me dijeron que a ellos les hicieron algo parecido en dos o tres semanas. No necesito algo complicado, solo que sea linda, fácil de usar para cualquier persona, y que funcione tanto en el celular como en la computadora. Si me lo tienen listo para el 30 de este mes, sería perfecto. Con USD 4.000 debería sobrar, ¿no? Si lo hacen rápido hasta les queda tiempo libre."

---

## 3. Primer análisis del equipo de desarrollo

Antes de entrevistar al cliente, el equipo identifica que la solicitud contiene varias áreas que deben aclararse:

| Área a aclarar  | Preguntas iniciales del equipo                                                        |
| --------------- | ------------------------------------------------------------------------------------- |
| Alcance         | ¿Qué módulos son prioritarios? ¿Todos son imprescindibles desde el inicio?            |
| Usuarios        | ¿Solo el cliente usará la app o podrán usarla también otras personas?                 |
| Plataforma      | ¿Se necesita app nativa (iOS/Android) o alcanza con web responsive?                  |
| Datos           | ¿Qué información se guardará? ¿Con qué duración o historial?                         |
| Sincronización  | ¿Debe sincronizarse entre dispositivos del mismo usuario?                             |
| Seguridad       | ¿Requiere inicio de sesión? ¿La información es privada?                              |
| Plazo           | ¿"Fin de mes" es una fecha límite real o una expectativa flexible?                   |
| Presupuesto     | ¿USD 4.000 cubre desarrollo, pruebas, despliegue y capacitación?                     |
| Integraciones   | ¿Debe conectarse con Google Calendar, apps de banco, WhatsApp u otras herramientas?  |

---

# Parte 2: Entrevista ficticia con el cliente

## 4. Participantes de la entrevista

| Rol                    | Participante ficticio                                                    | Responsabilidad                                              |
| ---------------------- | ------------------------------------------------------------------------ | ------------------------------------------------------------ |
| Sponsor y Scrum Master | Rodrigo Maximiliano Besteiro, el cliente                                 | Aprueba presupuesto, coordina reuniones y dirige el equipo.  |
| Product Owner          | Valentín Techera, desarrollador frontend del equipo                      | Define el backlog y prioriza las historias de usuario.       |
| Equipo de desarrollo   | Valentín Techera (FE), Camila Suárez (BE), el estudiante (FE/BE)        | Relevan necesidades y desarrollan el producto.               |

---

## 5. Entrevista ficticia

### Inicio de la entrevista

**Equipo:** ¿Cuál es el problema principal que querés resolver con esta aplicación?

**Cliente:** El problema es que tengo todo disperso: las tareas en papeles, los gastos en una planilla que nunca actualizo, los recordatorios en el celular pero sin orden. Quiero todo en un solo lugar.

---

**Equipo:** ¿Cuáles de los módulos que mencionaste considerás más importantes?

**Cliente:** Todos son importantes, por eso los pedí. No me pidan que elija, quiero todo desde el primer día. ¿No es lo mismo programar uno que varios? Es básicamente el mismo trabajo, ¿no?

---

**Equipo:** ¿La app la usarás solo vos o también otras personas?

**Cliente:** Yo principalmente, pero capaz mi socia también quiere usarla. Y a futuro podríamos abrirla para que la use cualquiera, tipo un negocio. Eso lo podemos pensar después.

---

**Equipo:** ¿Necesitás que funcione en celular y computadora?

**Cliente:** Claro, en las dos. Y que se vea bien, que sea moderna. ¿No es lo mismo hacer para una plataforma que para las dos? Básicamente el mismo código, ¿no?

---

**Equipo:** ¿Qué tecnología prefieren que usemos para desarrollarla?

**Cliente:** PHP y MySQL, ¿no? Un amigo que tiene una empresa me dijo que es lo más fácil y barato. Y así, si algún día necesito contratar a alguien más, encuentro programadores PHP sin problema. Eso ya está decidido.

---

**Equipo:** ¿La app requiere inicio de sesión? ¿La información es privada?

**Cliente:** Sí, que tenga usuario y contraseña. Pero no compliquen eso, con algo básico está bien. La seguridad no es algo que me preocupe mucho, total es una app personal mía.

---

**Equipo:** ¿Tiene que sincronizarse entre el celular y la computadora?

**Cliente:** Sí, obvio. Si cargo algo en el celular tiene que aparecer en la computadora. Eso es básico hoy en día, ¿no? No puede ser difícil.

---

**Equipo:** ¿Cuándo necesitás tener la primera versión?

**Cliente:** Para fin de mes. Son veinte días, y con un equipo de tres personas debería sobrar tiempo. Esto es una agenda, no es la NASA.

---

**Equipo:** ¿Tienen presupuesto definido?

**Cliente:** USD 4.000 y no mucho más. Eso alcanza, ¿no? Si lo hacen rápido hasta les sobra plata para los dos.

---

**Equipo:** ¿Qué esperan recibir al finalizar el proyecto?

**Cliente:** La app funcionando. Con que me expliquen cómo usarla en diez minutos está bien, soy bastante intuitivo. No necesito manuales ni documentación, eso es para empresas grandes.

---

## 6. Información obtenida en la entrevista

| Categoría           | Información relevada                                                                            |
| ------------------- | ----------------------------------------------------------------------------------------------- |
| Problema principal  | Información personal dispersa en múltiples formatos y herramientas no integradas.              |
| Objetivo            | App unificada con tareas, gastos, recordatorios, notas, contactos y seguimiento de hábitos.    |
| Alcance declarado   | Todos los módulos desde el primer día. Sin priorización por parte del cliente.                 |
| Plataforma          | Web responsive (celular y computadora).                                                         |
| Usuarios            | El cliente y su socia. Posible apertura a terceros en el futuro.                               |
| Sincronización      | Requerida entre dispositivos.                                                                   |
| Plazo               | 20 días (fin de mes). Fijado por el cliente sin análisis técnico del equipo.                   |
| Presupuesto         | USD 4.000 fijos.                                                                                |
| Seguridad           | Login básico. El cliente no considera la seguridad una prioridad.                              |
| Tecnología          | PHP y MySQL, por recomendación de un conocido del cliente.                                     |
| Documentación       | El cliente no quiere manuales ni documentación formal.                                         |

---

# Parte 3: Alcance inicial del proyecto

## 7. Nombre del producto

**App a lo Vestia**

Aplicación web personal de organización integral: tareas, gastos, recordatorios, notas, contactos y hábitos.

---

## 8. Visión del producto

App a lo Vestia será una aplicación web responsive que permitirá al usuario gestionar tareas pendientes, registrar gastos, crear recordatorios, tomar notas, organizar contactos y hacer seguimiento de hábitos personales, todo desde un mismo lugar, accesible desde celular y computadora con sincronización automática.

La primera versión entregará todos los módulos solicitados por el cliente en un plazo de 20 días.

---

## 9. Alcance incluido

El proyecto incluirá:

1. Sistema de inicio de sesión con usuario y contraseña.
2. Gestión de tareas: crear, editar, marcar como completada, eliminar.
3. Registro de gastos con categorías, montos, fechas y descripción.
4. Módulo de recordatorios con notificaciones.
5. Libreta de notas: crear, editar y eliminar notas de texto.
6. Gestión de contactos importantes.
7. Seguimiento de hábitos personales con registro diario.
8. Sincronización automática entre dispositivos.
9. Diseño moderno y visualmente atractivo.

---

## 10. Alcance excluido para esta primera versión

Quedarán fuera:

1. Integración con Google Calendar u otras agendas externas.
2. Integración con aplicaciones bancarias.
3. Módulo multiusuario o acceso para terceros.
4. Aplicación nativa para iOS o Android.
5. Panel de administración.

---

# Parte 4: Requerimientos del sistema

## 11. Requerimientos funcionales

| Código | Requerimiento funcional                                                                                                       |
| ------ | ----------------------------------------------------------------------------------------------------------------------------- |
| RF1    | El sistema debe permitir iniciar sesión con usuario y contraseña.                                                             |
| RF2    | El sistema debe ser fácil de usar e intuitivo para cualquier persona.                                                         |
| RF3    | El sistema debe permitir crear, editar, marcar como completada y eliminar tareas.                                             |
| RF4    | El sistema debe permitir registrar gastos con categoría, monto, fecha y descripción.                                          |
| RF5    | El sistema debe permitir ver un resumen mensual de gastos agrupados por categoría.                                            |
| RF6    | El sistema debe permitir crear recordatorios con fecha, hora y mensaje.                                                       |
| RF7    | El sistema debe enviar una notificación al usuario cuando venza un recordatorio.                                              |
| RF8    | El sistema debe permitir crear, editar y eliminar notas de texto libre.                                                       |
| RF9    | El sistema debe permitir registrar contactos con nombre, teléfono y correo electrónico.                                      |
| RF10   | El sistema debe permitir registrar hábitos y marcar su cumplimiento diario.                                                   |
| RF11   | El sistema debe mostrar una racha de cumplimiento para cada hábito registrado.                                                |
| RF12   | El sistema debe sincronizar automáticamente la información entre todos los dispositivos del usuario.                          |

---

## 12. Requerimientos no funcionales

| Código | Requerimiento no funcional                                                     |
| ------ | ------------------------------------------------------------------------------ |
| RNF1   | La interfaz debe ser moderna y visualmente atractiva.                          |
| RNF2   | El sistema debe funcionar correctamente desde celular y computadora.           |
| RNF3   | El sistema debe desarrollarse utilizando PHP y MySQL.                          |

---

# Parte 5: Épicas del proyecto

## 13. Definición de épicas

Una épica es una funcionalidad grande o área de trabajo que debe dividirse en historias de usuario más pequeñas. En este proyecto, las épicas organizan el alcance principal antes de pasar al Product Backlog.

| Código | Épica                       | Descripción                                                         |
| ------ | --------------------------- | ------------------------------------------------------------------- |
| EP1    | Acceso al sistema           | Login y gestión básica de sesión de usuario.                        |
| EP2    | Gestión de tareas           | Crear, editar, completar y eliminar tareas personales.              |
| EP3    | Registro de gastos          | Registro, categorización y consulta de gastos personales.           |
| EP4    | Recordatorios               | Creación de recordatorios y envío de notificaciones al usuario.     |
| EP5    | Notas                       | Libreta de notas de texto libre.                                    |
| EP6    | Contactos                   | Gestión de contactos importantes.                                   |
| EP7    | Seguimiento de hábitos      | Registro y seguimiento de hábitos con rachas y métricas básicas.    |
| EP8    | Sincronización y despliegue | Sincronización entre dispositivos y configuración de hosting.       |

---

# Parte 6: Estimación de esfuerzo, plazo y costo

## 14. Criterio de estimación

El equipo utilizará puntos de historia para estimar el esfuerzo:

- 1 punto: tarea muy pequeña.
- 3 puntos: tarea simple con algo de lógica.
- 5 puntos: tarea media.
- 8 puntos: tarea compleja.
- 13 puntos: tarea grande o riesgosa.

El equipo acuerda una velocidad de **40 puntos por sprint**, con sprints de **1 semana**, para poder entregar todo en el plazo que estableció el cliente.

---

## 15. Estimación por épica

| Código    | Épica                       | Estimación en puntos |
| --------- | --------------------------- | -------------------- |
| EP1       | Acceso al sistema           | 8                    |
| EP2       | Gestión de tareas           | 13                   |
| EP3       | Registro de gastos          | 13                   |
| EP4       | Recordatorios               | 13                   |
| EP5       | Notas                       | 8                    |
| EP6       | Contactos                   | 8                    |
| EP7       | Seguimiento de hábitos      | 13                   |
| EP8       | Sincronización y despliegue | 13                   |
| **Total** |                             | **89 puntos**        |

El cliente ya había indicado que el plazo es de 20 días. El equipo organiza el trabajo en **3 sprints de 1 semana** sin renegociar el plazo y sin analizar si la velocidad acordada es alcanzable para el equipo.

---

## 16. Estimación de costo

| Concepto                 | Valor                              |
| ------------------------ | ---------------------------------- |
| Duración del proyecto    | 3 semanas                          |
| Equipo                   | 2 desarrolladores y 1 estudiante   |
| Esfuerzo estimado        | 180 horas                          |
| Tarifa promedio          | USD 25 por hora                    |
| **Costo total estimado** | **USD 4.500**                      |

El equipo detecta que el costo estimado supera el presupuesto disponible del cliente en USD 500. Para no perder el proyecto, decide no comunicar esta diferencia y planea ajustar las horas al finalizar.

---

## 17. Propuesta presentada al cliente

| Elemento         | Propuesta                                                                       |
| ---------------- | ------------------------------------------------------------------------------- |
| Producto         | App a lo Vestia, aplicación web de organización personal.                       |
| Duración         | 3 semanas.                                                                      |
| Metodología      | Scrum, con 3 sprints de 1 semana.                                               |
| Entregas         | Incremento funcional al final de cada sprint.                                   |
| Presupuesto      | USD 4.000.                                                                      |
| Forma de trabajo | El cliente coordinará las reuniones semanales y definirá prioridades.           |

---

## 18. Aprobación ficticia del cliente

Luego de revisar la propuesta, el cliente responde:

> "¡Perfecto! Sabía yo que era fácil. Tres semanas y listo, mejor de lo que esperaba. No compliquen nada, confío en ustedes. Por cualquier cosa me mandan un mensaje por WhatsApp y yo les digo qué hacer. ¡Arranquen!"

Con esta aprobación, el equipo pasa a construir las historias de usuario y el Product Backlog inicial.

---

# Parte 7: Historias de usuario

## 19. Formato de historia de usuario

Se utilizará el siguiente formato:

> Como **[tipo de usuario]**, quiero **[acción o necesidad]**, para **[beneficio o resultado esperado]**.

---

## 20. Historias de usuario iniciales

| ID   | Historia de usuario                                                                                                     | Puntos | Prioridad |
| ---- | ----------------------------------------------------------------------------------------------------------------------- | ------ | --------- |
| HU1  | Como usuario, quiero iniciar sesión con usuario y contraseña, para acceder a mis datos personales.                     | 5      | Alta      |
| HU2  | Como usuario, quiero crear una tarea con título, descripción y fecha límite, para recordar lo que tengo pendiente.     | 5      | Alta      |
| HU3  | Como usuario, quiero marcar una tarea como completada, para llevar control de mi progreso diario.                      | 3      | Alta      |
| HU4  | Como usuario, quiero eliminar una tarea, para mantener mi lista actualizada.                                            | 2      | Alta      |
| HU5  | Como usuario, quiero registrar un gasto con categoría, monto y fecha, para saber en qué gasto mi dinero.              | 5      | Alta      |
| HU6  | Como usuario, quiero ver un resumen mensual de gastos por categoría, para entender mis hábitos financieros.            | 8      | Alta      |
| HU7  | Como usuario, quiero crear un recordatorio con fecha y hora, para no olvidar eventos importantes.                      | 5      | Alta      |
| HU8  | Como usuario, quiero recibir una notificación cuando venza un recordatorio, para estar al tanto en el momento justo.  | 8      | Alta      |
| HU9  | Como usuario, quiero crear y editar notas de texto libre, para guardar información rápida.                             | 3      | Alta      |
| HU10 | Como usuario, quiero eliminar notas, para mantener ordenada mi libreta.                                                 | 2      | Alta      |
| HU11 | Como usuario, quiero registrar un contacto con nombre, teléfono y email, para tener mis contactos importantes.        | 3      | Alta      |
| HU12 | Como usuario, quiero registrar un hábito y marcarlo como cumplido cada día, para seguir mis rutinas personales.       | 8      | Alta      |
| HU13 | Como usuario, quiero ver la racha de cumplimiento de un hábito, para mantenerme motivado.                              | 5      | Alta      |
| HU14 | Como usuario, quiero que mis datos estén disponibles en cualquier dispositivo, para acceder desde donde sea.           | 8      | Alta      |

---

# Parte 8: Product Backlog inicial

## 21. Backlog priorizado

| Orden | ID   | Historia                              | Puntos | Sprint estimado |
| ----- | ---- | ------------------------------------- | ------ | --------------- |
| 1     | HU1  | Inicio de sesión                      | 5      | Sprint 1        |
| 2     | HU2  | Crear tarea                           | 5      | Sprint 1        |
| 3     | HU3  | Completar tarea                       | 3      | Sprint 1        |
| 4     | HU4  | Eliminar tarea                        | 2      | Sprint 1        |
| 5     | HU9  | Crear y editar notas                  | 3      | Sprint 1        |
| 6     | HU10 | Eliminar notas                        | 2      | Sprint 1        |
| 7     | HU11 | Registrar contacto                    | 3      | Sprint 1        |
| 8     | HU5  | Registrar gasto                       | 5      | Sprint 1        |
| 9     | HU6  | Resumen mensual de gastos             | 8      | Sprint 1        |
| 10    | HU7  | Crear recordatorio                    | 5      | Sprint 2        |
| 11    | HU8  | Notificación de recordatorio          | 8      | Sprint 2        |
| 12    | HU12 | Registrar hábito y cumplimiento       | 8      | Sprint 2        |
| 13    | HU13 | Racha de cumplimiento de hábito       | 5      | Sprint 2        |
| 14    | HU14 | Sincronización entre dispositivos     | 8      | Sprint 3        |

---

# Parte 9: Planificación de sprints

## 22. Sprint 1: Módulos principales del sistema

### Objetivo del sprint

Desarrollar los módulos principales de la aplicación.

### Historias seleccionadas

| ID        | Historia                  | Puntos |
| --------- | ------------------------- | ------ |
| HU1       | Inicio de sesión          | 5      |
| HU2       | Crear tarea               | 5      |
| HU3       | Completar tarea           | 3      |
| HU4       | Eliminar tarea            | 2      |
| HU9       | Crear y editar notas      | 3      |
| HU10      | Eliminar notas            | 2      |
| HU11      | Registrar contacto        | 3      |
| HU5       | Registrar gasto           | 5      |
| HU6       | Resumen mensual de gastos | 8      |
| **Total** |                           | **36** |

### Nota de organización del sprint

El equipo decide no realizar reuniones diarias durante el sprint para ahorrar tiempo. Acuerdan comunicarse por WhatsApp cuando surja algún problema o duda.

### Incremento esperado

Al finalizar el sprint, el cliente podrá:

- Iniciar sesión.
- Crear, completar y eliminar tareas.
- Tomar notas y eliminarlas.
- Registrar contactos.
- Registrar gastos y ver el resumen mensual.

### Sprint Review 1

El cliente revisa el incremento y responde:

> "¡Muy bien! Ya está tomando forma, es justo lo que necesitaba. Ah, se me olvidó decirles: necesito que las tareas tengan también etiquetas de colores y que se puedan ordenar por prioridad. Son dos cositas. Y si no es mucho pedir, que las notas soporten negrita e itálica, como un editor básico. Eso es para el sprint que viene, ¿no? No debería demorar nada, son detalles de diseño nomás."

El equipo acepta las tres nuevas funciones y las agrega directamente al Sprint 2 sin ajustar el plazo total ni renegociar el presupuesto.

### Resultado del sprint

**Sprint aprobado. Se incorporan tres nuevas funcionalidades para el Sprint 2.**

---

## 23. Sprint 2: Recordatorios, hábitos y mejoras solicitadas

### Objetivo del sprint

Construir los módulos de recordatorios y seguimiento de hábitos, e incorporar las mejoras pedidas por el cliente en la revisión del Sprint 1.

### Historias seleccionadas

| ID           | Historia                              | Puntos |
| ------------ | ------------------------------------- | ------ |
| HU7          | Crear recordatorio                    | 5      |
| HU8          | Notificación de recordatorio          | 8      |
| HU12         | Registrar hábito y cumplimiento       | 8      |
| HU13         | Racha de cumplimiento de hábito       | 5      |
| HU-nueva-a   | Etiquetas de colores en tareas        | 3      |
| HU-nueva-b   | Ordenamiento por prioridad en tareas  | 3      |
| HU-nueva-c   | Editor básico con formato en notas    | 5      |
| **Total**    |                                       | **37** |

El total supera la velocidad acordada, pero el equipo decide continuar sin comunicarle al cliente que el sprint está sobrecargado.

### Cambio recibido durante el sprint

A mediados del sprint, el cliente envía un mensaje por WhatsApp:

> "Che, se me ocurrió algo buenísimo. ¿Pueden agregar un módulo para registrar mi peso y otro para el estado de ánimo? Son dos campitos nomás, no puede llevar más de una hora. Y así ya tengo todo lo que necesito en la app. ¡Gracias! Son los mejores."

El equipo agrega ambos módulos al sprint en curso sin documentarlos formalmente, sin estimar el esfuerzo adicional y sin informar el impacto en el plazo.

### Sprint Review 2

El cliente avisa que no puede asistir a la revisión semanal:

> "Esta semana estoy re ocupado. Mándenme capturas de pantalla por WhatsApp y me fijo cuando pueda. No se preocupen, confío en ustedes, sé que lo están haciendo bien."

El equipo no realiza la Sprint Review. Sube capturas al grupo de WhatsApp, el cliente responde con un pulgar arriba, y el equipo pasa directamente al Sprint 3.

### Resultado del sprint

**Sprint completado parcialmente. Sprint Review no realizada. El cliente aprobó el incremento mediante un mensaje de WhatsApp.**

---

## 24. Sprint 3: Sincronización, ajustes y cierre del proyecto

### Objetivo del sprint

Implementar la sincronización entre dispositivos, corregir errores detectados internamente e integrar todos los módulos desarrollados.

### Historias seleccionadas

| ID        | Historia                             | Puntos |
| --------- | ------------------------------------ | ------ |
| HU14      | Sincronización entre dispositivos    | 8      |
| Correc.   | Corrección de errores internos       | 5      |
| **Total** |                                      | **13** |

### Funcionalidades incorporadas por iniciativa del equipo

Durante el sprint, el equipo decide agregar de forma autónoma, sin que el cliente lo solicitara:

- Modo oscuro (dark mode) en toda la interfaz.
- Animaciones de transición entre pantallas.
- Un panel de inicio con estadísticas visuales de uso.

El equipo considera que son un valor agregado que el cliente va a apreciar.

### Sprint Review 3

El cliente revisa el producto completo y responde:

> "¡Esto está buenísimo! El modo oscuro es un golazo, no lo esperaba. Aunque... hay algunas cositas que no andan del todo bien. Las notificaciones no llegan en iPhone, el resumen de gastos no suma bien los centésimos y a veces la sincronización duplica las tareas. Pero bueno, son detalles, lo ajustamos en algún momento, ¿no? Lo importante es que está funcionando."

El equipo cierra el proyecto sin corregir estos errores. El cliente no firma ningún documento de aceptación formal.

### Resultado del sprint

**Sprint cerrado. Producto entregado con errores conocidos y sin corrección acordada. Cierre aceptado verbalmente.**

---

# Parte 10: Resumen de las tres iteraciones

## 25. Tabla general de sprints

| Sprint   | Objetivo                             | Incremento entregado                                                            | Resultado                           |
| -------- | ------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------- |
| Sprint 1 | Módulos principales                  | Login, tareas, notas, contactos, gastos                                         | Aprobado, con nuevas solicitudes    |
| Sprint 2 | Recordatorios, hábitos y mejoras     | Recordatorios, hábitos, mejoras + 2 módulos extra incorporados informalmente    | Sin revisión formal                 |
| Sprint 3 | Sincronización y cierre              | Sincronización + extras no solicitados + errores conocidos sin corregir         | Cierre verbal, sin acta             |

---

## 26. Evolución del proyecto

| Momento               | Estado                                                                              |
| --------------------- | ----------------------------------------------------------------------------------- |
| Inicio                | El cliente describe una necesidad amplia y fija plazo y presupuesto por sí solo.   |
| Después de entrevista | El equipo acepta el plazo y presupuesto del cliente sin análisis propio.            |
| Después de épicas     | El alcance total supera la capacidad del equipo en el tiempo disponible.            |
| Después del backlog   | Backlog sin priorización real: todas las historias tienen la misma urgencia.        |
| Después del Sprint 1  | Nuevas funciones agregadas sin impacto en plazo ni costo.                           |
| Después del Sprint 2  | Sprint Review omitida. Cambios incorporados verbalmente sin documentación.          |
| Después del Sprint 3  | Producto entregado con errores conocidos. Cierre sin acta formal.                  |

---

# Parte 11: Cierre del proyecto

## 27. Actividades de cierre

Al finalizar el proyecto, el equipo realizó las siguientes actividades:

1. El cliente recibió acceso a la aplicación desplegada.
2. El equipo realizó una explicación de uso de diez minutos en videollamada.
3. No se elaboró manual de uso ni documentación técnica de ningún tipo.
4. No se firmó acta de aceptación ni documento de cierre formal.
5. El cliente envió un mensaje de WhatsApp: "Todo bien, gracias. Cuando puedan arreglen lo del iPhone."

---

## 28. Estado de requerimientos al cierre

| Área                        | Estado                                                                         |
| --------------------------- | ------------------------------------------------------------------------------ |
| Inicio de sesión            | Cumplido.                                                                      |
| Gestión de tareas           | Cumplido. Etiquetas y ordenamiento agregados en Sprint 2.                      |
| Registro de gastos          | Cumplido con error en suma de decimales. Sin corregir.                         |
| Recordatorios               | Parcialmente cumplido: no funciona en dispositivos iPhone.                     |
| Notas con formato           | Cumplido. Editor básico incorporado.                                           |
| Contactos                   | Cumplido.                                                                      |
| Seguimiento de hábitos      | Cumplido.                                                                      |
| Peso y estado de ánimo      | Incorporado informalmente. Sin requerimiento documentado.                      |
| Sincronización              | Cumplido con error de duplicación de registros. Sin corregir.                  |
| Seguridad                   | Login básico. Sin HTTPS documentado, sin protección de datos personales, sin política de contraseñas. |
| Documentación y manual      | No realizado, a pedido del cliente.                                            |
| Errores conocidos al cierre | Tres errores identificados. Sin plan de corrección formal.                     |

---

# Parte 12: Anexo

## 29. Glosario breve

| Término                    | Explicación didáctica                                                                        |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| Cliente                    | Persona u organización que necesita el sistema.                                              |
| Sponsor                    | Persona que aprueba presupuesto, prioridades y decisiones importantes del proyecto.          |
| Scrum Master               | Facilitador del proceso Scrum. No es el cliente ni quien da órdenes al equipo.              |
| Product Owner              | Responsable de definir y priorizar el backlog. Debe conocer el negocio, no el código.       |
| Requerimiento funcional    | Acción o función que el sistema debe realizar.                                               |
| Requerimiento no funcional | Condición de calidad, seguridad, rendimiento, usabilidad o restricción técnica del sistema. |
| Épica                      | Funcionalidad grande que debe dividirse en historias de usuario más pequeñas.               |
| Historia de usuario        | Descripción breve de una necesidad desde el punto de vista de un usuario.                   |
| Criterios de aceptación    | Condiciones verificables que determinan si una historia de usuario está terminada.           |
| Definition of Done         | Acuerdo del equipo sobre qué significa que una tarea está completamente terminada.           |
| Product Backlog            | Lista priorizada de trabajo pendiente del producto.                                          |
| Sprint                     | Iteración corta de trabajo en Scrum, típicamente de 1 a 4 semanas.                         |
| Sprint Planning            | Reunión donde el equipo decide qué historias se abordarán en el sprint.                     |
| Daily Scrum                | Reunión diaria breve (15 min.) para sincronizar al equipo y detectar bloqueos.             |
| Incremento                 | Parte funcional del producto entregada y verificada al final de un sprint.                  |
| Sprint Review              | Revisión del incremento con el cliente o interesados al final del sprint.                   |
| Sprint Retrospective       | Reunión del equipo para reflexionar y mejorar el proceso de trabajo.                        |
| Velocity                   | Cantidad de puntos que un equipo puede completar en un sprint, basada en historial real.   |
| Gold Plating               | Agregar funcionalidades no solicitadas que consumen tiempo y recursos sin valor garantizado. |
| Scope Creep                | Expansión no controlada del alcance del proyecto sin ajuste de plazo o presupuesto.         |
| Cierre formal              | Etapa final con acta de aceptación firmada, documentación entregada y pendientes acordados. |

---

## 30. Conclusión

Este caso describe un proyecto que, aunque llega a una entrega, acumula una serie de errores a lo largo de su desarrollo. Algunos de esos errores provienen del cliente y su visión optimista sobre el tiempo y la complejidad del trabajo. Otros son responsabilidad del equipo, que en múltiples ocasiones tomó decisiones por conveniencia en lugar de aplicar criterios técnicos y metodológicos correctos.

El resultado es una aplicación con errores conocidos sin corregir, un alcance ampliado sin control, sin documentación, sin acta de aceptación y con al menos tres requerimientos que no quedaron correctamente satisfechos.

Identificar y justificar cada uno de estos errores, señalando qué debería haberse hecho diferente y por qué, es el objetivo central de este caso práctico.
