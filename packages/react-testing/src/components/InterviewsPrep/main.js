// palindrome

const isPalindrome = (str) => {
    // O(n) solution
    return str.split("").every((item, index) => {
        return item === str[str.length - index - 1];
    })
};

const str = "abcba";
const ans = isPalindrome(str);
console.log(ans);