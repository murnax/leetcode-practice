var getSum = function(a, b) {
    while (b !== 0) {
        var carry = a & b
        a = a ^ b
        b = carry << 1
    }
    return a
};

console.log(getSum(5, 10))