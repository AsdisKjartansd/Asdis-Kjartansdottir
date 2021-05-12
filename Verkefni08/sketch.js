var bukur = 100;
var r = 250;
var g = 0;
var b = 0;
var eyeX = 20;
var eyeY = 40;
var rotation = 0;

function setup() {
  createCanvas(350,550);
  background(18, 95, 184);

}


function figure() {
    rectMode(CENTER);
    bukur = random (50,150);
    r = random (0,250);
    g = random (0,250);
    b = random (0,250);
    eyeX = random(10, 30)
    eyeY = random(30, 50)
    var hatLength = random(70, 150)
    // Teiknum búkinn
    fill(b,g,r);
    rect(mouseX,mouseY,40,bukur);
    // Teiknum hausinn
    fill(255);
    ellipse(mouseX,mouseY - bukur/2, 80,80);
    // Teiknum augun
    fill(b,b,r);
    ellipse (mouseX - 25,mouseY - bukur/2, eyeX, eyeY);
    ellipse (mouseX + 25,mouseY - bukur/2, eyeX,eyeY);
    // Teiknum fæturna
    line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
    line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
    //hattur
    fill(r,g,b)
    rect(mouseX, mouseY - (bukur/2) - 40, hatLength, 10)
    fill(r,g,b)
    rect(mouseX, mouseY - (bukur/2) - 70, 50, 50)
}

function mousePressed() {
    figure()
}
    