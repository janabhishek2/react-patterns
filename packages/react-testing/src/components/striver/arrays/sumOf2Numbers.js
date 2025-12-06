const arr = [1, 2, 3, 4, 5];
const sum = 5;

function findIndexesWithSum(arr, sum) {
   let i=0;
   let j=arr.length - 1;

   while(i<j) {
    if(arr[i] + arr[j] < sum) {
        i++;
    } else if(arr[i] + arr[j] > sum) {
        j--;
    } else if(arr[i] + arr[j] === sum) {
        return [i,j];
    } else {
        null;
    }
   }
};

const ans = findIndexesWithSum(arr, sum);
console.log(ans);
