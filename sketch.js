// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let map;
let d = 0;
let a;
let state;
let x = 0;
let y = 0;
let size = 100;

function preload() {
  map = loadImage("maps/map4.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  image(map,windowWidth/2,windowHeight/2,windowWidth,windowHeight);
}

function draw() {
  // push();
  // translate(windowWidth/2, windowHeight/2);
  // pop();
  // background(220);
  stroke(255, 0, 0);
  strokeWeight(3);
  fill(0, 80, 200);
  a = ellipse(x, y, size, size);

}

function moveStates() {

}

function mousePressed() {
  x = mouseX;
  y = mouseY;
  // if(dist(mouseX, mouseY, x, y) <= size/2) {
  //
  // }
  // state = ceil(random(0, 4));
  // if (state === 1) {
  //   x += 50;
  // }
  // if (state === 2) {
  //   y += 50;
  // }
  // if (state === 3) {
  //   x -= 50;
  // }
  // if (state === 4) {
  //   y -= 50;
  // }
  // a = ellipse(d, d, 100,100);
  // d += 50;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PLAN FOR MAP AND AVATAR
//
// RANDOM MAP METHOD
//  - Create a map whose stop values are storoed in some way
//  - Create a move function that follows the exact path and moves on the exact coordinates of the checkpoints, such as shifting the avatar's coordinates to that of the next stop point
//  - Create a means of input or selection of route choices for the user when choosing between multiple routes
//  - Create a function or feature where the user can click on the checkpoints: Start simple with dividing the map into borders with each side(s) taking you to their routes when clicked.
//  - When checkpoint click feature is complete, try to polish it by lowering down the clcik range to the borders of the checkpoint icon(ellipses)
//  - Create a scroll/move function for moving through the map: only when map is complete and after map fits in canvas with all features working
//  - Create a function or object that creates a random map: must include a function that sets map size(does not change for random or set map), a function that randomly creates a
//    random number of checkpoints within a limited range, a function that acts as the border to prevent checkpoints from leaving the map, a function or code that prevents checkpoints from
//    overlapping(perhaps by usinng the arrays that store the values of each checkpoint), and function that randomly creates a line of its own choice and size(within limitations) which at
//    its x2, y2 will be the coordinates for the next checkpoint
//  - Create a function that chooses a random image out of the given options to use a map background for lnadscape illustrations
//  - If there is time, create a means of sections of challenges that correlate with the map illustrations and a means to place the right challenegs on the right checkpoints (such as water related games on a lake checkpoint or fast time game on volcano checkpoints, etc.)
//
