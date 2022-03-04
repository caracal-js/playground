// Google Snake Purple Drink (Lean) Mod
// Replaces the apple with the drink.
// Note: I do not support substance abuse in anyway. I was in a bit of a goofy mood.

function lsnake(event) {
    if (event.data.url.host === 'www.google.com' && event.data.url.pathname.endsWith('apple_00.png')) {
        event.data.base = event.data.url = new URL('https://incog.dev/e.png');
    };
};
