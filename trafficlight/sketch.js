// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/
let lastTimeSwitchedColor;
let state = 1;
let redLightDuration = 3000;
let greenLightDuration = 4000;
let orangeLightDuration = 500;

function setup() {
  createCanvas(600, 600);
  lastTimeSwitchedColor = 0;
}

function draw() {
  background(255);
  drawOutlineOfLights();
  stateCheck();
  displayCorrectLights();
}




function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function stateCheck() {
  let elapsedTime = millis() - lastTimeSwitchedColor;
  if (state === 1 && elapsedTime  >= redLightDuration) {
    state = 2;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 2 && elapsedTime >= greenLightDuration) {
    state = 3;
    lastTimeSwitchedColor = millis();
  }
  else if (state === 3 && elapsedTime >= orangeLightDuration) {
    state = 1;
    lastTimeSwitchedColor = millis();
  }
}

function displayRedLight() {
  fill(255, 0, 0);
  ellipse(width/2, height/2 - 65, 50, 50);
}
function displayYellowLight() {
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50); //middle
}
function displayGreenLight() {
  fill(0, 255, 0);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function displayCorrectLights() {
  if (state === 1) {
    displayRedLight();
  }
  else if (state === 2) {
    displayGreenLight();
  }
  else if (state === 3) {
    displayYellowLight();
  }
}
