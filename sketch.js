const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  stand1 = new Ground(390,260,250,10);
  stand2 = new Ground(700,200,200,10);

  box1 = new Box(330,235,30,40);
  box2 = new Box(360,235,30,40);
  box3 = new Box(390,235,30,40);
  box4 = new Box(420,235,30,40);
  box5 = new Box(450,235,30,40);
  box6 = new Box(360,195,30,40);
  box7 = new Box(390,195,30,40);
  box8 = new Box(420,195,30,40);
  box9 = new Box(390,155,30,40);

  ball = new Ball(200,200);

  boxes1 = new Box(640,435,30,40);
  boxes2 = new Box(670,455,30,40);
  boxes3 = new Box(700,435,30,40);
  boxes4 = new Box(730,435,30,40);
  boxes5 = new Box(750,435,30,40);
  boxes6 = new Box(670,395,30,40);
  boxes7 = new Box(700,395,30,40);
  boxes8 = new Box(730,395,30,40);
  boxes9 = new Box(670,355,30,40);

  slingshot = new SlingShot(ball.body,{x:200, y:200});
  
  
}

function draw() {
  background(0);  
  
  ground.display();
  stand1.display();
  stand2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  boxes1.display();
  boxes2.display();
  boxes3.display();
  boxes4.display();
  boxes5.display();
  boxes6.display();
  boxes7.display();
  boxes8.display();
  boxes9.display();

  ball.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}