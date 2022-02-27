importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();
const params = new URLSearchParams(location.search);

if (params.has('lsnake')) {
    sw.on('request', event => {
        if (event.data.url.host === 'www.google.com' && event.data.url.pathname.endsWith('apple_00.png')) {
            event.data.base = event.data.url = new URL('https://incog.dev/e.png');
        };
    });
};
    
self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
