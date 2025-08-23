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
        // try{
        //     callback(this.#onSuccess, this.#onFail);
        // }catch(err) {
        //     this.#onFail(err);
        // }
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

    #onFail = (value) => {
        this.#state = PROMISE_STATE.REJECTED;
        this.#value = value;

        if(this.#catchCallbacks.length === 0) throw new Error("Please provide a catch block for handling rejected promises !!");
        this.#runCallbacks();
    }

    then = (thenCallback, catchCallback) => {
        if(thenCallback){
            this.#thenCallbacks.push(thenCallback);
        }
        
        if(catchCallback) {
            this.#catchCallbacks.push(catchCallback);
        }

        this.#runCallbacks();
        // return this;
    }

    catch = (catchCallback) => {
        this.then(undefined, catchCallback);
    }
}

const p = new Promise(function(resolve, reject) {
    return new Promise(function(resolve, reject) {
        resolve(3);
    })
})

p.then(res => {
    console.log(res);
}).then(res => {
    console.log(res);
});
