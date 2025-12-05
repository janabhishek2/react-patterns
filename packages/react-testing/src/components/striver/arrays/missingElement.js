const arr = [1, 2, 4, 5];
let N = 5;

function findMissingNumber(arr, N) {
    let xorOfNaturalNumbers = 0;
    let xorOfArray = 0;
    for(let i = 1; i<= N; i++) {
        xorOfNaturalNumbers = xorOfNaturalNumbers ^ i;
    }
    arr.forEach((item) => {
        xorOfArray = xorOfArray ^ item;
    })

    return xorOfArray ^ xorOfNaturalNumbers;
};

const ans = findMissingNumber(arr, N);
console.log(ans);
