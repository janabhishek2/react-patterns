let arr1 = [1, 2, 3, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];

function intersection(arr1, arr2) {
    let result = [];
    let i =0, j=0;
    let n1 = arr1.length;
    let n2 = arr2.length;

    while(i< n1 && j < n2) {
        if(arr1[i] < arr2[j]) {
            i++;
        } else if(arr2[j] < arr1[i]) {
            j++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }

    return result;
}

const result = intersection(arr1, arr2);

console.log(result);
