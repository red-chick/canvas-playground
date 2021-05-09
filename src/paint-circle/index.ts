import Circle from "./Circle";
import Shape from "./Shape";
import Vector from "./Vector";

class App {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  shapes: Shape[] = [];

  constructor() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    document.body.appendChild(this.canvas);

    this.context = this.canvas.getContext("2d");

    this.shapes.push(
      new Circle(
        new Vector(this.canvas.width * 0.5, this.canvas.height * 0.5),
        100
      )
    );

    this.render();
  }

  render() {
    for (let i = 0; i < this.shapes.length; i++) {
      this.shapes[i].render(this.context);
    }
  }
}

window.onload = () => {
  new App();
};
