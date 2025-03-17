let clickCount = 0,
    clickResetTimer = null;
const resetInterval = 11e3;

function showFirstWarning() {
    clearTimeout(clickResetTimer);
    const overlay = document.createElement("div");
    overlay.style.position = "fixed", overlay.style.top = "0", overlay.style.left = "0", overlay.style.width = "100%", overlay.style.height = "100%", overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)", overlay.style.backdropFilter = "blur(10px)", overlay.style.zIndex = "9999", overlay.style.display = "flex", overlay.style.flexDirection = "column", overlay.style.justifyContent = "center", overlay.style.alignItems = "center", overlay.id = "warning-overlay";
    const words = ["DO", "NOT", "CLICK", "TOO", "MUCH"];
    words.forEach((word, index) => {
        setTimeout(() => {
            const popSound = new Audio("https://cdn.freesound.org/previews/423/423618_2155630-lq.mp3");
            popSound.play();
            const wordElement = document.createElement("div");
            wordElement.textContent = word, wordElement.style.color = index % 2 == 0 ? "yellow" : "white", wordElement.style.fontSize = index === words.length - 1 ? "6rem" : "3rem", wordElement.style.fontWeight = "bold", wordElement.style.margin = "10px", wordElement.style.opacity = "0", wordElement.style.transition = "opacity 0.5s ease-in", wordElement.style.animation = "shake 0.5s ease-in-out";
            const shakeKeyframes = "\n                @keyframes shake {\n                    0% { transform: translateX(0); }\n                    25% { transform: translateX(-10px); }\n                    50% { transform: translateX(10px); }\n                    75% { transform: translateX(-10px); }\n                    100% { transform: translateX(0); }\n                }\n            ",
                styleSheet = document.createElement("style");
            styleSheet.innerText = shakeKeyframes, document.head.appendChild(styleSheet), overlay.appendChild(wordElement), setTimeout(() => {
                wordElement.style.opacity = "1"
            }, 100)
        }, 800 * index)
    }), setTimeout(() => {
        const subtitle = document.createElement("div");
        subtitle.textContent = "(your poor mouse is crying right now)", subtitle.style.color = "lightgray", subtitle.style.fontSize = "1.5rem", subtitle.style.fontStyle = "italic", subtitle.style.marginTop = "20px", overlay.appendChild(subtitle)
    }, 800 * words.length + 500), document.body.appendChild(overlay), setTimeout(() => {
        document.body.removeChild(overlay)
    }, 7e3)
}

function showSecondWarning() {
    clearTimeout(clickResetTimer);
    const overlay = document.createElement("div");
    overlay.style.position = "fixed", overlay.style.top = "0", overlay.style.left = "0", overlay.style.width = "100%", overlay.style.height = "100%", overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)", overlay.style.backdropFilter = "blur(15px)", overlay.style.zIndex = "9999", overlay.style.display = "flex", overlay.style.flexDirection = "column", overlay.style.justifyContent = "center", overlay.style.alignItems = "center", overlay.id = "warning-overlay-2";
    const angrierSound = new Audio("https://cdn.freesound.org/previews/440/440307_7482766-lq.mp3");
    angrierSound.currentTime = 1, angrierSound.play();
    const message = document.createElement("div");
    message.textContent = "I SAID DO NOT CLICK TOO MUCH! 😾", message.style.color = "red", message.style.fontSize = "3.5rem", message.style.fontWeight = "bold", message.style.margin = "20px", message.style.textAlign = "center", message.style.animation = "angryShake 0.3s infinite";
    const angrierShakeKeyframes = "\n        @keyframes angryShake {\n            0% { transform: translate(0, 0) rotate(0deg); }\n            25% { transform: translate(-5px, -5px) rotate(-2deg); }\n            50% { transform: translate(5px, 5px) rotate(2deg); }\n            75% { transform: translate(-5px, 5px) rotate(-2deg); }\n            100% { transform: translate(0, 0) rotate(0deg); }\n        }\n    ",
        styleSheet = document.createElement("style");
    styleSheet.innerText = angrierShakeKeyframes, document.head.appendChild(styleSheet);
    const catGif = document.createElement("img");
    catGif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWJvMG0xYjhkaTdvcjB6bTMzb24xcjc1Y3ljemo3bG15YzRzN3FwZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/jckhp4iFDk4UuwR8gD/giphy.gif", catGif.style.width = "400px", catGif.style.marginTop = "30px";
    const subtitle = document.createElement("div");
    subtitle.textContent = "You've activated my trap card! Now suffer the consequences!", subtitle.style.color = "orange", subtitle.style.fontSize = "1.8rem", subtitle.style.marginTop = "20px", subtitle.style.textAlign = "center", subtitle.style.fontWeight = "bold", overlay.appendChild(message), overlay.appendChild(catGif), overlay.appendChild(subtitle), document.body.appendChild(overlay);
    let colorIndex = 0;
    const colors = ["rgba(0, 0, 0, 0.9)", "rgba(255, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"],
        flashInterval = setInterval(() => {
            overlay.style.backgroundColor = colors[colorIndex % colors.length], colorIndex++
        }, 650);
    setTimeout(() => {
        clearInterval(flashInterval), document.body.contains(overlay) && document.body.removeChild(overlay), angrierSound.pause()
    }, 7e3)
}

