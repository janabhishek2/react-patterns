// Object flattening

const typeOf = (object) => {
    const regex = /\[object (.*)\]/;
    const typeOfString = Object.prototype.toString.call(object).toLowerCase();
    return regex.exec(typeOfString)[1];
}
const flattenObject = (object, outerKey = undefined) => {
    let newObject = {};
    if(outerKey) {
        Object.keys(object).forEach(key => {
            if(typeOf(object[key]) === "object") {
                let tempObject = flattenObject(object[key], `${outerKey}.${key}`);
                newObject = {
                    ...newObject,
                    ...tempObject
                }
            } else {
                newObject[`${outerKey}.${key}`] = object[key];
            }   
        });
        return newObject;
    } else {
        Object.keys(object).forEach(key => {
            let temp = typeOf(object[key]);
            if(typeOf(object[key]) === "object") {
                let tempObject = flattenObject(object[key], key);
                newObject = {
                    ...newObject,
                    ...tempObject
                }
            } else {
                newObject[key] = object[key];
            }   
        });
        return newObject;
    }
};

const o = { 
    a: 1,
    b: {
        c: {
            d: [2,3,4],
            e: 5,
        },
        f: {
            g: 6,
            h: 7
        },
        i: 8

    }
};
const flattenedObject = flattenObject(o);

console.log(flattenedObject);
