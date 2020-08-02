var dog, happyDog, database, foodS, foodStock;
var dogImg, dogHappy;

function preload() {
  // images folder is not there
  dogImg = loadImage("Dog.png");
  dogHappy = loadImage("happydog.png");
}

function setup() {

  createCanvas(900, 500);
  feed = createButton("feed the dog");
 feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mouseOressed(addFoods);

  database = firebase.database();

  dog = createSprite(250, 300);
  dog.addImage("Bob", dogImg);
  dog.scale = 0.25;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87);

 // if(keyWentDown(UP_ARROW)) {
  //  writeStock(foodS);
   // dog.addImage("Bob",dogHappy);
 // }

  
 

  drawSprites();
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed  : "+lastFed% " PM",350,30);

}else if(lastFed==0){
  text("Last Feed : 12 AM",350,30);

}else{
  text("Last Feed : "+ lastFed + "AM",350,30);
  }
 





 
  textSize(20);
  fill("white");
  stroke(5);
  //added food remaining to display and read values from database
  text("Food remaining : "+foodS,170,200);
  var Text = text("Note: Press UP_ARROW Key to Feed Drago Milk!", 30, 100);

}

function readStock(data) {
  foodS = data.val();
}

function writeStock(x) {

  if(x<=0) {
    x = 0;
  } else {
    x = x - 1;
  }

  database.ref('/').update({
    Food:x
  })

}



