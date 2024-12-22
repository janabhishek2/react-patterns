// Count vowels

const str = "abcdio";
let vowels = new Set("aeiou");

const numVowels = (str) => {
    let total = 0;
    Array.from(str).forEach(char => {
        if(vowels.has(char)) {
            total++;
        }
    })
    return total;
};

const ans = numVowels(str);
console.log(ans);
