var bukur = 100;
var r = 250;
var g = 0;
var b = 0;
var eyeX = 20;
var eyeY = 40;

function setup() {
  createCanvas(350,550);
  rectMode(CENTER);
}
function draw() {
  background(18, 95, 184);
  // Teiknum búkinn
  fill(236,36,94);
  rect(mouseX,mouseY,40,bukur);
  // Teiknum hausinn
  fill(255);
  ellipse(mouseX,mouseY - bukur/2, 80,80);
  // Teiknum augun
  fill(100);
  ellipse (mouseX - 25,mouseY - bukur/2, eyeX, eyeY);
  ellipse (mouseX + 25,mouseY - bukur/2, eyeX,eyeY);
  // Teiknum fæturna
  line (mouseX - 20, mouseY + bukur/2, mouseX - 20, mouseY + bukur/2 + 50);
  line (mouseX + 20, mouseY + bukur/2, mouseX + 20, mouseY + bukur/2 + 50);
  //hattur
  fill(r,g,b)
  rect(mouseX, mouseY - (bukur/2) - 40, 90, 10)
  fill(r,g,b)
  rect(mouseX, mouseY - (bukur/2) - 70, 50, 50)
}

function getColor(litur) {
    if (litur == 0) {
        return 'rgba(100,200,0,1)'
    } else {
        return 'rgba(250,0,100,1)'
    }

}

function mousePressed() {
	bukur = random (50,150);
  r = random (0,250);
  g = random (0,250);
  b = random (0,250);
  eyeX = random(10, 30)
  eyeY = random(30, 50)


}
    