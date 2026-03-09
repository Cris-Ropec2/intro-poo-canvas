const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

/* const window_height = window.innerHeight;
const window_width = window.innerWidth; */

canvasOOP.height = "200"; //window_height;
canvasOOP.width = "300"; //window_width;

canvasRandom.height = "200";
canvasRandom.width = "300";

canvasMultiple.height = "200";
canvasMultiple.width = "300";

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  //Carga los valores predeterminados del objeto
  constructor(x, y, radius, color, text, backcolor, textcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
    this.textcolor = textcolor;
  }

  //Método para renderizar el objeto
  draw(context) {
    //Rellena el objeto
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();

    //Dibuja la línea del objeto
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();

    //Dibuja el texto al centro del objeto
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = this.textcolor;
    context.fillText(this.text, this.posX, this.posY);

    context.closePath();
  }
}

// 1. Definimos el radio primero (es necesario para calcular los límites de X e Y)
let randomRadius = Math.floor(Math.random() * 50 + 20); // Radio entre 20 y 70

// 2. Calculamos X: mínimo es el radio, máximo es el ancho menos el radio
let randomX = Math.random() * (canvasRandom.width - (randomRadius * 2)) + randomRadius;

// 3. Calculamos Y: mínimo es el radio, máximo es el alto menos el radio
let randomY = Math.random() * (canvasRandom.height - (randomRadius * 2)) + randomRadius;

let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 80, "rgb(182, 66, 245)", "Tec", "rgb(91, 250, 255)","rgb(252, 67, 67)" );
miCirculo.draw(ctx);


let miCirculoRandom = new Circle(randomX, randomY, randomRadius, "rgb(253, 193, 53)", "Tec", "rgb(83, 186, 52)", "rgb(91, 250, 255)");
miCirculoRandom.draw(ctxRandom);

let MaxCircles = 10;
let arrayCircle = [];

for (let i = 0; i < MaxCircles; i++) {
let randomRadius = Math.floor(Math.random() * 10 + 20); // Radio entre 20 y 70

let randomX = Math.random() * (canvasRandom.width - (randomRadius * 2)) + randomRadius;

let randomY = Math.random() * (canvasRandom.height - (randomRadius * 2)) + randomRadius;

  let RGBBorde = "rgb(" + (Math.random() * 360) + "," + (Math.random() * 360) + "," + (Math.random() * 360) + ")";
  let RGBFondo = "rgb(" + (Math.random() * 360) + "," + (Math.random() * 360) + "," + (Math.random() * 360) + ")";

  let miCirculoMultiple = new Circle(randomX, randomY, randomRadius, RGBBorde, i + 1, RGBFondo, "rgb(34, 174, 199)");

  arrayCircle.push(miCirculoMultiple);
  arrayCircle[i].draw(ctxMultiple);
}
