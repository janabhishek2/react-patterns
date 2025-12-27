class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor(maxSize) {
        this.front = null;
        this.rear = null;
        this.maxSize = maxSize;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
    
    isFull() {
       return this.size === this.maxSize;
    }

    enqueue(data) {
    // if maxsize is reached return max-size reached
        if(this.size === this.maxSize) {
            console.log("Max size reached!!");
            return;
        }

       const node = new Node(data);
       this.size++;
    //  if it is first node point front and rear to it
        if(!this.rear) {
            this.rear = this.front = node;
            return;
        }
    // else store rear in temp and move rear to new node, keep first constant
        this.rear.next = node;
        this.rear = node;
    }

    dequeue() {
        // if queue is empty then console it
        if(this.rear === null || this.front == null) {
            console.log("Queue is empty");
            return -1;
        } else {
            // if 1 element is there
            if(this.size === 1) {
                const element = this.front.data;
                this.front = null;
                this.rear = null;
                this.size--;
                return element;
            }
            
            // move front one pos forward
           
            const temp = this.front;
            this.front = this.front.next;
            this.size--;
            return temp.data;
        }
    }

    display() {
       let temp = this.front;
        while(temp) {
            console.log(temp.data);
            temp = temp.next;
        }
       return;
    }
};

const queueUsingLL = new Queue(3);
queueUsingLL.enqueue(3);
queueUsingLL.enqueue(4);
queueUsingLL.enqueue(5);


queueUsingLL.display()
