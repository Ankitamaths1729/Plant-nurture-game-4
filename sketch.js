
    var backimage,scene;
    var Rarrow;
    var mainB;
    var mbadge;
    var RarrowSprite , mbadgeSprite;
    var gameState;
    var seed,cloud,can,can1,cloud1;
    var seedSprite,cloudSprite,canSprite,can1Sprite,bubbleSprite,cloud1Sprite;
    var grownPlant;
    var sun,sunSprite;
    var bubble,o2;
    var block1,block2;
    var sac,f;
    var sacSprite,fSprite;
    
    var count; 
    var startT, deltaT = 900
    var gasGroup;
    var pressCount;
    var canreplace;
    var sacreplace;
    var timer = 20;
    var water = false;
    var fertiliser = false;
    var sunlight = false;
    var destroyCount = 0;

    function preload(){
      backimage=loadImage("images/back.jpg");
      Rarrow=loadImage("images/next.png");
      mbadge=loadImage("images/badge.png");
    mainB=loadImage("images/landsky.jpg");
     seed=loadImage("images/plant.png");
     co2=loadImage("images/factory.png");
     o2=loadImage("images/carbon-monoxide.png");
     cloud=loadAnimation("images/clouds(1).png");
     cloudreplace = loadAnimation("images/clouds - Copy.png");
    sun=loadImage("images/sun.png");
    can=loadAnimation("images/watering-can.png");
     can1=loadImage("images/watering-can1.png");
     bubble=loadImage("images/CH4 gas.png");
     sac=loadImage("images/fertiliser sac.png");
     f=loadImage("images/f.png");
     canreplace = loadAnimation("images/F3.jpg");
     sacreplace=loadAnimation("images/F4.jpg");
     
     
     
    }
    
    function setup() {
      createCanvas(displayWidth,displayHeight);
      scene=createSprite(displayWidth/2,displayHeight/2,displayWidth-20,displayHeight-30);
      scene.addAnimation("start",backimage);
      scene.addAnimation("main",mainB);
      scene.scale=2.5;
    
      sunSprite=createSprite(500,200,20,20);
      sunSprite.addImage("sun",sun);
      sunSprite.scale=0.3;
     sunSprite.visible=false;
    
    
      RarrowSprite=createSprite(1200,600,20,20);
      RarrowSprite.addImage("arrow",Rarrow);
      RarrowSprite.scale=0.1;
    
      mbadgeSprite=createSprite(650,300,20,20);
      mbadgeSprite.addImage("badge",mbadge);
      mbadgeSprite.scale=0.1;
      
      seedSprite=createSprite(600,580,20,20);
      seedSprite.addImage("badge",seed);
      seedSprite.scale=0.3;
      seedSprite.visible=false;
    
      cloudSprite=createSprite(550,200,20,20);
      cloudSprite.addAnimation("cloud",cloud);
      cloudSprite.addAnimation("cloudreplace",cloudreplace);
      cloudSprite.scale=0.4;
      cloudSprite.visible=false;
    
      cloud1Sprite=createSprite(450 ,200,20,20);
      cloud1Sprite.addAnimation("cloud",cloud);
      cloud1Sprite.scale=0.3;
      cloud1Sprite.visible=false;
    
      canSprite=createSprite(1000,600,20,20);
      canSprite.addAnimation("can",can);
      canSprite.addAnimation("canreplace", canreplace);
      canSprite.scale=0.2;
      canSprite.visible=false;
     
      can1Sprite=createSprite(650,460,20,20);
      can1Sprite.addImage("can",can1);
      can1Sprite.scale=0.2;
      can1Sprite.visible=false;
    
      
     bubbleSprite=createSprite(1000,310,20,20);
      bubbleSprite.addImage("bubble",bubble);
      bubbleSprite.scale=0.2;
      bubbleSprite.visible=false;

      co2Sprite=createSprite(1000,310,20,20);
      co2Sprite.addImage("co2",co2);
      co2Sprite.scale=0.2;
      co2Sprite.visible=false;
    
      sacSprite=createSprite(1000,450,20,20);
      sacSprite.addAnimation("sac",sac);
      sacSprite.addAnimation("sacreplace", sacreplace);
      sacSprite.scale=0.2;
      sacSprite.visible=false;
    
      fSprite=createSprite(700,580,20,20);
      fSprite.addImage("fertiliser",f);
      fSprite.scale=0.2;
      fSprite.visible=false;
    
     
    gameState="start";
    count=60;
    
    startT=millis();
    gasGroup= createGroup();
    
    pressCount = 0;
    }
    
    

    function draw() {
      background(255,255,255); 
      drawSprites();
      if(gameState==="start"){
   
      
      textSize(20);
      fill("blue");
      stroke("white");
      strokeWeight(3);
      text("We have given you one seedling",displayWidth/4,displayHeight/4) ;
      text("Nuture it and become an ENVIORNMENTAL CHAMPION",displayWidth/4,displayHeight/4+50);
      }
      
    
    
     
      if((!water || !fertiliser || !sunlight)&& (timer === 0)){ 
        gameState = "end";
      fill("yellow"); 
      textSize(40); 
      text("GAME OVER!!", 450,350); 
       
    }
    
    if(timer<10 && timer>6){
      fill("blue"); 
      textSize(20); 
      textFont('Verdana');
      textStyle(BOLD)
      stroke("white");
      text("'Remember to protect the ", 150,400); 
      text("plant from harmful gases'", 150,420); 
    }
      if (mousePressedOver(RarrowSprite)) {
        gameState="play";
       scene.changeAnimation("main",mainB);
      scene.scale=1.5;
      mbadgeSprite.visible = false;
      RarrowSprite.visible=false;
      seedSprite.visible=true;
     
      
     
     cloudSprite.visible=true;
     canSprite.visible=true;
  cloud1Sprite.visible=true;
     sunSprite.visible=true;
     sacSprite.visible=true;
    co2Sprite.visible=true;
          }
        if(gameState==="play") {
          fill("yellow");
          textSize(40);
          text("TIME LEFT:" + timer, 800,200);

          if(frameCount%50==0 && timer > 0){ 
            timer = timer - 1; 
          } 
          
          if (World.frameCount%50===0) {
            
            var co=createSprite(random(900,1100),300,20,20);
            co.addImage("bubble",bubble);
            co.scale=random(0.09,0.1);
            co.velocityX=-1;
            co.velocityY=0.5;
           
            gasGroup.add(co);
            var o=createSprite(random(900,1100),300,20,20);
            o.addImage("o",o2);
            o.scale=random(0.01,0.1);
            o.velocityX=-1;
            o.velocityY=0.5;
            
            gasGroup.add(o)
            
            
             }
    
             for(var i = 0;i<gasGroup.length;i++){ 
               if(gasGroup.get(i).isTouching(seedSprite)){
                  gameState = "end"
                  timer = 0;
                  fill("yellow"); 
                  textSize(40); 
                  text("GAME OVER!!", 450,350); 
    
               }
              
              if (mousePressedOver(gasGroup.get(i))) {
                gasGroup.get(i).destroy();
                destroyCount=destroyCount+1;
               
                }
          }
          
        
          if (mousePressedOver(canSprite)) {
          
           canSprite.scale = 0.14;
           canSprite.y=610;
          canSprite.changeAnimation("canreplace",canreplace);
           can1Sprite.visible=true;
           pressCount = pressCount + 1;
           water=true;
          }
         
          if (mousePressedOver(sacSprite)) {
            
           

           sacSprite.changeAnimation("sacreplace",sacreplace);
           sacSprite.scale = 0.14;
           fSprite.visible=true;
           pressCount = pressCount + 1;
           fertiliser=true;
         
           }
          
           if (gameState === "win"){
             
           }
         
          if(mousePressedOver(cloudSprite)|| mousePressedOver(cloud1Sprite)){
            pressCount = pressCount + 1;
            sunlight=true;
          
            if(cloudSprite.isTouching(sunSprite)|| cloud1Sprite.isTouching(sunSprite)){
            
            
            cloudSprite.velocityX=0.5;
            cloud1Sprite.velocityX=-0.5;
            cloudSprite.changeAnimation("cloudreplace",cloudreplace);
            
            }else{
             
            
              cloudSprite.velocityX=0;
              cloud1Sprite.velocityX=0; 
              
            }
           
          } 
          }

          if(water && fertiliser && sunlight && destroyCount>10 && timer!== 0 ){
          
            background("white");
            
            mbadge.visible=true;
            mbadge.scale=0.2;
            mbadge.x=450;
            mbadge.y=450;
            gameState="win"
            fill("yellow"); 
             textSize(40); 
             text("Congrats!!You Win", 450,350); 
             
            }
        }
       
         
       
   
