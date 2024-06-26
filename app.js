const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
    "#f03e3e",
    "#e64980",
    "#be4bdb",
    "#7950f2",
    "#4c6ef5",
    "#228be6",
    "#15aabf",
    "#12b886",
    "#40c057",
    "#82c91e",
    "#fab005",
    "#fd7e14"
];

let offsetX = 0;
let offsetY = 0;

function onMove(event) {
    ctx.beginPath();
    ctx.moveTo(offsetX,offsetY);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

function onClick(event) {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
}

canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onMove);