var canvasMultiplier = 40;
//make an enemy every so many frames
var enemyRateAlpha = 30;
var enemyRateBeta = 40;
var enemyRateCharlie = 50;
var heroSpeed = 2;
var explosionDensity = 20;
var score = 0;
var gameState = 'startUp';
var heroHealth = 3;
var enemyHealthAlpha = 2;
var enemyHealthBeta = 2;
var enemyHealthCharlie = 2;
var enemyAngle = 30;
//declare the hero
var hero;
//declare sprite GROUP
var bullets;
var enemies; 
var ammo;

//sounds
var bulletShoot;
var enemyDamaged; 
var heroDamaged;

var bg_title, bg_defeat, bg_lvlAlpha, bg_lvlBeta, bg_lvlCharlie, bg_victory;
//var enemyAlphaImage, enemyBetaImage, enemyCharlieImage;
//var heroDefault;


var heroFrames = [
  // line 1
  // HERO START
  {'hero1':'hero_1', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},
  {'hero2':'hero_2', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},
  {'hero3':'hero_3', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},
  {'hero4':'hero_4', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},
  {'hero5':'hero_5', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},
  {'hero6':'hero_6', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  {'hero7':'hero_7', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}},
  {'hero8':'hero_8', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},
  // line 2
  {'hero9':'hero_9', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},
  {'hero10':'hero_10', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},
  {'hero11':'hero_11', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},
  {'hero12':'hero_12', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},
  {'hero13':'hero_13', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  {'hero14':'hero_14', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}},
  {'hero15':'hero_15', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},
  // BABY START
];
var heroSpriteSheet;
var heroAnimation;

var babyFrames = [
  {'baby1':'baby_1', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},
  // line 3
  {'baby2':'baby_2', 'frame':{'x':0, 'y': 512, 'width': 256, 'height': 256}},
  {'baby3':'baby_3', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},
  {'baby4':'baby_4', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},
  {'baby5':'baby_5', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  {'baby6':'baby_6', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}},
  {'baby7':'baby_7', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},
  {'baby8':'baby_8', 'frame':{'x':1536, 'y': 512, 'width': 256, 'height': 256}},
  {'baby9':'baby_9', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},
  // line 4
  {'baby10':'baby_10', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},
  {'baby11':'baby_11', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},
  {'baby12':'baby_12', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
];
var babySpriteSheet;
var babyAnimation;

var matureFrames = [
  // MATURE START
  {'mature1':'mature_1', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}},
  {'mature2':'mature_2', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},
  {'mature3':'mature_3', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},
  {'mature4':'mature_4', 'frame':{'x':1536, 'y': 768, 'width': 256, 'height': 256}},
  {'mature5':'mature_5', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},
  // line 5
  {'mature6':'mature_6', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature7':'mature_7', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature8':'mature_8', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature9':'mature_9', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature10':'mature_10', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature11':'mature_11', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature12':'mature_12', 'frame':{'x':1536, 'y': 1024, 'width': 256, 'height': 256}},
  {'mature13':'mature_13', 'frame':{'x':1792, 'y': 1024, 'width': 256, 'height': 256}},
  // line 6
  {'mature14':'mature_14', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}},
  {'mature15':'mature_15', 'frame':{'x':256, 'y': 1280, 'width': 256, 'height': 256}},
];
var matureSpriteSheet;
var matureAnimation;

var adultFrames = [
  // ADULT START
  {'adult1':'adult_1', 'frame':{'x':512, 'y': 1280, 'width': 256, 'height': 256}},
  {'adult2':'adult_2', 'frame':{'x':768, 'y': 1280, 'width': 256, 'height': 256}},
  {'adult3':'adult_3', 'frame':{'x':1024, 'y': 1280, 'width': 256, 'height': 256}},
  {'adult4':'adult_4', 'frame':{'x':1280, 'y': 1280, 'width': 256, 'height': 256}},
  {'adult5':'adult_5', 'frame':{'x':1536, 'y': 1280, 'width': 256, 'height': 256}},
  {'adult6':'adult_6', 'frame':{'x':1792, 'y': 1280, 'width': 256, 'height': 256}},
  // line 7
  {'adult7':'adult_7', 'frame':{'x':0, 'y': 1536, 'width': 256, 'height': 256}},
  {'adult8':'adult_8', 'frame':{'x':256, 'y': 1536, 'width': 256, 'height': 256}},
  {'adult9':'adult_9', 'frame':{'x':512, 'y': 1536, 'width': 256, 'height': 256}},
  {'adult10':'adult_10', 'frame':{'x':1024, 'y': 1536, 'width': 256, 'height': 256}},
  {'adult11':'adult_11', 'frame':{'x':1536, 'y': 1536, 'width': 256, 'height': 256}},
  {'adult12':'adult_12', 'frame':{'x':1792, 'y': 1536, 'width': 256, 'height': 256}},
  ];
