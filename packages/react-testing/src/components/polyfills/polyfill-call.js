Function.prototype.myCall = function(thisArg, ...args) {
    
    thisArg = thisArg || globalThis;
    
    let callerFn = this;
    thisArg.fn = callerFn;

    thisArg.fn(...args);

    delete thisArg.fn;
};

Function.prototype.myApply = function(thisArg, args = []) {
    thisArg = thisArg || globalThis;

    thisArg.fn = this;
    thisArg.fn(...args);

    delete thisArg.fn;
}

function printName(...args) {
    console.log(this.name, ...args);
}

printName.myApply({
    name: 'preet'
}, [1, 2, 3]);
