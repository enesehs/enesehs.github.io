
document.addEventListener("DOMContentLoaded", () => {
    const initExtraAnimations = () => {
        if (typeof ScrollReveal === "undefined") {
            setTimeout(initExtraAnimations, 100);
            return;
        }

        const isMobile = window.innerWidth <= 768;
        if (isMobile) return;

        const sr = ScrollReveal();
        
        const fadeUpElements = document.querySelectorAll('[data-scroll-animation="fade-up"]');
        if (fadeUpElements.length > 0) {
            sr.reveal(fadeUpElements, {
                distance: "30px",
                origin: "bottom",
                duration: 800,
                delay: 400,
                easing: "cubic-bezier(0.5, 0, 0, 1)",
                mobile: false,
                viewFactor: 0.2
            });
        }
    };

    initExtraAnimations();
});
