document.addEventListener("DOMContentLoaded", function() {
    let e = "",
        t = !1;
    document.addEventListener("keydown", function(n) {
        if (e += n.key.toLowerCase(), e.length > "gravity".length && (e = e.slice(e.length - "gravity".length)), "gravity" === e && !t) {
            t = !0;
            const e = document.createElement("style");
            e.textContent = "\n            @keyframes float {\n                0% { transform: translateY(0) rotate(0deg); }\n                50% { transform: translateY(-20px) rotate(5deg); }\n                100% { transform: translateY(0) rotate(0deg); }\n            }\n            \n            body * {\n                animation: float 3s ease-in-out infinite;\n                animation-delay: var(--delay, 0s);\n                position: relative;\n            }\n        ", document.head.appendChild(e), document.querySelectorAll("body *").forEach(e => {
                const t = 2 * Math.random();
                e.style.setProperty("--delay", `${t}s`)
            });
            for (let e = 0; e < 30; e++) {
                const e = document.createElement("div");
                e.style.position = "fixed", e.style.width = "10px", e.style.height = "10px", e.style.backgroundColor = `hsl(${360*Math.random()}, 100%, 50%)`, e.style.borderRadius = "50%", e.style.top = `${100*Math.random()}%`, e.style.left = `${100*Math.random()}%`, e.style.zIndex = "1000", e.style.pointerEvents = "none", e.style.animation = `float ${3+5*Math.random()}s ease-in-out infinite`, e.style.animationDelay = `${2*Math.random()}s`, document.body.appendChild(e)
            }
            const n = document.createElement("div");
            n.textContent = "GRAVITY DISABLED", n.style.position = "fixed", n.style.top = "50%", n.style.left = "50%", n.style.transform = "translate(-50%, -50%)", n.style.color = "red", n.style.fontSize = "3rem", n.style.fontWeight = "bold", n.style.zIndex = "9999", n.style.textShadow = "2px 2px 5px rgba(0,0,0,0.5)", document.body.appendChild(n), setTimeout(() => {
                document.body.removeChild(n)
            }, 3e3)
        }
    })
});