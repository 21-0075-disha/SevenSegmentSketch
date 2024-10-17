/* Simulation of Seven Segment Display
  change the arrays to see the numbers!
  
  Electronic Devices - Display Unit (Data Presentation)
*/
let all_dgts = [0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 0x72, 0x7F, 0x7B,0x00];
let odd_dgts=[0x30,0x79,0x5B,0x72,0x7B,0x00];
let even_dgts=[0x7E,0x6D,0x33,0x5F,0x7F,0x00];
let index = 0;

function setup() {
  createCanvas(500, 500);
  frameRate(1);
}
//change the arrays and see
function draw() {
  background(0);
  translate(10,10);
  sevenSegment(all_dgts[index]);
  index = (index + 1) % all_dgts.length;
}
//change color from here
function getColor(val, shift) {
  let r = 0;
  let g = 100;
  let b = 255;
  let a = 40+255 * ((val >> shift) & 1);
  return color(r, g, b, a);
}
//configuration
function sevenSegment(val) {
  let val_1=78,val_2=18,val_3=98;
  push();
  noStroke();
  noFill();

  fill(getColor(val, 6));
  rect(60, 20, val_1, val_2, 10, 10); //A

  fill(getColor(val, 5));
  rect(140, 40, val_2, val_3, 10, 10); //B

  fill(getColor(val, 4));
  rect(140, 160, val_2, val_3, 10, 10);//C

  fill(getColor(val, 3));
  rect(60, 260, val_1, val_2, 10, 10); //D

  fill(getColor(val, 2));
  rect(40, 160, val_2, val_3, 10, 10); //E

  fill(getColor(val, 1));
  rect(40, 40, val_2, val_3, 10, 10); //F

  fill(getColor(val, 0));
  rect(60, 140, val_1, val_2, 10, 10); //G
  pop();
}
