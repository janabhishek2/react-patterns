// Promise polyfills
const PROMISE_STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
};

class MyPromise {
    #state = PROMISE_STATE.PENDING;
    #thenCallbacks = [];
    #catchCallbacks = [];

    constructor(callback) {
        callback(this.#onSuccess, this.#onFail);
    }

    #onSuccess = (value) => {
        this.#thenCallbacks.forEach((thenCallback) => {
            thenCallback(value);
        })
    }

    #onFail = () => {
        this.#catchCallbacks.forEach((catchCallback) => {
            catchCallback(value);
        })
    }

    then = (thenCallback) => {
        this.#thenCallbacks.push(thenCallback);
    }

    catch = (catchCallback) => {
        this.#catchCallbacks.push(catchCallback);
    }
}

const p = new MyPromise(function(resolve, reject) {
    setTimeout(() => {
        resolve("I am successful !!");
    }, 3000);
});

p.then((response) => {
    console.log(response);
})