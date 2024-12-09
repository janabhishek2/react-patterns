const shallowComparison = (obj1, obj2) => {

    // if length of keys not equal return false
    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    let isEqual = true;
    Object.entries(obj1).forEach(([key1, value1]) => {
        if(obj2?.[key1] !== value1) {
            isEqual = false;
            return;
        }
    });
    return isEqual;
};

const obj1 = {
    a: 1,
    b: 2,
}

const obj2 = {
    b: 2,
    a: 1,
};

const equal = shallowComparison(obj1, obj2);
console.log(equal);
