import Circle from "./Circle";
import Shape from "./Shape";
import Vector from "./Vector";

class App {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  shapes: Shape[] = [];

  frameRequestHandle: number;
  startTime: number;

  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.context = this.canvas.getContext("2d");

    this.startTime = Date.now();
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);

    document.body.appendChild(this.canvas);

    this.shapes.push(
      new Circle(
        new Vector(this.canvas.width * 0.5, this.canvas.height * 0.5),
        100
      )
    );
  }

  frameRequest = () => {
    this.frameRequestHandle = window.requestAnimationFrame(this.frameRequest);

    const currentTime = Date.now();
    const delta = (currentTime - this.startTime) * 0.001;
    this.startTime = currentTime;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].update(delta);
      this.shapes[i].render(this.context);
    }
  };
}

window.onload = () => {
  new App();
};
