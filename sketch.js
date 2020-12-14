var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;
function setup() {

  createCanvas(800, 400);
  obj1 = createSprite(200, 400, 50, 50);
  obj2 = createSprite(400, 400, 50, 50);
  obj3 = createSprite(600, 400, 50, 50);
  obj4 = createSprite(800, 400, 50, 50);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.velocityX = -5;
  movingRect.velocityY = 0.5;

}

function draw() {
  background(255, 255, 255);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  obj1.shapeColor = " green ";
  obj2.shapeColor = " green ";
  obj3.shapeColor = " green ";
  obj4.shapeColor = " green ";
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;


  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red"
    fixedRect.shapeColor = "red"
  }
  if (isTouching(movingRect, obj1)) {
    movingRect.shapeColor = "red"
    obj1.shapeColor = "red"
  }
  if (isTouching(movingRect, obj2)) {
    movingRect.shapeColor = "red"
    obj2.shapeColor = "red"
  }
  if (isTouching(movingRect, obj3)) {
    movingRect.shapeColor = "red"
    obj3.shapeColor = "red"
  }
  if (isTouching(movingRect, obj4)) {
    movingRect.shapeColor = "red"
    obj4.shapeColor = "red"
  }


  bounceoff(movingRect,fixedRect);
  drawSprites();
}
function isTouching(rect1, rect2) {
  if (rect1.x - rect2.x <= rect1.width / 2 + rect2.width / 2 &&
    rect2.x - rect1.x <= rect1.width / 2 + rect2.width / 2 &&
    rect1.y - rect2.y <= rect1.height / 2 + rect2.height / 2 &&
    rect2.y - rect1.y <= rect1.height / 2 + rect2.height / 2) {
    return true;

  } else {
    return false;
  }

}
function bounceoff(rect1, rect2) {

  if (rect1.x - rect2.x <= rect1.width / 2 + rect2.width / 2 &&
    rect2.x - rect1.x <= rect1.width / 2 + rect2.width / 2 &&
    rect1.y - rect2.y <= rect1.height / 2 + rect2.height / 2 &&
    rect2.y - rect1.y <= rect1.height / 2 + rect2.height / 2) {
    rect1.velocityY = rect1.velocityY * (-1)
    rect1.velocityX = rect1.velocityX * (-1)
    rect2.velocityY = rect2.velocityY * (-1)
    rect2.velocityX = rect2.velocityX * (-1)

  }
}
