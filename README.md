# Proyecto Integrador - Programación Visual 2025

## Grupo 19  
**Repositorio:** `pv_tp_integrador_grupo19`

---

### Descripción del Proyecto

Este proyecto es una Single Page Application (SPA) desarrollada como Trabajo Práctico Integrador para la cátedra de **Programación Visual** de la carrera Analista Programador Universitario en la Facultad de Ingeniería de la Universidad Nacional de Jujuy (UNJu).

El objetivo principal es aplicar y consolidar los conocimientos adquiridos durante la cursada, desarrollando una aplicación web funcional y robusta. El proyecto simula un proceso de desarrollo iterativo, donde se implementan progresivamente diversas funcionalidades utilizando tecnologías del ecosistema JavaScript moderno como **React, Vite, y React Router DOM**.

La aplicación gestiona productos de una API externa, permitiendo su visualización, creación, edición, eliminación y la gestión de una lista de favoritos, utilizando un estado global centralizado con **Redux**.

---

### Requisitos Funcionales Implementados

La aplicación cuenta con las siguientes funcionalidades clave:

* **Página de Inicio (Home):** Muestra un listado de productos en formato de tarjetas (cards). Cada tarjeta incluye una imagen, nombre, precio y un botón para ver más detalles.
* **Gestión de Favoritos:**
    * Permite marcar y desmarcar productos como favoritos desde la vista principal y la de detalle.
    * El estado de los favoritos se maneja de forma global con **Redux**, siendo accesible desde toda la aplicación.
* **Página de Favoritos:** Una vista dedicada que muestra únicamente los productos marcados como favoritos.
* **Página de Detalle:** Al hacer clic en "Ver más detalles", se accede a una vista con información ampliada del producto.
* **Formulario de Creación y Edición:** Un formulario reutilizable para crear nuevos productos o editar los existentes, precargando los datos correspondientes.
* **Consumo de API:** Los datos de los productos se obtienen de la API externa `https://fakestoreapi.com/products` al iniciar la aplicación, utilizando **Fetch/Axios**, y se almacenan en el estado global.

---

### Tecnologías y Dependencias

* **Framework:** React 18+  
* **Bundler:** Vite  
* **Enrutamiento:** React Router DOM  
* **Manejo de Estado Global:** Redux Toolkit y React Redux  
* **Framework de UI:** Chakra UI  
* **Iconos:** React Icons  
* **Lenguaje:** JavaScript (JSX)  

---

### Instalación y Configuración

Sigue estos pasos para levantar el entorno de desarrollo en tu máquina local.

1. **Clonar el repositorio:**
    ```bash
    git clone https://github.com/usuario/pv_tp_integrador_grupo19.git
    cd pv_tp_integrador_grupo19
    ```

2. **Instalar dependencias:**
    ```bash
    npm install
    ```

---

### Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

* `npm run dev` — Inicia el servidor de desarrollo.  
* `npm run build` — Compila la aplicación para producción en la carpeta `/dist`.  
* `npm run preview` — Sirve la build de producción localmente para previsualizarla.

---

### Estructura del Proyecto

```
pv_tp_integrador_grupo19/
├── README.md
├── biome.json
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── font/
│       └── onyra.otf
└── src/
    ├── App.css
    ├── App.jsx
    ├── AppRouter.jsx
    ├── index.css
    ├── main.jsx
    ├── app/
    │   └── store.js
    ├── assets/
    ├── components/
    │   ├── FavButton.jsx
    │   ├── ProductoDetalle.jsx
    │   ├── RatingStars.jsx
    │   ├── Footer/
    │   │   └── index.jsx
    │   ├── Header/
    │   │   └── index.jsx
    │   └── NavBar/
    │       └── index.jsx
    ├── features/
    │   └── products/
    │       └── productsSlice.js
    ├── pages/
    │   └── Detalle.jsx
    └── views/
        ├── Favoritos/
        │   ├── index.jsx
        │   └── components/
        │       └── FavCard.jsx
        └── Home/
            ├── index.jsx
            └── components/
                └── ProductCard.jsx
```

---

### Integrantes del Grupo 19

- BRISA ANAHÍ BARRO [GitHub](https://github.com/BarroBrisa)  
- DARIO ABEL MARTINEZ [GitHub](https://github.com/martinezcabj12)  
- GIANFRANCO PEDRAZZANI [GitHub](https://github.com/GianPedr)  
- MATÍAS EMANUEL VARGAS [GitHub](https://github.com/matiasvargas-dev)  

---

> Para dudas o mejoras, contacta al equipo o revisa los comentarios en el código.

---

*Este proyecto fue realizado con fines educativos para la Facultad de Ingeniería - UNJu.*