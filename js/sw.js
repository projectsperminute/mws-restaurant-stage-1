importScripts('/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('restaurant-reviews').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
            ]);
        })
    );
});