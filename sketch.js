var garden,rabbit;
var gardenImg,rabbitImg;
var a1,o1,c1
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  a1=loadImage("apple_1.png")
  o1=loadImage("face_orange.png")
  c1=loadImage("cherry.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX

  drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createCranberry();
    }
  }
}
function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(a1);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orange = createSprite(random(50, 350),40, 10, 10);
orange.addImage(o1);
orange.scale=0.07;
orange.velocityY = 3;
orange.lifetime = 150;
  
}

function createCranberry() {
Cranberry = createSprite(random(50, 350),40, 10, 10);
Cranberry.addImage(c1);
Cranberry.scale=0.07;
Cranberry.velocityY = 3;
Cranberry.lifetime = 150;
  
}