var bg, rocketImg, rocket, rahulImg;
var rahul, arya, tezia, shazam, space;
var rock, rockImg;
var teziaImg;
var gameState
PLAY = 1;
END = 0;
LEVEL2 = 2;

function preload()
{
    bg = loadImage("images/bg.jpg")
    rocketImg = loadImage("images/r1.png");
    teziaImg = loadImage("images/tezia.png");
    rahulImg = loadImage("images/rahul.png");
    rockImg = loadImage("images/obstacle.png")
   
}

function setup()
{
    createCanvas(windowWidth, windowHeight);

    space = createSprite(0,0,200,300);
    space.addImage(bg);
    space.scale = 2.5
    

    rahul = createSprite(400,100,50,50)
    rahul.addImage(rahulImg)
    rahul.scale = 0.15
    rahul.visible = false;


    rocket = createSprite(windowWidth/2,500,10,10)
    rocket.addImage(rocketImg)
    rocket.scale = 0.8

    arya = createSprite(460,100,50,50)
    arya.visible = false;

    tezia = createSprite(540,300,50,50)
    tezia.addImage(teziaImg)
    tezia.scale = 0.20
    tezia.visible = false;

    shazam = createSprite(600,100,50,50)
    shazam.visible = false;

    rockGroup = createGroup();
}

function draw()
{
    
    space.velocityY = 5;
    if(space.y > 400)
    {
        space.y = 100
    }

    rockGroup.setVelocityYEach(3);
  rockGroup.setLifetimeEach(100);
    spawnObstacles();
    
    drawSprites()
}



function spawnObstacles()
{

    if(frameCount % 60 === 0)
   {
    rock = createSprite(170,100,20,20) 
    rock.x = Math.round(random(200,750));
    rock.addImage(rockImg)
    rock.scale = 0.07
    rockGroup.add(rock)
   }
}