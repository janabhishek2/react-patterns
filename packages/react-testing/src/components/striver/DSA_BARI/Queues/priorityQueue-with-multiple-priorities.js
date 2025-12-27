class PriorityQueue {
    // Insert in O(1)... Dequeue in O(n)
    constructor(elements) {
        this.queue = [...elements];
    }

    enqueue(data) {
        // Directly push
        this.queue.push(data);
    }

    dequeue() {
        if(this.queue.length === 0) return -1;

        // find the min element, move all elemnts in front of it 1 step back
        let min = Number.MAX_SAFE_INTEGER;
        let minIndex = -1;
        this.queue.forEach((item, ind) => {
            if(item < min) {
                min = item;
                minIndex = ind
            }
        });

        // 

        return minIndex >=0 ? this.queue.splice(minIndex, 1): -1;
    }

    display() {
        console.log(this.queue);
    }
}

const priorityQueue = new PriorityQueue([3, 4, 8, 1, 2, 33, 44]);
let elements = 4;
while(elements > 0) {
    console.log(priorityQueue.dequeue());
    elements--;
}

priorityQueue.display();
