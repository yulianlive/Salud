const CACHE_NAME = 'mi-app-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './pagina1.html',
  './pagina2.html'
];

// Instalar el Service Worker y guardar recursos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responder desde la caché cuando no hay conexión
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});