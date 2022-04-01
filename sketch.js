var robson 
function setup() {
  createCanvas(400,400);
  robson= createSprite (50,150,20,20)
  robson.shapeColor = "red"
}

function draw() 
{
  background(30);
  //Movimentos do robson
if (keyDown("left")) {
robson.x=robson.x-2
}
if (keyIsDown(RIGHT_ARROW)) {
  robson.x=robson.x+2
  }
  if (keyDown("up")) {
    robson.y=robson.y-2
    }
    if (keyDown("down")) {
      robson.y=robson.y+2
      }
      drawSprites()
}




