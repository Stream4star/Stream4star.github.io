// Sound demo
// Marghoob Dar
//

//let x = 0;
//let y = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
  light();
  //fill(200);
  //moon = ellipse(width/2,height/2, 300, 300);
}

funtion light() {
  if (mouseIsPressed) {

    for (a=0; a < width/10; a++) {
      fill(255);
      ellipse(mouseX, mouseY, a, a);
    }
  }
}

funtion bounce(x_, y_, accel, speed) {
  let x_ = mouseX;
  let y_ = mouseY;
  
}
