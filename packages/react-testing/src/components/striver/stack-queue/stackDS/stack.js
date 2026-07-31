export default class Stack {
    constructor(maxSize = 10) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(element) {
        // if stack full; abort
        if(this.stack.length === this.maxSize) return;
        // push element
        this.stack.push(element);
    }

    pop() {
        // if stack empty; abort
        if(this.stack.length === 0) return;

        // pop top element
        return this.stack.pop();
    }

    top() {
        if(this.stack.size === 0) return -1;

        return this.stack[this.stack.length - 1];
    }
};