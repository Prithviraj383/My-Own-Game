var ufo,ufo1,ufo2,hugeSpaceship,rocket,bullet,space;
var ufo1Image,ufo2Image,hugeSpaceshipImage,rocketImage,bulletImage,spaceImage;
var rand;
var bulletGroup,ufoGroup;

function preload(){

    ufo1Image=loadImage("ufo1.png");
    ufo2Image=loadImage("ufo2.png");
    rocketImage=loadImage("Rocket.png");
    hugeSpaceshipImage=loadImage("hugeufo.png");
    bulletImage=loadImage("bullet.png");
    spaceImage=loadImage("Space.png");
}

function setup(){

    createCanvas(displayWidth,displayHeight);

    space=createSprite(displayWidth*.5,displayHeight*.5);
    space.addImage(spaceImage);


    rocket=createSprite(displayWidth/2,displayHeight-100,0,0);
    rocket.addImage(rocketImage);
    rocket.scale=.1;

    bulletGroup=createGroup();
    ufoGroup=createGroup();

}

function draw(){

    background(0);

   

    if(keyDown("space")){
        var bullet_shoot=Bullet();
        bullet_shoot.addImage(bulletImage);
        bullet.x=rocket.x;
    }

    if(keyDown("RIGHT_ARROW")){
        rocket.velocityX=4;
    }

    if(keyDown(LEFT_ARROW)){
        rocket.velocityX=-4;
    }

    //if(ufo.isTouching(bullet)){
        //bullet.destroyEach();
        //ufo.destroyEach();
   // }

    console.log(frameCount);
    console.log(rand);

    spawnUfos();

    drawSprites();
}

function Bullet(){
    bullet=createSprite(displayWidth/2,displayHeight-100,0,0);
    bullet.scale=.3;
    bullet.velocityY=-2;
    //bulletGroup.add(bullet);
    return bullet;
}

function spawnUfos(){
    if(frameCount%40===0){
    ufo=createSprite(random(100,1200),50,0,0);

     rand=Math.round(random(1,3));

    switch(rand){
        case 1:ufo.addImage(ufo1Image);
        break;

        case 2:ufo.addImage(ufo2Image);
        break;

        case 3:ufo.addImage(hugeSpaceshipImage);
        break;

        default:break;
    }
    ufo.velocityY=3;
    ufo.scale=.3;
    }
   //ufoGroup.add(ufo);
}