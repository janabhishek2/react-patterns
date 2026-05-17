const x = [1, 2, 3, 4];

const transformFn = (item, index, arr) => {
    console.log(this);
    return item * item;
}

function myMap(arr, callbackFn, thisArg) {
    let finalArr = [];

    for(let i=0; i<arr.length; i++) {
        const item = arr[i];
        const value = callbackFn.call(thisArg, item, i, arr);
        finalArr.push(value);
    }

    return finalArr;
}

const arrSupreme = {
    length: 2,
    0: 10,
    1: 20
};

const ans = myMap(arrSupreme, transformFn, null);

console.log(Array.from({length: 10}, (_,i) => i ));
