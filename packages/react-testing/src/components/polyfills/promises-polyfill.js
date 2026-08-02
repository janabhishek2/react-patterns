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

/**
 * MyPromise — a from-scratch polyfill of the native Promise, built to
 * understand how promises work under the hood (state machine + callback
 * queues + microtask scheduling).
 *
 * A promise is essentially a state machine with three states:
 *   "pending"  → the initial state, no value settled yet
 *   "resolved" → settled successfully with a value
 *   "rejected" → settled with an error/failure value
 * Once it leaves "pending" it can never change again (it is immutable).
 */
class MyPromise {
    // Private fields (# prefix) — inaccessible from outside the class.
    #value = "";          // the settled value (success value or failure reason)
    #state = "pending";   // current state of the state machine
    #thenCbs = [];        // queue of success callbacks registered via .then()
    #catchcbs = [];       // queue of failure callbacks registered via .then()/.catch()

    /**
     * constructor(callback)
     * Receives the "executor" function that the caller passes in, e.g.
     *   new MyPromise((resolve, reject) => { ... })
     * It is invoked immediately (synchronously) with our internal
     * #onSuccess / #onFail handlers wired in as `resolve` / `reject`.
     * Any error thrown synchronously inside the executor rejects the promise,
     * mirroring the native Promise behaviour.
     */
    constructor(callback) {
        try {
            callback(this.#onSuccess, this.#onFail);
        } catch (err) {
            this.#onFail(err);
        }
    }

    /**
     * #runCallbacks()
     * Drains the appropriate callback queue based on the current state.
     * Wrapped in queueMicrotask() so callbacks always run asynchronously on
     * the microtask queue (never synchronously) — this matches the native
     * spec guarantee that .then handlers run after the current call stack
     * clears. Each queue is emptied after firing so callbacks run only once.
     */
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

    /**
     * #onSuccess(successVal)  — the internal `resolve` function.
     * Transitions the promise from "pending" → "resolved", stores the value,
     * and triggers any queued success callbacks.
     * The guard `if (this.#state !== "pending") return;` enforces immutability:
     * a promise can only settle once, so a second call is ignored.
     */
    #onSuccess = (successVal) => {
        if (this.#state !== "pending") return;

        this.#state = "resolved";
        this.#value = successVal;

        this.#runCallbacks();
    };

    /**
     * #onFail(failVal)  — the internal `reject` function.
     * Transitions the promise from "pending" → "rejected", stores the failure
     * reason, and triggers any queued catch callbacks.
     * Same one-time settle guard as #onSuccess.
     */
    #onFail = (failVal) => {
        if (this.#state !== "pending") return;

        this.#state = "rejected";
        this.#value = failVal;

        this.#runCallbacks();
    };


    /**
     * then(thenCb, errCb)
     * Registers a success handler (and optional error handler) and returns a
     * NEW MyPromise so calls can be chained (.then().then()...).
     *
     * The returned promise resolves with whatever `thenCb` returns, which is
     * what lets each link in a chain receive the previous link's return value.
     *
     * How it works:
     *  - We push a wrapper onto #thenCbs. When this promise resolves, the
     *    wrapper runs thenCb(value) and resolves the new promise with its
     *    result. If no thenCb was given, the value is passed straight through.
     *  - If an errCb was provided, a matching wrapper is queued on #catchcbs.
     *  - #runCallbacks() is called in case this promise has ALREADY settled
     *    before .then() was attached, so the handler still fires.
     *
     * Note: this is a simplified model — it does not yet flatten (unwrap)
     * returned promises the way the native spec does.
     */
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
                this.#catchcbs.push((rejectedValue) => {
                    return new MyPromise((resolve, reject) => {
                        if(!errCb) {
                            reject(rejectedValue);
                            return;
                        } else {
                            const rejectedVal = errCb(rejectedValue);
                            return reject(rejectedVal);
                        }
                    })
                });
            }

            this.#runCallbacks();
        });
    };

    /**
     * catch(catchCb)
     * Sugar for handling only the rejection case. Delegates to then() with no
     * success handler and catchCb as the error handler — exactly how the
     * native Promise.prototype.catch is defined.
     */
    catch = (catchCb) => {
        this.then(undefined, catchCb);
    };

    /**
     * MyPromise.resolve(value)  — static helper.
     * Returns a promise that is already resolved with the given value.
     * Handy for wrapping a plain value in a promise.
     */
    static resolve = (resolvedValue) => {
        return new MyPromise((resolve, reject) => {
            resolve(resolvedValue);
        });
    };

    /**
     * MyPromise.reject(reason)  — static helper.
     * Returns a promise that is already rejected with the given reason.
     */
    static reject = (rejectedValue) => {
        return new MyPromise((resolve, reject) => {
            reject(rejectedValue);
        });
    };
}

// --- Demo / manual test ---------------------------------------------------
// NOTE: fetch() returns a NATIVE promise here, so this snippet exercises the
// built-in chaining rather than MyPromise. To test MyPromise instead, use the
// commented example at the top of the file (new MyPromise(...).then(...)).
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
