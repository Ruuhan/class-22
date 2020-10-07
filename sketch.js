const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;
var ground
function setup() {
  createCanvas(400,400);
	engine = Engine.create();
	world = engine.world;
var groundoptions={isStatic:true}
	ground=Bodies.rectangle(200,380,400,10,groundoptions);
	World.add(world,ground);
	var options = {
	restitution:1	
	}
	object = Bodies.circle(200, 100, 20, options);
	World.add(world, object);
console.log(object.position.x);
console.log(object.position.y);

}

function draw() {
  background(0);
Engine.update(engine);
rectMode(CENTER); 
ellipseMode(CENTER)
  ellipse(object.position.x, object.position.y, 40, 40);
  rect(ground.position.x,ground.position.y,400,10);
}
