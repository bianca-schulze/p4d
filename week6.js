let y = 0;
var x = 0;
let speed = 0;
let gravity = 0.4;
let newColor
var colours = [ "#131A12", "#253425","#384D37", "#4B674A", "#5D815C", "#709B6E"];
var cnum = 1;
var time = 0;
var gpos = 390;

function keyTyped() {
    if (key === ' ') {
        if (gpos == 390) {
            gpos = 0;
            gravity = -0.4;
        }
        else {
            gpos = 390;
            gravity = 0.4
        }
    }
}

function setup() {
  createCanvas(500, 500);

  newColor = color(colours[0]);

  background(newColor);
  
}

function displayBall() {
    noStroke ();
    ellipse(125, y+50, 100, 100);
}

function moveBall() {
  y = y + speed;
  speed = speed + gravity;
}

function bounceBall() {
  if (y < gpos && gpos == 0) {
    // reverse the speed
    speed = -0.95 * speed;
    // change colour
    cnum += 1;
    newColor = color(colours[cnum]);
    if(cnum == 5){
         cnum = 0;
    }
  }
  else if (y > gpos && gpos == 390) {
    // reverse the speed
    speed = -0.95 * speed;
    // change colour
    cnum += 1;
    newColor = color(colours[cnum]);
    if(cnum == 5){
         cnum = 0;
  }
}  
}

function draw() {
    background(newColor)
    displayBall();
    bounceBall(); 
    moveBall();
    //text
    fill('white');
    textSize(65); 
    text('Bianca', 245, 230);
    text('Design', 245, 305);
    textFont('Bodini');
    

}




