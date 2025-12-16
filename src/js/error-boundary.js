(function() {
    'use strict';
    
    window.onerror = function(message, source, lineno, colno, error) {
        console.warn('⚠️ Error caught:', message);
        return true; 
    };
    
    window.addEventListener('unhandledrejection', function(event) {
        console.warn('⚠️ Unhandled promise rejection:', event.reason);
        event.preventDefault();
    });
    
    window.safeExecute = function(fn, fallback) {
        try {
            return fn();
        } catch (e) {
            console.warn('⚠️ Safe execute caught:', e.message);
            return typeof fallback === 'function' ? fallback() : fallback;
        }
    };
    
    if (typeof PerformanceObserver !== 'undefined') {
        try {
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (entry.duration > 100) {
                        console.warn(' Slow operation detected:', entry.name, entry.duration.toFixed(2) + 'ms');
                    }
                }
            });
            observer.observe({ entryTypes: ['longtask'] });
        } catch (e) {
        }
    }
})();
