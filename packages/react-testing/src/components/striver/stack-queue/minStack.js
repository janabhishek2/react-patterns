class MinStack {
    constructor(maxSize = 10) {
        this._stack = [];
        this.maxSize = maxSize;
        this.min = 1000;
    }

    push(element) {
        // if stack full
        if(this._stack.length === this.maxSize) return;

        // if stack empty: push and update min
        if(this._stack.length === 0) {
            this._stack.push(element);
            this.min = element;
            return;
        }

        // if ele < min: push 2*prevMin - ele to stack and update min
        if(element < this.min) {
            this._stack.push(2*element - this.min);
            this.min = element;
            return;
        }

        // ele >min: push element to stack
        if(element > this.min) {
            this._stack.push(element);
        }
        
    }

    top() {
        // if arr.at(-1) < min: it is modified value; top->min and return;
        if(this._stack.at(-1) < this.min) return this.min;

        // if min < arr.at(-1); then return arr.at(-1)
        else return this._stack.at(-1);
    }

    pop() {
        // pop stack.top element and check
        const popped = this._stack.pop();

        // if ele < min; it is modified; update min
        if(popped < this.min) {
            let prevTop = this.min;
            this.min = 2 * (this.min) - popped;
            return prevTop;
        }

        // if ele > min; do not update min
        return popped;
    }

    view() {
        console.log(this._stack);
    }

}

const minStack = new MinStack(10);

minStack.push(12);
// minStack.view();
minStack.push(15);
// minStack.view();
minStack.push(10);
minStack.view();
minStack.push(7);
minStack.view();

minStack.pop();
minStack.view();
