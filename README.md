# 🎨 Canvas Lab: OOP & Random Geometry

Este proyecto es una exploración práctica de la **API de Canvas 2D** en HTML5, utilizando **Programación Orientada a Objetos (POO)** en JavaScript para crear y manipular elementos gráficos de forma dinámica y aleatoria.

---

## 🚀 Características del Proyecto

La aplicación demuestra tres niveles de complejidad en el manejo de gráficos:

1.  **Objeto Estático (`canvasOOP`):** Creación de una instancia de clase con parámetros fijos, posicionada matemáticamente en el centro del lienzo.
2.  **Objeto Aleatorio (`canvasRandom`):** Implementación de lógica para generar posición y tamaño al azar, asegurando que el objeto permanezca **dentro de los límites** del canvas.
3.  **Renderizado Múltiple (`canvasMultiple`):** Generación de una colección de objetos almacenados en un `Array`, con colores RGB calculados dinámicamente en cada iteración.

---

## 🛠️ Tecnologías y Conceptos

* **HTML5 Canvas API:** Uso de `getContext('2d')`, `arc()`, `fill()` y `stroke()`.
* **JavaScript Moderno (ES6+):** * **Clases:** Estructura de la clase `Circle` para encapsular datos y métodos.
    * **Lógica Matemática:** Uso de `Math.random()` y `Math.floor()`.
    * **Gestión de Arrays:** Uso de `.push()` para el almacenamiento de objetos.
* **Bootstrap 5:** Diseño responsivo y componentes de interfaz modernos (Cards, Navbar, Footer).

---

## 📐 Lógica Destacada

### Control de Bordes (Bounding Box)
Para evitar que los círculos se dibujen fuera del área visible, se implementó la siguiente fórmula de restricción:

```javascript
// El radio se resta del ancho total para que el centro nunca esté muy cerca del borde
let x = Math.random() * (canvas.width - (radio * 2)) + radio;
let y = Math.random() * (canvas.height - (radio * 2)) + radio;

📂Estructura de Archivos
Plaintext
├── index.html          # Estructura principal con Bootstrap 5
├── assets/
│   ├── css/
│   │   └── style.css   # Estilos personalizados y diseño responsivo
│   └── js/
│       └── main.js    # Lógica de la clase Circle y renderizado
└── README.md           # Documentación del proyecto

👤 Información del Desarrollador
Programador: Cristopher Rodríguez Pérez 

Institución: Instituto Tecnologico de Pachuca

Fecha: 09/03/2026

Proyecto: Introducción a Gráficos 2D con OOP