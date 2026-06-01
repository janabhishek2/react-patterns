Function.prototype.myBind = function(thisArg, ...args) {
    return function() {
        this.call(thisArg, ...args);
    }
};

const nameOp = function() {
    console.log(this.name);
}

globalThis.name = "Abhishek";

const anmol = {
    name: "Anmol"
};

nameOp();

