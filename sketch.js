var cat;
var mouse;

function preload() {
 mouse1 = loadAnimation ("mouse1.png")
 mouse2 = loadAnimation ("mouse2.png","mouse3.png")
 mouse3 = loadAnimation ("mouse4.png")

 cat1 = loadAnimation("cat1.png")
 cat2 = loadAnimation("cat2.png","cat3.png")
 cat3 = loadAnimation("cat4.png")
 bg = loadImage("garden.png")

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600)
    cat.addAnimation("catSleeping", cat1)
    cat.scale = 0.2
    
    mouse = createSprite(200,600)
    mouse.addAnimation("mouseStanding", mouse1)
    mouse.scale =0.2
    
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

    

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0
       cat.addAnimation("catLast",cat3)
       cat.scale = 0.2
       cat.x = 300
       cat.changeAnimation("catLast")
       mouse.addAnimation("mouseLast",mouse3)
       mouse.scale = 0.2
       mouse.changeAnimation("mouseLast")
    }
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouse2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25
    cat.velocityX = -5
    cat.addAnimation("catRunning", cat2);
    cat.changeAnimation("catRunning");
    }

    

    
    
  //For moving and changing animation write code here


}
