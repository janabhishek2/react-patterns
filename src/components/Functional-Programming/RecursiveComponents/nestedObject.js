export const nested = {
    key1: {
        key2: {
            key3: "m",
            key4: "x",
            key6: "na"
        }
    },
    key5: "s"
};


const x = {
    "key2.key3": "m",
    "ke2.key4": "x"
}

const res = {
    "key1.key2.key3": "abcd"
}
let result = {};
const flattenObject = (object) => {
    const levelKeys = Object.keys(object);
    levelKeys.forEach(key => {
        if(typeof object[key] === 'object') {
            const newObject =  flattenObject(object[key]);
            Object.keys(newObject).forEach(newKey => {
                const ansKey = `${key}.${newKey}`;
                result = {
                    ...result,
                    ...(typeof newObject[newKey] === 'string' && {[ansKey]: newObject[newKey]})
                }
            });
        } else {
            result = {
                ...result,
                [key]: object[key]
            }
        }
    })
    return result;
}
