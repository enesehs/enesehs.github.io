const CACHE_NAME = 'enesehs-v86';
const urlsToCache = [
  '/',
  '/src/css/style.min.css',
  '/src/css/responsive.min.css', 
  '/src/css/gradient-bg.min.css',
  '/src/js/script.js',
  '/src/js/content.js',
  '/public/assets/font/MonaSansExpanded-Regular.woff2',
  '/public/assets/img/profile-pic.webp',
  '/public/assets/img/enesehsdev.webp',
  '/public/favicon.ico'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
