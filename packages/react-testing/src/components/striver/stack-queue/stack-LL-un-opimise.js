class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor(maxSize) {
        this._maxsize = maxSize;
        this.front = null;
        this.rear = null;
        this.currSize = 0;
    }
    isFull() {
        return this.currSize >= this._maxsize;
    }
    isEmpty() {
        return this.currSize === 0;
    }

    push(element) {
        // if full, then return
        if(this.isFull()) {
            console.log("Full now!!");
            return;
        }

        const node = new Node(element);

        if(this.front === null && this.rear === null) {
            this.front = node;
            this.rear = node;
            this.currSize++;
            return;
        } else {
            this.rear.next = node;
            this.rear = node;
            this.currSize++;
        }
    }

    pop() {
        // If empty; return
        if(this.isEmpty()) {
            console.log("empty");
            return;
        }
        
        // 1 element
        if(this.currSize === 1) {
            const element = this.front.data;
            this.front = null;
            this.rear = null;
            this.currSize--;
            return element;
        }

        // Find temp such that temp->next = rear; 
        let temp = this.front;
        while(temp.next !== this.rear) {
            temp = temp.next;
        }

        const element = this.rear.data;
        delete this.rear;
        this.rear = temp;
        this.rear.next = null;
        this.currSize--;

        return element;
    }

    display() {
        let temp = this.front;
        while(temp!= null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

const stack = new Stack(3);

stack.push(3);
stack.push(4);
stack.push(5);
// stack.push(6);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

stack.display();
