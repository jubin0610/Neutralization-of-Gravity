let ball;

function setup() {
  createCanvas(600, 400);

  ball = new Particle();
}


function draw() {
  background('rgb(153,204,204)');

  let gravity = createVector(0, 0.1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
  
   if (mouseIsPressed) {
     background(0);
  }
}
