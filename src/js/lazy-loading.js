document.addEventListener('DOMContentLoaded', function() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                img.classList.add('loaded');
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });

    let interactionEvents = ['mousedown', 'touchstart'];
    interactionEvents.forEach(event => {
        document.addEventListener(event, preloadCriticalImages, { once: true, passive: true });
    });

    function preloadCriticalImages() {
        const criticalImages = [
            '/public/assets/projects/project1.webp',
            '/public/assets/projects/project2-0.webp',
            '/public/assets/projects/project3.webp'
        ];
        
        criticalImages.forEach(src => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = src;
            document.head.appendChild(link);
        });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
        document.documentElement.style.setProperty('--animation-duration', '0s');
    }

    if ('performance' in window && 'mark' in performance) {
        performance.mark('enhanced-lazy-loading-initialized');
    }
});
