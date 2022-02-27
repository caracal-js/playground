importScripts('./uv/uv.sw.js');

const sw = new UVServiceWorker();
try {
const params = new URLSearchParams(location.search);

if (params.has('lsnake')) {
    sw.addEventListener('request', event => {
        if (event.data.url.host === 'www.google.com' && event.data.url.pathname.endsWith('apple_00.png')) {
            event.data.base = event.data.url = new URL('https://incog.dev/e.png');
        };
    });
};
} catch(e) {
    console.log(e);
    
};
    
self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
