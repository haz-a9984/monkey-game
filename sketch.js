
var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
// This is to add the animation to monkey and to add an image to the banana and obstacle
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  // This is to create the monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  
  // This is to create the ground
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
 
  //This is to create the ground
  bananaGroup = createGroup();
  
}


function draw() {

 //this is to make the bacground lightblue
 background("lightblue");
 
  //this is to display the score
 stroke("white");
 textSize(20);
 fill("white");
 text("score:"+score,500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  
  //this is to make the ground move
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //this is to make the monkey jump
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -16;
   }
  
  //this is to give the monkey gravity
  monkey.velocityY = monkey.velocityY + 0.8
  
  //this is to make the monkey colide with the ground
  monkey.collide(ground);
  
 //this is to call the function "food" in draw
 food();
  
 //this is to call the function "spawnObstacles" in draw 
 spawnObstacles();
 
 //this is to print the sprites 
drawSprites();

}

function food(){
    
    //this is to make the banana 
  if (frameCount % 80 === 0) {
    banana = createSprite(400,20,5,5);
    banana .y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime=120;
    bananaGroup.add(banana);
}
 
}

function spawnObstacles(){
 
  //this is to make the obstacles
  if (frameCount % 300 === 0){
    obstacle = createSprite(400,318,10,40);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    obstacle.lifetime=120;
 }

}