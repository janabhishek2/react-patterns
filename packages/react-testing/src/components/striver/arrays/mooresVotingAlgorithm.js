const arr = [2, 1, 2, 1,2,2, 1 ];

// Find an element which occurs more than n/2 times ?

function findElement(arr) {
    let element = null;
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!element) {
            element = arr[i];
            count++;
        } else if (arr[i] === element) {
            count++;
        } else if (arr[i] !== element) {
            count--;
            if(count === 0) {
                element = null;
            }
        }
    }

    return element;
}

const element = findElement(arr);
console.log(element);
