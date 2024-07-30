function sum() {
    let total = 0;
    for(let item of arguments) {
        total += item;
    }
    return total;
}

// sum.prototype.constructor(args) is same as sum(args)