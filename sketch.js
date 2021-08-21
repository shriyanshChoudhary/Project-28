
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 

function preload() {
  db = loadImage("dustbingreen.png");
}

function setup() {
    createCanvas(800, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(100,600, 70);
    ground = new Ground(400,680,800,20);
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100);
    db1 = createSprite(610,585,10,10);
    db1.addImage(db);
    db1.scale=0.5;
    rope1 = new Rope(paper1.body,{x:50,y:400});

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background("white");
  
  Engine.update(engine);
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  rope1.display();

drawSprites();
  
}



function mouseDragged() {

  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {

  rope1.fly();

}
