const arr = [2, 1, 3, 4, -1];

const mergeSort = (arr) => {
    const n = arr.length;

    function merge(arr, low, mid, high) {
        let l = low;
        let r = mid+1;

        const newArr = [];
        while(l<=mid && r<=high) {
            if(arr[l] <= arr[r]) {
                newArr.push(arr[l]);
                l++;
            }
            else {
                newArr.push(arr[r]);
                r++;
            }
        }

        while(l <= mid) {
            newArr.push(arr[l]);
            l++;
        }

        while(r <= high) {
            newArr.push(arr[r]);
            r++;
        }

        // replace low->high in original
 
        for(let k = low; k<=high; k++) {
            arr[k] = newArr[k-low];
        }
    }

    function ms(arr, low, high) {

        if(low >= high) return;;

        const mid = Math.floor((low + high) / 2);
        ms(arr, low, mid);
        ms(arr, mid+1, high);
        merge(arr, low, mid, high);
    }

    ms(arr, 0, n-1);

};


mergeSort(arr);

console.log(arr);
