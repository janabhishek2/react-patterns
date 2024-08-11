// Functional Programming

// Get even nums

const nums = [1, 2, 3, 4, 5];

// imperative
let evens = [];
for(let num of nums) {
    if(num%2 === 0) {
        evens.push(num);
    }
}

// functional

const ans = nums.filter((item) => item%2 === 0);

console.log(ans);

// Imperative: logic is more... 
// Functional: there are built in useful methods to achieve sopmething.