document.addEventListener('DOMContentLoaded', function () {
    let savedLang = localStorage.getItem('selectedLanguage');
    let lang = 'en';
    
    if (savedLang && isValidLanguage(savedLang)) {
        lang = savedLang;
    } else {
        const browserLang = navigator.language || navigator.userLanguage;
        const detectedLang = browserLang.substring(0, 2).toLowerCase();
        
        if (isValidLanguage(detectedLang)) {
            lang = detectedLang;
        }
    }

    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = lang;
        languageSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('selectedLanguage', selectedLang);
            if (selectedLang === 'en') {
                resetToEnglish();
            } else {
                loadTranslations(selectedLang);
            }
        });
    }

    if (lang !== 'en') {
        loadTranslations(lang);
    }
});

function isValidLanguage(lang) {
    const supportedLanguages = ['tr', 'es', 'zh', 'hi', 'fr', 'ja'];
    return supportedLanguages.includes(lang);
}

function resetToEnglish() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const englishContent = getEnglishContent(key);
        
        if (englishContent) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.getAttribute('placeholder')) {
                    element.setAttribute('placeholder', englishContent);
                } else {
                    element.value = englishContent;
                }
            } else {
                element.innerHTML = englishContent;
            }
        }
    });

    document.querySelectorAll('meta[data-i18n]').forEach(meta => {
        const key = meta.getAttribute('data-i18n');
        const englishContent = getEnglishContent(key);
        if (englishContent) {
            meta.setAttribute('content', englishContent);
        }
    });

    const englishTitle = getEnglishContent('page_title');
    if (englishTitle) {
        document.title = englishTitle;
    }
}

function getEnglishContent(key) {
    const englishContent = {
        'page_title': ' Enesehs | Jr. Game Developer ',
        'meta_description': "Enes Hacısağır is the founder of Plasenta Entertainment. He is an Unreal Engine game developer. Specializing in Unreal Engine 5 and C++ development, ",
        'nav_home': 'Home',
        'nav_projects': 'Projects',
        'nav_skills': 'Skills',
        'nav_certificates': 'Certificates',
        'nav_about': 'About',
        'nav_contact': 'Contact',
        'greeting': "I'm",
        'about_me': "I am the founder and lead developer of Plasenta Entertainment. I've completed multiple game development programs, including the Google Game and App Academy. Using Unreal Engine 5 and C++, I bring my imagination to life through game projects. My goal is to create unforgettable gaming experiences, and I am committed to pushing the boundaries of game development. If you'd like to collaborate with me on this journey, feel free to <a href=\"#contact\" class=\"text-link\">get in touch</a>.",
        'learn_more': 'Learn More',
        'see_projects': 'See My Projects',
        'projects_header': 'My Projects',
        'projects_subheader': 'Here are some of my game and app development projects',
        'footer_copyright': '&copy; 2025 Enesehs | All Rights Reserved',
        'language_label': 'Language:'
    };
    
    return englishContent[key] || null;
}

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
