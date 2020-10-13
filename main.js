let rectangleBtn = document.getElementById("rectangle-btn");
let triangleBtn = document.getElementById("triangle-btn");
let squareBtn = document.getElementById("square-btn");
let circleBtn = document.getElementById("circle-btn");
let recHeightInput = document.getElementById("rectangle-height");
let recWidthInput = document.getElementById("rectangle-width");
let sideLengthInput = document.getElementById("square-length");
let radiusInput = document.getElementById("radius-length");
let triHeightInput = document.getElementById("triangle-height");

class Shape {
  constructor() {}
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
    let sideLengthValue = parseInt(sideLengthInput.value);
    console.log(sideLengthValue);
  }
}

class Rectangle extends Shape {
  constructor(recHeight, recWidth) {
    super();
    this.recHeight = recHeight;
    this.recWidth = recWidth;
    let recHeightValue = parseInt(recHeightInput.value);
    let recWidthValue = parseInt(recWidthInput.value);
    console.log(recHeightValue);
    console.log(recWidthValue);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
    let radiusValue = parseInt(radiusInput.value);
    console.log(radiusValue);
  }
}

class Triangle extends Shape {
  constructor(triHeight) {
    super();
    this.triHeight = triHeight;
    let triHeightValue = parseInt(triHeightInput.value);
    console.log(triHeightValue);
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
