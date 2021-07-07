var cat;
var mouse;

function preload() {
 mouse1 = loadImage ("mouse1.png")
 mouse2 = loadImage ("mouse2.png")
 mouse3 = loadImage ("mouse3.png")
 mouse4 = loadImage ("mouse4.png")

 cat1 = loadImage("cat1.png")
 cat2 = loadImage("cat2.png")
 cat3 = loadImage("cat3.png")
 cat4 = loadImage("cat4.png")


    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    keyPressed()

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        
    }
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25
    }

    if(keyCode === RIGHT_ARROW){
        mouse.addAnimation("mouseTeasing", mouse2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDelay = 25
        }
  //For moving and changing animation write code here


}
