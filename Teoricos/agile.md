# Metodologías Ágiles en Ingeniería de Software

Documento de apoyo para estudiantes de **Ingeniería de Software**.

---

# 1. Introducción

Las **metodologías ágiles** son enfoques de gestión y desarrollo de proyectos de software que buscan construir productos **de forma incremental, flexible y colaborativa**.

A diferencia de los modelos tradicionales como Waterfall, donde el proyecto se desarrolla en fases rígidas, las metodologías ágiles permiten:

* Adaptarse a cambios
* Entregar valor rápidamente
* Trabajar de forma colaborativa con el cliente

En lugar de esperar al final del proyecto para ver resultados, el software se desarrolla en **pequeñas entregas funcionales llamadas iteraciones**.

---

# 2. El Manifiesto Ágil

Las metodologías ágiles se basan en el **Manifiesto Ágil**, creado en 2001 por un grupo de expertos en desarrollo de software.

Este manifiesto define cuatro valores fundamentales:

1. **Individuos e interacciones** sobre procesos y herramientas
2. **Software funcionando** sobre documentación extensa
3. **Colaboración con el cliente** sobre negociación contractual
4. **Respuesta al cambio** sobre seguir un plan rígido

Esto no significa que los elementos de la derecha no sean importantes, sino que se priorizan los de la izquierda.

---

# 3. Características de las metodologías ágiles

Las metodologías ágiles tienen varias características comunes:

* Desarrollo **iterativo e incremental**
* Entregas frecuentes de software funcional
* Trabajo colaborativo en equipo
* Adaptación continua a cambios
* Comunicación constante con el cliente

---

# 4. Conceptos principales

## Iteración

Una **iteración** es un ciclo corto de desarrollo donde se construye una parte del sistema.

Generalmente dura entre **1 y 4 semanas**.

Cada iteración produce una **versión funcional del software**.

---

## Incremento

Un **incremento** es una nueva funcionalidad agregada al sistema.

Por ejemplo:

Sistema de biblioteca escolar

Incremento 1

* registrar libros

Incremento 2

* registrar usuarios

Incremento 3

* registrar préstamos

---

# 5. Artefactos comunes en metodologías ágiles

Aunque cada metodología tiene sus propias prácticas, existen algunos artefactos comunes.

## Product Backlog

Es una lista ordenada de todas las funcionalidades del sistema.

Ejemplo:

| ID  | Historia de usuario | Prioridad |
| --- | ------------------- | --------- |
| US1 | Registrar libros    | Alta      |
| US2 | Registrar usuarios  | Alta      |
| US3 | Registrar préstamos | Media     |

---

## Historias de usuario

Las **historias de usuario** describen funcionalidades desde el punto de vista del usuario.

Formato común:

> Como **usuario** quiero **funcionalidad** para **beneficio**.

Ejemplo:

> Como bibliotecario quiero registrar préstamos para llevar control de los libros.

---

## Tablero de tareas

Es un tablero visual que muestra el progreso del trabajo.

Columnas típicas:

* Pendiente
* En progreso
* En revisión
* Finalizado

---

# 6. Ceremonias comunes

Las metodologías ágiles utilizan reuniones breves llamadas **ceremonias**.

## Reunión diaria (Daily)

Reunión corta de aproximadamente **15 minutos**.

Cada integrante responde:

* ¿Qué hice ayer?
* ¿Qué haré hoy?
* ¿Tengo algún bloqueo?

---

## Revisión de iteración

El equipo presenta el trabajo realizado al cliente o profesor.

El objetivo es **recibir retroalimentación**.

---

## Retrospectiva

El equipo analiza:

* qué salió bien
* qué salió mal
* qué se puede mejorar

---

# 7. Scrum

## ¿Qué es Scrum?

**Scrum** es uno de los marcos de trabajo ágiles más utilizados en desarrollo de software.

Organiza el trabajo en ciclos llamados **Sprints**.

Un Sprint dura normalmente **2 a 4 semanas**.

Durante cada Sprint el equipo desarrolla un conjunto de funcionalidades.

---

## Roles en Scrum

### Product Owner

Representa al cliente y define las prioridades del producto.

Responsabilidades:

* mantener el Product Backlog
* priorizar funcionalidades

---

### Scrum Master

Facilita el trabajo del equipo.

Responsabilidades:

* eliminar obstáculos
* asegurar que se siga Scrum

---

### Equipo de desarrollo

Grupo de personas que construyen el software.

---

## Artefactos de Scrum

### Product Backlog

Lista priorizada de funcionalidades.

---

### Sprint Backlog

Lista de tareas seleccionadas para el Sprint actual.

---

### Incremento de producto

Resultado funcional al final del Sprint.

---

## Ceremonias de Scrum

### Sprint Planning

El equipo decide qué tareas realizará durante el Sprint.

---

### Daily Scrum

Reunión diaria de seguimiento.

---

### Sprint Review

Se muestra el software desarrollado.

---

### Sprint Retrospective

El equipo analiza cómo mejorar su trabajo.

---

# 8. Kanban

## ¿Qué es Kanban?

**Kanban** es un método ágil enfocado en la **visualización del flujo de trabajo**.

Se basa en un tablero donde se muestran las tareas del proyecto.

---

## Características principales

* flujo continuo de trabajo
* visualización del progreso
* límite de tareas en progreso

---

## Tablero Kanban

Columnas típicas:

* Pendiente
* En progreso
* En revisión
* Terminado

Ejemplo:

| Pendiente           | En progreso               | Terminado        |
| ------------------- | ------------------------- | ---------------- |
| Crear base de datos | Programar registro libros | Diseñar interfaz |

---

## Límite de trabajo en progreso (WIP)

Kanban establece un **límite de tareas simultáneas** para evitar sobrecargar al equipo.

Ejemplo:

Máximo 3 tareas en progreso.

---

## Diferencias con Scrum

| Característica     | Scrum | Kanban |
| ------------------ | ----- | ------ |
| Iteraciones        | Sí    | No     |
| Roles definidos    | Sí    | No     |
| Planificación fija | Sí    | No     |
| Flujo continuo     | No    | Sí     |

---

# 9. Ejemplo aplicado

Proyecto: Sistema de biblioteca escolar

Historias de usuario:

US1 Registrar libros

US2 Registrar usuarios

US3 Registrar préstamos

Sprint 1

* registrar libros

Sprint 2

* registrar usuarios

Sprint 3

* registrar préstamos

---

# 10. Conclusión

Las metodologías ágiles permiten desarrollar software de forma **flexible, colaborativa y adaptativa**.

Son especialmente útiles cuando:

* los requisitos pueden cambiar
* el cliente necesita ver resultados rápido
* el proyecto requiere iteración y mejora continua