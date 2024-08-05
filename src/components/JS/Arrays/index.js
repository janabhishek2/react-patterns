function guessingGame() {
    let fixNum = Math.ceil(Math.random() * 100);
    let won = false;
    let guesses = 0;
    return function game(input) {
        if(won) {
            return `The game is over, you already won!`;
        }
        ++guesses;
        if(input < fixNum) {
            return `${input} is too low!`;
        }
        else if(input > fixNum) {
            return (`${input} is too high!`);
        }
        else{
            won = true;
            const guess = guesses === 1 ? "guess" : "guesses";
            return `You win! You found ${fixNum} in ${guesses} ${guess}.`
        }
    }
}

let game = guessingGame();