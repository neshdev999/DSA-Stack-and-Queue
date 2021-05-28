/*


At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.

*/


function ophidianBank() {
    const bank = new Queue;

    bank.ophidianDequeue = function() {
        let paperWorkDone = (Math.floor(Math.random() * 100) + 1) > 25 ? true : false;

        if (paperWorkDone) {
            bank.dequeue();
        } else {
            let customer = bank.dequeue()
            bank.enqueue(customer)
        }
    }

    function display(queue) {
        let readout = '';
        let currentNode = queue.first;
        while (currentNode !== null) {
            readout += `${currentNode.value} `;
            currentNode = currentNode.next;
        }
        console.log(readout);
    }

    bank.enqueue('1')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('2')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('3')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('4')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('5')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('6')
    bank.ophidianDequeue()
    display(bank)
    bank.enqueue('7')
    bank.ophidianDequeue()
    display(bank)
}
ophidianBank()
    // 1 
    // 2 1 
    // 1 3 
    // 3 4 
    // 4 5 3 
    // 5 3 6 4 
    // 3 6 4 7