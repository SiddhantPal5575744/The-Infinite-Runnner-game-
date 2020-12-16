 var monkeyAnimation,cactusImg,groundImg,coinAnimation;
 var monkey,ground,coin,endImg,end;
 var cactusgroup 
 var bananagroup 
var c1,c2,c3,c4,c5,c6;
var b1,b2,b3,b4,b5,b6

 
var gamestate="start";
var count=0;


 
 
 
 function preload(){
   monkeyAnimation=loadAnimation("Monkey1.png","Monkey2.png","Monkey3.png","Monkey4.png","Monkey5.png","Monkey6.png","Monkey7.png","Monkey8.png","Monkey9.png","Monkey10.png");
   cactusImg=loadImage("cactus.png");
   endImg=loadImage("end.png");
   groundImg=loadImage("ground.png");
   bananaImg=loadImage("banana.png");
   coinAnimation=loadImage("coin0.png","coin1.png","coin2.png","coin3.png","coin4.png","coin5.png")
 }
 
 function setup(){
   createCanvas(displayWidth,displayHeight-100);

   cactusgroup=createGroup();
   

monkey = createSprite(displayWidth/2-550,displayHeight/2+150,5,5);
monkey.addAnimation("monkey running",monkeyAnimation);
monkey.scale=0.10;
monkey.setCollider('circle',0,0,210);

ground = createSprite(200,displayHeight+700,5,5);
ground.addImage('ground',groundImg);
ground.scale=3;
ground.depth=monkey.depth-1;
// ground.debug=true;

c1=createSprite(displayWidth/2-550+400,displayHeight/2+150,5,5);
c1.addImage(cactusImg);

c2=createSprite(displayWidth/2-550+1000,displayHeight/2+150,5,5);
c2.addImage(cactusImg);

c3=createSprite(displayWidth/2-550+1600,displayHeight/2+150,5,5);
c3.addImage(cactusImg);


b1=createSprite(displayWidth/2-550+200,displayHeight/2,5,5);
b1.addAnimation("coin moving",coinAnimation);
b1.scale=0.5;

b2=createSprite(displayWidth/2-550+800,displayHeight/2,5,5);
b2.addAnimation("coin moving",coinAnimation);
b2.scale=0.5;

b3=createSprite(displayWidth/2-550+1400,displayHeight/2,5,5);
b3.addAnimation("coin moving",coinAnimation);
b3.scale=0.5;

b4=createSprite(displayWidth/2-550+1900,displayHeight/2,5,5);
b4.addAnimation("coin moving",coinAnimation);
b4.scale=0.5;

b5=createSprite(displayWidth/2-550+1900,displayHeight/2+50,5,5);
b5.addAnimation("coin moving",coinAnimation);
b5.scale=0.5;

b6=createSprite(displayWidth/2-550+1900,displayHeight/2+100,5,5);
b6.addAnimation("coin moving",coinAnimation);
b6.scale=0.5;

end=createSprite(displayWidth/2-550+2200,displayHeight/2+100,5,5)
end.addImage(endImg);
end.scale=3;
 


 
 

 }

 function draw(){
   background("black");
   console.log(monkey.x);
   monkey.velocityY=monkey.velocityY+0.3;
   monkey.collide(ground);
  
   if(monkey.x<2100){
    camera.position.x=camera.position.x+5;

   }
fill("yellow");
textFont("jokerman");
textSize(25);
text("Score: "+count,camera.position.x-400,displayHeight/2-300);



monkey.x=camera.position.x-500;
if(keyDown("UP_ARROW")&&monkey.isTouching(ground)){
  monkey.velocityY=-10
}


if(monkey.isTouching(b1)){
  b1.destroy();
  count+=1;
}

if(monkey.isTouching(b2)){
  b2.destroy();
  count+=1;
}

if(monkey.isTouching(b3)){
  b3.destroy();
  count+=1;
}


if(monkey.isTouching(b4)){
  b4.destroy();
  count+=1;
}


if(monkey.isTouching(b5)){
  b5.destroy();
  count+=1;
}

if(monkey.isTouching(b6)){
  b6.destroy();
  count+=1;
}




drawSprites();
   

 }