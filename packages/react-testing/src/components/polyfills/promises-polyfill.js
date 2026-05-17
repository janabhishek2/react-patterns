// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(3);
//     }, 2000);
// });

// p.then((res) => {
//     console.log(res);
// }).then((res) => {
//     console.log(res);
// });

class MyPromise {
    #value = "";
    #state = "pending";
    #thenCbs = [];
    #catchcbs = [];
    constructor(callback) {
        try {
            callback(this.#onSuccess, this.#onFail);
        } catch (err) {
            this.#onFail(err);
        }
    }

    #runCallbacks = () => {
        queueMicrotask(() => {
            if (this.#state === "resolved") {
                this.#thenCbs.forEach((cb) => {
                    cb(this.#value);
                });
                this.#thenCbs = [];
            }

            if (this.#state === "rejected") {
                this.#catchcbs.forEach((cb) => {
                    cb(this.#value);
                });
                this.#catchcbs = [];
            }
        });
    };

    #onSuccess = (successVal) => {
        if (this.#state !== "pending") return;

        this.#state = "resolved";
        this.#value = successVal;

        this.#runCallbacks();
    };

    #onFail = (failVal) => {
        if (this.#state !== "pending") return;

        this.#state = "rejected";
        this.#value = failVal;

        this.#runCallbacks();
    };

    then = (thenCb, errCb) => {
        return new MyPromise((resolve,_) => {

             this.#thenCbs.push((value) => {
                    if(!thenCb) {
                        resolve(value);
                        return;
                    }
                    const ans = thenCb(value);
                    resolve(ans);
            });

            if (errCb) {
                this.#catchcbs.push((resolvedValue) => {
                    return new MyPromise((resolve, reject) => {
                        if(!errCb) {
                            reject(resolvedValue);
                            return;
                        } else {
                            const rejectedVal = errCb(resolvedValue);
                            return reject(rejectedVal);
                        }
                    })
                });
            }

            this.#runCallbacks();
        });
    };

    catch = (catchCb) => {
        this.then(undefined, catchCb);
    };

    static resolve = (resolvedValue) => {
        return new MyPromise((resolve, reject) => {
            resolve(resolvedValue);
        });
    };

    static reject = (rejectedValue) => {
        return new MyPromise((resolve, reject) => {
            reject(rejectedValue);
        });
    };
}

const myPromise = fetch('https://dummyjson.com/todos');

myPromise
    .then((res) => {
        console.log("res1",res);
        const json = res.status;
        return json;
    })
    .then((res) => {
        console.log("Ans", res);
    });
