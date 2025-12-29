const { Queue } = require("./queue");
const { Stack } = require("../../stack-queue/stack-arr");
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function max(a, b) {
    return a > b ? a : b;
}

class BinaryTree {
    constructor(root) {
        this.root = root;
    }

    preOrder(node = this.root) {
        if (!node) return;
        // Root Left Right

        // print root
        console.log(node.data);

        // Left
        this.preOrder(node.left);

        // Right
        this.preOrder(node.right);
    }

    inorder(node = this.root) {
        if (!node) return;
        this.inorder(node.left);

        console.log(node.data);

        this.inorder(node.right);
    }

    breadthFirstTraversal(node = this.root) {
        if (!node) return [];
        const queue = new Queue(10);
        queue.enqueue(node);
        let ans = [];
        const compute = () => {
            if (queue.isEmpty()) return;
            const temp = queue.dequeue();
            const currNode = temp?.data;
            ans.push(currNode);

            const left = temp?.left;
            const right = temp?.right;

            left && queue.enqueue(left);
            right && queue.enqueue(right);
            !queue.isEmpty() && compute();
        };
        compute();
        return ans;
    }

    iterativePreOrder(node = this.root) {
        const st = new Stack(100);
        st.push(node);

        while (!st.isEmpty) {
            const temp = st.pop();
            console.log(temp.data);
            temp?.right && st.push(temp.right);
            temp?.left && st.push(temp.left);
        }
    }

    iterativeInorder(node = this.root) {
        const st = new Stack(100);
        st.push(node);

        while (!st.isEmpty) {
            let curr = st.pop();
            // push curr.right to stack
            curr?.right && st.push(curr.right);
            // log curr
            console.log(curr.data);
            // push curr.left to stack
            curr?.left && st.push(curr.left);
        }
    }

    maxHeight(node = this.root) {
        function computeMax(node) {
            let leftMax = node?.left ? computeMax(node?.left) : 0;
            let rightMax = node?.right ? computeMax(node?.right) : 0;

            return 1 + max(leftMax, rightMax);
        }
        return computeMax(node);
    }

    isBalancedBinaryTree(node = this.root) {
        if (!node) return 0;

        const lh = this.isBalancedBinaryTree(node.left);
        const rh = this.isBalancedBinaryTree(node.right);

        // if left subtree is disbalanced, return -1 for current node;
        if (lh === -1 || rh === -1) return -1;

        // check for balance of current node.
        if (Math.abs(lh - rh) > 1) return -1;

        // return height if left and right are balanced.
        return 1 + Math.max(lh, rh);
    }

    diameterOfBinaryTree(node = this.root) {
        let maxDiameter = -1;
        let rootElWithMaxDia = null;
        const computeDiameter = (node) => {
            if (!node) return 0;

            const lh = computeDiameter(node?.left);
            const rh = computeDiameter(node?.right);

            const currDia = lh + rh;
            if (currDia > maxDiameter) {
                maxDiameter = currDia;
                rootElWithMaxDia = node.data;
            }

            return 1 + Math.max(lh, rh);
        };

        computeDiameter(node);
        return maxDiameter;
    }

    maximumPathSum(node = this.root) {
        let maxSum = 0;
        const computeMaxSum = (node) => {
            if(!node) return 0;

            const leftSum = computeMaxSum(node.left);
            const rightSum = computeMaxSum(node.right);

            const maxSumTillNode = node.data + (leftSum > 0 ? leftSum : 0) + ( rightSum > 0 ? rightSum : 0);
            if(maxSumTillNode > maxSum) maxSum = maxSumTillNode;

            // return currSum + max(left, right) sums

            return node.data + Math.max(leftSum, rightSum)
        };

        computeMaxSum(node);
        return maxSum;
    }

    areTreesIdentical(root1, root2) {
        if(root1 === null && root2 === null) return true;
        if(root1.data != root2.data) return false;

        const areLeftSubTreesIdentical = this.areTreesIdentical(root1.left, root2.left);
        const areRightSubTreesIdentical = this.areTreesIdentical(root1.right, root2.right);

        return areLeftSubTreesIdentical && areRightSubTreesIdentical;
    }

    breadthFirstTraversal(node = this.root) {
        const queue = new Queue(100);

        queue.enqueue(node);
        while(!queue.isEmpty()) {
            const item = queue.dequeue();
            
            // print item
            console.log(item.data);
            // push left and right child in queue

            item?.left && queue.enqueue(item.left);
            item?.right && queue.enqueue(item.right);
        }

        return;
    }

    zigzagTraversal(node = this.root) {

        const queue = new Queue(100);
        // queue.enqueue({
        //     flag: 0,
        //     node
        // });
        let ans = [];

        queue.enqueue(node);
        let leftToRight = false;
        const doTraversal = () => {
            while(!queue.isEmpty()) {
            //    const item = queue.dequeue();
                let currQueueItems = [];
                
                while(!queue.isEmpty()) {
                    currQueueItems.push(queue.dequeue());
                }
                
                if(leftToRight) {
                    ans.push(...currQueueItems.map((item => item.data)));
                } else {
                    let reverse = [...currQueueItems].reverse();
                    ans.push(...reverse.map((item) => item.data))
                }

                currQueueItems.forEach((node) => {
                   node?.left && queue.enqueue(node.left);
                   node?.right && queue.enqueue(node.right);
                })
                leftToRight=!leftToRight;
            //    ans.push(item);
            //    const { flag, node } = item;
            //    if(flag === 0) {
            //         node?.left && queue.enqueue({
            //             flag: 1,
            //             node:  node?.left
            //         });
            //        node?.right && queue.enqueue({
            //             flag: 1,
            //             node: node?.right
            //         })
            //    } else {
            //         node?.left && queue.enqueue({
            //             flag: 0,
            //             node:  node?.left
            //         });
            //         node?.right && queue.enqueue({
            //             flag: 0,
            //             node: node?.right
            //         })
            //    }

            }
        };
        doTraversal();
        return ans;
    }
}

// Create a tree;

const root = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);
const node8 = new Node(8);
const node9 = new Node(9);
const node10 = new Node(10);

root.left = node2;
root.right = node3;

node3.left = node4;
node3.right = node6;

node4.left = node5;
node5.left = node7;

node6.right = node8;
node8.right = node9;

node6.left = node10;

const bst = new BinaryTree(root);

const ans = bst.zigzagTraversal();

console.log(ans);
