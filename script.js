const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate () {
  currentX += (mouseX - currentX) * 0.08;
  currentY += (mouseY - currentY) * 0.08;

  // sybtle drift 
  let driftX = Math.sin(Date.now() * 0.002)*3;
  let driftY = Math.cos(Date.now()*0.002)*3;

  cursor.style.left = currentX + driftX +"px";
  cursor.style.top = currentY + driftY +"px";

  requestAnimationFrame(animate);
}

animate();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

