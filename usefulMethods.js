/*
2. Useful methods for a stack

    Using the Stack class above, implement the following helper functions outside of the class:
        peek(): allows you to look at the top of the stack without removing it
        isEmpty(): allows you to check if the stack is empty or not
        display(): to display the stack - what is the 1st item in your stack?
    Remove McCoy from your stack and display the stack


*/

const stackHelpers = {
    peek: function(stack) {
        return stack.top;
    },
    isEmpty: function(stack) {
        return !(!!stack.top);
    },
    display: function(stack) {
        let currentNode = stack.top;
        while (currentNode) {
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }
    },
    size: function(stack) {
        let counter = 0;
        let currentNode = stack.top;
        while (currentNode) {
            counter++;
            currentNode = currentNode.next;
        }
        return counter;
    }
}

// starTrek.pop()
// starTrek.pop()
// stackHelpers.display(starTrek)

module.exports = stackHelpers;