import { easeOutBounce } from "animation";

export default undefined;

const canvas = document.querySelector('canvas')!;
const context = canvas.getContext('2d')!;

canvas.width = 600;
canvas.height = 600;

context.setTransform(1, 0, 0, -1, 100, 500);

const func = (x: number) => easeOutBounce(x);

context.beginPath();
context.strokeStyle = '#999';
context.moveTo(0, 0);
context.lineTo(0, 450);
context.moveTo(0, 0);
context.lineTo(450, 0);
context.stroke();
context.closePath();

context.beginPath();
context.strokeStyle = '#000';
for (let x = 0; x < 400; x++) {
  context[x ? 'lineTo' : 'moveTo'](x, func(x / 400) * 400);
  context.stroke();
}
context.closePath();
