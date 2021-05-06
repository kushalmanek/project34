//Create variables here
var dog
var happyDog  
var database
var   foodS
var foodStock
var dogImage

function preload()
{
	happyDog = loadImage("images/dogImg1.png");
  dogImage = loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();
	createCanvas(500,500);
dog = createSprite(250,300,150,150)
dog.addImage(dogImage)
foodStock=database.ref('Food');
foodStock.on("value",readStock);  
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}
  drawSprites();
  fill(255,255,254)
  stroke("black")
  text("foodRemaining:"+foodS,170,200)
  textSize(20);
  text("Press Up Arrow To Feed The Dog",130,10,300,20)
  //add styles here

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
if(x<=0){
x=0
}
else{x=x-1}
database.ref("/").update({
  Food:x
})


}


