import "./style.scss";
import { wayPoints } from "./assets/data";
import { Enemy } from "./classes";

const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
export const context = canvas.getContext("2d")!;
//to draw the background on a canva an HTMLImage is required
const bg: HTMLImageElement = new Image();

//required to draw the img on javascript load
bg.onload = () => {
  animate();
};
//property Image.src is needed for url img
bg.src = "./src/assets/gameMap.png";

canvas.width = 1600;
canvas.height = 960;

console.log(wayPoints);
const enemies: Array<Enemy> = [];
for (let i = 1; i < 10; i++) {
  const offSet = i * 200;
  enemies.push(new Enemy({ position: { x: wayPoints[0].x - offSet, y: wayPoints[0].y } }));
}

const animate = () => {
  requestAnimationFrame(animate);
  context.drawImage(bg, 0, 0);
  enemies.forEach((e) => {
    e.update();
  });
};
