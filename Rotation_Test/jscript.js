let x = 0;
let y = 0;
let z = 0;

function rotateX() {
  x += 15;
  document.getElementById("card").style = `transform: rotateX(${x + "deg"})`;
  console.log(x);
}

function rotateY() {
  console.log(y);
  y += 15;
  document.getElementById("card").style = `transform: rotateY(${y + "deg"})`;
  console.log(y);
}

function rotateZ() {
  console.log(z);
  z += 15;
  document.getElementById("card").style = `transform: rotateZ(${z + "deg"})`;
  console.log(z);
}
