const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var bruce, walking;
var maxDrops = 250;
var drops = [];

var thunderCreatedFrame=0;
var thunder;

function preload(){
    // bruce = loadAnimation("walking_1.png", );

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    // walking = loadAnimation("Walking Frame/walking_1.png", "Walking Frame/walking_2.png", "Walking Frame/walking_3.png", "Walking Frame/walking_4.png", "Walking Frame/walking_5.png", "Walking Frame/walking_6.png", "Walking Frame/walking_7.png", "Walking Frame/walking_8.png");
}

function setup(){
   createCanvas(1000, 1428);

   engine = Engine.create();
   world = engine.world;

   bruce = new Umbrella(480, 1095);

    if(frameCount%100===0){
        for(var i=0; i<maxDrops;i++){
        drops.push(new Drops(random(0,1428),random(0,1428),7,20));
        }
    }
}

function draw(){
    Engine.update(engine);
    background(0);

    var rand = Math.round(random(1,3));
  if(frameCount%100===0){
    thunderCreatedFrame = frameCount;
    thunder = createSprite(random(10,900),30,10,10);
    switch(rand){
     case 1 : thunder.addImage(thunder1);
     break;
     case 2 : thunder.addImage(thunder2);
     break;
     case 3 : thunder.addImage(thunder3);
     break;
     default : break;
   }
//    thunder.scale = random(0.3,0.6)
  } 

  if(thunderCreatedFrame + 20 === frameCount && thunder){
  thunder.destroy();
  }
 

 bruce.display();

 for(var i=0; i<maxDrops; i++){
    drops[i].display();
    drops[i].update();
  }

  drawSprites();
    
    // drops.display();
}