var trex, trex_running, edges;
var ground, groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.7;
  trex.x = 30;

  //edges = createEdgeSprites();
  ground = createSprite(200, 190, 400, 10);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
  
 
}

function draw(){
  background("black");

  ground.velocityX = -2;


  if(ground.x < 0){
    ground.x = ground.width/2;
  }


  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.8;
  

  trex.collide(ground);
  
  
  drawSprites();

}
