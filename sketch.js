const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    for (var k = 0;k<=width; k = k+80) {
        divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
    }
    for (var k = 0;k<=width; k = k+80) {
        plinko.push(new Plinko(k, height-divisionHeight/2,10,divisionHeight));
    }

    ground = new Ground(600,height,1200,20);
}

function draw(){
   background(0);
   Engine.update(engine);
   for (k = 0;k<divisions.length; k = k+1) {
    divisions[k].display();
    plinko[k].display();
}
}
git add "Division.js" "index.html" "sketch.js" "Plinko.js"