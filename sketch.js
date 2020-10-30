const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var img;
var canvasGround;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    canvasGround = new Ground(600, height - 20, 1200, 20);

    base1= new Ground(550,400,275,5)
    base2= new Ground(900,200,250,5);

    

    // level1
    box1=new Box(450,370,35,50)
    box2=new Box(500,370,35,50)
    box3=new Box(550,370,35,50)
    box4=new Box(600,370,35,50)
    box5=new Box(650,370,35,50)
    box6=new Box(475,330,35,50)
    box7=new Box(525,330,35,50)
    box8=new Box(575,330,35,50)
    box9=new Box(625,330,35,50)
    box10=new Box(500,290,35,50)
    box11=new Box(550,290,35,50)
    box12=new Box(600,290,35,50)
    box13=new Box(525,250,35,50)
    box14=new Box(575,250,35,50)
    box15=new Box(550,180,35,50)

    //level2

    box16=new Box(830,190,25,40)
    box17=new Box(870,190,25,40)
    box18= new Box(910,190,25,40)
    box19= new Box(950,190,25,40)
    box20= new Box(850,130,25,40)
    box21= new Box(890,130,25,40)
    box22= new Box(930,130,25,40)
    box23= new Box(870,60,30,40)
    box24= new Box(910,60,30,40)
    box25= new Box(890,30,35,40)

    //create The ball
    hexagon = new Hexagon(100,100);

    //Create slingshot
    slingshot = new SlingShot(hexagon.body,{x:200, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);

    strokeWeight(0.5);
    stroke(255,255,0);
    stroke("white");
    text("Drag  the  ball  to  hit  the  boxes.  Press  Space  bar  to  play  once  again.", 300,100);

    //Display objects
    ground.display();
    canvasGround.display();
    hexagon.display();
    slingshot.display(); 

    base1.display();
    base2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    box16.display();
    box17.display();
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(hexagon.body);
    }
}