/*

Create a queue class using Doubly linked List



*/


class Node {
    constructor(value, prev) {
        this.value = value;
        this.prev = prev;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const node = new Node(value, this.last);
        if (this.last) {
            this.last.next = node;
        }
        if (this.first === null) {
            this.first = node;
        }
        this.last = node;
    }

    dequeue() {
        if (this.first === null) { return 'The queue is empty' }
        const result = this.first.value;
        this.first = this.first.next || null;
        this.first.prev = null;

        return result;
    }
}