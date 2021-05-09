import Shape from "./Shape";
import Vector from "./Vector";

const PI2 = Math.PI * 2;

export default class Circle extends Shape {
  radius: number;

  constructor(vector: Vector, radius: number) {
    super(vector);
    this.radius = radius;
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    context.fill();
  }
}
