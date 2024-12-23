// Flatten arrays

const flattenArray = (array) => {
    return array.reduce((acc, curr)=> {
        let flattened = curr;
        if(Array.isArray(curr)) {
            flattened = flattenArray(curr);
            return [...acc, ...flattened]
        } else {
            return [...acc, curr];
        }
    }, []);
};

const arr = [1, 2, 3, 4, [5,6, [7,8]]];
const res = flattenArray(arr);

console.log(res);
