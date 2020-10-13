let rectangleBtn = document.getElementById("rectangle-btn");
let triangleBtn = document.getElementById("triangle-btn");
let squareBtn = document.getElementById("square-btn");
let circleBtn = document.getElementById("circle-btn");
let recHeightInput = document.getElementById("rectangle-height");
let recWidthInput = document.getElementById("rectangle-width");
let sideLengthInput = document.getElementById("square-length");
let radiusInput = document.getElementById("radius-length");
let triHeightInput = document.getElementById("triangle-height");
let shapeContainer = document.getElementById("shape-container");
let sidePanel = document.getElementById("side-panel");
let shapePanel = document.getElementById("shape-type");
let shapeWidth = document.getElementById("shape-width");
let shapeHeight = document.getElementById("shape-height");
let shapeRadius = document.getElementById("shape-radius");
let shapeArea = document.getElementById("shape-area");
let shapePerimeter = document.getElementById("shape-perimeter");

class Shape {
  constructor() {
    
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
    let sideLengthValue = parseInt(sideLengthInput.value);
    this.newSquare = document.createElement("div");
    this.newSquare.style.backgroundColor = ("red");
    this.newSquare.style.height = sideLengthValue + "px";
    this.newSquare.style.width = sideLengthValue + "px";
    this.newSquare.style.position = "absolute"
    this.newSquare.style.top = Math.floor(Math.random()* Math.floor(600-sideLengthValue)) + "px"
    this.newSquare.style.left = Math.floor(Math.random()* Math.floor(600-sideLengthValue)) + "px"
    shapeContainer.appendChild(this.newSquare);
    console.log(sideLengthValue);
    this.newSquare.addEventListener ('dblclick', () => {
      shapeContainer.removeChild(this.newSquare);
    })
  }
}

class Rectangle extends Shape {
  constructor(recHeight, recWidth) {
    super();
    this.recHeight = recHeight;
    this.recWidth = recWidth; 
    let recHeightValue = parseInt(recHeightInput.value);
    let recWidthValue = parseInt(recWidthInput.value);
    this.newRectangle = document.createElement("div");
    this.newRectangle.style.backgroundColor = ("green");
    this.newRectangle.style.height = recHeightValue + "px";
    this.newRectangle.style.width = recWidthValue + "px";
    this.newRectangle.style.position = "absolute"
    this.newRectangle.style.top = Math.floor(Math.random()* Math.floor(600-recHeightValue)) + "px"
    this.newRectangle.style.left = Math.floor(Math.random()* Math.floor(600-recWidthValue)) + "px"
    shapeContainer.appendChild(this.newRectangle);
    console.log(recHeightValue);
    console.log(recWidthValue);
    this.newRectangle.addEventListener ('dblclick', () => {
      shapeContainer.removeChild(this.newRectangle);
    })
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    let radiusValue = parseInt(radiusInput.value);
    this.newCircle = document.createElement("div");
    this.newCircle.style.backgroundColor = ("purple");
    this.newCircle.style.borderRadius = "50%";
    this.newCircle.style.width = radiusValue + "px";
    this.newCircle.style.height = radiusValue + "px";
    this.newCircle.style.position = "absolute";
    this.newCircle.style.top = Math.floor(Math.random()* Math.floor(600-radiusValue)) + "px"
    this.newCircle.style.left = Math.floor(Math.random()* Math.floor(600-radiusValue)) + "px"
    shapeContainer.appendChild(this.newCircle);
    console.log(radiusValue);
    this.newCircle.addEventListener ('dblclick', () => {
      shapeContainer.removeChild(this.newCircle);
    })
  }
}

class Triangle extends Shape {
  constructor(triHeight) {
    super();
    this.triHeight = triHeight;
    let triHeightValue = parseInt(triHeightInput.value);
    console.log(triHeightValue);
    this.newTriangle = document.createElement("div");
    this.newTriangle.style.borderBottom = triHeightValue + "px solid yellow";
    this.newTriangle.style.borderLeft = triHeightValue/2 + "px solid transparent";
    this.newTriangle.style.borderRight = triHeightValue/2 + "px solid transparent";
    this.newTriangle.style.width = "0"
    this.newTriangle.style.height = "0"
    this.newTriangle.style.position = "absolute";
    this.newTriangle.style.top = Math.floor(Math.random()* Math.floor(600-triHeightValue)) + "px"
    this.newTriangle.style.left = Math.floor(Math.random()* Math.floor(600-triHeightValue)) + "px"
    shapeContainer.appendChild(this.newTriangle);
    this.newTriangle.addEventListener ('dblclick', () => {
      shapeContainer.removeChild(this.newTriangle);
    })
  }
}

rectangleBtn.addEventListener("click", function () {
  new Rectangle();
});

triangleBtn.addEventListener("click", function () {
  new Triangle();
});
squareBtn.addEventListener("click", function () {
  new Square();
});
circleBtn.addEventListener("click", function () {
  new Circle();
});
