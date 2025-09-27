const original = {
    name: "mdn",
    a: {
        b: 1,
        c: 4
    }
}

const isObject = obj => typeof obj === "object" && !Array.isArray(obj);

function deepClone(obj) {
    const returnedObj = {};

    const curreObjectKeys = Object.keys(obj);
    curreObjectKeys.forEach((key) => {
        const value = obj?.[key];
        if(isObject(value)) {
            // Call this method recursively
            returnedObj[key] = {...deepClone(value)}
        } else {
            // Push in return obj
            returnedObj[key] = value;
        }
    });

    return returnedObj;
   
};

const ans = deepClone(original);

original.a.b = 10;

console.log(ans, original);