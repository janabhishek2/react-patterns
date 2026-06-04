const arr = [1, 2, 4, 7, 7, 5];

const maxElement = function() {
    let max = arr[0];
    arr.slice(1).forEach((item) => {
        item > max ? max = item: null;
    })

    return max;
}

const getSecondLargest = () => {
    let largest = arr[0];
    let secondLargest = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            let temp = largest;
            largest = arr[i];
            secondLargest = temp;
        }
        else if(arr[i] < largest && arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

const ans = getSecondLargest();
console.log(ans);