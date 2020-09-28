var count=0;
var turn = 0;
var gameState=0;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;
var particle;

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
   textSize(25);
   fill(0,175,175);
   text("Score : " + count,15,30);
   text("500",18,520);
   text("500",98,520);
   text("200",178,520);
   text("100",258,520);
   text("200",338,520);
   text("100",418,520);

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
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<80){
                score = score + 500;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<160){
                score = score + 500;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<80){
                score = score + 100;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<80){
                score = score + 200;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<100){
                score = score + 500;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
    if(particle!=null)
    {
        particle.display();

        if(particle.body.position.y>760){
            if(particle.body.position.x<200){
                score = score + 500;
                particle=null;
                if(count>=5)gameState = "end";
            }
        }
    }
}

function mousePressed()
{
    if(gameState!=="end"){
        count++;
        particle = new Particle(mouseX, 10, 10, 10);
    }
}