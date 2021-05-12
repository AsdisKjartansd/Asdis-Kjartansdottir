var r = 255;
var g = 30;
var b = 0;
var showCircle = false;

function setup() {
    createCanvas(500, 500);
  }

function draw() {
    background(255,215, 0);
    if ((mouseX < 250) && (mouseY < 250)) {
        fill(r, g, b)
        rect(0,0,250,250)
        if (showCircle) {
            fill(b, r, g)
            ellipse(250/2,250/2,100,100)

        }
    }
    if ((mouseX < 250) && (mouseY > 250)) {
        fill(r, g, b)
        rect(0,250,250,250)
        if (showCircle) {
            fill(b, r, g)
            ellipse(250/2,250+ 250/2,100,100)

        }
    }
    if ((mouseX > 250) && (mouseY < 250)) {
        fill(r, g, b)
        rect(250,0,250,250)
        if (showCircle) {
            fill(b, r, g)
            ellipse(250/2 + 250,250/2,100,100)

        }
    }
    if ((mouseX > 250) && (mouseY > 250)) {
        fill(r, g, b)
        rect(250,250,250,250)
        if (showCircle) {
            fill(b, r, g)
            ellipse(250/2+250,250/2+250,100,100)

        }
    }
    strokeWeight(0)
}

function keyPressed() {
    print(keyCode)
    if (keyCode === 32) {
      r = random(0, 235)
      g = random(0, 235)
      b = random(0, 235)
    }
  }

function mouseClicked() {
      showCircle = !showCircle
}
