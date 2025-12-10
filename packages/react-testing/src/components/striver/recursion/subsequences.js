const arr = [3, 1, 2];

const printSubsequences = (arr) => {

    let temp = [];
    let index = 0;
    const n = arr.length;

    function subsequeces(index, temp) {
        if(index >= (n)){ 
            console.log(temp);
            return;
        }
        temp.push(arr[index]);
        subsequeces(index+1, temp);
        temp.pop();
        subsequeces(index+1, temp);
    }

    subsequeces(index, temp);
};

printSubsequences(arr);
