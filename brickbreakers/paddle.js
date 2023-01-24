class Paddle {
  constructor() {
    this.width = 100;
    this.height = 10;
    this.pos = createVector(width / 2.5, height - this.height);
    this.step = 10;
    this.moveLeft = false;
    this.moveRight = false;
  }

  show() {
    fill(255);
    noStroke();
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }

  move() {
    if (this.moveLeft) {
      this.pos.x -= this.step;
      // this.pos.x = a.this.step;
    }
    if (this.moveRight) {
      this.pos.x += this.step;
      // this.pos.x = d.this.step;
    }
  }

  cekTepi() {
    if (this.pos.x < 0) {
      this.pos.x = 0;
    }
    if (this.pos.x > width - this.width) {
      this.pos.x = width - this.width;
    }
  }
}
