var stoneGroup,fruitGroup;
var mon,monAnimation;
var fruitImage,stoneImage;

var survivalTime = 0;

function preload() {
  
stoneImage = loadImage("obstacle.png");
monAnimation = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
fruitImage = loadImage("banana.png")
  
}

function setup(){
  
  createCanvas(400,400);
 stoneGroup = new Group()
 fruitGroup = new Group()

 ground = createSprite(200,390,900,20);
 ground.x = ground.width/2;
  
mon = createSprite(100,350,20,50);
mon.addAnimation("monkey_running",monAnimation);
mon.scale = 0.15;
  
}

function draw() {


background("lightblue")

  survivalTime = Math.ceil(frameCount/frameRate())
text("survival Time: "+ survivalTime,100,50);
  
ground.velocityX = -2;
if(ground.x<0){
  ground.x = ground.width/2;
}
  
if(keyDown("space")){
      mon.velocityY = -15 ;
 
}        
mon.velocityY = mon.velocityY + 0.8;
mon.collide(ground);
stone();
fruit();  
  
drawSprites()

}
function stone() {
if(World.frameCount % 120 === 0) {
    var stone = createSprite(400,355,10,40);
    stone.velocityX = -4
    stone.addImage(stoneImage);
    stone.scale = 0.15
    stone.lifetime = 400
    stoneGroup.add(stone)
  }  
}


function fruit() {
if(World.frameCount % 150 === 0) {
    var fruit = createSprite(400,200,10,40);
    fruit.velocityX = -4;
    fruit.y = Math.round(random(50,200));
    fruit.addImage(fruitImage);
    fruit.scale = 0.1;
    fruit.lifetime = 400;
    fruitGroup.add(fruit)
  }  
}
  