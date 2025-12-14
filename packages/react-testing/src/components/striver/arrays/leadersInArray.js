const arr = [10, 22, 12, 3, 0, 6];

const getLeaders = (ar) => {
    let arr = [...ar];
    let n = arr.length;
    let max = arr[n-1];

    let leaders = [];
    leaders.push(max);

    for(let i=n-2; i>=0; i--) {
        if(arr[i] > max) {
            max = arr[i];
            leaders.push(arr[i]);
        }
    }

    return leaders.sort((a,b) => b-a);
};

const ans = getLeaders(arr);
console.log(ans);
