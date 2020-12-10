
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1 ,bin2 ,bin3 ,paperObject, dustbin;

function preload()
{
	dustbin = loadImage("Images/dustbin.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = createSprite(650, 585, 200, 20);
	dustbin1.addImage(dustbin);
	dustbin1.scale = 0.5;

//	bin1 = new Dustbin(650, 650, 200, 20);
	bin2 = new Dustbin(600, 610, 20, 100);
	bin3 = new Dustbin(700, 610, 20, 100);
	ground = new Ground(400, 680, 800, 20);
	paperObject = new Paper(200, 600, 35);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255);

 // bin1.display();
  bin2.display();
  bin3.display();
 paperObject.display();
  ground.display();
  
  drawSprites();
}

function keyPressed()
{
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:13,y:-85})
}
}

