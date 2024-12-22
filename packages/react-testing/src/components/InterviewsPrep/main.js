// palindrome

const isPalindrome = (str) => {
    // O(n) solution
    return str === str.split("").reverse().join("");
};

const str = "abcba";
const ans = isPalindrome(str);
console.log(ans);