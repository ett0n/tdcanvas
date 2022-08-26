import { wayPoints } from "./assets/data";
import { context } from "./main";

export class Enemy {
  position: { x: number; y: number };
  width: number;
  height: number;
  directionIndex: number;
  center: { x: number; y: number };
  constructor({ position = { x: 0, y: 0 } }) {
    this.position = position;
    this.width = 100;
    this.height = 100;
    this.directionIndex = 0;
    this.center = {
      //allows us to move from the center position of the enemy instead of top left corner
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };
  }
  draw() {
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();

    //get the next waypoint as active destination
    const destination = wayPoints[this.directionIndex];

    //y and x distance allows us to move diagonnaly with cos and sin
    const yDistance = destination.y - this.center.y;
    const xDistance = destination.x - this.center.x;

    const angle: any = Math.atan2(yDistance, xDistance);
    this.position.x += Math.cos(angle);
    this.position.y += Math.sin(angle);

    this.center = {
      x: this.position.x + this.width / 2,
      y: this.position.y + this.height / 2,
    };

    if (Math.round(this.center.x) === Math.round(destination.x) && Math.round(this.center.y) === Math.round(destination.y) && this.directionIndex < wayPoints.length) {
      this.directionIndex++;
    }
  }
}
