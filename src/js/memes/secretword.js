let keyTracker = "";
const keywordResponses = {
    wow: "i agree, wow",
    86: "86",
    aether: "I made it B)",
    hello: "hello",
    allah: "yok",
    güzel: "evet güzel biliyorum yazmana gerek yok",
    esenlikler: "esenlikler",
    matrix: "Red pill or blue pill?",
    motor: "motor olsa şimdi ordaydık amw",
    revo: "revo kullanın yieanim",
    bug: "It's a feature, not a bug!",
    takke: "QĞPWEOĞQPOEĞPQWOEQĞWPEOQWĞE",
    help: "If it still doesn't work after trying again, it's stackoverflow time...",
    admin: "Access Granted!",
    hack: "*Matrix screen appears*",
    spotify: "*Secret spotify player opens*",
    karamel: "*karamel-resmi*",
    github: "*Your secret github profile opens*",
    31: "The answer to life, the universe, and everything",
    konami: "Do the up, up, down, down, left, right, left, right, b, a",
    rickroll: "Never gonna give you up...",
    thanos: "*Half of the page disappears*",
    ellie: " 8761 7910",
    bitcoin: "Doğan gibi olmayın",
    easteregg: "Congratulations! You won nothing!",
    fuck: "Fuck you too bro",
    atatürk: "atatürk",
    "keşke": "keşke doğanı dinlemeseydim amk"
};

function ataturk() {
    const e = document.createElement("div"),
        t = document.createElement("video");
    t.src = "/public/assets/memes/atatürk.webm", t.autoplay = !0, t.loop = !1, t.muted = !1, Object.assign(e.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        boxShadow: "0 0 20px rgba(0,0,0,.5)",
        opacity: "0",
        transition: "opacity .5s",
        borderRadius: "10px",
        overflow: "hidden"
    }), setTimeout(() => e.style.opacity = "0.8", 50), Object.assign(t.style, {
        Width: "100%",
        Height: "auto",
        display: "block"
    }), e.appendChild(t), document.body.appendChild(e), t.addEventListener("ended", () => {
        e.style.opacity = "0", setTimeout(() => {
            document.body.removeChild(e)
        }, 500)
    }), showMessage("Saygıyla ve Özlemle Anıyoruz")
}

function showMessage(e) {
    const t = document.createElement("div");
    t.textContent = e, Object.assign(t.style, {
        fontFamily: "MonaSansExpanded",
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
        transition: "opacity 0.5s ease-in-out"
    }), document.body.appendChild(t), setTimeout(() => {
        t.style.opacity = "1"
    }, 50), setTimeout(() => {
        t.style.opacity = "0", setTimeout(() => document.body.removeChild(t), 500)
    }, 3e3)
}

function karamelimg() {
    const e = document.createElement("div"),
        t = document.createElement("img");
    t.src = "/public/assets/memes/karamel.webp", t.alt = "Karamel", Object.assign(e.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        opacity: "0",
        transition: "opacity 0.5s ease-in-out",
        borderRadius: "10px",
        overflow: "hidden"
    }), Object.assign(t.style, {
        maxWidth: "80vw",
        maxHeight: "80vh",
        display: "block"
    }), e.appendChild(t), document.body.appendChild(e), setTimeout(() => {
        e.style.opacity = "1"
    }, 50), setTimeout(() => {
        e.style.opacity = "0", setTimeout(() => {
            document.body.removeChild(e)
        }, 500)
    }, 5e3), showMessage("my angel <3")
}

function takkeimg() {
    const e = document.createElement("div"),
        t = document.createElement("img");
    t.src = "https://lh3.googleusercontent.com/pw/AP1GczOYPHB40Ivb_mHb4czY57CDrK8Zfiy8JwaztKG6dzQVeIiML37qAC_MZlAI8ZVoSUUl6YfoxlaeIUqsx_roBWYTz9diYuxpF_NHEKfsCVD3coZSx_337L3-IuPfDuJjTNVJiRWBxkllFwS3GRioMyB2aw=w651-h878-s-no-gm?authuser=0", t.alt = "Takke", Object.assign(e.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: "9999",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
        opacity: "0",
        transition: "opacity 0.5s ease-in-out",
        borderRadius: "10px",
        overflow: "hidden"
    }), Object.assign(t.style, {
        maxWidth: "80vw",
        maxHeight: "80vh",
        display: "block"
    }), e.appendChild(t), document.body.appendChild(e), setTimeout(() => {
        e.style.opacity = "1"
    }, 50), setTimeout(() => {
        e.style.opacity = "0", setTimeout(() => {
            document.body.removeChild(e)
        }, 500)
    }, 5e3), showMessage("EĞÜPQWÜEĞPQWĞEPQWÜEPQÜĞEPÜQW")
}

