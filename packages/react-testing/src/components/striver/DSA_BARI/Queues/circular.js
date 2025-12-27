class Queue {
    constructor(maxSize) {
        this.front = 0;
        this.rear = 0;
        this.queue = [];
        this.maxSize = maxSize;
    };

    isFull() {
        return (this.rear+1) % this.maxSize === this.front;
    }

    isEmpty() {
        return this.front === this.rear;
    }

    enqueue(data) {
        if(this.isFull()) {
            console.log("Queue is full!!");
        } else {
            let newRear = (this.rear + 1) % this.maxSize;
            this.rear = newRear;
            this.queue[newRear] = data;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return -1;
        }
        let newFront = (this.front + 1)%this.maxSize;
        const data = this.queue[newFront];
        this.front = newFront;
        this.queue[newFront] = undefined;
        return data;
    }

    display() {
       if(this.isEmpty()) {
        return;
       } else {
        let i = (this.front+1)%this.maxSize;
        while(i != this.rear) {
            console.log(this.queue[i]);
            i = (i+1)%this.maxSize;
        }
        console.log(this.queue[i]);
       }

    }
}

const queue = new Queue(4);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

// queue.dequeue();
// queue.dequeue();
queue.dequeue();

queue.enqueue(33);
queue.dequeue();
queue.enqueue(313);

// queue.enqueue(4);
// queue.enqueue(5);
queue.display();
