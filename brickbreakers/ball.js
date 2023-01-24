class Ball {
  constructor() {
    this.reset();
  }

  reset() {
    this.r = 15;
    this.pos = createVector(width / 2, height / 2);
    this.stepX = random(3, 5);
    this.stepY = random(4, 6);
    if (random(1) < 0.5) {
      this.stepX = this.stepX * -1;
    }
  }

  show() {
    fill(255);
    noStroke(0);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update() {
    this.pos.x += this.stepX;
    this.pos.y += this.stepY;
  }

  bounceY() {
    this.stepY = this.stepY * -1;
  }

  bounceX() {
    this.stepX = this.stepX * -1;
  }

  checkEdge() {
    if (this.pos.y > height + this.r) {
      this.reset();
    } else if (this.pos.y < 0 + this.r / 2) {
      this.bounceY();
    }

    if (this.pos.x < 0 + this.r / 2 || this.pos.x > width - this.r / 2) {
      this.bounceX();
    }
  }

  hitPaddle(paddle) {
    if (
      this.pos.x > paddle.pos.x - this.r &&
      this.pos.x < paddle.pos.x + paddle.width + this.r
    ) {
      if (this.pos.y < paddle.pos.y && this.pos.y > paddle.pos.y - this.r / 2) {
        return true;
      }
    }
  }

  hitBrick(brick) {
    if (
      this.pos.x > brick.pos.x - this.r &&
      this.pos.x < brick.pos.x + brick.width + this.r
    ) {
      if (
        this.pos.y < brick.pos.y + this.r &&
        this.pos.y > brick.pos.y - this.r
      ) {
        return true;
      }
    }
  }
}
