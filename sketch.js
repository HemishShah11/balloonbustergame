var playground, playground_image
var balloon1, balloon1_img
var balloon2, balloon2_img
var balloon3, balloon3_img
var balloon4,balloon4_img
var bow, bow_img
var arrow, arrow_img


function preload(){

 playground_image=loadImage("background0.png");

  balloon1_img=loadImage("red_balloon0.png");
  balloon2_img=loadImage("blue_balloon0.png");
  balloon3_img=loadImage("pink_balloon0.png");
  balloon4_img=loadImage("green_balloon0.png");

  bow_img=loadImage("bow0.png");
  arrow_img=loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);
  
  
  playground=createSprite(0,0,600,600);
  playground.addImage("playground",playground_image);
  playground.velocityX=-4;
  playground.scale=3;
  
  playground.x=playground.width/2;
  
  
  for(i=50; i<600; i=i+100){
    balloon1=createSprite(50,i,20,20);
    balloon1.addImage("b1",balloon1_img);
    balloon1.scale=0.1;
  }
  
  for(i=100; i<600; i=i+100){
    balloon2=createSprite(125,i,20,20);
    balloon2.addImage("b2",balloon2_img);
    balloon2.scale=0.1;
  }
  
  for(i=150; i<500; i=i+100){
    balloon3=createSprite(200,i,20,20);
    balloon3.addImage("b3",balloon3_img);
    balloon3.scale=1.2;
  }
  
  for(i=200; i<500; i=i+100){
    balloon4=createSprite(275,i,20,20);
    balloon4.addImage("b4", balloon4_img);
    balloon4.scale=0.090;
  }
  
  bow=createSprite(575,300,20,20);
  bow.addImage("bow",bow_img);
}



function draw() {
background(255);
  
  bow.y=World.mouseY;
  
  if(playground.x<0){
    playground.x=playground.width/2;
  }

  
  drawSprites();
}