if(navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js').then((registration) => {
        registration.onupdatefound = () => {
            let newSw = registration.installing;
            newSw.onstatechange = () => {
                console.log('State', newSw.state);
            }
        }
    })

//     navigator.serviceWorker.getRegistrations().then(registrations => {
//     registrations.forEach(reg => reg.unregister());
//   });
}

// fetch('./template.html').then((res) => {
//     return res.text();
// }).then((res) => {
//     document.body.innerHTML = res;
// }).catch((err) => {
//     console.log(err);
// });

// fetch('./camera-feed.html').
// then((res) => res.text()).
// then((img) => {
//     const randomElement = document.querySelector("#random");
//     randomElement.innerHTML = img;
// });
