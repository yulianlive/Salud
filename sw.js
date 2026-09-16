const CACHE_NAME = 'salud-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './pagina1.html',
  './pagina2.html',
  './manifest.json',
  './icono.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});