const canvas = document.getElementById("stage");
const context = canvas.getContext("2d");
let width = window.innerWidth || 0;
let height = window.innerHeight || 0;
const total = 600;
const flakes = [];
let animationId;

function resize() {
   width = window.innerWidth || 0;
   height = window.innerHeight || 0;
   canvas.width = width;
   canvas.height = height;
   canvas.style.width = `${width}px`;
   canvas.style.height = `${height}px`;
}

function create() {
   for (let i = 0; i < total; ++i) {
      flakes.push(new Flake());
   }
}

function loop() {
   animationId = requestAnimationFrame(loop);
   context.clearRect(0, 0, width, height);

   for (const flake of flakes) {
      flake.update();
      flake.draw();
   }
}

function rand(min, max, round) {
   const value = Math.random() * (max - min) + min;
   return round ? Math.floor(value) : value;
}

class Flake {
   constructor() {
      this.init();
   }

   init() {
      this.x = rand(0, width, true) - 400;
      this.y = rand(-height, -10, true);
      this.factor = rand(0.2, 1.0);
      this.count = rand(0, 1000, true);
      this.speed = 5;
      this.size = 5;
      this.wind = 2;
   }

   update() {
      this.x += this.wind + Math.cos(this.count / 20);
      this.y += this.factor * (Math.sin(this.count / 100) + this.speed);

      if (this.y > height) {
         this.init();
      }
      this.count++;
   }

   draw() {
      let size = this.size * this.factor;
      let grad = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);

      if (this.factor > 0.9) {
         size *= 6;
         grad = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
         grad.addColorStop(0, 'rgba(250, 250, 255, 0.1)');
         grad.addColorStop(0.5, 'rgba(250, 250, 255, 0.05)');
         grad.addColorStop(1, 'rgba(250, 250, 255, 0)');
      } else if (this.factor > 0.8) {
         size *= 2;
         grad = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, size);
         grad.addColorStop(0, 'rgba(250, 250, 255, 0.2)');
         grad.addColorStop(0.6, 'rgba(250, 250, 255, 0.08)');
         grad.addColorStop(1, 'rgba(250, 250, 255, 0)');
      } else {
         grad.addColorStop(0, 'rgba(250, 250, 255, 1)');
         grad.addColorStop(0.5, 'rgba(250, 250, 255, 0.8)');
         grad.addColorStop(1, 'rgba(250, 250, 255, 0)');
      }

      context.beginPath();
      context.fillStyle = grad;
      context.arc(this.x, this.y, size, 0, 2 * Math.PI, false);
      context.fill();
      context.closePath();
   }
}

function winteron() {
   if (!animationId) {
      loop();
   }
}

function winteroff() {
   if (animationId) {
      cancelAnimationFrame(animationId);
      animationId = null;
      context.clearRect(0, 0, width, height);
   }
}

context.imageSmoothingEnabled = true;
context.globalCompositeOperation = "lighten";
window.addEventListener("resize", resize);
resize();
create();
winteron();

window.addEventListener("keydown", (event) => {
   if (event.key === '"') {
      const command = prompt("Enter command:");
      if (command === "winteroff") {
         winteroff();
         document.querySelector(".logo img").src = "./public/assets/logo/enesehsdev.png";
          document.getElementById("kar1").style.opacity = 0;
          document.getElementById("kar3").style.opacity = 0;
          document.getElementById("kar4").style.opacity = 0;
         const winterMusic = document.getElementById("winterMusic");
         winterMusic.pause();
         winterMusic.currentTime = 0;
      } else if (command === "winteron") {
         winteron();
         document.querySelector(".logo img").src = "./public/assets/logo/enesehsdevwinterpng.png";
         document.getElementById("kar1").style.opacity = 1;
         document.getElementById("kar3").style.opacity = 1;
         document.getElementById("kar4").style.opacity = 1;
         document.getElementById("winterMusic").play();
      }
   }
});
// kodumun autoplayi
document.addEventListener("DOMContentLoaded", () => {
   const audio = document.getElementById("winterMusic");
   audio.volume = 0.2; // Ses seviyesi düşürülüyor
});
document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('winterMusic').play();
    document.removeEventListener('click', musicPlay);
}
