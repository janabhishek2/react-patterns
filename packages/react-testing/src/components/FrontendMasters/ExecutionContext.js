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

    #runCallbacks = () => {
        if(this.#state === PROMISE_STATE.FULFILLED) {
            this.#thenCallbacks.forEach((thenCallback) => {
                thenCallback(this.#value);
            })
            this.#thenCallbacks = [];
        } else {
            this.#catchCallbacks.forEach((catchCallback) => {
                catchCallback(this.#value);
            })
            this.#catchCallbacks = [];
        }
       
    }

    #onSuccess = (value) => {
        this.#state = PROMISE_STATE.FULFILLED;
        this.#value = value;
        this.#runCallbacks();
    }

    #onFail = () => {
        this.#state = PROMISE_STATE.REJECTED;
        this.#value = value;
        this.#runCallbacks();
    }

    then = (thenCallback) => {
        this.#thenCallbacks.push(thenCallback);

        this.#runCallbacks();
    }

    catch = (catchCallback) => {
        this.#catchCallbacks.push(catchCallback);
        this.#runCallbacks();
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
setTimeout(() => {
    p.then((resp) => {
        console.log(resp + 2);
    });
}, 2000);
