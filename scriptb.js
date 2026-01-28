const player = document.getElementById("player");
const target = document.getElementById("target");

let x = 10;
let y = 10;
const step = 10;

document.addEventListener("keydown", function (event) {

  if (event.key === "ArrowUp") {
    y -= step;
  }
  if (event.key === "ArrowDown") {
    y += step;
  }
  if (event.key === "ArrowLeft") {
    x -= step;
  }
  if (event.key === "ArrowRight") {
    x += step;
  }

  player.style.left = x + "px";
  player.style.top = y + "px";

  checkCollision();
});

function checkCollision() {
  if (x === 300 && y === 200) {
    document.getElementById("messageb").textContent = "🎉 Gagné !";
  }
}
