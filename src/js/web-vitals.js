function sendToAnalytics(name, value, id) {
    console.log(`${name}: ${value} (ID: ${id})`);
    
    if (typeof gtag !== 'undefined') {
        gtag('event', name, {
            custom_parameter_1: value,
            custom_parameter_2: id,
        });
    }
}

function initWebVitals() {
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log('LCP candidate:', entry.startTime, entry);
            sendToAnalytics('LCP', entry.startTime, entry.id);
        }
    }).observe({entryTypes: ['largest-contentful-paint']});

    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            const fid = entry.processingStart - entry.startTime;
            console.log('FID:', fid);
            sendToAnalytics('FID', fid, entry.name);
        }
    }).observe({entryTypes: ['first-input']});

    let clsValue = 0;
    let clsEntries = [];
    
    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (!entry.hadRecentInput) {
                clsValue += entry.value;
                clsEntries.push(entry);
            }
        }
    }).observe({entryTypes: ['layout-shift']});

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
            console.log('CLS:', clsValue);
            sendToAnalytics('CLS', clsValue, 'final');
        }
    });

    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            console.log('FCP:', entry.startTime);
            sendToAnalytics('FCP', entry.startTime, entry.name);
        }
    }).observe({entryTypes: ['paint']});

    new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
            if (entry.responseStart > 0) {
                const ttfb = entry.responseStart - entry.requestStart;
                console.log('TTFB:', ttfb);
                sendToAnalytics('TTFB', ttfb, entry.name);
            }
        }
    }).observe({entryTypes: ['navigation']});
}

if (document.readyState !== 'loading') {
    initWebVitals();
} else {
    document.addEventListener('DOMContentLoaded', initWebVitals);
}
