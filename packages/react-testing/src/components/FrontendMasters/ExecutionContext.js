// Promise polyfills
const PROMISE_STATE = {
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED",
    PENDING: "PENDING"
};

class MyPromise {
    #state = PROMISE_STATE.PENDING;
    #value = null;
    #thenCallbacks = [];
    #catchCallbacks = [];

    constructor(callback) {
        callback(this.#onSuccess, this.#onFail);
    }

    #runCallbacks = (value) => {
        if(this.#state === PROMISE_STATE.FULFILLED) {
            this.#thenCallbacks.forEach((thenCallback) => {
                thenCallback(value);
            })
        } else {
            this.#catchCallbacks.forEach((catchCallback) => {
                catchCallback(value);
            })
        }
       
    }

    #onSuccess = (value) => {
        this.#state = PROMISE_STATE.FULFILLED;
        this.#value = value;
        this.#runCallbacks(value);
    }

    #onFail = () => {
        this.#state = PROMISE_STATE.REJECTED;
        this.#value = value;
        this.#runCallbacks(value);
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
        resolve("Resolved");
    })
});

p.then((response) => {
    console.log(response);
});

// We can have multiple consumer for a promise.
p.then((resp) => {
    console.log(resp + 2);
})

p.then