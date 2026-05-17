const mapPolyfill = function(callbackFn) {
    const finalArr = new Array(this.length);
    let k = 0;
    while( k < this.length) {
        if(Object.hasOwn(this, k)){ 
            const value = callbackFn(this[k]);
            finalArr[k] = value;
        }
        k++;
    }
    return finalArr;
};

Array.prototype.myMap = mapPolyfill;

const arr = { length: 20, 0: 1, 1: 3};
const squared = function(num) {
    return num * num;
};

const squaredArray = Array.prototype.myMap.call(arr, squared);
console.log(squaredArray);
