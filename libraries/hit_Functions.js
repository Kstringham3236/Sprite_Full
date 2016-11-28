function enemyHit(enemy,bullet){
  if(enemy.type > 0){
    //get rid of the bullet
    bullet.remove();
    //change color
    enemy.shapeColor = 'yellow';
    //subtract health
    enemy.type--;
    enemyDamaged.play();
  }else if(enemy.type === 0){
    //create explosion when bullet hits enemy
    for(var i=0; i<explosionDensity; i++) {
      var p = createSprite(bullet.position.x, bullet.position.y,2,2);
      
      p.setSpeed(random(3,5), random(360));
      p.friction = 0.95;
      p.life = 200;
    }
  
  enemy.remove();
  bullet.remove();
   score++;
   if(score > 0 && score < 20){
    gameState = 'lvlAlpha';
  }else if (score == 20 && score < 30){
    gameState = 'lvlBeta';
  }else if (score == 30 && score < 40){
    gameState = 'lvlCharlie';
  }else if (score == 40){
    gameState = 'win';
    }
  }
}

function heroHit(enemy,hero){
  heroHealth--;
  heroDamaged.play();
  if(heroHealth <= 0){
    gameState = 'loose';
  }
  enemy.remove();
  hero.shapeColor = 'red';
  
}

