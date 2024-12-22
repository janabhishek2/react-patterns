// string to title case

const convertToTitleCase = (str) => { 
    return str.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
}

const str = "I'm a little tea pot";
const ans = convertToTitleCase(str);

console.log(ans);
