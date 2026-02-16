/**
 * @fileoverview Dibuja una figura geométrica básica utilizando la API de Canvas.
 * @description
 * Este script es un ejemplo básico de inicialización y uso de un elemento <canvas> 
 * en HTML5. El programa localiza el lienzo, ajusta su tamaño al 50% de la pantalla,
 * configura un contexto de dibujo 2D y traza un cuadrado rosa utilizando 
 * coordenadas y dimensiones específicas.
 */

// ==========================================
// 1. OBTENCIÓN DEL ELEMENTO HTML
// ==========================================
var canvas = document.getElementById("Lienzo");

// ==========================================
// 2. AJUSTE DEL TAMAÑO DEL LIENZO (¡NUEVO!)
// ==========================================
// Usamos el objeto 'window' para obtener el ancho y alto actual de la pestaña del navegador.
// Multiplicamos por 0.5 para obtener exactamente el 50% de esa medida.
// Al asignar esto directamente a canvas.width y canvas.height, cambiamos la "resolución" real del lienzo.
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;

// ==========================================
// 3. INICIALIZACIÓN DEL CONTEXTO DE DIBUJO
// ==========================================
var ctx = canvas.getContext("2d");

// ==========================================
// 4. CONFIGURACIÓN DEL ESTILO
// ==========================================
// El color ahora es "rgb(255, 51, 255)", que corresponde a un tono rosa brillante/magenta.
ctx.fillStyle = "rgb(255, 51, 207)";

// ==========================================
// 5. EJECUCIÓN DEL DIBUJO
// ==========================================
// fillRect dibuja un rectángulo rellenado.
// - X (10): Inicia 10 píxeles a la derecha.
// - Y (10): Inicia 10 píxeles hacia abajo.
// - Ancho (500): El rectángulo medirá 500 píxeles de anchura.
// - Alto (500): El rectángulo medirá 500 píxeles de altura.
ctx.fillRect(10, 10, 200, 200);