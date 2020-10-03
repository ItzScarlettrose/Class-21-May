var mr, fr

function setup() {
  createCanvas(800,400);
 mr=createSprite(400, 200, 50, 50);
fr=createSprite(200,200,80,30)
}
function draw() {
  background(255,255,255);  
  mr.x= World.mouseX
  mr.y= World.mouseY
  
  if(istouching(mr,fr)){
    mr.shapeColor="red"
    fr.shapeColor="red"
  }
  else{
    mr.shapeColor="blue"
    fr.shapeColor="black"
  }
  drawSprites();
}

function istouching(sprite, target){
  if(sprite.x-target.x<sprite.width/2+target.width/2&&
    target.x-sprite.x<sprite.width/2+target.width/2&&
  sprite.y-target.y<sprite.height/2+target.height/2&&
      target.y-sprite.y<sprite.height/2+target.height/2){
     return true 
  
 
  }
  else{
  return false  
}}

