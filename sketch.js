var gravity;
var rockets = [];

function setup() {
  createCanvas(windowWidth, (windowHeight - document.getElementById("pageTitle").offsetHeight));
  gravity = createVector(0, 0.2);
  colorMode(RGB);
  background(0, 0, 0);
};

function draw() {

  background(0, 0, 0, 25);
  
  if (random(1) < 0.02) {
    rockets.push(new Rocket(floor(random(255)), 255));
  };
  
  for (var i = rockets.length-1; i >= 0; i--) {
    rockets[i].updateFirework();
    rockets[i].showFirework();

    if (rockets[i].fireworkIsDone()) {
      rockets.splice(i, 1);
    };    
  };
};
