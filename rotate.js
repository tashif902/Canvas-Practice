const myCanvas = document.getElementById("myDrawing");
const myContext = myCanvas.getContext("2d");
myContext.save();
// Set the initial position of the drawing
myContext.translate(25, 75);
// Draw six rotating rectangles to overlap
for (let i = 0; i < 6; i++) {
  myContext.save();
  myContext.fillStyle = "rgba(" + (255-40*i) + ", 255, " + (40*i) + ", 0.5)";
let height = 50;
let width = 150;
let angleDegrees = 30*i;
let angleRad = (Math.PI/180)*angleDegrees; //convert to radians
// First, translate to the center of the image, then rotate
myContext.translate(width/2, height/2);
myContext.rotate(angleRad);
// Then translate back
myContext.translate(-width/2, -height/2);
  myContext.fillRect(0, 0, width, height);
  myContext.restore();
}
myContext.restore();
