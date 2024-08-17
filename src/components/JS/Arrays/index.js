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
    buttonElement.addEventListener("click", handleButtonClick(tries, textElement));
}

createDiceGame("click_me", "text");
