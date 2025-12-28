class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this._front = null;
        this._rear = null;
        this._currsize = 0;
        this._maxsize = 10;
    }

    enqueue(item) {
        // Check if queue full, return.
        if(this._currsize >= this._maxsize) {
            console.log("Queue is full!");
            return;
        }

        // Create a node
        const node = new QueueNode(item);

        // Check if queue has 0 item: point front and rear to curr, increment currSize
        if(this._currsize === 0){
            this._front = node;
            this._rear = node;
            this._currsize++;
            return;
        }

        // Append on rear and increment rear and currSize
        this._rear.next = node;
        this._rear = node;
        this._currsize++;
        return;
    }

    dequeue() {
        // if there are no items
        if(this._currsize === 0) {
            console.log("Can not de-queue");
            return;
        }

        // if there is 1 item
        if(this._currsize === 1) {
            const temp = this._front.data;
            this._front = this._rear = null;
            this._currsize--;

            return temp;
        }

        // if there is more than 1 item: store front in temp, move front by 1 index and return temp;
        const temp = this._front;
        this._front = this._front.next;
        this._currsize--;
        return temp.data;
    }

    isEmpty() {
        return this._currsize === 0;
    }

    display() {
        for(let temp = this._front; temp!= null;) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}


module.exports = {
    Queue
};
