// Queue in which we can add/remove elements from front/back.

// pop_front(), pop_back, push_front, push_back

// top_front() , top_back()

// For each element, make sure window is correct in dequeue.

// if window is correct and dq.back() > currElement, push currElement in dequeue and assign ans to dequeue.front().

// if window is correct and dq.back() < currElement, pop dq from back till dq.back() > currElement, add currElement in dq, assign ans to dq.front().

// repeat for all elements

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DoubleEndedQueue {
   constructor(maxSize) {
        this.maxSize = maxSize;
        this.front = null;
        this.back = null;
        this.currSize = 0;
   }

   push_back(item) {

   }
}