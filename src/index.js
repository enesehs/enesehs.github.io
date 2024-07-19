//Gradient BG
document.addEventListener('DOMContentLoaded', () => {
  const interBubble = document.querySelector('.interactive');
  let curX = 0;
  let curY = 0;
  let tgX = 0;
  let tgY = 0;

  const move = () => {
    curX += (tgX - curX) / 20;
    curY += (tgY - curY) / 20;
    interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
    requestAnimationFrame(move);
  };

  window.addEventListener('mousemove', event => {
    tgX = event.clientX;
    tgY = event.clientY;
  });

  move();
});

//scroll
type="text/javascript">
window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("sticky", window.scrollY > 2);
})

//Roll Text Anim
document.addEventListener("DOMContentLoaded", function () {
  const roles = ["Jr. Game Developer", "Full-Stack Developer", "Gamer", "Enesehs", "Coder"];
  const rollingTextElement = document.querySelector(".rolling-text");

  let currentIndex = 0;

  function updateRole() {
    const newRole = document.createElement("div");
    newRole.classList.add("text");
    newRole.textContent = roles[currentIndex];
    rollingTextElement.appendChild(newRole);

    setTimeout(() => {
      rollingTextElement.removeChild(newRole);
    }, 3000); // 3 saniye sonra eski yazıyı kaldır

    currentIndex = (currentIndex + 1) % roles.length;
  }

  setInterval(updateRole, 3000);
  updateRole(); 
});

//p text anim
const textElement = document.getElementById('text');
const characters = textElement.innerText.split('');
const animationDelay = 10;
let newDom = '';

characters.forEach(char => {
    newDom += char === ' ' 
        ? '<span class="char">&nbsp;</span>' 
        : `<span class="char">${char}</span>`;
});

textElement.innerHTML = newDom;

Array.from(textElement.children).forEach((child, index) => {
    child.style.animationDelay = `${animationDelay * index}ms`;
});



// Memes
// Meme I

document.addEventListener("DOMContentLoaded", function() {
  const myElement = document.getElementById("pp");
  let clickCount = 0;


  myElement.addEventListener("click", function() {
    clickCount++;
    if (clickCount === 2) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      clickCount = 0;
    }
    setTimeout(function() {
      clickCount = 0;
    }, 500);
  });

  myElement.addEventListener("contextmenu", function(event) {
    event.preventDefault(); 
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
  });
});


//Meme II
document.addEventListener("DOMContentLoaded", function() {
  let clickCount = 0;
  let clickTimer;

  document.addEventListener("click", function() {
    clickCount++;
    clearTimeout(clickTimer); 
    clickTimer = setTimeout(() => {
      clickCount = 0; 
    }, 2000);

    if (clickCount >= 15) {
      for (let i = 0; i < 50; i++) {
        setTimeout(createRandomImage, i * 50);
      }
      clickCount = 0;
    }
  });

  function createRandomImage() {
    const img = document.createElement("img");
    img.src = "/public/assets/img/karamel.jpg";
    img.style.position = "absolute";
    img.style.width = `${getRandomSize(100, 500)}px`;
    img.style.height = "auto";
    img.style.top = `${getRandomPosition(window.innerHeight)}px`;
    img.style.left = `${getRandomPosition(window.innerWidth)}px`;
    img.style.zIndex = 999;
    document.body.appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 9000); 
  }

  function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
  }
});


//Meme III

document.addEventListener("DOMContentLoaded", function() {
  let konamiCode = [];
  const konamiSequence = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  const konamiMessage = "Hile Aktif Edildi!";

  document.addEventListener("keydown", function(event) {
    konamiCode.push(event.key);
    konamiCode = konamiCode.slice(-konamiSequence.length);

    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
      activateKonamiEgg();
    }
  });

  function activateKonamiEgg() {
    alert(konamiMessage);
  }
});

// Meme IV
document.addEventListener("DOMContentLoaded", function() {
  const sessionTimeout = 10 * 60 * 1000;
  let timer;


  startTimer();


  document.addEventListener("click", function() {
    resetTimer();
  });

  function startTimer() {
    timer = setTimeout(function() {
      showFunnyMessage();
    }, sessionTimeout);
  }

  function resetTimer() {
    clearTimeout(timer);
    startTimer();
  }

  function showFunnyMessage() {
    alert("Bomba imha kodları bulundu...");
  }
});

//Mobile 
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
  document.getElementById('mobileAlert').style.display = 'block';
  document.getElementById('blur').style.display = 'block';
}
