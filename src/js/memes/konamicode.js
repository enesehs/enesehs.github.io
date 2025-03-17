const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"];
let konamiCodePosition = 0;

function randomColor() {
    return "#" + Math.floor(16777215 * Math.random()).toString(16).padStart(6, "0")
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        const r = parseInt(result[1], 16),
            g = parseInt(result[2], 16),
            b = parseInt(result[3], 16);
        return `${r}, ${g}, ${b}`
    }
    return null
}

function activateKonamiCode() {
    console.log("Konami code activated!");
    const newColors = {
            one: randomColor(),
            two: randomColor(),
            three: randomColor(),
            four: randomColor(),
            five: randomColor(),
            bg1: randomColor(),
            bg2: randomColor(),
            interactive: randomColor()
        },
        root = document.documentElement;
    root.style.setProperty("--one", newColors.one), root.style.setProperty("--two", newColors.two), root.style.setProperty("--three", newColors.three), root.style.setProperty("--four", newColors.four), root.style.setProperty("--five", newColors.five), root.style.setProperty("--color-bg1", newColors.bg1), root.style.setProperty("--color-bg2", newColors.bg2), root.style.setProperty("--one-rgb", hexToRgb(newColors.one)), root.style.setProperty("--two-rgb", hexToRgb(newColors.two)), root.style.setProperty("--three-rgb", hexToRgb(newColors.three)), root.style.setProperty("--four-rgb", hexToRgb(newColors.four)), root.style.setProperty("--color1", hexToRgb(newColors.one)), root.style.setProperty("--color2", hexToRgb(newColors.two)), root.style.setProperty("--color3", hexToRgb(newColors.three)), root.style.setProperty("--color4", hexToRgb(newColors.four)), root.style.setProperty("--color5", hexToRgb(newColors.five)), root.style.setProperty("--color-interactive", hexToRgb(newColors.interactive)), root.style.setProperty("--bg-empty", `linear-gradient(40deg, ${newColors.bg1}, ${newColors.bg2})`);
    const newGradient = `linear-gradient(90deg, ${newColors.one}, ${newColors.two}, ${newColors.three}, ${newColors.four}, ${newColors.five})`;
    root.style.setProperty("--gradient", newGradient), root.style.setProperty("--gradient-animated", newGradient);
    const feedback = document.createElement("div");
    feedback.textContent = "Color Theme Randomized!", feedback.style.position = "fixed", feedback.style.top = "50%", feedback.style.left = "50%", feedback.style.transform = "translate(-50%, -50%)", feedback.style.padding = "20px", feedback.style.backgroundColor = "rgba(0, 0, 0, 0.7)", feedback.style.color = "white", feedback.style.borderRadius = "10px", feedback.style.fontFamily = "sans-serif", feedback.style.fontSize = "24px", feedback.style.zIndex = "9999", feedback.style.opacity = "0", feedback.style.transition = "opacity 0.5s", document.body.appendChild(feedback), setTimeout(() => {
        feedback.style.opacity = "1", setTimeout(() => {
            feedback.style.opacity = "0", setTimeout(() => {
                document.body.removeChild(feedback)
            }, 500)
        }, 2e3)
    }, 10)
}
document.addEventListener("keydown", (function(e) {
    e.code === konamiCode[konamiCodePosition] ? (konamiCodePosition++, konamiCodePosition === konamiCode.length && (activateKonamiCode(), konamiCodePosition = 0)) : konamiCodePosition = 0
})), document.addEventListener("DOMContentLoaded", (function() {
    console.log("Konami code detector initialized")
}));