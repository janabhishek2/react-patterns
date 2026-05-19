// const arr = [1, 2, 3];
const filterFn = function(num) {
    return num % 2 == 0;
};

// const filtered = arr.filter(filterFn);

// console.log(filtered);


const myFilter = function(callbackFn) {
    const newArr = [];
    let k = 0;
    while(k < this.length) {
        if(Object.hasOwn(this, k)) {
            const shouldBePushed = callbackFn(this[k])
            if(shouldBePushed) {
                newArr.push(this[k]);
            }
        }
        k++;
    }
    return newArr;
}

Array.prototype.myFilter = myFilter;

const arr = [1, 2, 3, , 4, , , 5];

const filtered = arr.myFilter(filterFn);

console.log(filtered);
