

var bow , arrow,  backGround;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score;
 
function preload(){
  
  backGroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 600);
  
  //creating background
  backGround = createSprite(0,0,600,600);
  backGround.addImage(backGroundImage);
  backGround.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
 
}

function draw() {
  // moving ground
    backGround.velocityX = -3 
  
  
  if (backGround.x < 0){
      backGround.x = backGround.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  var select_balloon = Math.round(random(1,4));
 
  if (World.frameCount % 80 === 0) {
    if (select_balloon === 1) {
      redBalloon();
    } else if (select_balloon === 2) {
      greenBalloon();
    } else if (select_balloon === 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
    
  drawSprites();
  text("score:" ,530 ,20)  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 170;
  red.scale = 0.1
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 170;
  blue.scale = 0.1
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 170;
  green.scale = 0.1
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 170;
  pink.scale = 1
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.lifetime = 120;
  return arrow;
}

