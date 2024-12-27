// Split each sentence in a separate line.
// Sentence: each set of words terminated by period

const sentenceRegex = /(.?)+\.\s+/g;
const pElement = document.querySelector("p");
let pText = pElement.innerText;
pElement.innerHTML = null;

let sentences = pText.split(". ");

// Put sentences on separate lines

sentences.forEach(sentence => {
    // append div to pElement
    const sentenceEl = document.createElement("div");
    sentenceEl.innerText = `${sentence}.`;
    pElement.append(sentenceEl);
});
