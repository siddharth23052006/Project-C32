const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;

var projectile, sling;
var engine, world;
var ground, ground2;
var box1, box2, box3, box4, box5; 
var box6, box7, box8, box9, box10; 
var box11, box12, box13, box14, box15;
var box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25;
var gameState;
var score = 0;
var bg, backgroundImg;

function preload(){
  backgroundImage();
}

function setup(){
  var canvas = createCanvas(1000,400);

  gameState = "onSling";

  engine = Engine.create();
  world = engine.world;

  projectile = new Polygon(200,100,45,45);
  //1st tower:
    //ground
    ground = new Ground(480,380,230,10);

    //bottom layer
    box1 = new Box(390,355,30,40,"green");
    box2 = new Box(420,355,30,40,"green");
    box3 = new Box(450,355,30,40,"green");
    box4 = new Box(480,355,30,40,"green");
    box5 = new Box(510,355,30,40,"green");
    box6 = new Box(540,355,30,40,"green");
    box7 = new Box(570,355,30,40,"green");

    //second-from-bottom layer
    box8 = new Box(420,315,30,40,"blue");
    box9 = new Box(450,315,30,40,"blue");
    box10 = new Box(480,315,30,40,"blue");
    box11 = new Box(510,315,30,40,"blue");
    box12 = new Box(540,315,30,40,"blue");

    //second-from-top layer
    box13 = new Box(450,275,30,40,"pink");
    box14 = new Box(480,275,30,40,"pink");
    box15 = new Box(510,275,30,40,"pink");

    //top layer
    box16 = new Box(480,235,30,40,"brown");

  //2nd tower:
    //ground
    ground2 = new Ground(780,210,170,10);

    //bottom layer
    box17 = new Box(720,185,30,40,"blue");
    box18 = new Box(750,185,30,40,"blue");
    box19 = new Box(780,185,30,40,"blue");
    box20 = new Box(810,185,30,40,"blue");
    box21 = new Box(840,185,30,40,"blue");

    //middle layer
    box22 = new Box(750,145,30,40,"green");
    box23 = new Box(780,145,30,40,"green");
    box24 = new Box(810,145,30,40,"green");

    //top layer
    box25 = new Box(780,105,30,40,"pink");

  sling = new Sling(projectile.body,{x:200,y:190});
}

function draw() {
  if (backgroundImg){
    background(backgroundImg);
  }
  Engine.update(engine);
  fill("red");
  text("Score: " + score, 940, 50);
  //console.log(score);

  ground.display();
  ground2.display();
  sling.display();
  projectile.display();

  //1st tower:
    //bottom layer display and score
    box1.display();
    box1.score();

    box2.display();
    box2.score();
    
    box3.display();
    box3.score();
    
    box4.display();
    box4.score();
    
    box5.display();
    box5.score();
    
    box6.display();
    box6.score();
    
    box7.display();
    box7.score();

    //second-from-bottom layer display and score
    box8.display();
    box8.score();
    
    box9.display();
    box9.score();
    
    box10.display();
    box10.score();
    
    box11.display();
    box11.score();
    
    box12.display();
    box12.score();
    
    //second-from-top layer display and score
    box13.display();
    box12.score();
    
    box14.display()
    box12.score();
    
    box15.display();
    box12.score();

    //top layer display and score
    box16.display();
    box12.score();
    
  //2nd tower:
    //bottom layer and score
    box17.display();
    box17.score();
    
    box18.display();
    box18.score();
    
    box19.display();
    box19.score();
    
    box20.display();
    box20.score();
    
    box21.display();
    box21.score();
    
    //middle layer and score
    box22.display();
    box22.score();
    
    box23.display();
    box23.score();
    
    box24.display();
    box24.score();
    
    //top layer and score
    box25.display();
    box25.score();
    
  fill("red");
  text("Press space for another chance if the hexagon goes out of the screen or stops.",20,20);
}

function mouseDragged(){
  if (gameState != "launched"){
    Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased(){
  sling.fly();
  gameState = "launched";
}
function keyPressed(){
  if ((keyCode === 32 && projectile.body.speed <= 1) || (keyCode === 32 && projectile.body.position.y > 400) || (keyCode === 32 && projectile.body.position.x > 1000) || (keyCode === 32 && projectile.body.position.y < 0) || (keyCode === 32 && projectile.body.position.x < 0)){
    Body.setPosition(projectile.body, {x: 200, y: 100});
    sling.attach(projectile.body);
    gameState = "onSling";
  }
}

async function backgroundImage(){
   var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJSON = await response.json();

   var datetime = responseJSON.datetime;
   var hour = datetime.slice(11,13);

   if (hour>=0600 && hour<=1900){
     bg = "Day.jpg";
   }
   else{
     bg = "Night.jpg";
   }
   console.log(hour);
   backgroundImg = loadImage(bg);
}