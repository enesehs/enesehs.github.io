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
    
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    tgX = event.clientX + scrollX;
    tgY = event.clientY + scrollY;
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
    }, 3000);

    currentIndex = (currentIndex + 1) % roles.length;
  }

  setInterval(updateRole, 3000);
  updateRole(); 
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

//Meme IV
document.getElementById('taxi').addEventListener('click', function() {
  var videoUrl = 'https://www.youtube.com/embed/1kvZ25qLWqA?autoplay=1&fs=1';

  // Tam ekran fonksiyonu
  function openFullscreen(element) {
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // firefox
          element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { //chromium
          element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { //eddge
          element.msRequestFullscreen();
      }
  }

  var videoDiv = document.createElement('div');
  videoDiv.style.position = 'fixed';
  videoDiv.style.top = '0';
  videoDiv.style.left = '0';
  videoDiv.style.width = '100%';
  videoDiv.style.height = '100%';
  videoDiv.style.zIndex = '1000';
  videoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('allow', 'autoplay; fullscreen');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');

  videoDiv.appendChild(iframe);
  document.body.appendChild(videoDiv);

  // tam ekran
  openFullscreen(videoDiv);

  videoDiv.addEventListener('click', function() {
      document.body.removeChild(videoDiv);
  });
});

//Meme V
document.getElementById('pyramid').addEventListener('click', function() {
  var videoUrl = 'https://www.youtube.com/embed/O4JHaELSZ3o?autoplay=1&fs=1';

  // Tam ekran fonksiyonu
  function openFullscreen(element) {
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // firefox
          element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { //chromium
          element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { //eddge
          element.msRequestFullscreen();
      }
  }

  var videoDiv = document.createElement('div');
  videoDiv.style.position = 'fixed';
  videoDiv.style.top = '0';
  videoDiv.style.left = '0';
  videoDiv.style.width = '100%';
  videoDiv.style.height = '100%';
  videoDiv.style.zIndex = '1000';
  videoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('allow', 'autoplay; fullscreen');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');

  videoDiv.appendChild(iframe);
  document.body.appendChild(videoDiv);

  // tam ekran
  openFullscreen(videoDiv);

  videoDiv.addEventListener('click', function() {
      document.body.removeChild(videoDiv);
  });
});

//Mobile 
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

if (isMobile()) {
  document.getElementById('mobileAlert').style.display = 'block';
  document.getElementById('blur').style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.body.style.pointerEvents = 'none';
}
