const removeFromArray = function(array, ...args) {
    return array.filter(element => !args.includes(element)) // tanda ! untuk mengambil nilai yang berkebalikan
};

// Do not edit below this line
module.exports = removeFromArray;