function showThirdWarning() {
    clearTimeout(clickResetTimer);
    const overlay = document.createElement("div");
    overlay.style.position = "fixed", overlay.style.top = "0", overlay.style.left = "0", overlay.style.width = "100%", overlay.style.height = "100%", overlay.style.margin = "0", overlay.style.padding = "0", overlay.style.backgroundColor = "rgba(0, 0, 0, 0.95)", overlay.style.backdropFilter = "blur(20px)", overlay.style.zIndex = "99999", overlay.style.display = "flex", overlay.style.flexDirection = "column", overlay.style.justifyContent = "center", overlay.style.alignItems = "center", overlay.id = "warning-overlay-3";
    const finalSound = new Audio("https://cdn.freesound.org/previews/277/277021_5356475-lq.mp3");
    finalSound.volume = .8, finalSound.preload = "auto", setTimeout(() => {
        finalSound.play().catch(err => {
            console.log("Error playing sound:", err)
        })
    }, 100);
    const message = document.createElement("div");
    message.textContent = "THAT'S IT! 🙀", message.style.color = "white", message.style.fontSize = "4rem", message.style.fontWeight = "bold", message.style.margin = "20px", message.style.textAlign = "center", message.style.textShadow = "0 0 10px red, 0 0 20px red", message.style.animation = "pulse 1s infinite";
    const pulseKeyframes = "\n        @keyframes pulse {\n            0% { transform: scale(1); }\n            50% { transform: scale(1.1); }\n            100% { transform: scale(1); }\n        }\n    ",
        styleSheet = document.createElement("style");
    styleSheet.innerText = pulseKeyframes, document.head.appendChild(styleSheet);
    const catVideo = document.createElement("video"),
        paths = ["/public/assets/memes/cat.webm", "public/assets/memes/cat.webm", "./public/assets/memes/cat.webm", "../public/assets/memes/cat.webm", "/assets/memes/cat.webm", "assets/memes/cat.webm", "./assets/memes/cat.webm", "../assets/memes/cat.webm", "../memes/cat.webm", "./memes/cat.webm", "cat.webm"];

    function tryLoadVideo(pathIndex) {
        if (pathIndex >= paths.length) {
            console.log("Could not load video from any path");
            const fallbackImg = document.createElement("img");
            return fallbackImg.src = "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif", fallbackImg.style.width = "50%", fallbackImg.style.maxWidth = "500px", fallbackImg.style.marginTop = "30px", fallbackImg.style.borderRadius = "10px", void(catVideo.parentNode && catVideo.parentNode.replaceChild(fallbackImg, catVideo))
        }
        catVideo.src = paths[pathIndex], catVideo.onerror = function() {
            console.log(`Error loading video from path: ${paths[pathIndex]}`), tryLoadVideo(pathIndex + 1)
        }
    }
    tryLoadVideo(0), catVideo.style.width = "50%", catVideo.style.maxWidth = "300px", catVideo.style.marginTop = "30px", catVideo.style.borderRadius = "10px", catVideo.style.border = "3px solid white", catVideo.autoplay = !0, catVideo.loop = !0, catVideo.muted = !1, catVideo.controls = !1;
    const subtitle = document.createElement("div");
    subtitle.textContent = "YOU CANNOT ESCAPE THE CAT DIMENSION!", subtitle.style.color = "#ff9900", subtitle.style.fontSize = "2rem", subtitle.style.marginTop = "20px", subtitle.style.textAlign = "center", subtitle.style.fontWeight = "bold", subtitle.style.letterSpacing = "2px";
    const closeButton = document.createElement("button");
    closeButton.textContent = "I PROMISE TO STOP CLICKING", closeButton.style.padding = "15px 25px", closeButton.style.fontSize = "1.5rem", closeButton.style.marginTop = "30px", closeButton.style.backgroundColor = "red", closeButton.style.color = "white", closeButton.style.border = "none", closeButton.style.borderRadius = "5px", closeButton.style.cursor = "pointer", closeButton.style.fontWeight = "bold", closeButton.style.transition = "all 0.3s ease", closeButton.style.animation = "rainbow-bg 3s linear infinite";
    const rainbowKeyframes = "\n        @keyframes rainbow-bg {\n            0% { background-color: red; }\n            16.6% { background-color: orange; }\n            33.3% { background-color: yellow; }\n            50% { background-color: green; }\n            66.6% { background-color: blue; }\n            83.3% { background-color: indigo; }\n            100% { background-color: red; }\n        }\n    ",
        rainbowStyle = document.createElement("style");
    rainbowStyle.innerText = rainbowKeyframes, document.head.appendChild(rainbowStyle), closeButton.addEventListener("click", (function() {
        document.body.removeChild(overlay), clickCount = 0, finalSound.pause();
        const thankYou = document.createElement("div");
        thankYou.textContent = "Thank you! 😺", thankYou.style.position = "fixed", thankYou.style.bottom = "20px", thankYou.style.right = "20px", thankYou.style.backgroundColor = "rgba(0, 0, 0, 0.7)", thankYou.style.color = "white", thankYou.style.padding = "10px 20px", thankYou.style.borderRadius = "5px", thankYou.style.zIndex = "9998", document.body.appendChild(thankYou), setTimeout(() => {
            document.body.removeChild(thankYou)
        }, 3e3)
    })), overlay.appendChild(message), overlay.appendChild(catVideo), overlay.appendChild(subtitle), overlay.appendChild(closeButton), document.body.appendChild(overlay);
    let colorIndex = 0;
    const colors = ["rgba(255, 0, 0, 0.3)", "rgba(255, 165, 0, 0.3)", "rgba(255, 255, 0, 0.3)", "rgba(0, 128, 0, 0.3)", "rgba(0, 0, 255, 0.3)", "rgba(75, 0, 130, 0.3)", "rgba(238, 130, 238, 0.3)"],
        flashInterval = setInterval(() => {
            overlay.style.backgroundColor = colors[colorIndex % colors.length], colorIndex++
        }, 200);
    setTimeout(() => {
        document.body.contains(overlay) && (clearInterval(flashInterval), document.body.removeChild(overlay), clickCount = 0)
    }, 12e4), console.log("Third warning triggered!"), console.log("Current click count:", clickCount)
}
document.addEventListener("DOMContentLoaded", (function() {
    document.addEventListener("click", (function() {
        clearTimeout(clickResetTimer), clickResetTimer = setTimeout(() => {
            clickCount = 0, console.log("Click count reset due to inactivity")
        }, 11e3), clickCount++, console.log("Click count:", clickCount);
        const existingWarning = document.getElementById("warning-overlay") || document.getElementById("warning-overlay-2") || document.getElementById("warning-overlay-3");
        existingWarning ? clickCount < 20 && clickCount++ : 10 === clickCount ? showFirstWarning() : 15 === clickCount ? showSecondWarning() : clickCount >= 20 && showThirdWarning()
    }))
}));