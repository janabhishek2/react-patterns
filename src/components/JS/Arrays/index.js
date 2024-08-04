function idGenerator() {
    let count = 1;
    function nextIdGenerator() {
        return count++;
    }
    return nextIdGenerator;
}

const nextIdGenerator = idGenerator();

console.log(nextIdGenerator()); // 1 
console.log(nextIdGenerator()); // 2
console.log(nextIdGenerator()); // 3

// closure: A function and its parent functions scope/variables is called closure.