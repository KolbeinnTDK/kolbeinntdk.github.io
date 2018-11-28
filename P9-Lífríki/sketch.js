// Hér kemur kóðinn þinn:
var robot = [];
var robotP;

function setup(){
    createCanvas(1280,606);
    for (var i = 0; i < 1; i=i+1){
      robot[i] = new Robot(random(0,width),random(0,height),random(25,50),random(25,50),random(0,255),100);
    }
    robotP = new Robot(width/2,height/2,60,60,0,100);


}

function draw(){
    background(255,255,0);
    rectMode(CENTER);
    fill(0,255,0);
    rect(width/2,height/2,width/10*9,height/10*9,200)
    for (var i = 0; i < robot.length; i=i+1){
      robot[i].show();
      robot[i].move();
      robot[i].flame();

      robotP.show();
      robotP.pmove();
      robotP.flame();
    }
}

function keyPressed(){
  if(keyIsDown(32)){
    robot.splice(0,1);
  }
}

function mousePressed(){
  robot.push(new Robot(mouseX,mouseY,random(25,50),random(25,50),random(0,255),100));
}

class Robot{
  constructor(x,y,lengd,haed,color,fire){
    this.x = x;
    this.y = y;
    this.lengd = lengd;
    this.haed = haed;
    this.color = color;
    this.fire = fire;
    this.speedX = 10;
    this.speedY = 5;
  }

  show(){
      rectMode(CENTER);
      noStroke();

      //jet
      fill(255-this.color);
      rect(this.x,this.y+70*this.haed/100,this.lengd*1.4,this.haed*1.5,50,50,10,10);
      fill(200,this.color,this.color)
      triangle(this.x-40*this.lengd/100,this.y+145*this.haed/100,this.x-60*this.lengd/100,this.y+145*this.haed/100,this.x-50*this.lengd/100,this.y+200*this.fire/100*this.haed/100);
      triangle(this.x+40*this.lengd/100,this.y+145*this.haed/100,this.x+60*this.lengd/100,this.y+145*this.haed/100,this.x+50*this.lengd/100,this.y+200*this.fire/100*this.haed/100);

      //haus
      fill(this.color);
      rect(this.x,this.y,this.lengd,this.haed);
      fill(this.color,200,0);
      ellipse(this.x+0.2*this.lengd,this.y,this.lengd*0.45,this.haed*0.45);
      ellipse(this.x-0.2*this.lengd,this.y,this.lengd*0.45,this.haed*0.45);

      //búkur
      fill(this.color);
      rect(this.x,this.y+100*this.haed/101,this.lengd-10*this.lengd/50,this.haed);

      //LFótur
      rect(this.x-30*this.lengd/100,this.y+198*this.haed/100,this.lengd*0.2,this.haed)

      //RFótur
      rect(this.x+30*this.lengd/100,this.y+198*this.haed/100,this.lengd*0.2,this.haed)
    }

    move(){
      if(this.x > width || this.x < 0){
        this.speedX = this.speedX*-1;
      }
      if(this.y < 0 || this.y > height){
        this.speedY = this.speedY*-1;
      }
      if(this.speedX>12){
        this.speedX = 10;
      }
      if(this.speedY>6){
        this.speedY = 5;
      }
      if(this.speedX<-12){
        this.speedX = -10;
      }
      if(this.speedY<-6){
        this.speedY = -5;
      }


      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      this.speedX = this.speedX + random(-1,1);
      this.speedY = this.speedY + random(-1,1);
    }

    flame(){
      this.fire = random(73,130);
    }

    pmove(){
      if(keyIsDown(87) && this.y>0){
        this.y = this.y -5
      }
      if(keyIsDown(83) && this.y<height){
        this.y = this.y +5
      }
      if(keyIsDown(68) && this.x<width){
        this.x = this.x +5
      }
      if(keyIsDown(65) && this.x>0){
        this.x = this.x -5
      }
    }
}
