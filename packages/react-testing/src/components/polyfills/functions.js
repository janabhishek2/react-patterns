/**
 * Timer — a constructor function that counts up over time.
 *
 * - `this.seconds` starts at 3000 and is bumped by 1000 every second via
 *   setInterval. The arrow callback has no `this` of its own, so `this` still
 *   refers to the Timer instance (this is the key reason an arrow is used).
 * - Object.setPrototypeOf attaches a prototype exposing getSeconds(), again as
 *   an arrow so its `this` stays bound to the instance.
 *
 * NOTE: setting the prototype AFTER assigning `this.seconds` works here, but
 * mutating an object's prototype at runtime is generally discouraged for perf.
 */
function Timer() {
    this.seconds = 3000;

    setInterval(() => {
        this.seconds += 1000;
    }, 1000);

    Object.setPrototypeOf(this, {
        getSeconds: () => {
        return this.seconds;
    }
    })
};

const timer = new Timer();

// Poll the timer every 4s and print the accumulated seconds.
setInterval(() => {
    if(timer) {
        console.log(timer.getSeconds())
    }
}, 4000);
