let newColor;
var cnum = 0;
var palette = 0
var colours = [[ "#131A12", "#253425","#384D37", "#4B674A", "#5D815C", "#709B6E"],[ "#4f000b", "#720026","#ce4257", "#ff7f51", "#ff9b54", "#fed9b7"],[ "#001214", "#001f29","#002837", "#003246", "#01394c", "#013f51"]]
let ball = {y:100, x:0, speed:0, gravity:0.4, ballShape:0}


function setup() {
    //makes canvas and initialises colour
    createCanvas(windowWidth, 2*windowHeight/3);
    newColor = color(colours[palette][0]);
    background(newColor);
  
}

function moveBall() {
    //ball movement rules
    ball.y +=ball.speed;
    ball.speed += ball.gravity;
}

function displayBall() {
    //displays ball in chosen shape
    shape = ball.ballShape;
    if(shape == 0) {
        noStroke();
        ellipse(windowWidth/2, ball.y+50, 100, 100);
    }
    else if(shape == 1) {
        noStroke();
        square((windowWidth/2)-50, ball.y, 100);
    }
}

function bounceBall() {
    if (ball.y > (2*windowHeight/3)-100 || ball.y < 0) {
        //reverse speed and move ball to boundary
        ball.speed = -0.95*ball.speed;
        if(ball.y < 100) {
            ball.y = 0;
        }
        else {
            ball.y = (2*windowHeight/3)-100;
        }
        //change colour
        cnum += 1;
        newColor = color(colours[palette][cnum]);
        if(cnum == 5){
            cnum = 0;
        }
    }
}

// the bouncing ball was inspired by https://editor.p5js.org/icm/sketches/SyojK4FjZ

function keyTyped() {
    //spacebar to switch gravity
    if (key == ' ') {
        ball.gravity = -ball.gravity;
    }
    //c to change ball shape
    if (key == 'c') {
        shape = ball.ballShape;
        if (shape == 0) {
            shape = 1
        }
        else {
            shape = 0 
        }
        ball.ballShape = shape
        console.log(shape)
    }
    //b to change background palette
    if (key == 'b') {
        if (!(palette > 2)) {
            palette += 1 
        }
        else {
            palette = 0
        }
    }
}

function windowResized() {
    //resizes canvas when window is changed
    resizeCanvas(windowWidth, 2*windowHeight/3);
}

function draw() {
    background(newColor);
    //text
    fill('white');
    textSize(65); 
    text('Bianca', windowWidth*0.66, 230);
    text('Design', windowWidth*0.66, 305);
    textFont('Bodini');

    //instructions
    fill('white');
    textSize(25); 
    text('Press "space" to change the gravity', windowWidth*0.1, 230);
    text('Press "c" to change the ball', windowWidth*0.1, 260);
    text('Press "b" to change the background', windowWidth*0.1, 290);
    textFont('Bodini');
    
    displayBall();
    moveBall();
    bounceBall();

}