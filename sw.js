const CACHE_NAME = 'enesehs-v86';
const IMMUTABLE_CACHE = 'enesehs-static-v1';
const urlsToCache = [
  '/',
  '/offline.html',
  '/src/css/style.min.css',
  '/src/css/responsive.min.css', 
  '/src/css/gradient-bg.min.css',
  '/src/css/critical.css',
  '/src/js/script.js',
  '/src/js/content.js',
  '/src/js/gradient.js',
  '/src/js/lazy-loading.js',
  '/public/assets/img/enesehsdev.webp',
  '/public/assets/img/meta.webp',
  '/public/favicon.ico'
];

const immutableAssets = [
  '/public/assets/font/MonaSansExpanded-Regular.woff2',
  '/public/assets/font/MonaSans-Medium.woff2',
  '/public/assets/img/profile-pic.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => {
        console.log('Caching dynamic assets');
        return cache.addAll(urlsToCache);
      }),
      caches.open(IMMUTABLE_CACHE).then(cache => {
        console.log('Caching immutable assets');
        return cache.addAll(immutableAssets);
      })
    ])
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  const url = new URL(event.request.url);

  if (url.pathname.includes('/font/') || url.pathname === '/public/assets/img/profile-pic.webp') {
    event.respondWith(
      caches.open(IMMUTABLE_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          return response || fetch(event.request).then(fetchResponse => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
    return;
  }

  if (event.request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => caches.match('/offline.html'));

          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        fetch(event.request).then(fetchResponse => {
          if (fetchResponse && fetchResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, fetchResponse);
            });
          }
        }).catch(() => {});
        return response;
      }

      return fetch(event.request).then(fetchResponse => {
        if (!fetchResponse || fetchResponse.status !== 200 || fetchResponse.type === 'error') {
          return fetchResponse;
        }
        
        const responseToCache = fetchResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return fetchResponse;
      });
    })
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, IMMUTABLE_CACHE];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  return self.clients.claim();
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});