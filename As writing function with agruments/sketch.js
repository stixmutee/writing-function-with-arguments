var fixedrect, movingrect, gameobj1, gameobj2, gameobj3, gameobj4;
function setup() {
  createCanvas(1600,800);
fixedrect=createSprite(400,200,50,80);
fixedrect.shapeColor="green";
fixedrect.debug=true;
movingrect=createSprite(400, 200, 80, 30);
movingrect.shapeColor="green";
movingrect.debug=true;
gameobj1=createSprite(100,100,50,50);
gameobj1.shapeColor="green";
gameobj2=createSprite(200,100,50,50);
gameobj2.shapeColor="green";
gameobj3=createSprite(300,100,50,50);
gameobj3.shapeColor="green";
gameobj4=createSprite(400,100,50,50);
gameobj4.shapeColor="green";
}

function draw() {
  background(255,255,255);
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  //isTouching();
  if (isTouching(movingrect,gameobj2)) {
    gameobj2.shapeColor="red";
    movingrect.shapeColor="red";      
  } else {
    gameobj2.shapeColor="green";
    movingrect.shapeColor="green";     
  }
  drawSprites();
}
function isTouching(object1,object2){
  if (object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object1.width/2+object2.width/2&&object1.y-object2.y<object2.width/2+object1.width/2&&object2.y-object1.y<object1.width/2+object2.width/2) {
return true;
     } else {
return false;
     }
}