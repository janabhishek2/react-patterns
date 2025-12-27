class Node {
    constructor(data) {
        this.prev = null;
        this.data = data;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    insertAtHead(data) {
        const newNode = new Node(data);

        // if this is first node point front and rear at new Node
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
            return;
        }

        // else mark  front->prev to newNode and newNode next to front, move front to newNode.
        const temp = this.front;
        this.front.prev = newNode;
        newNode.next = temp;
        this.front = newNode;
    }

    insertAtEnd(data) { 
        const newNode = new Node(data);

        // in case it is first elemnt, move front and rear to it.
        if(this.isEmpty()) {
            this.front = this.rear = newNode;
            return;
        }

        // insert at end of last node, move rear to last node.
        const temp = this.rear;
        this.rear.next = newNode;
        newNode.prev = temp;

        // move rear to newNode
        this.rear = newNode;
        return;
    }

    traverseFromFront() {
        if(this.isEmpty()) return;
        
        let temp = this.front;
        while(temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    traverseFromRear() {
        if(this.isEmpty()) return;

        let temp = this.rear;
        while(temp) {
            console.log(temp.data);
            temp = temp.prev;
        }
    }

    removeFromHead() {
        if(this.isEmpty()) return -1;

        const temp = this.front;
        this.front = this.front.next;

        if(this.front) {
            this.front.prev = null;
        }
        return temp.data;
    }

    removeFromEnd() {
        if(this.isEmpty()) return -1;

        // if this is only node in LL, move front and rear to null
        if(this.front === this.rear) {
            this.front = this.rear = null;
            return;
        }

        // move rear in temp, move rear to rear->prev, and return temp->data
        const temp = this.rear;
        this.rear = this.rear.prev;

        // delete next reference of temp
        this.rear.next = null;
        return temp.data;
    }
}

const doublyLL = new DoublyLinkedList();

doublyLL.insertAtEnd(3);
doublyLL.insertAtEnd(4);
doublyLL.insertAtEnd(5);
doublyLL.insertAtEnd(6);

// doublyLL.insertAtHead(11);

doublyLL.removeFromEnd();

doublyLL.traverseFromRear();