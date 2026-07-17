// using take and not take approach

const getStringSubsequences = (str) => {
    const n = str.length;

    function printSubsequences(index, tempStr) {
        if(index === n) {
            console.log(tempStr);
            return;
        }

        // Take index in tempStr
        tempStr+=str[index];
        printSubsequences(index+1, tempStr);


        const sliced = tempStr.slice(0, -1);
        printSubsequences(index+1, sliced);
        // pop and do not take
    }

    printSubsequences(0, "");
};

const str = "abcd";
getStringSubsequences(str);
