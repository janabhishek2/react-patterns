// anagram

const str1 = "listen";
const str2 = "silent";

const shallowCompare = (obj1, obj2) => {
   const keys1 = Object.keys(obj1);
   const keys2 = Object.keys(obj2);

   if(keys1.length !== keys2.length) return false;

   return keys1.every((key) => {
    return obj1[key] === obj2[key]
   })
}
const createHashing = (str) => {
    const hashTable = {};
    Array.from(str).forEach(item => {
        if(item !== " "){
            hashTable[item] = (hashTable?.[item] || 0) + 1;
        }
    })
    return hashTable;
};

const hash1 = createHashing(str1);
const hash2 = createHashing(str2);

const isEqual = shallowCompare(hash1, hash2);
console.log(isEqual);
