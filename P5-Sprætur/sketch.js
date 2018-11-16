// Hér kemur kóðinn þinn
var circle;
var basket;
var ball = 100;
var x = 200
var y = 200

function preload() {
    circle = loadImage('assets/circle.png');
    basket = loadImage('assets/basket.png'); //https://en.wikipedia.org/wiki/Basketball_(ball)
}

function setup() {
    createCanvas(400,400);
    background(circle);
}

function draw() {
    if(!mouseIsPressed){
        imageMode(CORNER);
        background(circle);
        imageMode(CENTER);
        image(basket,x,y,ball,ball);
        ball = ball*1.05;
    }
    if(ball > 400){
      ball = 1;
    }

    if(keyIsDown(65) && x > 0){
      x = x - 10;
    }
    if(keyIsDown(68) && x < 400){
      x = x + 10;
    }
    if(keyIsDown(87) && y > 0){
      y = y - 10;
    }
    if(keyIsDown(83) && y < 400){
      y = y + 10;
    }
}
