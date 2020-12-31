const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var divisions = [];
var plinkos = [];
var particles = [];
var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,800,20);

  for(var k = 0; k <=width; k= k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
}

function draw() {
  background(0);
Engine.update();
ground.display();

}