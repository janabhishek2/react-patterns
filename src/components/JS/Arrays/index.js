function createAccount(initPin, initialAmount) {
    let currentBalance = initialAmount;
    let currPin = initPin;

    function checkBalance(pin) {
        if(currPin !== pin) {
            return "Invalid PIN.";
        } else {
            return currentBalance;
        }
    }

    function deposit(pin, amt) {
        if(currPin !== pin) {
            return "Invalid PIN.";
        } else {
            currentBalance += amt;
            return `Successfully deposited ${amt}. Current balance: ${currentBalance}.`
        }
    }

    function withdraw(pin, amt) {
        if(currPin !== pin) {
            return "Invalid PIN.";
        } else if(currentBalance < amt) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        } else {
            currentBalance -= amt;
            return `Successfully withdrew ${amt}. Current balance: ${currentBalance}.`
        }
    }

    function changePin(oldPin, newPin) {
        if(oldPin !== currPin) {
            return "Invalid PIN.";
        }  else {
            currPin = newPin;
            return "PIN successfully changed!"
        }
    }
    
    return {
        checkBalance, deposit, withdraw, changePin
    }
}