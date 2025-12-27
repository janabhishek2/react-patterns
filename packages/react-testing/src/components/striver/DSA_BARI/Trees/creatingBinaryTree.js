
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
};

class Queue {
    constructor(maxSize) {
        this.queue = []
        this.maxSize = maxSize;
    }

    enqueue(data) {
        if(this.queue.length === this.maxSize) {
            console.log("queue is full !");
            return;
        }
        this.queue.push(data);
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    dequeue() {
        if(this.queue.length === 0) {
            return -1;
        } else {
            const [item, ...rest] = this.queue;
            this.queue = [...rest];
            return item;
        }
    }
}

class Stack {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length === this.maxSize;
    }

    push(data) {
        if(!this.isFull()) this.stack.push(data);
    }

    pop() {
        if(!this.isEmpty()) return this.stack.pop();
    }
};

class BinaryTree {
    constructor(nodesData) {
       this.nodes = nodesData;
       this.root = null;
       this.constructTreeFromArray();
    }

    constructTreeFromArray() {
        let nodesArray = [0, ...this.nodes];
        const queue = new Queue(200);
        const rootNode = new Node(nodesArray[1]);
        this.root = rootNode;
        queue.enqueue(rootNode);
        let i = 1;
        while(!queue.isEmpty()) {
            const current = queue.dequeue();

            const leftChildIndex = 2*i <= nodesArray.length ? 2*i : -1;
            const rightChildIndex = 2*i+1 <= nodesArray.length ? 2*i+1: -1;

            if(leftChildIndex > 0 && nodesArray[leftChildIndex] > 0) {
                const leftChild = new Node(nodesArray[leftChildIndex]);
                current.left = leftChild;

                queue.enqueue(leftChild);
            }

            if(rightChildIndex > 0 && nodesArray[rightChildIndex] > 0) {
                const rightChild = new Node(nodesArray[rightChildIndex]);
                current.right = rightChild;

                queue.enqueue(rightChild);
            }
            
            i++;
        }
    }

    // level order
    display() {
        const queue = new Queue(200);
        this.root && queue.enqueue(this.root);

        while(!queue.isEmpty()) {
            const curr = queue.dequeue();
            if(curr) {
                console.log(curr?.data);
            }
            // Output current
        
            // check if left is there then put it in queue
            if(curr?.left) {
                queue.enqueue(curr.left);
            }
            if(curr?.right) {
                queue.enqueue(curr.right);
            }
        }

        console.log(this.root);
    }

    // pre-order
    preOrderDisplay(node) {
        if(!node) return;
        else {
            console.log(node.data);
            this.preOrderDisplay(node.left);
            this.preOrderDisplay(node.right);
        }
    }

    // in-order

    inOrderDisplay(node) {
        if(!node) return;
        else {
            this.inOrderDisplay(node.left);
            console.log(node.data);
            this.inOrderDisplay(node.right);
        }
    }

    // post-order

    postOrderDisplay(node) {
        if(!node) return;
        else {
            this.postOrderDisplay(node.left);
            this.postOrderDisplay(node.right);
            console.log(node.data);
        }
    }

    iterativePreOrder() {
        let t = this.root;
        const st = new Stack(200); 
        while(t || !st.isEmpty()) {
            if(t) {
                console.log(t.data);
                st.push(t);
                t = t.left;
            } else {
                t = st.pop();
                t = t.right;
            }
        }
    }

    iterativeInOrder() {
        let t = this.root;
        const st = new Stack(200);
        while(t || !st.isEmpty()) {
            if(t) {
                st.push(t);
                t = t.left;
            } else {
                t = st.pop();
                console.log(t.data);
                t = t.right;
            }
        }
    }
};

const binaryTree = new BinaryTree([1,2,3,4,5]);
binaryTree.iterativeInOrder();