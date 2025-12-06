const arr = [0, 1, 2, 1, 0, 0, 2, 1, 0];

function dutchNationalFlagAlgorithm(arr) {
    
    let n = arr.length;

    let low = 0;
    let mid = 0;
    let high = n-1;

    while(mid < high) {
        if(arr[mid] === 0) {
            // swap arr[low] arr[mid]
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            // low++ mid++
            low++;
            mid++;

        }
        if(arr[mid] === 1) {
            // mid++
            mid++;
        }
        if(arr[mid] === 2) {
            // swap arr[high] arr[mid]
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;

            // high--
            high--;
        }
    }
};

dutchNationalFlagAlgorithm(arr);
console.log(arr);
