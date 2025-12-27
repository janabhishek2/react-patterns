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
}

// Create a tree;

const root = new Node(1);
const left1 = new Node(2);
const right1 = new Node(3);
const left2 = new Node(4);
const right2 = new Node(5);

root.left = left1;
root.right = right1;

left1.left = left2;
left1.right = right2;

const bst = new BinaryTree(root);

bst.preOrder();
