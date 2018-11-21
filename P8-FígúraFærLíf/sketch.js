// Hér kemur kóðinn þinn:
var robot1, robot2;

function setup(){
    createCanvas(1280,606);
    robot1 = new Robot(400,400,100,100,0,100);
    robot2 = new Robot(200,300,100,100,255,100);
}

function draw(){
    background(255,255,0);
    robot1.show();
    robot1.move();
    robot1.flame();

    robot2.show();
    robot2.move();
    robot2.flame();
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
      if(this.speedX<-12 || this.speedY>12){
        this.speeX = 10*-this.speedX/this.speedX;
      }
      if(this.speedY<-6 || this.speedY>6){
        this.speedY = 5*-this.speedY/this.speedY;
      }


      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      this.speedX = this.speedX + random(-1,1);
      this.speedY = this.speedY + random(-1,1);
    }

    flame(){
      this.fire = random(73,130);
    }
}
