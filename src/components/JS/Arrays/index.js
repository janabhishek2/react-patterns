class DiceGame {
    infoSection = null;
    displayButton = null;

    static tries = 0;
    constructor(buttonId, textId) {

        this.infoSection = document.getElementById(textId);
        this.infoSection.textContent = "Click the above button to start the game!";

        this.displayButton = document.getElementById(buttonId);
        this.displayButton.addEventListener("click", this.rollDice);
    }

    getRandomNumber() {
        return Math.ceil(Math.random() * 6);
    }

    isGameWon(selected) {
        return selected === 6;
    }

    rollDice = () => {
        const rand = this.getRandomNumber();
        ++DiceGame.tries;
        if(this.isGameWon(rand)) {
            this.infoSection.textContent = `You have won! after ${DiceGame.tries} tries`;
            DiceGame.tries = 0;
            this.displayButton.textContent = "Click Me!";
        } else {
            this.infoSection.textContent = `Number ${rand} popped up. Press the button to try again!`;
            this.displayButton.textContent = "Try Again ?";
        }
    }

}

const s = new DiceGame("click_me", "text");

console.log(s);