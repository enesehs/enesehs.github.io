//Gradient BG
document.addEventListener("DOMContentLoaded", () => {
  let interactiveElement = document.querySelector(".interactive"),
    toggleButton = document.getElementById("toggleButton"),
    x = 0,
    y = 0,
    targetX = 0,
    targetY = 0,
    trackingEnabled = true;

  interactiveElement.style.transition = "opacity 0.7s ease-in-out";

  let animate = () => {
    x += (targetX - x) / 20;
    y += (targetY - y) / 20;
    interactiveElement.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    requestAnimationFrame(animate);
  };

  let handleMouseMove = (event) => {
    if (!trackingEnabled) return;
    let pageX = window.pageXOffset,
      pageY = window.pageYOffset;
    targetX = event.clientX + pageX;
    targetY = event.clientY + pageY;
  };

  function showMessage(message) {
    let messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.style.fontFamily = "MonaSansMedium";
    messageDiv.style.position = "fixed";
    messageDiv.style.bottom = "20px";
    messageDiv.style.right = "20px";
    messageDiv.style.backgroundColor = "#080a0f";
    messageDiv.style.color = "#fff";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
    messageDiv.style.zIndex = "1000";
    messageDiv.style.opacity = "0";
    document.body.appendChild(messageDiv);
    setTimeout(() => { messageDiv.style.opacity = "1"; }, 100);
    setTimeout(() => {
      messageDiv.style.opacity = "0";
      setTimeout(() => { document.body.removeChild(messageDiv); }, 500);
    }, 3000);
  }

  window.addEventListener("mousemove", handleMouseMove);

  toggleButton.addEventListener("click", () => {
    trackingEnabled = !trackingEnabled;
    interactiveElement.style.opacity = trackingEnabled ? "0.7" : "0";
    showMessage(trackingEnabled ? "Tracking is ON" : "Tracking is OFF");
  });

  animate();
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



//Observer API
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll("section");

  let timeoutId;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const isActive = entry.isIntersecting;

      if (isActive) {
        clearTimeout(timeoutId);

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });

        timeoutId = setTimeout(() => {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
        }, 2000); //delay
      } else {
        clearTimeout(timeoutId);
      }
    });
  }, { threshold: 0.7 });

  sections.forEach((section) => observer.observe(section));
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
    img.style.top = `${getRandomPosition(1920)}px`;
    img.style.left = `${getRandomPosition(1080)}px`;
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
  var videoUrl = 'https://www.youtube.com/embed/1kvZ25qLWqA?autoplay=1&fs=1vq=hd2160';

  // Tam ekran fonksiyonu
  function openFullscreen(element) {
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // firefox
          element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { //chromium
          element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { //edge
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
  var videoUrl = 'https://www.youtube.com/embed/O4JHaELSZ3o?autoplay=1&fs=1vq=hd2160';

  // Tam ekran fonksiyonu
  function openFullscreen(element) {
      if (element.requestFullscreen) {
          element.requestFullscreen();
      } else if (element.mozRequestFullScreen) { // firefox
          element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) { //chromium
          element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) { //edge
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

function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

function closeAlert() {
  document.getElementById('mobileAlert').style.display = 'none';
  document.getElementById('blur').style.display = 'none';
}

if (isMobile()) {
  document.getElementById('mobileAlert').style.display = 'block';
  document.getElementById('blur').style.display = 'block';
}
