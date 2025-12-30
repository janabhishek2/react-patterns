const str = "abbbbbdd";

const getLongestSubstringWithAtMaxKchars = (str, k) => {
    let n = str.length;
    let l = 0;
    let r = 0;

    let charsMap = {};

    let areUniqueCharsGreaterThanK = (charMap, k) => {
        return Object.keys(charMap).length > k;
    };

    let maxlen = -1;

    while(r < n) {

        // append the element in charsMap;
        charsMap[str[r]] = (charsMap?.[str[r]]) + 1 || 1;

        while(areUniqueCharsGreaterThanK(charsMap, k)) {
            charsMap[str[l]]--;
            charsMap[str[l]] ===0 && delete charsMap[str[l]];
            l++;
        }

        if(!areUniqueCharsGreaterThanK(charsMap, k)) {
            maxlen = Math.max(maxlen, r - l + 1);
        }

        r++;
    }
    return maxlen;

}

const ans = getLongestSubstringWithAtMaxKchars(str, 2);
console.log(ans);
