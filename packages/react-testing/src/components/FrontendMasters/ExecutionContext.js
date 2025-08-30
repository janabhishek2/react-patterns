const p1 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});

const p2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(2);
    }, 1000);
})

const p3 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(3);
    }, 1000);
})

// const allPromises = Promise.all([p1, p2, p3]);
// allPromises.then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

const allResolved = function(promises) {
    if(!Array.isArray(promises)) {
        throw new Error("err");
    }
    return new Promise(function(resolve, reject) {

        const allPromiseValues = new Array(promises.length).fill(undefined);
        let completed = 0;
        promises.forEach(async (promise, index) => {
            promise.then((data)=> {
                allPromiseValues[index] = data;
                completed++;
                if(completed === promises.length) {
                    resolve(allPromiseValues);
                }
            }).catch((err) => {
                reject(err);
            })
        });
    });
    
}

const resolvedValues = allResolved([p1, p2, p3]);

resolvedValues.then((data) => {
    console.log(data);
});
