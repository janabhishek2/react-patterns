const p = new Promise((resolve, reject) => {
    resolve(3);
})

p.then((res) => {
    console.log("Res1", res);
    return 1;
}).then((res) => {
    console.log('res2', res);
})