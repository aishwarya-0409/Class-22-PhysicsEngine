
const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;


function setup() {
  createCanvas(800,400);
  
 engine = Engine.create();
 world = engine.world;
var object_option = { isStatic : true }
 object = Bodies.rectangle(200,200,400,50,object_option);
 var obj_option = { restitution : 1.0 }
 obj = Bodies.circle(220,100,10,obj_option)

 World.add(world,object);
 World.add(world,obj);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,50)
  ellipse(obj.position.x,obj.position.y,30)
}