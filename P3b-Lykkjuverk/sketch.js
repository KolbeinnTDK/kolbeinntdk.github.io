// Hér kemur kóðinn þinn:
function setup(){
    createCanvas(400,400);
    background(0,110,106);
    fill(0);
    colorMode(HSB);
    frameRate(5);

}

function draw(){
    for(var i = 0; i < 450 ; i = i + 0.5){
    fill(random(360),360,360);
    rect(350-i,i*i,50,40);
    rect(i,i*i,50,40);
    fill(random(100,300),100,100);
    rect(230+i,i*i,40,40);
    rect(130-i,i*i,40,40);
    rect(90-i,i*i,40,40);
    rect(270+i,i*i,40,40);
    fill(random(100),100,100);
    rect(180,i*i,40,40);
  }
}
