/**
 * Function.prototype.myBind — a (simplified) polyfill of Function.prototype.bind.
 *
 * bind() returns a NEW function that, when later called, runs the original
 * with `this` permanently set to `thisArg` and `args` pre-filled (partial
 * application). Here we capture the target function as `this` and re-invoke it
 * via .call(thisArg, ...args) inside the returned wrapper.
 *
 * NOTE: this version is incomplete vs. the spec — it doesn't `return` the
 * result of the call, and it doesn't merge args passed at call time. It's a
 * teaching stub showing the core idea (return a function that fixes `this`).
 */
Function.prototype.myBind = function(thisArg, ...args) {
    return function() {
        this.call(thisArg, ...args);
    }
};

// A plain function that reads `this.name` — its output depends on how it's called.
const nameOp = function() {
    console.log(this.name);
}

// In non-strict mode a bare call sets `this` to the global object; assigning
// globalThis.name makes `nameOp()` print "Abhishek".
globalThis.name = "Abhishek";

const anmol = {
    name: "Anmol"
};

// Called without binding → `this` is the global object → logs "Abhishek".
// (Try: nameOp.myBind(anmol)() to see binding to `anmol` instead.)
nameOp();
