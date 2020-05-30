var fixedRect, movingRect, gameObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400, 600,80,30);
  movingRect.shapeColor = "green";

  gameObject = createSprite(400, 400, 50, 50);
  gameObject.shapeColor = "green";

  gameObject.velocityY = -5;
}

function draw() {
  background(0,0,0);  

  if (isTouching(gameObject, fixedRect)) {
    gameObject.shapeColor = "blue";
  }

  if (isTouching(gameObject, movingRect)) {
    gameObject.shapeColor = "red";
  }

  bounceOff(fixedRect, gameObject);
  bounceOff(gameObject, movingRect);

  drawSprites();
}

