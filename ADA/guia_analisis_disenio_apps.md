# Guía Completa: Del Análisis a la Implementación en Ingeniería de Software

## Tabla de Contenidos
1. [Introducción](#introducción)
2. [Fase 1: Requerimientos](#fase-1-requerimientos)
3. [Fase 2: Análisis de Requerimientos](#fase-2-análisis-de-requerimientos)
4. [Fase 3: Diseño del Diagrama de Clases](#fase-3-diseño-del-diagrama-de-clases)
5. [Fase 4: Modelado UML](#fase-4-modelado-uml)
6. [Fase 5: Diseño de Base de Datos](#fase-5-diseño-de-base-de-datos)
7. [Fase 6: Validación y Documentación](#fase-6-validación-y-documentación)

---

## Introducción

Este documento describe el proceso metodológico para analizar una aplicación desde la etapa de requerimientos hasta la implementación física de la base de datos. Seguir este proceso garantiza que el software cumpla con los requisitos del cliente y tenga una arquitectura robusta y escalable.

### Objetivos del Análisis
- Comprender completamente lo que el cliente necesita
- Identificar restricciones técnicas y de negocio
- Diseñar una solución que sea mantenible y escalable
- Documentar decisiones arquitectónicas
- Facilitar la implementación y mantenimiento

---

## Fase 1: Requerimientos

### 1.1 Requerimientos Funcionales (RF)

**¿Qué son?** Describen QUÉ debe hacer el sistema. Son acciones, procesos o funcionalidades específicas.

**Características:**
- Definen comportamientos y funciones
- Son verificables y medibles
- Se pueden implementar directamente en código

**Ejemplo - Sistema de Gestión de Inventario:**
```
RF1: El sistema debe permitir registrar nuevos productos
RF2: El sistema debe permitir actualizar el stock de productos
RF3: El sistema debe generar reportes de inventario bajo
RF4: El sistema debe mantener un historial de movimientos
```

**Estructura recomendada:**
```
Identificador: RF#
Nombre: Descripción breve
Descripción: Explicación detallada
Actor: Quién realiza la acción
Precondición: Qué debe ser verdad antes
Flujo principal: Pasos del caso de uso
Postcondición: Qué sucede después
```

### 1.2 Requerimientos No Funcionales (RNF)

**¿Qué son?** Definen CÓMO debe funcionar el sistema. Son restricciones de calidad, desempeño y seguridad.

**Categorías principales:**

| Categoría | Ejemplo |
|-----------|---------|
| **Rendimiento** | El sistema debe responder en menos de 2 segundos |
| **Escalabilidad** | Soportar hasta 10,000 usuarios concurrentes |
| **Disponibilidad** | Disponibilidad del 99.9% |
| **Seguridad** | Encriptación de datos sensibles |
| **Mantenibilidad** | Código documentado y modular |
| **Usabilidad** | Interfaz intuitiva para usuarios no técnicos |
| **Compatibilidad** | Funcionar en navegadores modernos |

**Ejemplo - Sistema de Gestión de Inventario:**
```
RNF1: Performance - El sistema debe consultar 10,000 registros en < 1 segundo
RNF2: Seguridad - Autenticación con contraseña encriptada
RNF3: Disponibilidad - Disponibilidad 24/7 excepto mantenimiento
RNF4: Compatibilidad - Funcionar en Chrome, Firefox, Safari
```

---

## Fase 2: Análisis de Requerimientos

### 2.1 Construcción de Casos de Uso

**Objetivo:** Especificar exactamente cómo los actores interactúan con el sistema.

**Elementos:**
- **Actor:** Usuario o sistema externo
- **Precondición:** Estado necesario antes de usar el caso de uso
- **Flujo Normal:** Secuencia típica de pasos
- **Flujos Alternativos:** Variaciones o excepciones
- **Postcondición:** Estado después de completar el caso de uso

**Ejemplo: Caso de Uso "Registrar Producto"**

```
ID: CU-001
Nombre: Registrar Nuevo Producto
Actor Primario: Gerente de Inventario
Precondiciones: 
  - El usuario está autenticado
  - Tiene permisos de administración

Flujo Normal:
  1. El usuario accede a la sección "Productos"
  2. Selecciona "Crear Nuevo Producto"
  3. Ingresa datos: nombre, descripción, precio
  4. El sistema valida la información
  5. El producto se registra en la BD
  6. El sistema muestra confirmación

Flujos Alternativos:
  Alt 1: Datos incompletos
    - 3a. El usuario no completa todos los campos
    - 4a. El sistema muestra errores de validación
    - El caso de uso termina sin registrar el producto

Postcondiciones:
  - El producto existe en la base de datos
  - El gerente puede verlo en la lista de productos
```

### 2.2 Diccionario de Datos

**Objetivo:** Definir conceptos clave del dominio del problema.

**Formato:**
```
Término: Inventario
Definición: Conjunto de productos disponibles en almacén
Datos Asociados:
  - Código único
  - Cantidad disponible
  - Ubicación física
  - Fecha de última actualización
Responsabilidades:
  - Mantener registro actualizado
  - Alertar cuando está bajo
```

### 2.3 Matriz de Trazabilidad

**Objetivo:** Asegurar que cada requerimiento esté relacionado con al menos un caso de uso.

| ID Requerimiento | Descripción | Casos de Uso | Prioridad |
|-----------------|-------------|--------------|-----------|
| RF1 | Registrar productos | CU-001 | Alta |
| RF2 | Actualizar stock | CU-002, CU-003 | Alta |
| RF3 | Generar reportes | CU-004 | Media |

---

## Fase 3: Diseño del Diagrama de Clases

### 3.1 Identificación de Clases

**Paso 1: Extraer Sustantivos del Análisis**

Del análisis anterior, identificamos conceptos principales:
- Producto
- Inventario
- Movimiento
- Usuario
- Reporte

**Paso 2: Definir Responsabilidades de Cada Clase**

```
Clase: Producto
Responsabilidades:
  - Almacenar datos del producto
  - Validar datos del producto
  - Calcular valores (descuentos, etc.)

Clase: Inventario
Responsabilidades:
  - Mantener listado de productos
  - Buscar productos
  - Registrar movimientos
```

### 3.2 Estructura de una Clase

```
Clase: Producto
├── Atributos:
│   - id: int
│   - nombre: string
│   - descripcion: string
│   - precio: double
│   - stock: int
│   - estado: boolean
│
├── Métodos:
│   - crearProducto(datos): void
│   - actualizarProducto(datos): void
│   - obtenerDetalles(): Producto
│   - validarDatos(): boolean
│
└── Propiedades:
    - Visibilidad: + public, - private, # protected
    - Mutabilidad: constante, variable
```

### 3.3 Relaciones entre Clases

#### Asociación
```
Inventario -------- (contiene) -------- Producto
      1                                    *
```
"Un Inventario contiene muchos Productos"

#### Herencia (Generalización)
```
           Persona
          /      \
     Usuario   Gerente
```
"Usuario y Gerente heredan de Persona"

#### Composición
```
Factura ●────── LineaFactura
        1              *
```
"Una Factura tiene muchas LineaFactura (dependencia fuerte)"

#### Agregación
```
Carrito ○────── Producto
        1            *
```
"Un Carrito agrega Productos (dependencia débil)"

### 3.4 Diagrama de Clases Ejemplo

```
┌─────────────────────┐
│      Usuario        │
├─────────────────────┤
│ - id: int          │
│ - nombre: string   │
│ - email: string    │
│ - password: string │
├─────────────────────┤
│ + login()          │
│ + logout()         │
│ + actualizar()     │
└─────────────────────┘
         △
         │ hereda
         │
┌─────────────────────┐
│  GerenceInventario  │
├─────────────────────┤
│ - permisos: List   │
├─────────────────────┤
│ + registrarProducto()│
│ + generarReporte()  │
└─────────────────────┘
         │
         │ usa
         ▼
┌─────────────────────┐        ┌──────────────────┐
│     Inventario      │◇────▶  │    Producto     │
├─────────────────────┤  1   * ├──────────────────┤
│ - id: int          │        │ - id: int       │
│ - nombre: string   │        │ - nombre: string│
├─────────────────────┤        │ - precio: double│
│ + buscar()         │        │ - stock: int    │
│ + agregar()        │        ├──────────────────┤
│ + eliminar()       │        │ + validar()     │
└─────────────────────┘        └──────────────────┘
```

---

## Fase 4: Modelado UML

### 4.1 Tipos de Diagramas UML Necesarios

#### 4.1.1 Diagrama de Casos de Uso
**Propósito:** Mostrar la interacción entre actores y el sistema.

```
         ┌─────────────────┐
         │     ACTORES     │
         └─────────────────┘
                │
    ┌───────────┼───────────┐
    │           │           │
    │      Gerente      Usuario
    │
    │   ┌─────────────────────┐
    │   │   SISTEMA DE VENTA  │
    │   │                     │
    │   │  ◯ Registrar Venta  │
    │   │  ◯ Ver Reportes     │
    │   │  ◯ Actualizar Stock │
    │   │                     │
    │   └─────────────────────┘
```

#### 4.1.2 Diagrama de Clases (ya visto en Fase 3)

#### 4.1.3 Diagrama de Secuencia
**Propósito:** Mostrar el orden temporal de interacciones entre objetos.

```
Usuario     Sistema     BaseDatos
  │           │            │
  │─ click ──▶│            │
  │           │            │
  │           │─ validar ──▶│
  │           │◀─ resultado │
  │           │            │
  │           │─ guardar ──▶│
  │           │◀─ OK        │
  │◀─ mensaje─│            │
  │           │            │
```

#### 4.1.4 Diagrama de Estado
**Propósito:** Mostrar los estados de una entidad y transiciones.

```
    ┌──────────────┐
    │ Nuevo        │
    └──────┬───────┘
           │ crear()
           ▼
    ┌──────────────┐      editar()
    │ Pendiente    │◀─────────────────┐
    └──────┬───────┘                  │
           │                       ┌──┴──────────┐
           │ aprobar()             │ En Edición  │
           ▼                       └────────────┘
    ┌──────────────┐
    │ Aprobado     │
    └──────┬───────┘
           │ archivar()
           ▼
    ┌──────────────┐
    │ Archivado    │
    └──────────────┘
```

#### 4.1.5 Diagrama de Componentes
**Propósito:** Mostrar la estructura física del sistema.

```
┌─────────────────────────┐
│    Capa Presentación    │
│  ┌──────────────────┐   │
│  │  Interfaz Web    │   │
│  └──────────────────┘   │
└────────────┬────────────┘
             │
┌────────────▼────────────┐
│   Capa Lógica Negocio   │
│  ┌──────────────────┐   │
│  │  Controladores   │   │
│  │  Servicios       │   │
│  └──────────────────┘   │
└────────────┬────────────┘
             │
┌────────────▼────────────┐
│  Capa Acceso Datos      │
│  ┌──────────────────┐   │
│  │  Repositorios    │   │
│  │  DAOs            │   │
│  └──────────────────┘   │
└────────────┬────────────┘
             │
             ▼
        Base de Datos
```

### 4.2 Notación UML Esencial

**Visibilidad de Atributos/Métodos:**
```
+ public
- private
# protected
~ package
```

**Multiplicidad:**
```
1       : exactamente uno
0..1    : cero o uno
0..*    : cero o muchos
1..*    : uno o muchos
5..10   : entre 5 y 10
*       : muchos (indeterminado)
```

**Tipos de Relaciones:**
```
Herencia:        ──△
Realización:     - - △
Asociación:      ──
Agregación:      ──◇
Composición:     ──●
Dependencia:     - - ▶
```

---

## Fase 5: Diseño de Base de Datos

### 5.1 Transformación de Clases a Tablas

**Reglas de Transformación:**

#### Regla 1: Clase → Tabla
```
Clase: Producto
    │
    ▼
Tabla: PRODUCTOS
  - Cada atributo → Columna
  - Atributo identificador → Clave primaria
  - Métodos NO se incluyen
```

#### Regla 2: Atributos → Columnas
```
Atributo: nombre: string (50 caracteres)
    │
    ▼
Columna: nombre VARCHAR(50) NOT NULL
```

#### Regla 3: Asociación 1 a Muchos
```
Inventario (1) ──── (Muchos) Producto
    │
    ▼
Tabla PRODUCTO agrega:
  - inventario_id (clave foránea)
  - FOREIGN KEY (inventario_id) REFERENCES INVENTARIO(id)
```

#### Regla 4: Herencia
```
Opción A: Una tabla por clase
  Tabla: USUARIO (id, nombre, email, password)
  Tabla: GERENTE (id_usuario, permisos)

Opción B: Una tabla para la jerarquía
  Tabla: USUARIO
    - id
    - nombre
    - email
    - password
    - tipo (ENUM: 'usuario', 'gerente')
    - permisos (solo si tipo='gerente')
```

#### Regla 5: Relación Muchos a Muchos
```
Producto (Muchos) ──── (Muchos) Categoría
    │
    ▼
Tabla intermedia: PRODUCTO_CATEGORIA
  - id (pk)
  - producto_id (fk)
  - categoria_id (fk)
```

### 5.2 Modelo Entidad-Relación (ER)

**Notación:**
```
┌──────────────┐
│  INVENTARIO  │
├──────────────┤
│ id (PK)      │
│ nombre       │
│ ubicacion    │
└──────────────┘
       │ 1
       │
      contiene
       │
       │ *
       ▼
┌──────────────────┐
│  PRODUCTOS       │
├──────────────────┤
│ id (PK)          │
│ nombre           │
│ precio           │
│ stock            │
│ inventario_id(FK)│
└──────────────────┘
```

### 5.3 Normalización

**Objetivo:** Eliminar redundancia y anomalías.

#### Primera Forma Normal (1NF)
- Todos los atributos contienen valores atómicos (no multivalores)

❌ Incorrecto:
```
USUARIO
├─ id: 1
├─ nombre: Juan
└─ telefonos: [555-1234, 555-5678]
```

✅ Correcto:
```
USUARIO
├─ id: 1
├─ nombre: Juan

TELEFONO
├─ id: 1
├─ usuario_id: 1
└─ numero: 555-1234
```

#### Segunda Forma Normal (2NF)
- Cumple 1NF
- Todos los atributos no clave dependen completamente de la clave primaria

❌ Incorrecto:
```
VENTA_PRODUCTO
├─ venta_id (PK)
├─ producto_id (PK)
├─ cantidad
├─ nombre_producto ← No depende de la venta
```

✅ Correcto:
```
VENTA
├─ id (PK)
├─ fecha
├─ total

VENTA_PRODUCTO
├─ venta_id (PK, FK)
├─ producto_id (PK, FK)
└─ cantidad
```

#### Tercera Forma Normal (3NF)
- Cumple 2NF
- Elimina dependencias transitivas

❌ Incorrecto:
```
ESTUDIANTE
├─ id
├─ nombre
├─ carrera_id
└─ nombre_carrera ← Depende de carrera_id, no de estudiante
```

✅ Correcto:
```
CARRERA
├─ id (PK)
└─ nombre

ESTUDIANTE
├─ id (PK)
├─ nombre
└─ carrera_id (FK)
```

### 5.4 Diseño Físico de la Base de Datos

**Ejemplo de Esquema SQL:**

```sql
-- Tabla de Usuarios
CREATE TABLE USUARIO (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    tipo ENUM('usuario', 'gerente') DEFAULT 'usuario',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estado BOOLEAN DEFAULT true
);

-- Tabla de Inventarios
CREATE TABLE INVENTARIO (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    ubicacion VARCHAR(200),
    gerente_id INT NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (gerente_id) REFERENCES USUARIO(id)
);

-- Tabla de Productos
CREATE TABLE PRODUCTO (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    inventario_id INT NOT NULL,
    estado BOOLEAN DEFAULT true,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inventario_id) REFERENCES INVENTARIO(id)
);

-- Tabla de Movimientos (historial)
CREATE TABLE MOVIMIENTO (
    id INT PRIMARY KEY AUTO_INCREMENT,
    producto_id INT NOT NULL,
    tipo ENUM('entrada', 'salida') NOT NULL,
    cantidad INT NOT NULL,
    razon VARCHAR(200),
    usuario_id INT NOT NULL,
    fecha_movimiento TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES PRODUCTO(id),
    FOREIGN KEY (usuario_id) REFERENCES USUARIO(id)
);

-- Tabla de Categorías
CREATE TABLE CATEGORIA (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Tabla intermedia para relación Muchos a Muchos
CREATE TABLE PRODUCTO_CATEGORIA (
    producto_id INT NOT NULL,
    categoria_id INT NOT NULL,
    PRIMARY KEY (producto_id, categoria_id),
    FOREIGN KEY (producto_id) REFERENCES PRODUCTO(id),
    FOREIGN KEY (categoria_id) REFERENCES CATEGORIA(id)
);

-- Índices para optimización
CREATE INDEX idx_producto_inventario ON PRODUCTO(inventario_id);
CREATE INDEX idx_movimiento_producto ON MOVIMIENTO(producto_id);
CREATE INDEX idx_usuario_email ON USUARIO(email);
```

### 5.5 Diccionario de Base de Datos

| Tabla | Columna | Tipo | PK | FK | Null | Descripción |
|-------|---------|------|----|----|------|-------------|
| USUARIO | id | INT | ✓ | | NO | Identificador único |
| USUARIO | nombre | VARCHAR(100) | | | NO | Nombre del usuario |
| USUARIO | email | VARCHAR(100) | | | NO | Email único |
| USUARIO | tipo | ENUM | | | | Tipo de usuario: usuario o gerente |
| PRODUCTO | id | INT | ✓ | | NO | Identificador único |
| PRODUCTO | inventario_id | INT | | ✓ | NO | Referencia a inventario |

---

## Fase 6: Validación y Documentación

### 6.1 Checklist de Validación

- [ ] ¿Todos los requerimientos funcionales tienen casos de uso?
- [ ] ¿Todos los casos de uso tienen flujos alternativos definidos?
- [ ] ¿El diagrama de clases refleja el análisis?
- [ ] ¿Todas las relaciones en el diagrama se mapean a la BD?
- [ ] ¿La base de datos está normalizada (3NF mínimo)?
- [ ] ¿Todas las claves foráneas están definidas?
- [ ] ¿Hay índices en claves foráneas y búsquedas frecuentes?
- [ ] ¿Se han considerado reglas de negocio en constraints?
- [ ] ¿La documentación es completa?
- [ ] ¿Se ha validado con el cliente?

### 6.2 Documento de Especificación Técnica

**Estructura recomendada:**

```
1. INTRODUCCIÓN
   - Propósito del documento
   - Alcance del proyecto

2. REQUERIMIENTOS
   2.1 Requerimientos Funcionales
   2.2 Requerimientos No Funcionales

3. ANÁLISIS
   3.1 Casos de Uso
   3.2 Diccionario de Datos

4. DISEÑO
   4.1 Diagrama de Clases
   4.2 Diagramas UML (Secuencia, Estado, etc.)
   4.3 Arquitectura del Sistema

5. BASE DE DATOS
   5.1 Modelo ER
   5.2 Esquema Relacional
   5.3 Diccionario de BD
   5.4 Scripts SQL

6. RESTRICCIONES Y REGLAS DE NEGOCIO
   - Validaciones
   - Reglas de integridad

7. CONSIDERACIONES DE SEGURIDAD

8. PLAN DE IMPLEMENTACIÓN

9. APÉNDICES
```

### 6.3 Trazabilidad Completa

Crear matriz que conecte:
- Requerimiento → Caso de Uso → Clase → Tabla

Ejemplo:
```
RF2: Actualizar stock
  ├─ CU-002: Registrar Movimiento
  │   ├─ Clase: Movimiento
  │   │   └─ Tabla: MOVIMIENTO
  │   └─ Clase: Producto
  │       └─ Tabla: PRODUCTO
```

---

## Conclusión

El proceso de análisis de ingeniería de software es iterativo. Cada fase valida y refina las anteriores:

1. **Requerimientos** → Define QUÉ necesita el sistema
2. **Análisis** → Especifica CÓMO funcionará
3. **Diseño de Clases** → Estructura la lógica del negocio
4. **Modelado UML** → Visualiza todas las perspectivas
5. **Base de Datos** → Materializa los datos persistentes
6. **Validación** → Asegura calidad y completitud

Seguir esta metodología garantiza que el software sea:
- **Correcto:** Cumple con los requerimientos
- **Mantenible:** Código bien organizado
- **Escalable:** Base de datos optimizada
- **Documentado:** Fácil de entender y modificar

---

## Referencias y Recursos

- UML: [https://www.omg.org/spec/UML/](https://www.omg.org/spec/UML/)
- Casos de Uso: Cockburn, A. "Writing Effective Use Cases"
- Normalización: Date, C.J. "An Introduction to Database Systems"
- Ingeniería de Software: Sommerville, I. "Software Engineering"
