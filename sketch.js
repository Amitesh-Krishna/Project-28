
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground,boy,stone;
var m1,m2,m3,m4,m5,m6,m7,m8;
var chain;

var released = false;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	imageMode(CENTER);

	tree = new Tree(630,515,300,400);
	ground = new Ground(400,695,800,20);

	stone = new Stone(120,550);

	boy = new Boy(120,640,125,190);

	m1 = new Mango(560,400,25,25);
	m2 = new Mango(620,380,25,25);
	m3 = new Mango(680,420,25,25);
	m4 = new Mango(520,440,25,25);
	m5 = new Mango(600,460,25,25);
	m6 = new Mango(650,350,25,25);
	m7 = new Mango(620,430,25,25);
	m8 = new Mango(720,470,25,25);

	chain = new Chain(stone,{x:80,y:590})

	Engine.run(engine);
  
}


function draw() {

  background(0,0,0);
 
  tree.display();
  ground.display();
  boy.display();
  stone.display();

  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();

  chain.display();

  detectColission(stone,m1);
  detectColission(stone,m2);
  detectColission(stone,m3);
  detectColission(stone,m4);
  detectColission(stone,m5);
  detectColission(stone,m6);
  detectColission(stone,m7);
  detectColission(stone,m8);
}

function mouseDragged(){
	if(released==false){
		Body.setPosition(stone.body,{x:mouseX,y:mouseY})
	}
}

function mouseReleased(){
	chain.fly();
	released = true;
}

function detectColission(b1,b2){

	var distance = dist(b1.body.position.x,b1.body.position.y,b2.body.position.x,b2.body.position.y);

	if(distance<b1.r+b2.r){
		Body.setStatic(b2.body ,false);
	}
}


