// Hér kemur kóðinn þinn

function setup(){
    createCanvas(700,500);
    noStroke();
}

function draw(){
    background(255,200,0);
    fill(mouseY/1.96078431373,36,mouseX/2.74509803922);
    if(mouseY<height/5){
      rect(0,0,width,height/5);
      fill(mouseY/1.96078431373,255,mouseX/2.74509803922);
      ellipse(width/2,height/5-50,400,60);
    }
    if(mouseY>height/5 && mouseY<height/5*2){
      rect(0,height/5,width,height/5);
      fill(mouseY/1.96078431373,255,mouseX/2.74509803922);
      ellipse(width/2,height/5*2-50,400,60);
    }
    if(mouseY>height/5*2 && mouseY<height/5*3){
      rect(0,height/5*2,width,height/5);
      fill(mouseY/1.96078431373,255,mouseX/2.74509803922);
      ellipse(width/2,height/5*3-50,400,60);
    }
    if(mouseY>height/5*3 && mouseY<height/5*4){
      rect(0,height/5*3,width,height/5);
      fill(mouseY/1.96078431373,255,mouseX/2.74509803922);
      ellipse(width/2,height/5*4-50,400,60);
    }
    if(mouseY>height/5*4 && mouseY<height){
      rect(0,height/5*4,width,height/5);
      fill(mouseY/1.96078431373,255,mouseX/2.74509803922);
      ellipse(width/2,height/5*5-50,400,60);
    }
}
