self.addEventListener("install", () => {
    console.log("service worker install");
});

self.addEventListener("fetch", () => {
    console.log("service worker fetch");
});

self.addEventListener("activate", () => {
    console.log("service worker activates");
});
