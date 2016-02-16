var pix;
var piy;
var s;
var size;
var old_angle;
var new_angle;
var r, b, g;

var dir = 1;
var revolution = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);

  // set increment value
  increment = -PI / 100;
  s = 0;

  // set arc start
  old_angle = HALF_PI;
  new_angle = HALF_PI;

  // set colors
  r = 200;
  g = 200 / 2;
  b = 200;
  
  // location of circle
  pix = 200;
  piy = 200;
  
  //size of circle
  size = 200;
}

function draw() {

  // 3 revolutions
  
  if (revolution < 300){
    //s = s - increment;
    old_angle = new_angle;
    new_angle = new_angle - increment;
    r = r + dir;
    g = g + (-.5 * dir);
    b = b + dir;
  
    stroke(g, b, r, 150);
    fill(g, b, r, 150);
    strokeWeight(1);
  
    // P5.JS ARC
    //arc(a,b,c,d,start,stop,[mode])
    // a Number: x - coordinate of the arc 's ellipse
    // b Number: y - coordinate of the arc 's ellipse
    // c Number: width of the arc 's ellipse by default
    // d Number: height of the arc 's ellipse by default
    // start Number: angle to start the arc, specified in radians
    // stop Number: angle to stop the arc, specified in radians[mode] String: optional parameter to determine the way of drawing the arc
    arc(pix, piy, size, size, 2*PI-new_angle, 2*PI-old_angle);
  }

  // change colors
  if (r <= 100 || r >= 200) {
    // change direction of 
    dir = -1 * dir;
    
    // 1 revolution = 100
    revolution = revolution + .5 ;
  }

}