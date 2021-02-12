/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let hashAnswer = {};
    let result = 0;
    while (result !== 1) {
        result = n = n.toString().split('').map(n => Number(n) ** 2).reduce((a, b) => a + b, 0);
        if (result in hashAnswer) {
            return false;
        } else {
            hashAnswer[result] = 1;
        }
    }
    return true;
};