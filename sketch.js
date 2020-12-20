
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
ground1= new Ground(400,690,800,30)
paper1= new Paper(80,500,50)
bin1= new Bin(505,635,20,80)
bin2= new Bin (600,663,172,20)
bin3= new Bin (700,635,20,80)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  paper1.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode===32) {
Matter.Body.applyForce(paper1.body,paper1.body.position,{x:200,y:-300})
	}
	
}



