# Manual de Estilo para Documentación en Markdown

Este documento define las reglas de estilo que los estudiantes deberán utilizar para redactar la documentación de los proyectos. El objetivo es mantener una documentación clara, consistente y fácil de leer.

---

# 1. Principios generales

Al escribir documentación técnica se deben cumplir los siguientes principios:

- Claridad
- Consistencia
- Legibilidad
- Estructura lógica

La documentación debe permitir que cualquier persona pueda comprender el proyecto sin necesidad de hablar con el autor.

---

# 2. Títulos

Los títulos organizan la estructura del documento.

## Regla

Usar encabezados jerárquicos de Markdown.

```
# Título principal
## Sección
### Subsección
#### Subsubsección
```

## Ejemplo

```
# Sistema de Gestión Escolar

## Instalación

### Requisitos del sistema
```

---

# 3. Párrafos

Los párrafos deben ser breves y claros.

## Reglas

- Un párrafo debe expresar una sola idea.
- Evitar párrafos muy largos.
- Dejar una línea en blanco entre párrafos.

## Ejemplo

Correcto:

Este sistema permite gestionar estudiantes, cursos y evaluaciones.

La aplicación fue desarrollada utilizando Python y PostgreSQL.

Incorrecto:

Este sistema permite gestionar estudiantes cursos evaluaciones y fue desarrollado utilizando Python y PostgreSQL para resolver problemas administrativos.

---

# 4. Listas

Las listas se utilizan para organizar información.

## Listas con viñetas

```
- elemento uno
- elemento dos
- elemento tres
```

Ejemplo:

- instalar dependencias
- configurar base de datos
- ejecutar servidor

## Listas numeradas

```
1. paso uno
2. paso dos
3. paso tres
```

Ejemplo:

1. descargar el repositorio
2. instalar dependencias
3. iniciar la aplicación

---

# 5. Código

El código debe mostrarse utilizando bloques de código.

## Código en línea

Para mencionar comandos o variables.

Ejemplo:

Utilizar el comando `git clone` para copiar el repositorio.

## Bloques de código

```
```bash
git clone https://github.com/usuario/proyecto.git
```
```

Ejemplo:

```bash
git clone https://github.com/usuario/proyecto.git
```

---

# 6. Imágenes

Las imágenes ayudan a explicar procesos complejos.

## Sintaxis

```
![Descripción](imagen.png)
```

Ejemplo:

```
![Arquitectura del sistema](arquitectura.png)
```

---

# 7. Enlaces

Se deben utilizar enlaces para referenciar recursos externos.

## Sintaxis

```
[Texto del enlace](https://example.com)
```

Ejemplo:

```
[Documentación oficial de Git](https://git-scm.com/docs)
```

---

# 8. Tablas

Las tablas permiten organizar información estructurada.

## Ejemplo

```
| Comando | Descripción |
|--------|-------------|
| git init | inicializa un repositorio |
| git clone | copia un repositorio |
| git commit | guarda cambios |
```

Resultado:

| Comando | Descripción |
|--------|-------------|
| git init | inicializa un repositorio |
| git clone | copia un repositorio |
| git commit | guarda cambios |

---

# 9. Bloques de advertencia o notas

Para resaltar información importante.

## Nota

> Nota: asegúrese de instalar todas las dependencias antes de ejecutar la aplicación.

## Advertencia

> Advertencia: ejecutar este comando eliminará todos los datos.

---

# 10. Organización de la documentación

Cada proyecto deberá incluir al menos los siguientes archivos.

```
README.md
INSTALL.md
ARCHITECTURE.md
CONTRIBUTING.md
```

## README.md

Debe contener:

- descripción del proyecto
- objetivo
- tecnologías utilizadas

## INSTALL.md

Debe explicar cómo instalar el sistema.

## ARCHITECTURE.md

Describe la arquitectura del sistema.

## CONTRIBUTING.md

Explica cómo contribuir al proyecto.

---

# 11. Ejemplo de estructura de documentación

```
# Proyecto Biblioteca Digital

## Descripción
Sistema para gestionar préstamos de libros.

## Tecnologías
- Python
- PostgreSQL
- Docker

## Instalación
1. clonar repositorio
2. instalar dependencias
3. ejecutar aplicación
```

---

# 12. Buenas prácticas

- Utilizar títulos claros
- Mantener una estructura consistente
- Documentar todos los componentes importantes
- Incluir ejemplos de uso
- Revisar ortografía

---

# 13. Errores comunes

Evitar:

- documentos sin estructura
- párrafos demasiado largos
- ausencia de ejemplos
- código sin formato

---