const arr = [1, 2, 3, 4];

const reduceArr = (acc, curr) => {
    return acc + curr;
};

Array.prototype.myReduce = function(callbackFn, init) {
    if(this.length === 0) throw new Error("Can not call on empty array! ");
    const initialValue = init || this[0];
    const startIndex = init ? 0 : 1;

    let reducedValue = initialValue;

    let k = startIndex;
    while(k < this.length) {
        if(Object.hasOwn(this, k)) {
            reducedValue = callbackFn(reducedValue, this[k]);
        }
        k++;
    }

    return reducedValue;
}

const result = arr.myReduce(reduceArr, 0);

console.log(result);
