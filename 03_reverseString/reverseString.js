const reverseString = function(str) {
    // create an empty array
    const revA = []
    const length = str.length - 1

    // looping to reserve the words
    for (let i = length; i >= 0; i -= 1) {
        revA.push(str[i]) // insert index by index
    }

    return revA.join("")
};

// Do not edit below this line
module.exports = reverseString;
