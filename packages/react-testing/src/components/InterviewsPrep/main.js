const arr = [1, 2, 3, 1, 1];

arr.sort((a,b) => a-b);

let element = arr[0];

let ans = arr.reduce((acc, curr) => {
    if(curr === element) {
        acc = acc + 1;
    }
    return acc;
}, 0);

console.log(ans);
