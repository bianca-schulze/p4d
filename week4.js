function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(149, 206, 147);

    noStroke();
    circle(140, 175, 150)
    circle(140, 325, 150);
    fill('rgba(255,255,255, 0.50)')
    circle(135, 170, 150)
    circle(135, 320, 150);
    fill('rgba(255,255,255, 0.25)')
    circle(130, 165, 150)
    circle(130, 315, 150);

    fill('white');
    textSize(65);
    text('Bianca', 245, 230);

    text('Design', 245, 305);
    textFont('Bodini');

    describe('canvas with  mint green background');
}
