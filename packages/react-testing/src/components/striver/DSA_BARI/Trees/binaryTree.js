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

    inorder(node = this.root) {
        if(!node) return;
        this.inorder(node.left);

        console.log(node.data);

        this.inorder(node.right);
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

    iterativeInorder(node = this.root) {
        const st = new Stack(100);
        st.push(node);

        while(!st.isEmpty) {
            let curr = st.pop();
            // push curr.right to stack
            curr?.right && st.push(curr.right);
            // log curr
            console.log(curr.data);
            // push curr.left to stack
            curr?.left && st.push(curr.left);
        }
    }

    maxHeight (node = this.root) {

        function max(a, b) {
            return a > b ? a: b;
        }

        function computeMax(node) {
            let leftMax = node?.left ? computeMax(node?.left): 0;
            let rightMax = node?.right ? computeMax(node?.right): 0;

            return 1 + max(leftMax, rightMax);
        }
        return computeMax(node);
    }
}

// Create a tree;

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);

root.left = node2;
root.right = node3;

node3.left = node4;
node3.right = node6;

node4.left = node5;

const bst = new BinaryTree(root);

const ans = bst.maxHeight();

console.log(ans);
