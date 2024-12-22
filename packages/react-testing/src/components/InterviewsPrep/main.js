// Anagrams another approach

const isAnagram = (str1, str2) => {
    let string1 = Array.from(str1).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("").trim();
    let string2 = Array.from(str2).sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("").trim();

    return string1 === string2;
}

let str1 = "dormitory";
let str2 = "dirty room";

const ans = isAnagram(str1, str2);
console.log(ans);
