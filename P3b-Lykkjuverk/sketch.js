// Hér kemur kóðinn þinn
function setup(){
    createCanvas(400,4000);
    background(0,110,106);
    fill(0);
    colorMode(HSB);
    frameRate(1);

}

function draw(){
    for(var i = 0; i < 4050; i = i + 0.5){
    fill(random(100,200),100,100);
    rect(230+i,i*i*i,40,40,2);
    rect(130-i,i*i*i,40,40,2);
    rect(90-i,i*i,40,40,2);
    rect(270+i,i*i,40,40,2);
    fill(random(100),100,100);
    rect(180,i*i,40,40,2);
    fill(random(360),360,360) ;
    rect(350-i,i*i+30,50,40,2);
    rect(i,i*i+30,50,40,2);
  }
}
