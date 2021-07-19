var gunImg;
var enemyImg;
var player,playerImg;
var background,backgroundImg;
var ground, invisibleGround, groundImage;
var gunGroup,enemyGroup,safariGroup,pokerGroup,cobraGroup;
var safariUmpImg;
var pokerMp40Img;
var cobraMp40Img;

function preload(){
	gunImg = loadImage("M1887.png");
	enemyImg = loadImage("enemy.png");
	playerImg = loadAnimation("a.png","b.png","c.png");
	backgroundImg = loadImage("peakBackground.jpg");
	groundImage = loadImage("ground2.png");
	safariUmpImg = loadImage("safari ump.png");
	pokerMp40Img = loadImage("blue poker mp40.webp");
	cobraMp40Img = loadImage("cobra mp40.png");
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background=createSprite(750,150,2000,600);
	background.scale=2;
	background.addImage(backgroundImg);
	background.velocityX = -6;
	background.x = background.width/2;

	player=createSprite(250,350,50,100);
	player.scale=1.5;
	player.addAnimation("img",playerImg);

		

	ground = createSprite(200,455,2000,20);
	ground.addImage("ground",groundImage);
	ground.x = ground.width /2;
	ground.velocityX = -6;

	invisibleGround = createSprite(200,465,400,10);
  invisibleGround.visible = false;

  gunGroup = new Group();
  enemyGroup = new Group();
  safariGroup = new Group();
  cobraGroup = new Group();
  pokerGroup = new Group();
  


	
	
	
	
	
}

function draw(){
	if (background.x < 0){
		background.x = background.width/2;
	  }

	  if (ground.x < 0){
		ground.x = ground.width/2;
	  }

	  player.collide(invisibleGround);

	  

	  spawnGuns();
	  spawnEnemies();
	  spawnSafariGuns();
	  spawnCobraGuns();
	  spawnPokerGuns();



	drawSprites()
}

function spawnGuns() {
	//write code here to spawn the clouds
	if (frameCount % 160 === 0) {

	var	gun=createSprite(1200,300,200,200);
	gun.scale=0.5;
	gun.addImage(gunImg);

	
	 gun.y = Math.round(random(200,250));
	  gun.velocityX = -3;
	  
	   //assign lifetime to the variable
	  gun.lifetime = 400;
	  
	  //adjust the depth
	 gun.depth = player.depth;
	  player.depth = player.depth + 1;
	  
     gunGroup.add(gun);
	}
	
  }

  function spawnEnemies(){

	if (frameCount % 300 === 0) {

		var enemy=createSprite(1200,380,75,75);
		enemy.scale=0.5;
		enemy.addImage(enemyImg);

		enemy.velocityX = -2;
		enemy.lifetime = 600;

		enemy.depth = player.depth;
	  player.depth = player.depth + 1;

	  enemyGroup.add(enemy);
	
	}
  }

  function spawnSafariGuns() {
	//write code here to spawn the clouds
	if (frameCount % 200 === 0) {

	var	safariUmp=createSprite(1200,300,200,200);
	safariUmp.scale=0.1;
	safariUmp.addImage(safariUmpImg);

	
	safariUmp.y = Math.round(random(200,250));
	safariUmp.velocityX = -3;
	  
	   //assign lifetime to the variable
	   safariUmp.lifetime = 400;
	  
	  //adjust the depth
	  safariUmp.depth = player.depth;
	  player.depth = player.depth + 1;
	  
     safariGroup.add(safariUmp);
	}
	
  }

  function spawnCobraGuns() {
	//write code here to spawn the clouds
	if (frameCount % 100 === 0) {

	var	cobraMp40=createSprite(1200,300,200,200);
	cobraMp40.scale=0.5;
	cobraMp40.addImage(cobraMp40Img);

	
	cobraMp40.y = Math.round(random(200,250));
	cobraMp40.velocityX = -3;
	  
	   //assign lifetime to the variable
	   cobraMp40.lifetime = 400;
	  
	  //adjust the depth
	  cobraMp40.depth = player.depth;
	  player.depth = player.depth + 1;
	  
	  cobraGroup.add(cobraMp40);
	}
	
  }

  function spawnPokerGuns() {
	//write code here to spawn the clouds
	if (frameCount % 250 === 0) {

	var	pokerMp40=createSprite(1200,300,200,200);
	pokerMp40.scale=0.3;
	pokerMp40.addImage(pokerMp40Img);

	
	pokerMp40.y = Math.round(random(200,250));
	pokerMp40.velocityX = -3;
	  
	   //assign lifetime to the variable
	   pokerMp40.lifetime = 400;
	  
	  //adjust the depth
	  pokerMp40.depth = player.depth;
	  player.depth = player.depth + 1;
	  
	  pokerGroup.add(pokerMp40);
	}
	
  }