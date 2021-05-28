/*

As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

F Jane

M Frank

M John

M Sherlock

F Madonna

M David

M Christopher

F Beyonce

Female dancer is Jane, and the male dancer is Frank Female dancer is Madonna, and the male dancer is John Female dancer is Beyonce, and the male dancer is Sherlock There are 2 male dancers waiting to dance



*/

// Make two queues, one male one female
// When a new dancer arrives, check if there is someone available in the male/female queue for them
// If there is, return both dancers as a pair
// If not, add the new dancer to the queue

const dancePairing = (function() {
    const males = new Queue;
    const females = new Queue;
    let malesLength = 0;
    let femalesLength = 0;

    return function(dancer) {
        if (dancer.gender === 'm') {
            if (females.peek()) {
                const partner = females.dequeue();
                console.log(`Female dancer is ${partner} and male dancer is ${dancer.name}`);
                femalesLength--;
            } else {
                males.enqueue(dancer.name)
                malesLength++;
            }
        } else if (dancer.gender === 'f') {
            if (males.peek()) {
                const partner = males.dequeue();
                console.log(`Female dancer is ${dancer.name}, and the male dancer is ${partner}`)
                malesLength--;
            } else {
                females.enqueue(dancer.name)
                femalesLength++;
            }
        }
    }
})()

dancePairing({
    gender: 'f',
    name: 'Jane'
})
dancePairing({
    gender: 'm',
    name: 'Frank'
})
dancePairing({
    gender: 'm',
    name: 'John'
})
dancePairing({
    gender: 'm',
    name: 'Sherlock'
})
dancePairing({
    gender: 'f',
    name: 'Madonna'
})
dancePairing({
    gender: 'm',
    name: 'David'
})
dancePairing({
    gender: 'm',
    name: 'Christopher'
})
dancePairing({
    gender: 'f',
    name: 'Beyonce'
})