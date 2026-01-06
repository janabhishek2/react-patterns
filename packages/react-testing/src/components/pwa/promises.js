const price = new Promise(function(resolve) {
    setTimeout(() => {
        resolve("Price");
    }, 1000);
})

const slowPrice = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Slow Price");
    }, 4000)
});

let promises = [price, slowPrice];

const allPromises =  Promise.race(promises);
allPromises.then((response) => {
    console.log(response);
}).catch((err) => {
    console.log(err);
})