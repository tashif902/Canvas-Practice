const myCanvas = document.getElementById("myDrawing");
const myContext = myCanvas.getContext("2d");


myContext.fillStyle = "red";
myContext.beginPath();
myContext.arc(200, 110, 30, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "green";
myContext.beginPath();
myContext.arc(200, 180, 45, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(200, 270, 60, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "purple";
myContext.beginPath();
myContext.arc(185, 110, 4, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "black";
myContext.beginPath();
myContext.arc(210, 110, 4, 0, Math.PI*2);
myContext.fill();
myContext.fillStyle = "purple";
myContext.beginPath();
myContext.arc(185, 105, 5, 4, Math.PI*2);
myContext.fill();
myContext.fillStyle = "purple";
myContext.beginPath();
myContext.arc(210, 105, 5, 60, Math.PI*2);
myContext.fill();

//Draw mouth
myContext.fillStyle = "black";
myContext.beginPath();
myContext.rect(190, 118, 20, 3);
myContext.fill();

//Draw rectangle
myContext.fillStyle = "gray";
myContext.beginPath();
myContext.rect(160, 80, 85, 7);
myContext.fill();

// Draw rectangle
myContext.fillStyle = "yellow";
myContext.beginPath();
myContext.rect(172, 39, 60, 40);
myContext.fill();

myContext.fillStyle = "gray";
myContext.beginPath();
myContext.rect(70, 170, 85, 7);
myContext.fill();

myContext.fillStyle = "gray";
myContext.beginPath();
myContext.rect(240, 170, 85, 7);
myContext.fill();
