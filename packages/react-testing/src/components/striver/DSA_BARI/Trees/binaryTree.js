const { Queue } = require("./queue");
const { Stack } = require('../../stack-queue/stack-arr');
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
        if(!node) return [];
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
        return ans;
    }

    iterativePreOrder(node = this.root) {
        const st = new Stack(100);
        st.push(node);
    
        while(!st.isEmpty) {
            const temp = st.pop();
            console.log(temp.data);
            temp?.right && st.push(temp.right);
            temp?.left && st.push(temp.left);
        }
    }
}

// Create a tree;

const root = new Node(1);
const left1 = new Node(2);
const right1 = new Node(3);
const left2 = new Node(4);
const right2 = new Node(5);
const left3 = new Node(6);


root.left = left1;
root.right = right1;

left1.left = left2;
left1.right = right2;

left2.left = left3;

const bst = new BinaryTree(root);

bst.iterativePreOrder();

