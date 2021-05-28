const { Stack, _Node } = require('./stackimplementation');
const helperFuncs = require('./usefulMethods')


function checkQuotes(trialStr) {

    let doubleQuote = "\"";
    let singleQuote = "\'";
    let doubleStack = new Stack();
    let singleStack = new Stack();

    for (let i = 0; i <= trialStr.length; i++) {
        if (trialStr[i] === doubleQuote) {
            doubleStack.push(trialStr[i]);
        }
        if (trialStr[i] === singleQuote) {
            singleStack.push(trialStr[i]);
        }
    }

    let outputDoubleQuotes = "";
    let outputSingleQuotes = "";

    if (helperFuncs.size(doubleStack) % 2 === 0) {
        outputDoubleQuotes = "Matching pair of double quotes found";
    } else {
        outputDoubleQuotes = "Missing Matching pair of double quotes";
    }


    if (helperFuncs.size(singleStack) % 2 === 0) {
        outputSingleQuotes = "Matching pair of single quotes found";
    } else {
        outputSingleQuotes = "Missing Matching pair of single quotes";
    }

    console.log(outputSingleQuotes);
    console.log(outputDoubleQuotes);
}

checkQuotes("Hi I would like to 'dance'");
checkQuotes('"Banana" is a fruit');