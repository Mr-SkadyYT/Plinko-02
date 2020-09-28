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
    for (var k = 50;k<=width; k = k+80) {
        plinko.push(new Plinko(k, 100,10));
    }
    for (var k = 10;k<=width; k = k+80) {
        plinko.push(new Plinko(k, 200,10));
    }
    for (var k = 50;k<=width; k = k+80) {
        plinko.push(new Plinko(k, 300,10));
    }
    for (var k = 10;k<=width; k = k+80) {
        plinko.push(new Plinko(k, 400,10));
    }

    ground = new Ground(600,height,1200,20);
}

function draw(){
   background(0);
   Engine.update(engine);
   ground.display();
   if (frameCount%60===0){
       particles.push(new Particle(random(10,300),0,10));
   }
   for (k = 0;k<divisions.length; k = k+1) {
    divisions[k].display();
}
for (k = 0;k<plinko.length; k = k+1) {
    plinko[k].display();
}
for (k = 0;k<particles.length; k = k+1) {
    particles[k].display();
}
}

