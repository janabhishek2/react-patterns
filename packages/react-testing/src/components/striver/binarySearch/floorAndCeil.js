// Find floorI, ceilI such that arr[floorI] <= n and arr[ceilI] >= n;

const floorAndCeil = (arr, num) => {
    const n = arr.length - 1;
    let floorIndex = -1;
    let ceilIndex = n;

    const computeFloor = (arr, low, high) => {
        if( low > high ) return;
        const mid = Math.floor((low + high)/2);

        if(arr[mid] <= num) {
            floorIndex = mid;
            low = mid+1;
            computeFloor(arr, low, high);
        }
        else {
            high = mid-1;
            computeFloor(arr, low, high);
        }
    };

    const computeCeil = (arr, low, high) => {
        if( low > high ) return;
        const mid = Math.floor((low + high)/2);

        if(arr[mid] >= num) {
            ceilIndex = mid;
            high = mid -  1;
            computeCeil(arr, low, high);
        } else {
            low = mid + 1;
            computeCeil(arr, low, high);
        }
    };

    computeFloor(arr, 0, n);
    computeCeil(arr, 0, n);

    return [arr[floorIndex], arr[ceilIndex]];
} 

const arr = [10, 20, 30, 40, 50];
const num = 25;

const ans = floorAndCeil(arr, num);
console.log(ans);
