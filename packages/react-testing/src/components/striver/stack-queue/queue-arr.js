class Queue {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._rear = 0;
        this._front = 0;
        this._queue = [];
        this._currSize = 0;
    }

    isFull() {
        return this._currSize === this._maxSize;
    }

    isEmpty() {
        return this._currSize === 0;
    }

    enqueue(num){
        const isFull = this.isFull();
        // Queue full
        if(isFull) {
            console.log("Queue is full!!");
            return;
        }

        this._queue[this._rear] = num;
        this._currSize++;

        const newRear = (this._rear + 1) % this._maxSize;
        this._rear = newRear;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue empty!");
            return;
        }

        const newFront = (this._front + 1) % this._maxSize;;
        const element = this._queue[this._front];
        this._queue[this._front] = null;
        this._front = newFront;
        this._currSize--;
        return element;

    }

    display() {
        for(let item of this._queue) {
            console.log(item);
        }
    }
    
}

const q = new Queue(3);

q.enqueue(3);
q.enqueue(4);
q.enqueue(5);


q.dequeue();
q.enqueue(6);

const elem = q.dequeue();
console.log(elem);

// q.display();
