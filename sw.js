const CACHE = 'tagline-v17';

const CORE = [
  '/index.html',
  '/shop.html',
  '/health.html',
  '/wealth.html',
  '/god.html',
  '/community.html',
  '/lang.js',
  '/tipjar.js',
  '/manifest.json',
];

// Install: cache core pages
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting())
  );
});

// Activate: clear old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network first, fall back to cache; never block navigation silently
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  if (!e.request.url.startsWith(self.location.origin)) return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        if (res.ok) {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(cached => {
          // Return cached version if available, otherwise let browser handle it
          if (cached) return cached;
          // For navigation requests with no cache, return index.html as fallback
          if (e.request.mode === 'navigate') return caches.match('/index.html');
          return new Response('', { status: 503 });
        })
      )
  );
});
