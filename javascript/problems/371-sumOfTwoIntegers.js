var getSum = function (a, b) {
    return !b ? a : getSum(a ^ b, (a & b) << 1);
};
module.exports = getSum;
