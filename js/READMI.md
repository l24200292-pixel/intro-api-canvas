# 🎨 Introducción a la API de Canvas

Este es un proyecto introductorio utilizando la **API de Canvas de HTML5**. Aquí exploro cómo configurar un lienzo de dibujo dinámico, aplicar estilos profesionales con CSS y trazar figuras geométricas usando JavaScript.

## 🚀 Características del Proyecto

* **Lienzo Dinámico:** El área de dibujo calcula su tamaño usando JavaScript (`window.innerWidth` y `window.innerHeight`) para ocupar exactamente el 50% de la pantalla.
* **Diseño UI Moderno:** El lienzo está estilizado con CSS para parecer una tarjeta flotante. Incluye bordes redondeados (`border-radius`), una sombra suave (`box-shadow`) y un borde morado que contrasta con el fondo.
* **Dibujo Bidimensional:** Uso del contexto `2d` de Canvas para renderizar y colorear un rectángulo rosa.
* **Buenas Prácticas:** El código fuente de JavaScript está detalladamente comentado utilizando el estándar **JSDoc**.

##  Estructura de Archivos

El proyecto mantiene los lenguajes separados para una mejor organización:

```text
/ (Carpeta Raíz)
├── index.html       # Estructura principal y enlaces a los recursos
├── main.js          # Lógica de dibujo e inicialización del lienzo
└── css/
    └── styles.css   # Estilos visuales y diseño del canvas