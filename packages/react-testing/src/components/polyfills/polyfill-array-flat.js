const unflattened = [1, 2, [3, 4, [5, 6, [7,8]]]];

function flattenArray(arr) {
    const isArray = Array.isArray(arr);
    const flattened = [];
    if(isArray && arr.length == 0) return [];

    if(!isArray) return arr;

    arr.forEach((item) => {
        if(Array.isArray(item)) {
            const flattenedTemp = flattenArray(item);
            flattened.push(...flattenedTemp);
        } else {
            flattened.push(item);
        }
    });

    return flattened;
}

Array.prototype.flattenArray = flattenArray;

const flattened = flattenArray(unflattened);

// Trick to convert unflattened array to flattened.
// const flat1 = unflattened.toString();
// console.log(flat1.split(",").map(Number));