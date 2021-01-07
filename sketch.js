var sword,swordImg,swordSound;
var fruitGroup, fruit1,fruit2,fruit3,fruit4;
var enemyGroup, monster, monsterImage;
var gameOver, gameOverImg,gameOverSound;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;
function preload(){
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
  swordImg = loadImage("sword.png");
  swordSound = loadSound("knifeSwooshSound.mp3");
  monsterImage = loadImage("alien1.png");
  gameOverImg = loadImage("gameover.png");
  gameOverSound = loadSound("gameover.mp3");
}

function setup(){
  createCanvas(600, 600);
  
  sword = createSprite(40,200,20,20);
  sword.addImage(swordImg);
  sword.scale = 0.4;
  
  
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();
  
  console.log(sword);
  
  
  
  
}

function draw(){
  background("lightblue");
  text("Score: "+score, 500,50);
    
  if (gameState === PLAY){
    fruits();
    Enemy();
    sword.x=World.mouseX;
    sword.y=World.mouseY;

    
    if (fruitGroup.isTouching(sword)){
      fruitGroup.destroyEach();
      score=score+2;
      swordSound.play(); 
      

    }
  
  
  } 

   else {
     
   
   if (gameState === END){
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    
    sword.addImage(gameOverImg);
    sword.x=200;
    sword.y=200;
    
    //gameOverSound.play();
    //gameOverSound.loop = false;
    fruitGroup.destroyEach();
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);
    
  }

 }

  //sword.x=World.mouseX;
  //sword.y=World.mouseY;

  if (enemyGroup.isTouching(sword)) {
    gameState = END;
    gameOverSound.play();
    sword.addImage(gameOverImg);
    sword.x=200;
    sword.y=200;
  }












 drawSprites();
}


function fruits(){
  if(World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale = 0.2;
    r=Math.round(random(1,4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if(r == 3) {
      fruit.addImage(fruit3);
    } else { 
       fruit.addImage(fruit4);
    } 
    
    fruit.y=Math.round(random(50,340));
    
    fruit.velocityX = -7;
    fruit.setLifetime = 100
    
    fruitGroup.add(fruit);
  }

}

function Enemy() {
  if (World.frameCount%200===0){
     monster=createSprite(400,200,20,20);
     monster.addAnimation("moving", monsterImage);
     monster.y=Math.round(random(100,300));
     monster.velocityX=-8;
     monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}


























