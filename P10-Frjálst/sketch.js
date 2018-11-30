var box = [];

function setup(){
    createCanvas(500,500);
    background(200,200,0);
    box[i] = new Box(150,150,100,100)
    for (var i = 0; i < 2; i=i+1){
      box[i] = new Box(random(150,350),150,100,100)
  }
}

function draw(){
  line(50,50,50,450);
  line(50,450,450,450);
  line(450,450,450,50);
  line(450,50,50,50);

  fill(200,200,150);
  rect(50,50,100,100);
  rect(150,50,100,100);
  rect(250,50,100,100);
  rect(350,50,100,100);

  rect(50,150,100,100);
  rect(150,150,100,100);
  rect(250,150,100,100);
  rect(350,150,100,100);

  rect(50,250,100,100);
  rect(150,250,100,100);
  rect(250,250,100,100);
  rect(350,250,100,100);

  rect(50,350,100,100);
  rect(150,350,100,100);
  rect(250,350,100,100);
  rect(350,350,100,100);


    fill(0);
    for (var i = 0; i < box.length; i=i+1){
      box[i].show();
      box[i].move();
  }
  box[i].show();
  box[i].move();
}

function keyPressed(){
  if(keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)){
    box.push(new Box(250,250,100,100))
  }
}

class Box{
    constructor(x,y){
      this.x = x;
      this.y = y;
    }

    show(){
      rect(this.x,this.y,100,100)
    }

    move(){
      if(keyIsDown(RIGHT_ARROW) && this.x < 350){
        this.x = this.x + 100
      }
      if(keyIsDown(LEFT_ARROW) && this.x > 50){
        this.x = this.x - 100
      }
      if(keyIsDown(UP_ARROW) && this.y > 50){
        this.y = this.y - 100
      }
      if(keyIsDown(DOWN_ARROW) && this.y < 350){
        this.y = this.y + 100
      }
    }
}
