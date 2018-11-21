// Hér kemur kóðinn þinn:

function setup(){
    createCanvas(1280,606);

    rectMode(CENTER);
    noStroke();
}

function draw(){
    background(255,255,0);
    figure(width-mouseX,height-mouseY,100,100,0,random(73,130));
    figure(mouseX,mouseY,100,100,0,random(73,130));

}

function figure(x,y,lengd,haed,color,fire){


    //jet
    fill(255-color);
    rect(x,y+70*haed/100,lengd*1.4,haed*1.5,50,50,10,10);
    fill(200,color,color)
    triangle(x-40*lengd/100,y+145*haed/100,x-60*lengd/100,y+145*haed/100,x-50*lengd/100,y+200*fire/100*haed/100);
    triangle(x+40*lengd/100,y+145*haed/100,x+60*lengd/100,y+145*haed/100,x+50*lengd/100,y+200*fire/100*haed/100);

    //haus
    fill(color);
    rect(x,y,lengd,haed);
    fill(color,200,0);
    ellipse(x+0.2*lengd,y,lengd*0.45,haed*0.45);
    ellipse(x-0.2*lengd,y,lengd*0.45,haed*0.45);

    //búkur
    fill(color);
    rect(x,y+100*haed/101,lengd-10*lengd/50,haed);

    //LFótur
    rect(x-30*lengd/100,y+198*haed/100,lengd*0.2,haed)

    //RFótur
    rect(x+30*lengd/100,y+198*haed/100,lengd*0.2,haed)

    if(mouseIsPressed){
      x = x +100
    }
}
