let fpsOn = false, fpsEl = null, frames = 0, last = performance.now();

document.addEventListener('keydown', e => {
    if (e.key !== 'F2') return;
    e.preventDefault();
    
    if (fpsOn) {
        fpsEl?.remove();
        fpsOn = false;
        return;
    }
    
    fpsEl = document.createElement('div');
    fpsEl.id = 'fps';
    fpsEl.style.cssText = 'position:fixed;top:10px;left:10px;background:#000c;color:#0f0;font:bold 14px monospace;padding:8px 12px;border-radius:6px;z-index:99999;border:1px solid #0f0';
    document.body.appendChild(fpsEl);
    fpsOn = true;
    
    (function loop() {
        if (!fpsOn) return;
        frames++;
        const now = performance.now();
        if (now - last >= 1000) {
            fpsEl.textContent = `FPS: ${frames} | DOM: ${document.all.length}`;
            frames = 0;
            last = now;
        }
        requestAnimationFrame(loop);
    })();
});