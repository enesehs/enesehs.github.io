document.addEventListener('DOMContentLoaded', function () {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.substring(0, 2).toLowerCase();

    if (lang === 'tr' || lang === 'es' || lang === 'zh' || lang === 'hi' || lang === 'fr' || lang === 'ja') {
        loadTranslations(lang);
    }
});

async function loadTranslations(lang) {
    try {
        const response = await fetch(`/src/js/translations/${lang}.json`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const translations = await response.json();
        applyTranslations(translations);
    } catch (error) {
        console.error('Failed to load translations:', error);
    }
}

function applyTranslations(translations) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', translations[key]);
                } else {
                    element.value = translations[key];
                }
            } else {
                element.innerHTML = translations[key];
            }
        }
    });

    document.querySelectorAll('meta[data-i18n]').forEach(meta => {
        const key = meta.getAttribute('data-i18n');
        if (translations[key]) {
            meta.setAttribute('content', translations[key]);
        }
    });

    if (translations['page_title']) {
        document.title = translations['page_title'];
    }
}

window.switchLanguage = loadTranslations;
