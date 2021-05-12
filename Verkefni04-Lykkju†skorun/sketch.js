function setup() {
    createCanvas(500, 500);
    frameRate(2)
  }
  
  function draw() {
    background(255,215,0);
    
    for(var x = 400; x >= 40; x -= 40){
        
        fill(random(52,235), 52, random(52,235));
        ellipse(250, 250, x, x);
    }
    
  }