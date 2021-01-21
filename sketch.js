const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,music;
var  base,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,polygonimg;
var shot;
var score = 0;
var backgroundImage;
var man;


function preload(){
 getBackGroundImage();
 music = loadSound("disco.mp3");
 polygonimg = loadImage("polygon.png")
man  = loadImage("harryflying.png")
}

function setup() {
    createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
   
music.loop();

    base = new Ground(650,350,250,20);
    base2 = new Ground(1100,250,250,20);
  
    box1 = new greenBox(1170,220,40,40);
    box2 = new greenBox(1140,220,40,40);
    box3 = new greenBox(1110,220,40,40);
    box4 = new greenBox(1000,220,40,40);
    box4 = new greenBox(1020,220,40,40);
    box5 = new greenBox(1040,220,40,40);

    box6 = new blueBox(1140,210,40,40)
    box7 = new blueBox(1110,210,40,40)
    box8 = new blueBox(1050,210,40,40);
    box9 = new orangeBox(1110,200,40,40);
    
    box10 = new greenBox(550,320,40,40);
    box11 = new greenBox(590,320,40,40);
    box12 = new greenBox(635,320,40,40);
    box13 = new greenBox(675,320,40,40);
    box14 = new greenBox(720,320,40,40);
    

    box15 = new blackBox(675,310,40,40)
    box17 = new blackBox(635,310,40,40)
    box18 = new blackBox(590,310,40,40)

    box19 = new orangeBox(635,300,40,40)
    
   
    grou = new Ground(700,495,1400,5)
    


    var polygon_options = {
      isStatic: false,
      restitution:0.8,
      friction:1.0,
      density:1.0
    }
 
    polygon = Bodies.circle(180,200,10,polygon_options);
    World.add(world,polygon);

  shot = new SlingShot(this.polygon,{x:140,y:200});

    Engine.run(engine);  

}

function draw() {
  if(backgroundImage){
    background(backgroundImage);
}



    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,80,80)

    

  base.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display()
   box7.display()
   box8.display();
   box9.display();
   box10.display()
   box11.display()
   box12.display()
   box13.display()
   box14.display()
   box15.display()
   box17.display()
   box18.display()
   box19.display()

   
   box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score()
   box7.score()
   box8.score();
   box9.score();
   box10.score()
   box11.score()
   box12.score()
   box13.score()
   box14.score()
   box15.score()
   box17.score()
   box18.score()
   box19.score()

   fill("red")
   textSize(30)
   text("score:" + score ,height-300,100);


   image(man,1000,70,200,200);
   
   
   shot.display();
}

function mouseDragged (){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    shot.fly();
}


function keyPressed(){
  if(keyCode === 32){
      shot.launch(polygon)
  }
}


async function getBackGroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  var dateTime = responseJSON.datetime;
  var time = dateTime.slice(11,13);
  console.log(time);
  if(time >= 06 && time<=18){
      bg = "morning.jpg";
  }else{
      bg = "unnamed.png";
  }
  backgroundImage = loadImage(bg);
}