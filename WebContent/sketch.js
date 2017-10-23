var s;
var rockets = [];
var nbRocket = 20;
var score = 0;
var perdu = false;
const NBMAXVIES = 10

function setup() {
    createCanvas(600,700);
    frameRate(50);
    s = new Ship();
    initRockets();

}

function draw() {
  if (!perdu){
    background(40);
    for (var i = 0; i < nbRocket; i++) {
        rockets[i].show();
        rockets[i].update();
        rockets[i].collision(s);
    }
    s.show();
    s.update();
  }else {
    background(40);
    textSize(32);
    text("Game Over", 10, 30);
    fill(255, 0, 0);
    text("Vous avez " + score + " points", 10, 70);
    fill(250, 0, 0);
    text("Pour rejouer appuyer sur [Entrée]", 10, 110);
    fill(250, 0, 0);

  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW|| keyCode === LEFT_ARROW) {
    s.setBooleanArrow(keyCode, "p");
  }
  if (keyCode === ENTER && perdu) {
    perdu = false;
    s.resetVies();
    initRockets();
    score = 0;
  }
}

function keyReleased(){
  if(keyCode === RIGHT_ARROW || keyCode === LEFT_ARROW) {
      s.setBooleanArrow(keyCode, "r");
  }
}


function keyTyped(){
  if (keyCode === 32){
    s.setSuperDash(5);
  }
}

function newRocket(i){
  var rand = random(100);
  if (rand < 3){
    rockets[i] = new Bonus(i);
  }else{
    rockets[i] = new Rocket(i);
  }
}


function initRockets(){
  for (var i = 0; i < nbRocket; i++) {
      newRocket(i);
  }
}
