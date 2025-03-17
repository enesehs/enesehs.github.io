document.addEventListener('DOMContentLoaded', function() {
    // Check if the device is mobile
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Only proceed if not on a mobile device
    if (!isMobileDevice) {
        const hiddenImages = [{
            src: "/public/assets/memes/taxidriver.webp",
            youtubeLink: "https://www.youtube.com/watch?v=1kvZ25qLWqA"
        }, {
            src: "/public/assets/memes/pyramid.webp",
            youtubeLink: "https://www.youtube.com/watch?v=O4JHaELSZ3o"
        }, {
            src: "/public/assets/memes/tlou.webp",
            youtubeLink: "https://www.youtube.com/watch?v=6Izv5P1Oo-Q"
        }];
        
        hiddenImages.forEach(e => {
            let t = document.createElement("img");
            t.src = e.src, t.alt = "Hidden Easter Egg", t.style.position = "fixed", t.style.opacity = "0.01", t.style.zIndex = "100", t.style.width = "30px", t.style.height = "auto", t.style.cursor = "default", t.style.pointerEvents = "auto";
            let s = Math.floor(90 * Math.random()) + 5,
                l = Math.floor(90 * Math.random()) + 5;
            t.style.top = `${s}%`, t.style.left = `${l}%`, t.addEventListener("click", function () {
                let s = document.createElement("div");
                s.style.position = "fixed", s.style.top = "0", s.style.left = "0", s.style.width = "100%", s.style.height = "100%", s.style.backgroundColor = "rgba(0,0,0,0.9)", s.style.zIndex = "10000", s.style.display = "flex", s.style.justifyContent = "center", s.style.alignItems = "center", s.style.transition = "all 0.5s ease-in-out";
                let l = document.createElement("iframe"),
                    n = e.youtubeLink.split("v=")[1];
                l.src = `https://www.youtube.com/embed/${n}?autoplay=1&vq=hd1080&controls=0&disablekb=1&rel=0&showinfo=0`, l.width = "0%", l.height = "0%", l.style.border = "none", l.style.transition = "all 0.8s", l.allow = "autoplay; fullscreen", l.style.pointerEvents = "none";
                let o = document.createElement("div");
                o.textContent = "Press any button to close", o.style.position = "absolute", o.style.bottom = "10%", o.style.color = "white", o.style.fontSize = "1.5rem", o.style.opacity = "0", o.style.transition = "opacity 1s ease", s.appendChild(l), s.appendChild(o), document.body.appendChild(s), setTimeout(() => {
                    l.width = "80%", l.height = "80%", o.style.opacity = "1"
                }, 100), setTimeout(() => {
                    o.style.opacity = "0"
                }, 4e3);
                let i = function (e) {
                    l.style.transform = "scale(0)", s.style.backgroundColor = "rgba(0,0,0,0)", setTimeout(() => {
                        document.body.removeChild(s)
                    }, 500), document.removeEventListener("keydown", i), document.removeEventListener("mousedown", i), "keydown" === e.type && "F11" === e.key && (e.preventDefault(), document.fullscreenElement ? document.exitFullscreen() : s.requestFullscreen().catch(e => {
                        console.log(`Error attempting to enable fullscreen: ${e.message}`)
                    }))
                };
                document.addEventListener("mousedown", i), document.addEventListener("keydown", i);
                let a = !1;
                document.addEventListener("keydown", function () {
                    a = !0
                }), setTimeout(() => {
                    a || document.fullscreenElement || s.requestFullscreen().catch(e => {
                        console.log(`Error attempting to enable fullscreen: ${e.message}`)
                    })
                }, 7e3), setTimeout(() => {
                    a || (l.style.transition = "all 1.5s ease", l.width = "100%", l.height = "100%", l.style.position = "absolute", l.style.top = "0", l.style.left = "0")
                }, 1e4), document.body.removeChild(t)
            }), t.style.animation = "fadeInOut 30s infinite", document.body.appendChild(t)
        });
        
        const styleElement = document.createElement("style");
        styleElement.textContent = "\n        @keyframes fadeInOut {\n            0% { opacity: 0.01; }\n            50% { opacity: 0.04; }\n            100% { opacity: 0.01; }\n        }\n    ", document.head.appendChild(styleElement);
    }
});
