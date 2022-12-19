class Particle {
  constructor() {
    this.pos = createVector(random(0, width), random(0, height));
    this.vel = createVector(0, random(-4, 5));
    this.acc = createVector(0, 0.5);
    this.c = color(random(255,170,50));
    this.w = random(30);
    this.lifespan = 180;
  }

  run() {
    this.update();
    this.show();
  
  }
  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.lifespan -= 2;
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }


  show() {
    noStroke();
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
  
  isDead() {
    return this.lifespan < 0;
  }
}
