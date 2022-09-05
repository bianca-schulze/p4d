/*
    Paste the code for your week 5 exercise below.
*/

//var hw, hh
//var shoppingList = ["eggs", "milk", "sugar"];

var midx = 250; 
var midy = 250;
var direction = "down";


function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(149, 206, 147);
    noStroke ();
    fill("white");
    circle(midx-110, midy, 150, 150);
    // make circle go down 
    if (direction=="down") {
        midy=midy+1;
}
// make circle go up 
if (direction=="up") {
    midy=midy-1;
}

// switch directions 
if (midy>=425) {
    direction = "up";
}
if (midy<=75) {
    direction = "down";
}
// circle two
fill(255, 128)
circle(midx-110, midy+5, 150, 150);
    // make circle go down 
    if (direction=="down") {
        midy=midy+2;
}
// make circle go up 
if (direction=="up") {
    midy=midy-2;
}

// switch directions 
if (midy>=420) {
    direction = "up";
}
if (midy<=70) {
    direction = "down";
}

 //text
 fill('white');
 textSize(65);
 text('Bianca', 245, 230);
 text('Design', 245, 305);
 textFont('Bodini');

}


// function draw() {
//     background(149, 206, 147);
//     circleA (cx,cy);
// }
    
// function circleA(cx,cy); {  
//     noStroke ();
//     fill("white");
//     circle(cx-110, cx, 150, 150);
//     // make circle go down 
//     if (direction=="down") {
//         cy=cy+1;
// }
// // make circle go up 
// if (direction=="up") {
//     cy=cy-1;
// }

// // switch directions 
// if (cy>=425) {
//     direction = "up";
// }
// if (cy<=75) {
//     direction = "down";
// }

//  //text
//  fill('white');
//  textSize(65);
//  text('Bianca', 245, 230);
//  text('Design', 245, 305);
//  textFont('Bodini');

// }




//if (windowWidth > windowHeight) {
//    createCanvas(windowHeight, windowHeight);
//    else(createCanvas(windowWidth, windowWidth);)
//}
//
//hw = width / 2;
//hh = height / 2;
//
//rectMode(CENTER);
//
//angleMode(DEGREES);

//translate(hw, hh);
//rotate(frameCount % 360)
//rect(0, 0, frameCount % height, frameCount % height);
//resetMatrix();
