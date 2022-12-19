let ball;
let movers = [];
let attractor;
let system;


function setup() {
  createCanvas(600, 400);
  system = new ParticleSystem(createVector(width/2, 50));

  ball = new Particle();

  for (let i = 0; i < 10; i++) {
    movers[i] = new Mover(random(0.1, 2), random(width), random(height));
  }
  attractor = new Attractor();
}


function draw() {
  background(122,187,219);
  
  system.addParticle();
  system.run();

  let gravity = createVector(0, 0.1);
  ball.addForce(gravity);

  ball.update();
  ball.show();
  
  if (mouseIsPressed) {
    background (0);
    attractor.display();

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
  }
  }
  }
