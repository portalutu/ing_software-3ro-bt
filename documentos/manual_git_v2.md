# Manual de Introducción a Git

## Control de versiones para desarrollo de software

---

# 1. Introducción

En el desarrollo de software moderno, el trabajo colaborativo es una práctica habitual. Los equipos de desarrollo suelen estar compuestos por varios programadores que trabajan sobre los mismos archivos, corrigiendo errores, agregando funcionalidades y manteniendo el código a lo largo del tiempo.

Para gestionar este proceso de manera organizada se utilizan **sistemas de control de versiones**.

Un sistema de control de versiones permite:

* Registrar cambios en los archivos
* Mantener un historial de modificaciones
* Trabajar en equipo sin sobrescribir el trabajo de otros
* Recuperar versiones anteriores del código
* Probar nuevas funcionalidades sin afectar la versión estable

Uno de los sistemas de control de versiones más utilizados en el mercado es **Git**.

Git es hoy una herramienta fundamental para cualquier profesional del área de tecnología.

---

# 2. Historia de Git

Git fue creado en **2005 por Linus Torvalds**, creador del sistema operativo Linux.

Antes de Git, el desarrollo del kernel de Linux utilizaba un sistema llamado **BitKeeper**. Cuando dejó de ser gratuito para el proyecto Linux, Torvalds decidió crear una herramienta propia.

Los objetivos de Git eran:

* Alta velocidad
* Integridad de datos
* Trabajo distribuido
* Manejo eficiente de proyectos grandes

Actualmente Git es el estándar de la industria.

Plataformas populares que utilizan Git:

* GitHub
* GitLab
* Bitbucket

---

# 3. ¿Qué es Git?

Git es un **sistema de control de versiones distribuido**.

Esto significa que cada usuario posee una copia completa del proyecto en su computadora.

Un proyecto gestionado con Git se llama **repositorio**.

Un repositorio contiene:

* archivos del proyecto
* historial de cambios
* autores de modificaciones
* versiones del software

---

# 4. ¿Por qué usar Git?

Git permite resolver varios problemas del desarrollo de software.

## Trabajo colaborativo

Varios programadores pueden trabajar sobre el mismo proyecto sin sobrescribir el trabajo de otros.

Ejemplo:

* Desarrollador A trabaja en el sistema de login
* Desarrollador B trabaja en la interfaz gráfica

Luego los cambios pueden integrarse.

---

## Historial de cambios

Git registra cada modificación realizada.

Ejemplo:

```bash
git log
```

Salida posible:

```
commit a8f23b9
Author: Juan Perez
Date: Mon Apr 12
Fix login bug
```

---

## Recuperación de versiones

Si un cambio genera un error se puede volver a una versión anterior.

```bash
git checkout 4f7c1a
```

---

## Desarrollo experimental

Git permite crear ramas para experimentar sin afectar la versión principal del software.

---

# 5. Conceptos principales de Git

## Repositorio

Un repositorio es el lugar donde se almacena el proyecto.

Puede estar:

* localmente
* en un servidor remoto

Ejemplo:

```
mi-proyecto/
  index.html
  app.js
  styles.css
```

---

## Commit

Un commit es un registro de cambios en el proyecto.

Ejemplo:

```bash
git commit -m "Agrega formulario de contacto"
```

---

## Branch (rama)

Una rama es una línea de desarrollo independiente.

Ejemplo:

```
main
feature-login
feature-api
```

---

## Merge

El merge combina cambios entre ramas.

```bash
git merge feature-login
```

---

## Fork

Un fork es una copia de un repositorio en otra cuenta.

Se utiliza mucho en proyectos open source.

---

## Clone

Clonar significa copiar un repositorio remoto al equipo local.

```bash
git clone https://github.com/user/proyecto.git
```

---

## Pull

Actualiza el repositorio local con cambios remotos.

```bash
git pull
```

---

## Push

Envía cambios locales al repositorio remoto.

```bash
git push
```

---

# 6. Flujo de trabajo básico

Flujo típico de Git:

```
Editar archivos
↓
git add
↓
git commit
↓
git push
```

Ejemplo:

```bash
git add index.html
git commit -m "Actualiza página principal"
git push
```

---

# 7. Funcionalidades principales de Git

## Control de versiones

Permite mantener un historial completo del proyecto.

## Trabajo en ramas

Permite desarrollar nuevas funciones sin afectar el sistema principal.

## Desarrollo distribuido

Cada desarrollador posee una copia completa del repositorio.

## Integración de cambios

Los cambios de múltiples desarrolladores pueden combinarse.

---

# APÉNDICE A

# Guía paso a paso para usar Git

## Configurar credenciales

```bash
git config --global user.name "Juan Perez"
git config --global user.email "juan@email.com"
```

Ver configuración:

```bash
git config --list
```

---

## Crear e inicializar un repositorio

```bash
mkdir proyecto-web
cd proyecto-web
git init
```

Crear archivo:

```
index.html
```

Agregar archivo:

```bash
git add index.html
```

Primer commit:

```bash
git commit -m "Primer commit del proyecto"
```

---

## Clonar un repositorio

```bash
git clone https://github.com/user/proyecto.git
```

---

## Crear un fork

1. Ir al repositorio en GitHub
2. Presionar **Fork**
3. Clonar el repositorio

```bash
git clone https://github.com/usuario/repositorio.git
```

---

## Trabajar con ramas

