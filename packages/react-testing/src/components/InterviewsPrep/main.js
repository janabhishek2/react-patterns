// shallow compare objects

const typeOf = (object) => {
    const typeofObjectString = Object.prototype.toString.call(object).toLowerCase();
    const regex = /\[object (.*)\]/;
    const type = regex.exec(typeofObjectString);
    return type[1];
}

const shallowCompare = (obj1, obj2) => {
    if(typeOf(obj1) !== typeOf(obj2)) {
        return false;
    }
    if(typeOf(obj1) === "object") {
        if(Object.keys(obj1).length !== Object.keys(obj2).length) {
            return false;
        }
        return Object.keys(obj1).every(key => {
            return obj1[key] === obj2[key];
        });
    }
    if(typeOf(obj1) === "array") {
        if(obj1.length !== obj2.length) {
            return false;
        }
        return obj1.every((item, index) => item === obj2[index]);
    }
    if(typeOf(obj1) === "date") {
        return obj1.getTime() === obj2.getTime()
    }
    return obj1 === obj2;
}

const ans = shallowCompare([1, 2, 3], [1, 2, 3]);
console.log(ans);