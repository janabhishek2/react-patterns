// const toUppercase = str => str.toUpperCase();
// const split = str => str.split(" ");

// const strr = "i fall for her ";
// const composed = compose(split, toUppercase);
// const ans = composed(strr);

// console.log(ans);
// return;


const partial = (func, ...fixed) => {
    return function(...rem) {
        return func(...fixed, ...rem);
    }
};

const compose = (...funcs) => {
    return function(data) {
        return funcs.reduceRight((value, func) => {
            return func(value);
        }, data)
    }
}

const getRandomRoll = () => Math.ceil(Math.random() * 6);

// writing pure functions
const isWon = (num) => num === 6;

const handleButtonClick = function(tries, textElement) {
    return function() {
        const numberGenerated = getRandomRoll();
        ++tries;
        if(isWon(numberGenerated)) {
            textElement.textContent = `You won after ${tries} tries!`;
            tries = 0;
            // this gets access to buttonElement that triggered this event
            this.textContent = "Click me!"
        } else {
            textElement.textContent = `Number ${numberGenerated} popped! Try again ?`;
            this.textContent = "Try again?";
        }
    }
};

const createDiceGame = (buttonId, textId) => {
    let tries = 0;
    const buttonElement = document.getElementById(buttonId);
    const textElement = document.getElementById(textId);

    buttonElement.textContent = "Click me!";
    const argsBoundHandler = partial(handleButtonClick, tries, textElement);

    buttonElement.addEventListener("click", argsBoundHandler());
}

const boundDiceGame = partial(createDiceGame, "click_me", "text");

boundDiceGame();
