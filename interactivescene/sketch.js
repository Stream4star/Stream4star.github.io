

let speed;
let x, y;
let drawX, drawY;
let accel;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255);
  speed = 3;
  accel = 1;
  drawX = mouseX;
  drawY = mouseY;
}

function draw() {
  circle();
}

//funtion Interactive() {

//}

function circle() {
  fill(0);
  ellipse(drawX, drawY, 10, 10);
  drawY += speed;
  speed += accel;
  if (drawY >= height) {
    speed *= -1;
  }
}
