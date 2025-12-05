let arr = [1, 2, 2, 3, 3, 3, 4];

function removeDuplicates(arr) {
    let i = 0;
    let j = 1;
    let n = arr.length;

    for(i,j; j < n;) {
        if(arr[i] != arr[j]) {
            i++;
            arr[i] = arr[j];
        } else {
            j++;
        }
    }

    return arr.slice(0, i+1);
}

const withoutDuplicatesArray = removeDuplicates(arr);
console.log(withoutDuplicatesArray);