function showMatrixEffect() {
    const e = document.createElement("div");
    Object.assign(e.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        zIndex: "10000",
        overflow: "hidden"
    });
    const t = document.createElement("style");
    t.textContent = "\n        @keyframes matrixRain {\n            0% { transform: translateY(-100%); opacity: 1; }\n            80% { opacity: 0.7; }\n            100% { transform: translateY(1000px); opacity: 0; }\n        }\n        \n        .matrix-column {\n            position: absolute;\n            top: -10%;\n            animation: matrixRain 3s linear infinite;\n            color: #0F0;\n            text-shadow: 0 0 5px #0F0;\n        }\n        \n        .matrix-char {\n            display: block;\n            text-align: center;\n        }\n        \n        .matrix-char-highlight {\n            color: white;\n            text-shadow: 0 0 10px white;\n        }\n    ", document.head.appendChild(t);
    const o = Math.floor(window.innerWidth / 15);
    for (let t = 0; t < o; t++) {
        const o = document.createElement("div");
        o.className = "matrix-column";
        const i = 2 + 3 * Math.random(),
            n = 12 + Math.floor(10 * Math.random()),
            a = 5 * Math.random();
        Object.assign(o.style, {
            left: `${15*t}px`,
            fontSize: `${n}px`,
            animationDuration: `${i}s`,
            animationDelay: `${a}s`
        });
        const r = Math.floor(20 * Math.random()) + 15;
        for (let e = 0; e < r; e++) {
            const t = document.createElement("div");
            if (t.className = "matrix-char", 0 === e && Math.random() > .7 && t.classList.add("matrix-char-highlight"), Math.random() > .7) {
                const e = 12448 + Math.floor(96 * Math.random());
                t.textContent = String.fromCharCode(e)
            } else t.textContent = String.fromCharCode(33 + Math.floor(94 * Math.random()));
            o.appendChild(t)
        }
        e.appendChild(o)
    }
    document.body.appendChild(e);
    const i = setInterval(() => {
        const e = document.querySelectorAll(".matrix-column"),
            t = e[Math.floor(Math.random() * e.length)];
        if (t) {
            const e = t.querySelectorAll(".matrix-char"),
                o = e[Math.floor(Math.random() * e.length)];
            o && (o.textContent = String.fromCharCode(33 + Math.floor(94 * Math.random())))
        }
    }, 100);
    setTimeout(() => {
        clearInterval(i), document.body.removeChild(e), document.head.removeChild(t)
    }, 5e3), showMessage(keywordResponses.hack)
}
function checkcheck() {
    const audio = document.createElement("audio");
    audio.src = "/public/assets/memes/checkcheck.mp3";
    audio.autoplay = true;
    audio.volume = 0.1;
}
function thanosEffect() {
    const e = document.createElement("div");
    Object.assign(e.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: "10000",
        transition: "opacity 0.5s ease-in-out",
        opacity: "0"
    }), document.body.appendChild(e), setTimeout(() => {
        e.style.opacity = "1"
    }, 50), setTimeout(() => {
        e.style.opacity = "0", setTimeout(() => document.body.removeChild(e), 500)
    }, 5e3)
}
document.addEventListener("keydown", function(e) {
    keyTracker += e.key.toLowerCase(), Object.keys(keywordResponses).forEach(e => {
        keyTracker.includes(e) && ("hack" === e ? showMatrixEffect() : "spotify" === e ? window.open("https://open.spotify.com/user/21a6im72dymlsyyaasjejv2by?si=d8545eb4f9984aa4", "_blank") : "github" === e ? window.open("https://github.com/enesehs", "_blank") : "karamel" === e ? karamelimg() : "takke" === e ? takkeimg() : "atatürk" === e ? ataturk() : "thanos" === e ? thanosEffect() : "31" === e ? checkcheck() : showMessage(keywordResponses[e]), keyTracker = "")
    }), keyTracker.length > 20 && (keyTracker = keyTracker.slice(keyTracker.length - 20))
});