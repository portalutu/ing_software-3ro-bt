# Metodología Waterfall (Modelo en Cascada)

Documento de apoyo para estudiantes de **Ingeniería de Software**.

---

# 1. Introducción

La metodología **Waterfall**, o **modelo en cascada**, es uno de los modelos más antiguos utilizados en la gestión de proyectos de software.

Su nombre proviene de la idea de una **cascada**, donde cada fase del proyecto fluye hacia la siguiente. Una etapa debe completarse antes de comenzar la siguiente.

Esto significa que el proyecto se desarrolla **de forma secuencial y ordenada**.

Las etapas principales son:

1. Requisitos
2. Análisis
3. Diseño
4. Desarrollo
5. Pruebas
6. Implementación
7. Mantenimiento

---

# 2. Características principales

El modelo Waterfall tiene las siguientes características:

* Las fases se realizan **en orden**.
* Cada fase produce **documentación clara**.
* Es fácil de **planificar y gestionar**.
* Cambios durante el proyecto son **difíciles y costosos**.

Por esta razón se utiliza principalmente cuando:

* Los requisitos están bien definidos.
* El proyecto no cambiará mucho.
* Se necesita mucha documentación.

---

# 3. Etapas del modelo Waterfall

## 3.1 Recolección de requisitos

En esta fase se identifican las necesidades del cliente.

Se responde a preguntas como:

* ¿Qué problema debe resolver el sistema?
* ¿Quiénes serán los usuarios?
* ¿Qué funciones debe tener el sistema?

### Ejemplo didáctico

Supongamos que queremos desarrollar un sistema para gestionar la biblioteca de un centro educativo.

Requisitos posibles:

* Registrar libros
* Registrar estudiantes
* Registrar préstamos
* Mostrar qué libros están disponibles

Resultado de esta fase:

Un **documento de requisitos** que describe todas las funciones del sistema.

---

## 3.2 Análisis del sistema

En esta fase se analiza cómo se organizará el sistema.

Se identifican:

* procesos
* entidades
* relaciones

### Ejemplo

Para el sistema de biblioteca:

Entidades principales:

* Libro
* Usuario
* Préstamo

Relación:

Un usuario puede pedir prestado un libro.

---

## 3.3 Diseño del sistema

Aquí se define **cómo será construido el sistema**.

Se crean:

* diagramas UML
* arquitectura del sistema
* diseño de base de datos
* diseño de interfaces

### Ejemplo

Diseño de base de datos simple:

Tabla Libro

* id
* titulo
* autor
* disponible

Tabla Usuario

* id
* nombre

Tabla Prestamo

* id
* libro_id
* usuario_id
* fecha

---

## 3.4 Desarrollo (Implementación)

En esta fase se escribe el código del sistema.

Los programadores implementan las funcionalidades definidas en el diseño.

### Ejemplo

Funciones que se programan:

* registrarLibro()
* registrarUsuario()
* registrarPrestamo()

---

## 3.5 Pruebas

Se verifica que el sistema funcione correctamente.

Tipos de pruebas comunes:

* pruebas funcionales
* pruebas de integración
* pruebas de sistema

### Ejemplo

Caso de prueba:

Escenario: registrar un préstamo

Resultado esperado:

El sistema guarda el préstamo y marca el libro como no disponible.

---

## 3.6 Implementación

El sistema se instala en el entorno donde será utilizado.

Puede ser:

* un servidor
* una computadora
* una red escolar

### Ejemplo

El sistema de biblioteca se instala en el servidor del liceo y los bibliotecarios acceden desde sus computadoras.

---

## 3.7 Mantenimiento

Después de implementar el sistema, pueden surgir nuevas necesidades.

Tipos de mantenimiento:

* correctivo (arreglar errores)
* adaptativo (adaptar a nuevos entornos)
* evolutivo (agregar funciones)

### Ejemplo

Nueva funcionalidad solicitada:

* sistema de reservas de libros

---

# 4. Ventajas del modelo Waterfall

* Fácil de entender
* Buena documentación
* Permite planificación clara
* Ideal para proyectos pequeños o con requisitos claros

---

# 5. Desventajas

* Cambios difíciles de implementar
* El cliente ve el producto muy tarde
* Poco flexible

---

# 6. Ejemplo completo del proceso

Proyecto: Sistema de biblioteca escolar

1. Requisitos

Las autoridades explican la necesidad desde el punto de vista institucional.
El bibliotecario explica qué necesita el sistema desde el punto de vista usuario.

2. Análisis

Se identifican los elementos clave: libros, usuarios y préstamos.
Se identifican las formas de interacción solicitadas.
Se valida el análisis con los stakeholders principales.

3. Diseño

Se diseña la base de datos y la arquitectura del sistema.

4. Desarrollo

Los programadores crean la aplicación.

5. Pruebas

Se verifican las funcionalidades.

6. Implementación

El sistema se instala en la escuela.

7. Mantenimiento

Se agregan nuevas funciones.

---

# 7. Cuándo usar Waterfall

Este modelo es recomendable cuando:

* El sistema es pequeño
* Los requisitos están bien definidos
* El proyecto necesita mucha documentación
* No existen desacuerdos entre stakeholders
* Baja incertidumbre

---

# 8. Comparación con metodologías ágiles

| Característica | Waterfall  | Agile     |
| -------------- | ---------- | --------- |
| Flujo          | Secuencial | Iterativo |
| Cambios        | Difíciles  | Fáciles   |
| Entrega        | Al final   | Continua  |
| Documentación  | Alta       | Moderada  |

---

# 9. Conclusión

El modelo Waterfall fue uno de los primeros métodos utilizados en ingeniería de software.

Aunque hoy la mayoría de los proyectos de software utilizan metodologías ágiles o híbridas, Waterfall sigue siendo útil para entender **cómo se estructura un proyecto de software de forma ordenada**.