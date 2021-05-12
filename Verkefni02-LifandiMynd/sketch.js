let x1, y1, x2, y2, x3, y3;
function setup() {
    createCanvas(400, 400);
    background(166, 236, 255);
    x1 = width / 2;
    y1 = height / 2;
    x2 = width / 2;
    y2 = height / 2;
    x3 = width / 2;
    y3 = height / 2;
  }

function draw() {
    fill(166, 236, 255)
    rect(0, 0, 400, 400)
    fill(108, 194, 79)
    rect(0, 300, 400, 100)

    fill(66, 62, 57)
    triangle(200, 200, 100, 300, 300, 300)

    fill(255, 72, 0);
    ellipse(x1, y1, 10, 10);
    strokeWeight(0);

    x1 = x1 + random(-1, 1);
    // Moving up at a constant speed
    y1 = y1 - 5;
    
    // Reset to the bottom
    if (y1 < 0) {
      y1 = height/2;
    }

    fill(255, 72, 0);
    ellipse(x2, y2, 10, 10);
    strokeWeight(0);

    x2 = x2 + random(-1, 1);
    // Moving up at a constant speed
    y2 = y2 - 1;
    
    // Reset to the bottom
    if (y2 < 0) {
      y2 = height/2;
    }

    fill(255, 72, 0);
    ellipse(x3, y3, 10, 10);
    strokeWeight(0);

    x3 = x3 + random(-1, 1);
    // Moving up at a constant speed
    y3 = y3 - 2;
    
    // Reset to the bottom
    if (y3 < 0) {
      y3 = height/2;
    }
    
}

