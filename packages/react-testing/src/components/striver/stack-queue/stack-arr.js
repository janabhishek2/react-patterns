class Stack {
    constructor(maxsize) {
        this._maxsize = maxsize;
        this.stack = [];
    }

    get isFull() {
        return this.stack.length >= this._maxsize;
    }

    get isEmpty() {
        return this.stack.length === 0;
    }

    push(ele) {
        if(!this.isFull) {
            this.stack.push(ele);
        }
    }

    pop() {
        const currLen = this.stack.length;
        const [ans] = this.stack.splice(currLen-1, 1);
        return ans;
    }

    display() {
        for(let item of this.stack) {
            console.log(item);
        }
    }

    top() {
        const currLen = this.stack.length;
        return this.stack[currLen - 1];
    }
}

module.exports = {
    Stack
}