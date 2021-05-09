import Shape from "./Shape";
import Vector from "./Vector";

const PI2 = Math.PI * 2;

export default class Circle extends Shape {
  radius: number;
  speed: number;
  angle: number;

  constructor(vector: Vector, radius: number) {
    super(vector);
    this.radius = radius;
    this.speed = 100 * Math.random();
    this.angle = PI2 * Math.random();
  }

  render(context: CanvasRenderingContext2D) {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, PI2);
    context.fill();
  }

  update(delta: number) {
    const velocity = this.speed * delta;
    this.position.x += Math.cos(this.angle) * velocity;
    this.position.y += Math.sin(this.angle) * velocity;
  }
}
