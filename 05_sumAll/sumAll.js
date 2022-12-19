const sumAll = function(a, b) {
    if (isNaN(a) || typeof b !== "number") { // more accurate using the later format by typeof
        return 'ERROR'
    }
    if (a < 0 || b < 0) {
        return 'ERROR'
    }
    let min = Math.min(a, b)
    let max = Math.max(a,b)
    let sum = 0
    for (let i = min; i <= max; i += 1) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
