// Execution context: area in memory where js is executed.
// every function gets an execution context
// global execution context remains same.


function getMemoisedSumFunction() {
    let result = {};
    return function sum(...args) {
        let joinedArgs = args.join(",");
        if(result[joinedArgs]) {
            return result[joinedArgs];
        }
        console.log("here", result);
        return result[joinedArgs] = args.reduce((acc, curr) => {
            return acc + curr;
        }, 0);
    }
}

const sumFn = getMemoisedSumFunction();
console.log(sumFn(3, 4));
console.log(sumFn(3, 4, 1));
console.log(sumFn(3, 4, 2));
// console.log(sum());