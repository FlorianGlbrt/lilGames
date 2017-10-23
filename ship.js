function Ship(){
  this.x = 285;
  this.y = 650;
  this.scale = 30;
  this.leftArrowPressed = false;
  this.rightArrowPressed = false;
  this.dirX = 0;
  this.superDashTime = 0;
  this.nbVies = 5;

  this.getX = function(){
    return this.x;
  }
  this.getY = function(){
    return this.y;
  }

  this.update = function(){
    this.setDir();
    this.x += this.dirX;
    this.x = constrain(this.x, 0, 570);
    this.afficherVies();
  }

  this.setBooleanArrow = function(key, char){
    var bool;
    if (char == "p"){
      bool = true;
    }else {
      bool = false;
    }

    if(key === LEFT_ARROW){
      this.leftArrowPressed = bool;
    }else if (key === RIGHT_ARROW){
      this.rightArrowPressed = bool;
    }
  }

  this.setDir = function(){
    this.dirX = 0;
    var dist = 5;
    if (this.superDashTime > 0) {
      dist = 20
    }
    this.superDashTime--;
    if(this.leftArrowPressed){
      this.dirX += -dist;
    }
    if(this.rightArrowPressed){
      this.dirX += dist;
    }
  }

  this.setSuperDash = function(x){
    this.superDashTime = x;
  }

  this.resetVies = function(){
    this.nbVies = 5;
  }



  this.show = function(){
    fill(255,255,255);
    rect(this.x, this.y, this.scale, this.scale);
    //triangle(this.x, this.y, this.x + this.scale, this.y, this.x + this.scale * cos(3 * PI / 2 + PI / 6), this.y + this.scale * sin(3 * PI / 2 + PI / 6));
  }

  this.afficherVies = function(){
    for (var i = 0; i < this.nbVies; i++) {
      fill(255,0,0) // Rouge

      ellipse(45 + i * 50, 35, 30, 30);
      //rect(30 + i * 50, 20, 30, 30);
    }

  }

  this.enleverVie = function(){
    this.nbVies--;
    if(this.nbVies <= 0){
      perdu = true;
    }
  }

  this.rajouterVie = function(){
    if (this.nbVies < NBMAXVIES){
      this.nbVies++;
    }
  }

}
