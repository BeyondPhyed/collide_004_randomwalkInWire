/*
https://p5play.org/
https://piqnt.com/planck.js/
*/

let ball, ball2, rad;
let balls = [];
let howmany, howmany_BigBall;
var w, h, deltaH;
var ang1, ang2;

function setup() {
  w = 150; h = windowHeight;
  createCanvas(w, h);
  world.gravity.y = 5;
  ang1 = 10;
  ang2 = 30;
  rad = 10;
  deltaH = 0.4*h;
  
  howmany = 30;
  howmany_BigBall = 20;
   
  generateBall();
  setBoundary();
  setBigBall();
}

function draw() {
  ball.move();
  
  if (balls[0].y < h) {
    console.log(balls[0].y)    
  }  
  
  clear();
}

function generateBall() {
  //set ball
  
  for (let i = 0; i < howmany; i++) {
    ball = new Sprite();
    ball.diameter = rad;
    ball.shapeColor = (150);
    ball.x = random(rad, w-rad);
    ball.y = (i+5)*h/howmany;
    ball.vel.x = random(-7, 7);
    ball.vel.y = random(-7, 7);
    ball.bounciness = 1; 
    
    balls[i] = ball;
  }
  balls[0].shapeColor = (255)
  
}

function setBoundary() {
  //set boundary
  
  //left
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 10;
  floor.h = 2*h;
  floor.rotation = 0;
  floor.x = 5;
  floor.y = 0;

    //right
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 10;
  floor.h = 2*h;
  floor.rotation = 0;
  floor.x = w - floor.w;
  floor.y = 0;

}

function setBigBall() {
  //set Big balls
  
  for (let i = 0; i < howmany_BigBall; i++) {
    ball = new Sprite();
    ball.collider = 'static';
    ball.diameter = 3*rad;
    ball.shapeColor = (30);
    ball.x = (i%2+1)*w/3;
    ball.y = (i+1)*h/howmany_BigBall;
  }    
  
}

function reGenerate() {
  
  
  if (ball.y >= 0.5*h) {
    ball.visible = false;
    
  }
  
}