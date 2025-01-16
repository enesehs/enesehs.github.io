//Gradient BG
document.addEventListener("DOMContentLoaded", () => {
  const interactiveElement = document.querySelector(".interactive"),
    toggleButton = document.getElementById("toggleButton"),
    stopButton = document.getElementById("disable-effects-btn"),
    gradientsContainerElement = document.querySelector(".gradients-container");

  let x = 0,
    y = 0,
    targetX = 0,
    targetY = 0,
    trackingEnabled = true,
    animationRunning = true;

  interactiveElement.style.transition = "opacity 0.7s ease-in-out";

  const animate = () => {
    if (!animationRunning) return;
    x += (targetX - x) * 0.033;
    y += (targetY - y) * 0.033;
    interactiveElement.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px)`;
    requestAnimationFrame(animate);
  };

  const handleMouseMove = (event) => {
    if (!trackingEnabled) return;
    targetX = event.clientX + window.pageXOffset;
    targetY = event.clientY + window.pageYOffset;
  };

  const showMessage = (message) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    Object.assign(messageDiv.style, {
      fontFamily: "MonaSansMedium",
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#080a0f52",
      backdropFilter: "blur(10px)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "5px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
      zIndex: "1000",
      opacity: "0",
      transition: "opacity 0.5s ease-in-out",
    });
    document.body.appendChild(messageDiv);
    setTimeout(() => { messageDiv.style.opacity = "1"; }, 100);
    setTimeout(() => {
      messageDiv.style.opacity = "0";
      setTimeout(() => { document.body.removeChild(messageDiv); }, 500);
    }, 3000);
  };

  window.addEventListener("mousemove", handleMouseMove);

  toggleButton.addEventListener("click", () => {
    trackingEnabled = !trackingEnabled;
    interactiveElement.style.opacity = trackingEnabled ? "0.7" : "0";
    showMessage(trackingEnabled ? "Tracking is ON" : "Tracking is OFF");
  });

  if (stopButton) {
    stopButton.addEventListener("click", () => {
      animationRunning = !animationRunning;
      trackingEnabled = animationRunning;
      showMessage(animationRunning ? "Animation is ON" : "Animation is OFF");
      interactiveElement.style.display = "none";
      gradientsContainerElement.style.display = "none";
    });
  }

  animate();
});


//scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 2) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

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
  let clickTimeout;

  const handleDoubleClick = () => {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    clickCount = 0;
  };

  myElement.addEventListener("click", function() {
    clickCount++;
    clearTimeout(clickTimeout);
    if (clickCount === 2) {
      handleDoubleClick();
    } else {
      clickTimeout = setTimeout(() => {
        clickCount = 0;
      }, 500);
    }
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

// Helper function to create and display video in fullscreen
function createFullscreenVideo(videoUrl) {
  const videoDiv = document.createElement('div');
  videoDiv.style.position = 'fixed';
  videoDiv.style.top = '0';
  videoDiv.style.left = '0';
  videoDiv.style.width = '100%';
  videoDiv.style.height = '100%';
  videoDiv.style.zIndex = '1000';
  videoDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';

  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('allow', 'autoplay; fullscreen');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');

  videoDiv.appendChild(iframe);
  document.body.appendChild(videoDiv);

  // Fullscreen function
  function openFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chromium
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // Edge
      element.msRequestFullscreen();
    }
  }

  openFullscreen(videoDiv);

  const removeVideoDiv = () => document.body.removeChild(videoDiv);
  videoDiv.addEventListener('click', removeVideoDiv);
  document.addEventListener('keydown', removeVideoDiv, { once: true });
  document.addEventListener('touchstart', removeVideoDiv, { once: true });
}

// Meme IV
document.getElementById('taxi').addEventListener('click', () => {
  createFullscreenVideo('https://www.youtube.com/embed/1kvZ25qLWqA?autoplay=1&fs=1&vq=hd2160');
});

// Meme V
document.getElementById('pyramid').addEventListener('click', () => {
  createFullscreenVideo('https://www.youtube.com/embed/O4JHaELSZ3o?autoplay=1&fs=1&vq=hd2160');
});

// Meme VI
document.getElementById('dansedenkurbaga').addEventListener('click', () => {
  createFullscreenVideo('https://www.youtube.com/embed/zbh5YUax0uc?autoplay=1&fs=1&vq=hd2160');
});


//mobil kontrol
function isMobile() {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
/*function closeAlert() {
  document.getElementById('mobileAlert').style.display = 'none';
  document.getElementById('blur').style.display = 'none';
}*/

if (isMobile()) {
  document.getElementById('mobile-overlay').style.display = 'block';
  /*document.getElementById('blur').style.display = 'block';*/
}


//Potato Detector
function detectPotato() {
  let fps = 0;
  let lastFrameTime = performance.now();
  let lowFpsCount = 0;

  function calculateFPS() {
    const now = performance.now();
    fps = 1000 / (now - lastFrameTime);
    lastFrameTime = now;

    if (fps < 16) {
      lowFpsCount++;
      if (lowFpsCount >= 10) {
        showPotatoMessage();
        return;
      }
    } else {
      lowFpsCount = 0;
    }

    requestAnimationFrame(calculateFPS);
  }

  requestAnimationFrame(calculateFPS);
}

function showPotatoMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `
    <h3>🥔 Potato detected! Your browser is running slower than a potato! 🥔</h3>
    <p>For a better experience, consider upgrading your GPU or enable hardware acceleration.</p>`;
  Object.assign(messageDiv.style, {
    fontFamily: "MonaSansMedium",
    position: "fixed",
    textAlign: "center",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(100, 100, 100, 0.15)",
    border: "2px solid rgba(100, 100, 100, 0.54)",
    backdropFilter: "blur(10px)",
    color: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
    zIndex: "1000",
  });
  document.body.appendChild(messageDiv);

  disableVisualEffects();
}

function disableVisualEffects() {
  animationRunning = false;
  trackingEnabled = false;
  document.querySelector(".interactive").style.display = "none";
  document.querySelector(".gradients-container").style.display = "none";
}

window.onload = detectPotato;



// Plasenta Entertaiment Bildirim
function showMessage(message) {
  const messageDiv = document.createElement("div");
  Object.assign(messageDiv.style, {
    fontFamily: "MonaSansMedium",
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#080a0f52",
    backdropFilter: "blur(10px)",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
    zIndex: "1000",
    opacity: "0",
    transition: "opacity 0.5s ease-in-out",
  });
  messageDiv.textContent = message;
  document.body.appendChild(messageDiv);
  setTimeout(() => { messageDiv.style.opacity = "1"; }, 100);
  setTimeout(() => {
    messageDiv.style.opacity = "0";
    setTimeout(() => { document.body.removeChild(messageDiv); }, 500);
  }, 3000);
}

["plasenta-footer", "plasenta"].forEach(id => {
  document.getElementById(id).addEventListener("click", function(event) {
    event.preventDefault();
    showMessage("Plasenta.com is still under development.");
  });
});
