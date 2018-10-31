// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(400,400);
    background(255,215,0);
    fill(0);
    colorMode(HSB);
    frameRate(2);
}

function draw(){
  for(var i = 300; i > 0 ; i = i - 30){
    fill(random(160,340),240,150);
    ellipse(200,200,i,i);
  }
}
