// Highlight all chars with length>=8 with yellow background.

// TODO
// 1. gather the input from <p/> tag.
// 2. Split it based on " ". Convert to array
// 3. Check for individual words in array with length greater than 8.
// 4. merge all with a span.

const pElement = document.getElementsByTagName("p")[0];
let pText = pElement.innerHTML;
pElement.innerHTML = null;

// manipulate data;
let newSpanElements = pText.split(" ").map(item => {
    const spanElement = document.createElement("span");
    if(item.length >= 8) {
        spanElement.style.backgroundColor = "yellow";
    }
    spanElement.innerText = `${item} `;
    pElement.append(spanElement);
});

