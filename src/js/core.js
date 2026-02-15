// core js

import './core/error-boundary.js';
import './core/script.js';
import './core/gradient.js';
import './core/content.js';
import './core/lazy-loading.min.js';
import './core/skeleton-loader.js';
import './core/web-vitals.js';
import './core/captcha.js';
import './core/clickspark.js';
import './core/language-detector.min.js';
import './core/scroll-animations.min.js';
import './core/extra-animations.js';

const month = new Date().getMonth();
if (month === 11 || month === 0 || month === 1) {
    import('./core/snow.min.js');
}
