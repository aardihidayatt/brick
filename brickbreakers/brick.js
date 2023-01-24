class Brick {
  constructor(slotHor, slotVer) {
    this.width = 70;
    this.height = 20;
    this.pos = createVector(slotHor, slotVer);
  }

  show() {
    fill(50, 205, 50);
    stroke(0);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  }
}
