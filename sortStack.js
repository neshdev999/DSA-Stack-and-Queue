/*

Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).


*/




function sortStack(stack) {
    const tempStack = new Stack;
    let temp; // We need one variable to grasp a node temporarily so that we can alter the chain of nodes moving from one stack to the other

    stackHelpers.display(stack)

    temp = stack.pop().value
    tempStack.push(temp)

    while (!stackHelpers.isEmpty(stack)) {
        temp = stack.pop().value
        while (tempStack.peek() && tempStack.peek().value < temp) {
            stack.push(tempStack.pop().value)
        }
        tempStack.push(temp)
    }

    stackHelpers.display(tempStack)
    return tempStack;
}

function testSortStack() {
    const stack = new Stack;

    stack.push(3)
    stack.push(1)
    stack.push(2)
    stack.push(7)
    stack.push(9)
    stack.push(5)

    let sortedStack = sortStack(stack);

}
testSortStack();