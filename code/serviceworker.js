var CACHE_NAME = 'simple-PWA-localStorage';
var urlsToCache = [
  '/',
  '../index.html',
  '../results.html',
  '../json/manifest.json',
  '../css/master.css',
  '/onsen.js',
  '/statistics.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
