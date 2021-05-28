function parenthesesCheck(s) {
    const stack = new Stack;

    let openingIndex = [];
    let index = 0;
    for (let char of s) {
        if (char.match(/[(]/g)) {
            stack.push(char);
            openingIndex.push(index);
        }

        if (char.match(/[)]/g)) {
            if (!stack.peek() || !stack.peek().value === '(') {
                return 'Missing ( at index ' + index;
            } else {
                stack.pop();
                openingIndex.pop();
            }
        }

        index++;
    }

    if (!stack.isEmpty()) { return 'Missing ) at index ' + openingIndex[openingIndex.length - 1] }

    return 'All parentheses are closed';
}
parenthesesCheck('(1)+ 1')