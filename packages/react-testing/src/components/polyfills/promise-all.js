const myAll = function(promises) {
    let allPromiseValues = Array.from({ length: promises.length }, () => undefined);
    const isAnyPromiseUnresolved = () => {
        return allPromiseValues.some((val) => val === undefined);
    }
    return new Promise((resolve, reject) => {
        // resolve the promise when all promises are resolved
            promises.forEach(async (promise, index) => {
                try {
                    const res = await promise;
                    if(res) allPromiseValues[index] = res;
                    if(!isAnyPromiseUnresolved()) {
                        resolve(allPromiseValues);
                    }
                } catch(err) {
                    reject(err);
                }
            })
        // in case any promise rejects, reject the promise
    })
};

const p1 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(3);
    }, 1000)
})

const p2 = new Promise((resolve, reject) =>{
    setTimeout(() => {
        reject(5);
    }, 3000)
})

const p3 = myAll([p1, p2]);

p3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})