if( "serviceWorker" in navigator ) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register('./serviceWorker.js')
        .then((register) => {
            console.log("Registered: ", register.scope);
        }).catch((error) => {
            console.log("Error", error);
        })
    })
}