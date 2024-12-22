// shallow compare objects

const typeOf = (object) => {
    const typeofObjectString = Object.prototype.toString.call(object).toLowerCase();
    const regex = /\[object (.*)\]/;
    const type = regex.exec(typeofObjectString);
    return type[1];
}

const deepCompare = (obj1, obj2) => {
    if(typeOf(obj1) !== typeOf(obj2)) {
        return false;
    }
    if(typeOf(obj1) === "object") {
        if(Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        return Object.keys(obj1).every(key => {
            return deepCompare(obj1[key],obj2[key]);
        });
    }
    if(typeOf(obj1) === "array") {
        if(obj1.length !== obj2.length) {
            return false;
        }
        return obj1.every((item, index) => deepCompare(item, obj2[index]));
    }
    if(typeOf(obj1) === "date") {
        return obj1.getTime() === obj2.getTime()
    }
    return obj1 === obj2;
}

const o1 = {
    a: 1,
    b: {
        c: 2
    }
};
const o2 = {
    a: 1, 
    b: {
        c: 2
    }
};

const ans = deepCompare(o1, o2);
console.log(ans);