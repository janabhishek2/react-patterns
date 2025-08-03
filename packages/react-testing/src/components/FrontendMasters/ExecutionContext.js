const STATES = {
    PENDING: "PENDING",
    FULFILLED: "FULFILLED",
    REJECTED: "REJECTED"
}
class MyPromise {
    #thenHandlers = [];
    #catchHandlers = [];
    #state = STATES.PENDING;
    constructor(callback) {
        callback(this.#resolve, this.#reject);
    }
    #resolve = (value) => {
        this.#state = STATES.FULFILLED;
        this.#thenHandlers.forEach((thenCallbackFn) => {
            thenCallbackFn(value);
        })
    }
    #reject = (value) => {
        this.#state = STATES.REJECTED;
        this.#catchHandlers.forEach((catchHandler) => {
            catchHandler(value);
        });
    }
    then = (thenCallback) => {
        this.#thenHandlers.push(thenCallback);
    }
    catch = (catchCallback) => {
        this.#catchHandlers.push(catchCallback);
    }
    finally() {

    }
}

const myP = new MyPromise(function(resolve, reject){
   resolve(3);
});

myP.then((res) => {
    console.log(res);
})