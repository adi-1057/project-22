var backGround, backGroundImg;
var tom, tomImg, tomImg1;
var jerry, jerryImg;

function preload() {
  
    backGroundImg = loadImage("images/garden.png");
    tomImg = loadAnimation("images/tomOne.png");
    jerryImg = loadAnimation("images/jerryOne.png");
    tomImg1 = loadAnimation("images/tomTwo.png")
}

function setup(){
    createCanvas(1000,800);
   
    tom = createSprite(870,600);
    tom.addAnimation("tom_lazy",tomImg);
    tom.scale = 0.1;

    jerry = createSprite(200,600);
    jerry.addAnimation("jerry_stealing",jerryImg);
    jerry.scale = 0.1;
}

function draw() {

    background(backGroundImg);
     
    keyPressed(); 

    text(tom.X + "," + jerry.X,10, 10);
    
    if( tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.setAnimation("tom_lazy",tomImg);   
    }
    drawSprites();
}


function keyPressed(){
     if(keyCode === LEFT_ARROW){
         tom.velocityX = -5;
         tom.addAnimation("tom_running", tomImg1);
         tom.changeAnimation("tom_running");
     }
}
