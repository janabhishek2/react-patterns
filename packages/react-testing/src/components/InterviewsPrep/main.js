// write range(1,3) --> 1,2,3

// const range = (start, end) => {
//     for(let i = start; i<=end; i++) {
//         console.log(i);
//     }
// };

const range = (start, end) => [...Array(end - start).keys().map(item => item + start)];

const range41to50 = range(41, 50);

console.log(range41to50);
