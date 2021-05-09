import Vector from "./Vector";

export default class Shape {
  position: Vector;

  constructor(position: Vector) {
    this.position = position;
  }

  render(context: CanvasRenderingContext2D) {}
}
