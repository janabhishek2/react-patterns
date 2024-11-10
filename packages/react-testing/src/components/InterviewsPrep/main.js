let arr = [1, 2, 3];
let element = 4;

// create a pure append function?

const append = (arr, item) => {
    return [...arr, item];
};

const newArr = append(arr, element);

console.log(newArr, arr);
