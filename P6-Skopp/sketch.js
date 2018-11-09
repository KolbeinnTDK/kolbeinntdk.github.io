// Hér kemur kóðinn þinn
var x = 100;
var y = 200;
var hradiX = 5;
var hradiY = 5;
var bolti = 20;

var spadiBreidd = 150;
var spadiTykkt = 20;

var spadiY1;
var spadiX1 = 200;

var spadiY2;
var spadiX2 = 200;

var stig1 = 0;
var stig2 = 0;



function setup() {
    createCanvas(500,600);
    rectMode(CENTER);
    spadiY1 = height - 50;
    spadiY2 = 50;
}

function draw(){
    background(0);

    x = x + hradiX;
    y = y + hradiY;

    if(x<0 || x>width){
      hradiX = hradiX*-1;
    }

    if(y>height){
      hradiY = hradiY*-1;
      stig1 = stig1  + 1;
      spadiBreidd = 150;
    }

    if(y<0){
      hradiY = hradiY*-1;
      stig2 = stig2  + 1;
      spadiBreidd = 150;

    }

    if(abs(spadiY1-y) < bolti/2 + spadiTykkt/2 && abs(spadiX1-x) < bolti/2 + spadiBreidd/2 && hradiY>0){
      hradiY = hradiY*-1;
      spadiBreidd = spadiBreidd -10;
    }

    if(abs(spadiY2-y) < bolti/2 + spadiTykkt/2 && abs(spadiX2-x) < bolti/2 + spadiBreidd/2 && hradiY<0){
      hradiY = hradiY*-1;
      spadiBreidd = spadiBreidd -10;
    }


    if (keyIsDown(65) && spadiX1>0){
      spadiX1= spadiX1-10;
    }
    if (keyIsDown(68) && spadiX1<width){
      spadiX1= spadiX1+10;
    }

    if (keyIsDown(LEFT_ARROW) && spadiX2>0){
      spadiX2= spadiX2-10;
    }
    if (keyIsDown(RIGHT_ARROW) && spadiX2<width){
      spadiX2= spadiX2+10;
    }


    fill(255,255,255);
    rect(x,y,bolti,bolti);
    rect(spadiX1,spadiY1,spadiBreidd,spadiTykkt);
    rect(spadiX2,spadiY2,spadiBreidd,spadiTykkt);
    text("Stig: " + stig1, 440,20);
    text("Stig: " + stig2, 20,580);
}