var adultSpriteSheet;
var adultAnimation;

function preload(){
  // load sounds
  bulletShoot = loadSound("assets/193427__unfa__projectile-shoot.mp3");
  enemyDamaged = loadSound("assets/enemyHit.mp3");
  heroDamaged = loadSound("assets/heroHit.mp3");
  // load sprites for Hero, Baby, Mature and Adult
  heroSpriteSheet = loadSpriteSheet('assets/Sprite_Full-01.png', heroFrames);
  heroAnimation = loadAnimation(heroSpriteSheet);
  
  babySpriteSheet = loadSpriteSheet('assets/Sprite_Full-01.png', babyFrames);
  babyAnimation = loadAnimation(babySpriteSheet);
  
  matureSpriteSheet = loadSpriteSheet('assets/Sprite_Full-01.png', matureFrames);
  matureAnimation = loadAnimation(matureSpriteSheet);
  
  adultSpriteSheet = loadSpriteSheet('assets/Sprite_Full-01.png', adultFrames);
  adultAnimation = loadAnimation(adultSpriteSheet);
  
  bg_title = loadImage("assets/intro.png");
  bg_defeat = loadImage("assets/defeat.png");
  bg_victory = loadImage("assets/victory.png");
  bg_lvlAlpha = loadImage("assets/lvlAlphaTerrain.png");
  bg_lvlBeta = loadImage("assets/lvlBetaTerrain.png");
  bg_lvlCharlie = loadImage("assets/lvlCharlieTerrain.png");

  //enemyAlphaImage = loadAnimation("assets/baby00000.png", "assets/baby00023.png");
  //enemyBetaImage = loadAnimation("assets/mature00000.png", "assets/mature00029.png");
  //enemyCharlieImage = loadAnimation("assets/adult00000.png", "assets/adult00023.png");
  
}
function setup() {
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  createCanvas(tempWidth,tempHeight);

  //initialize bullets as a group of sprites
  bullets = new Group();
  enemies = new Group();
  ammo = new Group();
  
  hero = createSprite(width/2, height*.8, 30, 30);
  hero.scale = .3;
  hero.friction = 0.8;
  hero.addAnimation('idle', heroAnimation);
  hero.debug = true;
  
  hero.changeAnimation('idle');

}

function draw() {

 if(gameState == 'startUp'){
   background(bg_title);

 }else if(gameState == 'loose'){
   background(bg_defeat);
 }else if(gameState == 'win'){
   background(bg_victory);
 }else if(gameState == 'lvlAlpha'){
  lvlAlpha();
 }else if(gameState == 'lvlBeta'){
  lvlBeta();
 }else if(gameState == 'lvlCharlie'){
  lvlCharlie();
 }
 
}

function keyPressed(){
 
 if (keyCode == RIGHT_ARROW) {
    //provide a burst of speed to the right (zero degrees)
    hero.setSpeed(heroSpeed,0);
  } else if (keyCode == LEFT_ARROW) {
   //provide a burst of speed to the left (180 degress)
    hero.setSpeed(heroSpeed,180);
  } else if(key == ' '){
    bulletShoot.play();
    //create bullet at the location of the hero and set the size
    var bullet = createSprite(hero.position.x, hero.position.y,5,5);
    //set the speed and direction of the bullet
    bullet.setSpeed(10,270);
    //make the bullet dissappear after a certain number of frames
    bullet.life = 50;
    bullet.shapeColor = 'white';
    //add the singular bullet to the GROUP bullets
    bullets.add(bullet);
    
  }
}

function keyTyped(){
  if(key === 'x'){
     gameState = 'lvlAlpha';
  }
}