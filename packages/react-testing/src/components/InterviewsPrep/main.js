// string to title case

const toTitleCase = (str) => {
    let newStrArray = Array.from(str.toLowerCase());
    newStrArray[0] = newStrArray[0].toUpperCase();
    return newStrArray.join('');
};

const getWordsToTitleCase = (str) => {
    const words = str.split(" ");
    return words.map((item) => {
        return toTitleCase(item);
    }).join(" ");
}

const str = "I'm a little tea pot";
const ans = getWordsToTitleCase(str);

console.log(ans);
