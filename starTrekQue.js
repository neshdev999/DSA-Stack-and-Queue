/*

Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue. Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is. Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not Implement a display() function outside of the Queue class that lets you display what's in the queue. Remove Spock from the queue and display the resulting queue.


*/


const starTrekQ = new Queue;

starTrekQ.enqueue('Kirk')
starTrekQ.enqueue('Spock')
starTrekQ.enqueue('Uhura')
starTrekQ.enqueue('Sulu')
starTrekQ.enqueue('Checkov')

function peek(queue) {
    return queue.first.value;
}

function isEmpty(queue) {
    if (queue.first === null) {
        return true;
    }
    return false;
}

function display(queue) {
    let currentNode = queue.first;
    while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
    }
}

starTrekQ.dequeue()
starTrekQ.dequeue()
display(starTrekQ)
    // Uhura
    // Sulu
    // Checkov