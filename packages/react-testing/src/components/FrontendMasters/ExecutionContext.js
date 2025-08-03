const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 3000);
})

p1.then((result) => {
    console.log(result);
    return 2;
}).then((result2) => {
    console.log(result2);
})