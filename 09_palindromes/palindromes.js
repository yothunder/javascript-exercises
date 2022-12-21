const palindromes = function (str) {
    let l = 0
    let h = str.length
    str = str.toLowerCase()
    while(l <= h) {
        let getS = str[l]
        let getE = str[h]

        if (!(getS >= "a" && getS <= "z")) {
            l += 1
        } else if (!(getE >= "a" && getE <= "z")) {
            h -= 1
        } else if (getS == getE) {
            l += 1
            h -= 1
        } else {
            return false
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
