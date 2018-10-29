// Hér kemur kóðinn þinn:
var eyeSize = 20;
var faceWidth = 100;
var faceHeight = 150;
var x = 150;
var y = 150;
var mouth1Y = 180
var mouth2Y = 180
var mouth2Width = 10
var noseHeight = 10
var noseWidth = 10

function setup(){
    createCanvas(300,400);
    background(200,200,200);
    rectMode(CENTER)
    noStroke();
}

function draw(){
  background(180);

  fill(110, 44, 0);
  ellipse(x,130,faceWidth,faceHeight);

  fill(120, 66, 18);
  ellipse(x,200,faceWidth,faceHeight);

  fill(245, 203, 167);
  rect(x, y, faceWidth, faceHeight,100);

  fill(231, 76, 60);
  ellipse(x ,mouth1Y,30,30);

  fill(245, 203, 167);
  ellipse(x ,mouth2Y-10,mouth2Width,30);

  fill(0);
  ellipse(x,y+10,noseWidth,noseHeight)

  fill(255);
  ellipse(x-20,y,eyeSize+10,eyeSize);
  ellipse(x+20,y,eyeSize+10,eyeSize)

  fill(52,152,219);
  ellipse(x-20,y,eyeSize-5,eyeSize-1);
  ellipse(x+20,y,eyeSize-5,eyeSize-1);

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
