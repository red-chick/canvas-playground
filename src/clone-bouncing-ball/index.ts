import Ball from "./Ball";
import Block from "./Block";

class App {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  stageWidth: number;
  stageHeight: number;
  balls: Ball[] = [];
  blocks: Block[] = [];

  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    this.blocks.push(new Block(700, 30, 300, 450));
    this.balls.push(new Ball(this.stageWidth, this.stageHeight, 60, 25));

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.blocks.forEach((block) => {
      block.draw(this.ctx);
    });
    this.balls.forEach((ball) => {
      ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.blocks);
    });
  }
}

window.onload = () => {
  new App();
};
