class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(data) {
        if(this.isFull()) {
            console.log("Stack full !");
            return;
        }
        else {
            this.stack.push(data);
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length === this.maxSize;
    }

    pop() {
        if(this.isEmpty()) return -1;

        else return this.stack.pop();
    }
}

class QueueUsing2Stacks {
    constructor(maxSize){
        this.stack1 = new Stack(maxSize);
        this.stack2 = new Stack(maxSize);
    }

    enqueue(data) {
        if(this.stack1.isFull()) {
            console.log("Queue is full !");
        } else {
            this.stack1.push(data);
        }
    }

    dequeue() {
        // if stack2 is empty, move all elements from stack1 to stack2
        if(this.stack2.isEmpty()) {

            // move all elements from stack1 to stack2 in reverse order
            while(!this.stack1.isEmpty()) {
                const element = this.stack1.pop();
                this.stack2.push(element);
            }
        }
        // pop from stack 2

        return this.stack2.pop();
    }

    display() {
        // Display contents of stack1 and stack2 
        console.log("Stack 1 --> ");
        console.log(this.stack1.stack);
        console.log("Stack 2 --> ");
        console.log(this.stack2.stack);
        return;
    }
}

const queue = new QueueUsing2Stacks(3);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.display();
