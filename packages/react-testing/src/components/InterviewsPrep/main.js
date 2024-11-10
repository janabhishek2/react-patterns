// remove all duplicates from arr

const arr = [1,3,1,1,1,1,2];

// use sets
const elementsSet = new Set();
arr.forEach(element => {
    elementsSet.add(element);
})

for(let item of elementsSet) {
    console.log(item);
}