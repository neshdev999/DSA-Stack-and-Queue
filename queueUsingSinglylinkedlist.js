/*
Create a queue using Singly linked list
*/


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    enqueue(value) {
        const node = new Node(value);
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

        return result;
    }
}