class Node {
    constructor(data) {
        this._data = data;
        this._next = null;
    }
}

class Queue {
    constructor(maxSize) {
        this._maxSize = maxSize;
        this._queue = [];
        this._rear = -1;
    }

    enqueue(data) {
        //    if queue has reached maxSize then return
        if (this._rear === this._maxSize - 1) {
            console.log("Queue is full");
            return;
        } else {
            // O(1)
            this._rear++;
            this._queue[this._rear] = data;
        }
    }

    dequeue() {
        if(this._rear >= 0) {
            // O(n)
            const poppedElement = this._queue.splice(0,1);
            this._rear--;
            return poppedElement
        } else {
            console.log("Queue is empty");
            return -1;
        }
    }

    display() {
        for(let item of this._queue) {
            console.log(item);
        }
    }
}

const q = new Queue(5);
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.display();