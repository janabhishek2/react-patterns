const arr = [1, 2, 0, 0, 1, 2, 0, 0, 1, 0 , 0, 0];
 
// 0->low-1 -> 0
// low-mid-1 -> 1;
// mid-high ->unsorted
// high+1 - n-1 ->2

function swap(item1, item2) {
    let temp = item1;
    item1 = item2;
    item2 = temp;
    return;
};

function sortedArray(arr) {

    const n = arr.length;

    let low = 0;
    let mid = 0;
    let high = n-1;

    while(mid <= high) {
        if(arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;

            low++;
            mid++;
        }

        else if(arr[mid] === 1){
            mid++;
        }

        else if(arr[mid] === 2) {
            let temp = arr[high];
            arr[high] = 2;
            arr[mid] = temp;
            high--;
        }

        
        else {
            null;
        }
    }
}

sortedArray(arr);

console.log(arr);