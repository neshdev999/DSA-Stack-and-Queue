/*
1. Create a stack class

Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

    Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

*/


class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        this.top = new _Node(value, this.top);
    }

    pop() {
        const top = this.top;
        this.top = this.top.next; // Remove top from the stack

        return top;
    }

    peek() {
        return this.top;
    }

    isEmpty() {
        return !(!!this.top);
    }
}

// function testStack() {
//     const myStack = new Stack;
//     console.log('Is empty: ' + myStack.isEmpty())
//     myStack.push('foo')
//     console.log('Is empty: ' + myStack.isEmpty())
//     console.log(myStack.peek())
//     myStack.push('moo')
//     console.log(myStack.peek())
//     myStack.pop()
//     console.log('Is empty: ' + myStack.isEmpty())
//     myStack.push('')
// }
// testStack()


// const starTrek = new Stack;

// starTrek.push('Kirk')
// starTrek.push('Spock')
// starTrek.push('McCoy')
// starTrek.push('Scotty')


module.exports = {
    Stack,
    _Node
}