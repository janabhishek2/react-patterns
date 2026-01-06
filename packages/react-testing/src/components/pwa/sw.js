console.log("SW: register")
self.addEventListener("install", (e) => {
    let installPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 3000);
    });

    // e.waitUntil(installPromise);
    self.skipWaiting();
})

self.addEventListener("activate", (e) => {
    let activatePromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, 5000);
    })
    e.waitUntil(activatePromise);
    console.log("SW activate");
})
