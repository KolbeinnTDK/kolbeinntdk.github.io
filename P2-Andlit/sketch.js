// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var mouth1Y = 180;
var mouth2Y = 180;
var mouth2Width = 10;
var noseHeight = 10;
var noseWidth = 10;

function setup(){
    createCanvas(300,400);
    background(200,200,200);
    rectMode(CENTER)
    noStroke();
}

function draw(){
  background(180);

  fill(110, 44, 0);
  ellipse(150,130,faceWidth,faceHeight);

  fill(120, 66, 18);
  ellipse(150,200,faceWidth,faceHeight);

  fill(245, 203, 167);
  rect(150, 150, faceWidth, faceHeight,100);

  fill(231, 76, 60);
  ellipse(150 ,mouth1Y,30,30);

  fill(245, 203, 167);
  ellipse(150 ,mouth2Y-10,mouth2Width,30);

  fill(0);
  ellipse(150,160,noseWidth,noseHeight)

  fill(255);
  ellipse(130,150,eyeSize+10,eyeSize);
  ellipse(170,150,eyeSize+10,eyeSize)

  fill(52,152,219);
  ellipse(130,150,eyeSize-5,eyeSize-1);
  ellipse(170,150,eyeSize-5,eyeSize-1);

  textSize(20);
  text("Hello",126,320);
  //.....kóði sem staðsetur augun m.v. x, y, faceWidth og faceHeight ætti að koma hér.

}

function mousePressed(){
  //Í hvert sinn sem músinni er smellt fá breyturnar ný gildi.
  faceWidth  = random(75,  150);
  faceHeight = random(100, 200);
  eyeSize    = random(10,  30);
  mouth1Y    = random(180, 200);
  mouth2Y    = random(180, mouth1Y);
  mouth2Width= random(20,50);
  noseWidth  = random(10,30);
  noseHeight = random(10,30);
}
