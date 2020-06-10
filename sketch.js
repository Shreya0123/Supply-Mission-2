var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
//var leftRed, bottomRed, RightRed;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var Red1;
var Red2;
var Red3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	Red1 = new RedRectangle(400,650,400,20);
    Red2 = new RedRectangle(200,620,30,80);
    Red3 = new RedRectangle(600,620,30,80);


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9, isStatic:true});
	World.add(world, packageBody);
	
	//Red1=Bodies.rectangle(350,650,20,100,{isStatic:true});
	//World.add(world,Red1);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  Red1.display();
  Red2.display();
  Red3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



