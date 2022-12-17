let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0.1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
}
