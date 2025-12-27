class Queue {
    constructor(maxSize) {
        this._queue = new Array(maxSize);
        this.maxSize = maxSize;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(data) {
        if(this.rear + 1 < this.maxSize) {
            this._queue[++this.rear] = data;
        } else {
            console.log("Queue is full!!");
        }
    }

    dequeue() {
        let x = -1;
        if(this.front + 1 <= this.rear) {
            // dequeue the element
            x = this._queue[++this.front];
        }
        if(this.front === this.rear) {
            this.front = -1;
            this.rear = -1;
        }
        return x;
    }

    display() {
       let i = this.front + 1;
       while(i<=this.rear) {
            console.log(this._queue[i]);
            i++;
       }
    }
}

const queue = new Queue(3);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.enqueue(55);
queue.display();