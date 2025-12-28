const { Queue } = require("./queue");

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder(node = this.root) {
        if(!node) return;
        // Root Left Right

        // print root
        console.log(node.data);

        // Left
        this.preOrder(node.left);

        // Right
        this.preOrder(node.right);
    }

    breadthFirstTraversal(node = this.root) {
        const queue = new Queue(10);
        queue.enqueue(node);
        let ans = [];
        const compute = () => {
            if(queue.isEmpty()) return;
            const temp = queue.dequeue();
            const currNode = temp?.data;
            ans.push(currNode);

            const left = temp?.left;
            const right = temp?.right;

            left && queue.enqueue(left);
            right && queue.enqueue(right);
            !queue.isEmpty() && compute();
        }
        compute();
        console.log(ans);
    }
}

// Create a tree;

const root = new Node(1);
const left1 = new Node(100);
const right1 = new Node(3);
const left2 = new Node(4);
const right2 = new Node(5);

root.left = left1;
root.right = right1;

left1.left = left2;
left1.right = right2;

const bst = new BinaryTree(root);

bst.breadthFirstTraversal();
