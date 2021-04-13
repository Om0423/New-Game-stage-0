var bg;
var father;

function preload(){ 
 bg = loadImage("bg.png.jpg");
 fatherAnimation = loadAnimation("father.jpg");
 kidnappingGirl = loadImage("kidnappingGirl.png");
 kidnappedGirl = loadImage("kidnappedGirl.png");
}

function setup(){
 createCanvas(800,800);

}

function draw(){
father.addAnimation("father",fatherAnimation);
drawSprites();
}