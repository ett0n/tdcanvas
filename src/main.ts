import "./style.scss";
import { wayPoints } from "./assets/data";

const canvas: HTMLCanvasElement = document.querySelector("#canvas")!;
const context = canvas.getContext("2d")!;
//to draw the background on a canva an HTMLImage is required
const bg: HTMLImageElement = new Image();
//required to draw the img on javascript load
bg.onload = () => {
  context.drawImage(bg, 0, 0);
};
//property Image.src is needed for url img
bg.src = "./src/assets/gameMap.png";

canvas.width = 1600;
canvas.height = 960;

console.log(wayPoints);