```bash
git branch nueva-funcion
git checkout nueva-funcion
```

Crear y cambiar en un paso:

```bash
git checkout -b nueva-funcion
```

Ver ramas:

```bash
git branch
```

---

## Crear commit

```bash
git add archivo.js
git commit -m "Agrega nueva funcionalidad"
```

---

## Sincronizar cambios

Subir cambios:

```bash
git push origin main
```

Actualizar repositorio:

```bash
git pull
```

---

# APÉNDICE B

# Cheatsheet de Git

## Inicializar repositorio

```bash
git init
```

## Clonar repositorio

```bash
git clone URL
```

## Ver estado

```bash
git status
```

## Agregar archivos

```bash
git add archivo
```

Agregar todos:

```bash
git add .
```

## Crear commit

```bash
git commit -m "mensaje"
```

## Ver historial

```bash
git log
```

Versión resumida:

```bash
git log --oneline
```

## Crear rama

```bash
git branch nombre
```

## Cambiar rama

```bash
git checkout nombre
```

## Crear y cambiar rama

```bash
git checkout -b nueva-rama
```

## Fusionar ramas

```bash
git merge nombre-rama
```

## Subir cambios

```bash
git push
```

## Descargar cambios

```bash
git pull
```

---

# ANEXO

# Clase práctica de Git (4 horas)

## Objetivo de la clase

Que el estudiante aprenda a:

* crear repositorios
* realizar commits
* trabajar con ramas
* sincronizar cambios
* utilizar GitHub

---

# Estructura de la clase

## Bloque 1 — Introducción (30 min)

Temas:

* qué es control de versiones
* problemas del desarrollo sin Git
* introducción a Git y GitHub

Pregunta disparadora:

> ¿Qué ocurre si dos personas modifican el mismo archivo?

---

## Bloque 2 — Instalación y configuración (30 min)

Verificar instalación:

```bash
git --version
```

Configurar usuario:

```bash
git config --global user.name "Nombre"
git config --global user.email "email"
```

Actividad práctica guiada.

---

## Bloque 3 — Primer repositorio (1 hora)

```bash
mkdir mi-primer-repo
cd mi-primer-repo
git init
```

Crear archivo:

```
index.html
```

Agregar archivo:

```bash
git add index.html
```

Commit:

```bash
git commit -m "Primer commit"
```

---

## Bloque 4 — GitHub y sincronización (1 hora)

Conectar repositorio:

```bash
git remote add origin URL
```

Subir cambios:

```bash
git push -u origin main
```

Actividad: publicar primer repositorio.

---

## Bloque 5 — Branches (45 min)

```bash
git checkout -b feature-pagina
```

Modificar archivo y hacer commit.

Volver a main:

```bash
git checkout main
```

Merge:

```bash
git merge feature-pagina
```

---

## Bloque 6 — Mini proyecto (30 min)

Crear repositorio:

```
web-personal
```

Archivos:

```
index.html
about.html
style.css
```

Realizar:

* 3 commits
* 1 branch
* 1 merge

---

# Evaluación rápida

1. ¿Qué es un commit?
2. ¿Para qué sirve git add?
3. ¿Qué hace git push?
4. ¿Qué es una branch?
5. ¿Para qué se usa git clone?

---

# Resultado esperado

Al finalizar la clase el estudiante debe poder:

* crear repositorios
* registrar cambios
* trabajar con ramas
* sincronizar proyectos
* utilizar GitHub

---

# APÉNDICE C

# Diagramas conceptuales de Git

Los siguientes diagramas ayudan a comprender visualmente cómo funciona Git internamente.

---

## 1. Estructura de commits

Cada commit en Git forma parte de una cadena de versiones.

```
A --- B --- C --- D

A = primer commit
B = cambio 1
C = cambio 2
D = cambio 3
```

Cada commit guarda:

* estado completo del proyecto
* referencia al commit anterior
* autor
* fecha

---

## 2. Flujo de trabajo básico

```
Directorio de trabajo
        │
        │ git add
        ▼
Área de staging
        │
        │ git commit
        ▼
Repositorio local
        │
        │ git push
        ▼
Repositorio remoto (GitHub)
```

Este flujo es uno de los conceptos más importantes de Git.

---

## 3. Trabajo con ramas

Cuando se crea una rama, Git genera una línea paralela de desarrollo.

```
main
A --- B --- C
           \
            D --- E
            feature-login
```

Esto permite desarrollar nuevas funcionalidades sin afectar la rama principal.

---

## 4. Merge de ramas

Cuando el desarrollo en la rama secundaria termina, se puede integrar en la rama principal.

```
main
A --- B --- C -------- F
           \        /
            D --- E
            feature-login
```

El commit **F** representa el merge.

---

## 5. Fork y contribución en proyectos open source

```
Repositorio original (upstream)
           │
           │ Fork
           ▼
Repositorio en tu cuenta
           │
           │ Clone
           ▼
Tu computadora
           │
           │ Cambios
           ▼
Commit → Push → Pull Request
```

Este es el flujo típico de contribución en proyectos open source.

---

## 6. Ciclo completo de desarrollo con Git

```
Editar código
     │
     ▼
git add
     │
     ▼
git commit
     │
     ▼
git push
     │
     ▼
Repositorio remoto
     │
     ▼
otros desarrolladores
     │
     ▼
git pull
```

Este ciclo se repite continuamente durante el desarrollo de un proyecto.
