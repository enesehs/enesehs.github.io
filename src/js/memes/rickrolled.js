document.addEventListener('DOMContentLoaded', function() {
    setupProfilePicBehavior();
});

function setupProfilePicBehavior() {
    const profilePic = document.getElementById("profile-pic"),
        profileFrame = document.querySelector(".profile-frame");
    if (!profilePic) return;
    profilePic.ondragstart = () => !1, profilePic.style.userSelect = "none", profilePic.style.webkitUserSelect = "none", profilePic.style.msUserSelect = "none";
    const recordAudio = new Audio;
    recordAudio.src = "/public/assets/memes/rickrolled.mp3", recordAudio.loop = !0;
    const spinStyle = document.createElement("style");
    spinStyle.textContent = "\n        @keyframes spin-record {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n        .spinning {\n            animation: spin-record 15s linear infinite;\n            transform-origin: center center;\n            border-radius: 50%;\n        }\n        .record-needle {\n            position: absolute;\n            width: 120px;\n            height: auto;\n            transform-origin: top right;\n            z-index: 100;\n            transition: transform 1s ease;\n            pointer-events: none;\n        }\n        .needle-active {\n            transform: rotate(-25deg);\n        }\n    ", document.head.appendChild(spinStyle);
    let isSpinning = !1;

    function startSpin(e) {
        if (e.preventDefault(), !isSpinning) {
            profilePic.classList.add("spinning"), recordAudio.play().catch(err => console.log("Error playing audio:", err)), isSpinning = !0;
            const needleContainer = document.createElement("div");
            needleContainer.style.position = "absolute", needleContainer.style.top = "0", needleContainer.style.right = "0", needleContainer.style.zIndex = "100";
            const recordNeedle = document.createElement("img");
            recordNeedle.src = "../public/assets/memes/needle.webp", recordNeedle.alt = "Record Needle", recordNeedle.className = "record-needle";
            const picRect = profilePic.getBoundingClientRect(),
                frameRect = profileFrame.getBoundingClientRect();
            needleContainer.style.top = "0px", needleContainer.style.right = `${frameRect.width - picRect.width / 2}px`, needleContainer.appendChild(recordNeedle), profileFrame.appendChild(needleContainer), setTimeout(() => {
                recordNeedle.classList.add("needle-active")
            }, 100)
        }
        return !1
    }
    profilePic.addEventListener("dblclick", startSpin), profilePic.addEventListener("contextmenu", startSpin), profilePic.addEventListener("click", e => (e.preventDefault(), e.stopPropagation(), !1))
}