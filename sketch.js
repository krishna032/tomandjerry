var bg,tom,tomimage1,tomimage2
var jerry,jerryimage1,jerryimage2
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    tomimage1=loadImage("images/cat1.png")
    tomimage2=loadImage("images/cat2.png","images/cat3.png")
    tomimage3=loadImage("images/cat4.png")
   
    jerryimage1=loadImage("images/mouse1.png")
    jerryimage2=loadImage("images/mouse2.png","images/mouse3.png")
    jerrymage3=loadImage("images/mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(870,600)
    tom.addAnimation("tomsleeping",tomimage1)
    tom.scale=0.2

    jerry=createSprite(200,600)
    jerry.addAnimation("jerrystanding",jerryimage1)
    jerry.scale=0.15
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x -jerry. x<(tom.width-jerry.width)/2){
       tom.velocityX=0
       tom.addAnimation("tomlastimage",tomimage3)
       tom.x=300
       tom.scale=0.2
       tom.changeAnimation("tomlastimage")

       jerry.addAnimation("jerrylastimage",jerryimage3)
       jerry.scale=0.15
       jerry.changeAnimation("jerrylastimage")
   }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
     tom.velocityX=-9
     tom.addAnimation("tomruning",tomimage2)
     tom.changeAnimation("tomruning")
     
     jerry.addAnimation("jerryteasing",jerryimage2)
     jerry.frameDelay=25
     jerry.changeAnimation("jerryteasing")
 }

}
