// const arr = [1, 2, 3];

// const newArr = arr.map((item) => item * 2);

// console.log(newArr);

// Method1

const customMap = function(cb){
    const newArr = [];
    this.forEach((item) => {
        const output = cb(item);
        newArr.push(output);
    })
    return newArr;
}

Array.prototype.customMap = customMap;

const arr = [1, 2, 3];
const func = (item) => item * 109;

const ans = arr.customMap(func);

console.log(ans);
