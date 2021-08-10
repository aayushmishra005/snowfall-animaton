const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var bg;
var snow=[]

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world
  
  //createSprite(400, 200, 50, 50);
  
}
function preload() {
  bg = loadImage("snow2.jpg");
}

function draw() {
  background(bg);  

  Engine.update(engine);
  
  if (frameCount%20 ===0){
    snow.push(new Snow(random(0,800),0))
  }
  for(var k =0 ; k < snow.length;k++ ){
    snow[k].display();
  }
    drawSprites();
}