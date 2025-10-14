// Service Worker for Just Makhana PWA
const CACHE_NAME = 'just-makhana-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/assets/hero-makhana.jpg',
  '/assets/raw-makhana.jpg',
  '/assets/roasted-makhana.jpg',
  '/assets/flavored-makhana.jpg'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});