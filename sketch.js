//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg1;
var dogImg2;




function preload()
{
	dogImg1 = loadImage("images/dogImg.png");
  dogImg2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg1);
  dog.scale= 0.15
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg2);
}
  drawSprites();
  fill("blue" )
  textSize(20)
text("food remaining : " + foodS,170,200);
text("press up arrow key to feed your dog",50,50);


}

function readStock(data){
foodS = data.val()

};
 
function writeStock(x){
  if(x <= 0){
    x= 0 
  }
  else{
    x= x-1
  }
  database.ref('/').update({
    Food:x
  })
}


