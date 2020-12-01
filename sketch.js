var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var PLAY;
var END;
var gameState = PLAY;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 80, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6;

	//creating the package sprite and its body
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	boxleft = createSprite(width/2 - 100, 600, 20, 100);
	boxleft.shapeColor = "red";

	boxleftbody = Bodies.rectangle(width/2 - 80, 600, 20, 100, {isStatic: true})
	World.add(world, boxleftbody);

	boxright = createSprite(width/2 + 100, 600, 20, 100);
	boxright.shapeColor = "red";

	boxrightbody = Bodies.rectangle(width/2 + 120, 600, 20, 100, {isStatic: true})
	World.add(world, boxrightbody);

	boxbottom = createSprite(width/2, 640, 200, 20);
	boxbottom.shapeColor = "red";

	boxbottombody = Bodies.rectangle(width/2, 620, 200, 20, {isStatic: true})
	World.add(world, boxbottombody);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
 /* if(gameState === PLAY){

	helicopterSprite.visible = true;
    helicopterSprite.y=World.mouseY;
  helicopterSprite.x=World.mouseX;

  if(packageSprite.isTouching(groundSprite)){
	packageSprite.restitution = .3
  }	
  }*/
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody, false);
    
  }
}



