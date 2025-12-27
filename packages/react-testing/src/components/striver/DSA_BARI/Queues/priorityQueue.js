class Node{ 
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

class Queue {
    constructor(priority) {
        this.front = null;
        this.rear = null;
        this.priority = priority;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(data) {
        const newNode = new Node(data)
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
            return;
        }

        this.rear.next = newNode;
        this.rear = newNode;
    }

    dequeue() {
        if(this.isEmpty()) {
            return -1;
        } else {
            const temp = this.front;
            this.front = this.front.next;
            return temp.data;
        }
    }

    display() {
        let temp = this.front;
        while(temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
};

class PriorityQueue {
    constructor(priorities = []){
        this.priorities = priorities;
        this.queues = {};
        for(let i = 1; i <= priorities; i++ ){
            this.queues[i] = new Queue(priorities[i]);
        }
    }

    enqueue(data, priority) {
        const selectedQueue = this.queues[priority];
        selectedQueue.enqueue(data);
    }

    dequeue() {
        // dequeue all elements from top priority first
        for(let i=1; i<=this.priorities; i++) {
            const element = this.queues[i].dequeue();
            if(element > 0) return element;
        }
        return -1;
    }

    display() {
        // print prioity and data of each

        for(let i=1; i<=this.priorities; i++) {
            console.log('Priority', i);
            this.queues[i].display();
        }
    }
};

const queue = new PriorityQueue(3);
queue.enqueue(3, 1);
queue.enqueue(4, 1);
queue.enqueue(5, 1);


queue.enqueue(4, 2);
queue.enqueue(5, 2);
queue.enqueue(6, 2);

queue.dequeue();
queue.dequeue();
queue.dequeue();

queue.display();