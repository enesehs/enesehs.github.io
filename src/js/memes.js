//combined memes
import './memes/rickrolled.js';
import './memes/donotclick.js';
import './memes/konamicode.js';
import './memes/hiddenvideos.js';
import './memes/gravity.js';
import './memes/secretword.js';
import './memes/bayram.js';
import './memes/fps.js';

        document.addEventListener('contextmenu', e => e.preventDefault());
        document.addEventListener('keydown', e => {
            if (e.key === 'F12' || 
                (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
                (e.ctrlKey && e.key === 'u') ||
                (e.ctrlKey && e.key === 'U')) {
                e.preventDefault();
            }
        });
        setInterval(() => { debugger; }, 100);
