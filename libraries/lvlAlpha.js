 function lvlAlpha(){
   
  //setup the enemy to be created ever 30 frames
  if(frameCount%enemyRateAlpha === 0){
    //make an enemy at the top, random X
    var enemy = createSprite(random(width), 0,40,40);
    enemy.setCollider("circle", 0,0, 100);
    //set the speed and direction of the bullet
    enemy.setSpeed(1,random(90 - enemyAngle,90 + enemyAngle));
    //make the bullet dissappear after a certain number of frames
    enemy.life = 900;
    //enemy health
    enemy.type = 2;
    enemy.scale = .2;
    enemy.addAnimation("animation", babyAnimation);
    
    
    enemy.debug = true;
    //add the singular bullet to the GROUP bullets
    enemies.add(enemy);
    

  }
  
  background(bg_lvlAlpha);
  //test any overlap
  //first group name.overlap(second group,callback function)
  enemies.overlap(bullets,enemyHit);
  //did the enemy hit the hero?
  enemies.overlap(hero,heroHit);
  
  
 
 
  textSize(32);
  text("score " + score, 10, 30);
  text("health " + heroHealth,10, 60);
  //use this in every p5play program
  // only call it once per frame, almost always at the end of the draw
  drawSprites();
  
  
  
 }