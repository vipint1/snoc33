const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bgImg
let snowflakes = []; // array to hold snowflake objects

function preload(){
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  

}

function draw() {
  background(bgImg);
   
  let t = frameCount / 100000;

   
  Engine.update(engine);

  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

