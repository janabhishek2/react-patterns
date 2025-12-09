const str = "abcbe";

const isPalindrome = (str) => {
    if(str.length === 0) return true;

    const first = str[0];
    const last = str[str.length-1];

    const isFirstEqualToLast = first === last;
    const remainingString = str.slice(1, -1);

    return isFirstEqualToLast && isPalindrome(remainingString);
}

const ans = isPalindrome(str);

console.log(ans);
