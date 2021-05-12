var boltiX = 200;
var boltiY = 200;
var hradiX = 3;
var hradiY = -4;
var boltiStaerd = 20;
var stig = 0;
var spadiBreidd = 100;
var spadiThykkt = 25;
var spadiY;
var g = 200;
var b = 230;
var t = 0;

function setup() {
	createCanvas(400,500);
	spadiY = height - 45;
	rectMode(CENTER);
	textFont("Courier New",16);
	textStyle(BOLD);
}

function draw() {
    background(255,g,0);
    // Reikna ný hnit út frá hraða boltans:
    boltiX = boltiX + hradiX;
    boltiY = boltiY + hradiY;
    // Athuga hvort boltinn snertir vegginn hægra megin:
    if ((boltiX > width-boltiStaerd/2))  {
        hradiX = hradiX * -1;
    }
    // Athuga hvort boltinn snertir vegginn vinsta megin:
    if ((boltiX < boltiStaerd))  {
        hradiX = hradiX * -1;
    }
  	// Athuga hvort boltinn snertir þakið
    if ((boltiY < boltiStaerd)) {
        hradiY = hradiY * -1;
    }
    if ((boltiY > height - boltiStaerd / 2)) {
        boltiX = 200;
        boltiY = 200;
        hradiX = 3;
        hradiY = -4;
        stig = 0;
        g = 0 //setja g sem 0 til að fá rauðan bakgrunn
    }
    if (g < 200) {
        //hækka aftur g upp í hverjum frame þangað til að hann er orðinn 200.
        g += 10
    }
    if (b < 230) {
        b += 20
    }
    if (t > 0) {
        t -= 20
    }
    // Athuga hvort bolti snertir spaða:
    if(abs(spadiY - boltiY) < boltiStaerd/2 + 5 && abs(mouseX - boltiX) < boltiStaerd/2 + spadiBreidd/2){
        hradiY = hradiY * -1;
        stig += 1; // auka stig
        hradiX *= 1.05; // auka hraða
        hradiY *= 1.05; // auka hraða
        b = 0
        t = 230

    }
        // Teikna spaðann
    fill (71, 42, 20); // skaft
    rect(mouseX+50, spadiY, 100,10);

    fill(242, 17, 43);
    ellipse(mouseX,spadiY ,spadiBreidd,spadiThykkt);
        // Teikna stigin
    fill(t,t,t);
    text("Stig: " + stig,10,20);
    // Teikna boltann
    fill(b,b,230);
    ellipse(boltiX, boltiY, boltiStaerd, boltiStaerd);
}