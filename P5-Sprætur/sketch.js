// Hér kemur kóðinn þinn
var circle;
var basket;
var x = 1;
var y = 1;

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
        image(basket,mouseX,mouseY,x,y);
        x = x + x*0.05;
        y = y + y*0.05;
    }
    if(x > 400){
      x = 1;
      y = 1;
    }
}
