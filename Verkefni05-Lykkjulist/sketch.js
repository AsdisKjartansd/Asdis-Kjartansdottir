function setup() {
    createCanvas(500, 500);
    frameRate(5)
  }
  
  function draw() {
    background(235,235,235);
    
    for(var i=0; i < 200; i+= 1){
        var size = random(10, 50)
        fill(random(75,181), random(59, 181), 29);
        ellipse(random(0,500), random(0,500), size, size);
        rect(random(0,500), random(0,500), size, size)
    }
    
  }