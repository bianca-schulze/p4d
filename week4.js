let midx = 250;
let midy = 250;

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(149, 206, 147);
    logoB(midx, midy);

}

function logoB(cx, cy) {

    //circle one
    noStroke();
    circle(cx - 110, cy - 75, 150);
    circle(cx - 110, cy + 75, 150);
    //circle two
    fill(255, 128);
    circle(cx - 115, cy - 80, 150);
    circle(cx - 115, cy + 70, 150);
    //circle three
    fill(255, 64);
    circle(cx - 120, cy - 85, 150);
    circle(cx - 120, cy + 65, 150);


    //text
    fill('white');
    textSize(65);
    text('Bianca', cx - 5, cy - 20);
    text('Design', cx - 5, cy + 55);
    textFont('Bodini');

    //description
    describe('canvas with  mint green background and text saying Bianca Design');
}
