var PLAY = 1;
var END = 0;
var gameState = 1;
var knife, knifeImage;
var fruit, fruitImage1, fruitImage2, fruitImage3, fruitImage4;
var score = 0;
var fruitGroup, enemyGroup, enemy, enemyImage1, enemyImage2, gameOver, gameOverImage;
var knifeSound, gameOverSound;
var positionF, positionE; 

function preload(){
  knifeImage = loadImage("sword.png");
  knifeSound = loadSound("knifeSwooshSound.mp3");
  
  fruitImage1 = loadImage("fruit1.png");
  fruitImage2 = loadImage("fruit2.png");
  fruitImage3 = loadImage("fruit3.png");
  fruitImage4 = loadImage("fruit4.png");
  
  enemyImage1 = loadImage("alien1.png");
  enemyImage2 = loadImage("alien1.png");
  
  gameOverImage = loadImage("gameover.png");
  gameOverSound = loadSound("gameover.mp3");
  
  
  
 
}



function setup(){
  createCanvas(600, 600);

  
  knife = createSprite(300,300,20,20);
  knife.addImage(knifeImage);
  knife.scale = 0.75;
  
  score = 0;
  
  fruitGroup = createGroup();
  enemyGroup = createGroup();

}



function draw(){
  background(220);
  
  text("score:" + score,520,30);
  
  if(gameState === PLAY){
     createFruits();
     createEnemies();
  
    
     if(fruitGroup.isTouching(knife)){
        fruitGroup.destroyEach();
        knifeSound.play();
        score = score + 1;
      }
 
  
    knife.x = World.mouseX
    knife.y = World.mouseY
 
    if(enemyGroup.isTouching(knife)){
       
      gameState = END;
      gameOverSound.play();  
    
    }
    
  
  }
  
   
  
  
  if(gameState === END){
    
     
    enemyGroup.destroyEach();
    fruitGroup.destroyEach()
    fruitGroup.setVelocityX = 0;
    enemyGroup.setVelocityX = 0;
       
    knife.addImage(gameOverImage);
    knife.x = 300;
    knife.y = 300;
    knife.scale = 1.5;
    
    score = 0;
        
                                               
      
  
     
  }
  
  drawSprites();
}

function createFruits(){
   if (frameCount % 80 === 0) {
    fruit = createSprite(0,Math.round(random(20,600)),10,10);
    positionF = Math.round(random(1,2));
     
     if(positionF == 1){
        fruit.x = 0;
        fruit.velocityX = (4+score/4);
       
     }
     
       else{
       
          if(positionF == 2){
            fruit.x = 600;
            fruit.velocityX = -(4+score/4);
           }
        }  
    
    
      //console.log(fruit.velocityX);
    
     a = Math.round(random(1,4));
     switch(a){
       case 1 : fruit.addImage(fruitImage1);
         break;
       case 2 : fruit.addImage(fruitImage2);
         break;
       case 3 : fruit.addImage(fruitImage3);
         break;
       case 4 :fruit.addImage(fruitImage4);
           
         break;
       
         default: break;
    
     }
     fruit.scale = 0.20;
     fruitGroup.add(fruit);
     fruit.setLifetime = 200;
     
  
  }
}
function createEnemies(){
       if (frameCount % 135 === 0) {
    enemy = createSprite(0,Math.round(random(20,600)),10,10);

    enemy.velocityX = 7;
    
     a = Math.round(random(1,2));
     switch(a){
       case 1 : enemy.addImage(enemyImage1);
         break;
       case 2 : enemy.addImage(enemyImage2);
         break;
       
         default: break;
    
     }
     enemy.scale = 0.80;
     enemyGroup.add(enemy);
     enemy.setLifetime = 200;
         
    positionE = Math.round(random(1,2));
     
     if(positionE == 1){
        enemy.x = 0;
        enemy.velocityX = (4+score/10);
       
     }
     
       else{
       
          if(positionE == 2){
            enemy.x = 600;
            enemy.velocityX = -(4+score/10);
           }
        }  
    //console.log(enemy.velocityX);
   } 
  
}