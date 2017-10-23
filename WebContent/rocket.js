function Rocket(i){
    this.x = floor(random(600));
    this.y = 0;
    this.scaleX = 5;
    this.scaleY = 10;
    this.dirX = random(4) - 2;
    this.dirY = random(10) + 5;
    this.i = i;




    this.show = function(){
      fill(255,0,0);
      rect(this.x, this.y, this.scaleX, this.scaleY);
    }
    this.update = function(){
      this.x += this.dirX;
      this.y += this.dirY;
      this.out();
    }
    this.out = function(){
      if ((this.x > 600) || (this.x < 0) || (this.y > 700)) {
        newRocket(this.i)
        score ++;
      }
    }

    this.destroy = function(){
      this.x = 700;
    }

    this.collision = function(s){
        var x = s.getX();
        var y = s.getY();
        for (var i = 0; i < 30; i += 30) {
            if((this.x + i >= x) && (this.x + i <= x + 30) && (this.y >= y) && (this.y <= y + 30)){
                background(255, 0, 0);
                // if (score != 0){
                //   console.log(score);
                // }
                s.enleverVie();
                this.destroy();
            }
            if((this.x >= x) && (this.x <= x + 30) && (this.y + i >= y) && (this.y + i <= y + 30)){
                background(255, 0, 0);
                // if (score != 0){
                //   console.log(score);
                // }
                s.enleverVie();
                this.destroy();
            }
        }
    }
}
