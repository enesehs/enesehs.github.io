document.addEventListener('DOMContentLoaded', function() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                
                if (img.dataset.srcset) {
                    img.srcset = img.dataset.srcset;
                    img.removeAttribute('data-srcset');
                }
                
                img.classList.add('loaded');
                
                observer.unobserve(img);
            }
        });
    }, {
        rootMargin: '100px 0px',
        threshold: 0.01
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
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
            link.type = 'image/webp';
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
