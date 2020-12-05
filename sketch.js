
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200,40,40);
  car.shapeColor="yellow";

  wall=createSprite(1500, 200, 10, height/2);
  wall.shapeColor="brown";


  speed=random(20,44);
  weight=random(56,120);
  
  car.velocityX=speed;
  
}

function draw() {
  background(255,255,255);  
  
  if (wall.x-car.x <(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="blue";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}