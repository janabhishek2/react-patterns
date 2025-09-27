// Deep compare objects

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 3
    }
}

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 4
    }
}

const isObject = (obj) => typeof obj === "object" && !Array.isArray(obj);

function deepCompare(obj1, obj2) {
    const isObj1Object = isObject(obj1);
    const isObj2Object = isObject(obj2);

    if(!isObj1Object || !isObj2Object) return false;

    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if(obj1Keys.length !== obj2Keys.length) return false;

    for(let key1 of obj1Keys) {
        const val1 = obj1[key1];
        const val2 = obj2[key1];

        const isVal1Obj = isObject(val1);
        const isVal2Obj = isObject(val2);

        if(isVal1Obj || isVal2Obj) {
            return deepCompare(val1, val2);
        } else if(val1 !== val2) {
            return false;
        }
    }

    return true;
}

console.log(deepCompare(obj1, obj2));