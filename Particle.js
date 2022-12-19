class Particle {
  constructor() {
    this.pos = createVector(width/2, height/2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color('rgb(102,153,104)');
    this.w = 28;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
    
    if (mouseIsPressed) {
    background (0);
    this.c = color(255); 
  }
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -0.8;
      this.pos.y = height;
    }
    
    if (this.pos.x > width) {
      this.pos.x = 0;
    }
  }


  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
}
