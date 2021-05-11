import Block from "./Block";

const PI2 = Math.PI * 2;

export default class Ball {
  radius: number;
  x: number;
  y: number;

  vx: number;
  vy: number;

  constructor(
    stageWidth: number,
    stageHeight: number,
    radius: number,
    speed: number
  ) {
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    const diameter = this.radius * 2;
    this.x = diameter + Math.random() * (stageWidth - diameter);
    this.y = diameter + Math.random() * (stageHeight - diameter);
  }

  draw(
    ctx: CanvasRenderingContext2D,
    stageWidth: number,
    stageHeight: number,
    blocks: Block[]
  ) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow(stageWidth, stageHeight);
    this.bounceBlock(blocks);

    ctx.fillStyle = "#fdd700";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, PI2);
    ctx.fill();
  }

  bounceWindow(stageWidth: number, stageHeight: number) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.vx *= -1;
      this.x += this.vx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceBlock(blocks: Block[]) {
    blocks.forEach((block) => {
      const minX = block.x - this.radius;
      const maxX = block.x + block.width + this.radius;
      const minY = block.y - this.radius;
      const maxY = block.y + block.height + this.radius;

      if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
        const x1 = Math.abs(minX - this.x);
        const x2 = Math.abs(this.x - maxX);
        const y1 = Math.abs(minY - this.y);
        const y2 = Math.abs(this.y - maxY);
        const min1 = Math.min(x1, x2);
        const min2 = Math.min(y1, y2);
        const min = Math.min(min1, min2);

        if (min === min1) {
          this.vx *= -1;
          this.x += this.vx;
        } else if (min === min2) {
          this.vy *= -1;
          this.y += this.vy;
        }
      }
    });
  }
}
