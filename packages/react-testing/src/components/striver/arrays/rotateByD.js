let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 3;

function rotate(arr) {
    let n = arr.length;
    for(let i=0; i<n/2; i++) {
        let temp = arr[i];
        arr[i] = arr[n-1-i];
        arr[n-1-i] = temp;
    }
    return arr;
}

function rotateByD(arr, d) {

    // rotate from arr, arr + d,
    const arr1 = rotate(arr.slice(0, d));
    // rotate from arr+d, arr+n

    const arr2 = rotate(arr.slice(d));
    // rotate arr

    const arr3 = [...arr1, ...arr2];
    return rotate(arr3);
};

console.log(rotateByD(arr, 3));

