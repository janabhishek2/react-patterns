
// SW: register, install and activate

// console.log("SW: register")
// self.addEventListener("install", (e) => {
//     let installPromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, 3000);
//     });

//     // e.waitUntil(installPromise);
//     self.skipWaiting();
// })

// self.addEventListener("activate", (e) => {
//     let activatePromise = new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(true);
//         }, 5000);
//     })
//     e.waitUntil(activatePromise);
//     console.log("SW activate");
// })

// self.addEventListener("fetch", (e) => {
//     console.log(typeof e.request.url);
//    if(e.request.url.toString().includes("template")) {
//         const headers = {
//             'Content-Type': "text/html"
//         }
//         const resp = new Response("<h2>I am A custom response!</h2>", {
//             headers: headers
//         });
//         e.respondWith(resp);
//    }
// });

self