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


    ground = new Ground(600,height,1200,20);
}

function draw(){
    for var (k = 0;k<=width; k = k+80) {
        divisions.push(new divisions(k, height-divisionHeight/2,10,divisionHeight));
    }
}