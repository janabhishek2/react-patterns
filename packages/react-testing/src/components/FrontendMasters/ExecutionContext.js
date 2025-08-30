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
        reject("huihui");
    }, 3000);
})

// const allSettled = Promise.allSettled([p1, p2, p3]);
// allSettled.then((res) => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// [
//     {
//         "status": "fulfilled",
//         "value": 1
//     },
//     {
//         "status": "fulfilled",
//         "value": 2
//     },
//     {
//         "status": "rejected",
//         "reason": "huihui"
//     }
// ]

const allSettled = function(promises) {
    return new Promise(function(resolve, reject) {
        if(promises.length === 0) {
            resolve([])
        }
        let completed = 0;
        const promiseValues = [];
        promises.forEach((promise, index) => {
            promise.then((data) => {
                promiseValues[index] = {
                    status: "fulfilled",
                    value: data
                };
            }).catch((err) => {
                promiseValues[index] = {
                    status: "rejected",
                    reason: err
                };
            }).finally(() => {
                completed++;
                if(completed === promises.length) {
                    resolve(promiseValues)
                }
            })
        });
    });
}

const values = allSettled([p1, p2, p3]);
values.then((res) => {
    console.log(res);
});
