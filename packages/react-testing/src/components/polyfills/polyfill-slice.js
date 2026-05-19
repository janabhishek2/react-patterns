const arr = [1, 2, 3, 4];

// slice(start, end)
// start not avalilable, end not available
// start available, end not available

// Index not available: sparse array

Array.prototype.mySlice = function(startIndex, endIndex) {
    const arr = Array.from(this);
    if(!Array.isArray(arr)) throw new Error("Not an array!");

    if(!startIndex && !endIndex) return this;

    const arrLength = this.length;

    let start = startIndex % arrLength;
    let end = !endIndex ? arrLength : ( endIndex > arrLength ? arrLength : endIndex);

    // start is negative
    if(start < 0) {
        while(start < 0) {
            start+=this.length;
        }
    }

    if(end < 0) {
        while(end < 0) {
            end += this.length;
        }
    }
    console.log(end);

    let k = start;
    const newArray = [];

    while(k < end) {
        if(Object.hasOwn(this, k)) {
            newArray.push(this[k]);
        }
        k++;
    }

    return newArray;
};

const sliced = arr.mySlice(0, -1);

