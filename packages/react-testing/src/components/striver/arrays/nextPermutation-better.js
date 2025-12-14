const arr = [4, 3, 2, 1];
//

function nextPermutation(arr) {
    let n = arr.length;

    let index = null;
    // from last: find first set of numbers where a[i] < a[i+1]
    for(let i = n-1; i>=0; i--) {
        if(arr[i-1] < arr[i]) {
            index = i-1;
            break;
        }
    }
    // from last: find j such that a[j] > a[i];
    let lastIndex = null;
    for(let j=n-1; j>=index; j--) {
        if(arr[j] > arr[index]) {
            lastIndex = j;
            break;
        }
    }

    // swap a[i], a[j]
    let temp = arr[index];
    arr[index] = arr[lastIndex];
    arr[lastIndex] = temp;

    // reverse arr from i+1 to j

    const currArray = arr.slice(0, index+1);
    const reversedArray = reverse(arr.slice(index+1));

    return [...currArray, ...reversedArray];
}

function reverse(ar) {
    let arr = [...ar];
    let n = arr.length;
    for(let i=0, j= n-1; i<j;) {
        // swap'
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        i++;
        j--;
    }
    return arr;
}

const ans = nextPermutation(arr);
console.log(ans);