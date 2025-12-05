let arr = [2, 3, 0, 4, 0, 5, 0, 6, 0 , 0];

function moveZeroesToEnd(arr) {
    const firstZeroIndex = arr.indexOf(0);
    const n = arr.length;

    // Move i to zero index and j to 1 index above

    // If j is not zero, swap a[i], a[j], increment i,j

    // if j is zero, increment j only.

    for(let j=firstZeroIndex, i=firstZeroIndex+1; i<n;) {
        if(arr[i] == 0) {
            i++;
        } else {
             const temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;

            i++;
            j++;
        }
    }

}

moveZeroesToEnd(arr);
console.log(arr);