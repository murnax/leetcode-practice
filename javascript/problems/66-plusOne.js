/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1].concat(digits);
};
module.exports = plusOne;

// var plusOne = function (digits) {
    // let carry = 0;
    // for (let i = digits.length - 1; i >= 0; i--) {
    //     if (i === (digits.length - 1)) {
    //         if (digits[i] + 1 === 10) {
    //             digits[i] = 0;
    //             carry = 1;
    //         } else {
    //             digits[i] += 1;
    //         }
    //     } else if (carry) {
    //         if (digits[i] + carry === 10) {
    //             digits[i] = 0;
    //             carry = 1;
    //         } else {
    //             digits[i] += 1;
    //             return digits;
    //         }

    //     }
    // }
    // if (carry) {
    //     return [].concat(1, ...digits);
    // }
    // return digits;
// }

// Reverse
// var plusOne = function (digits) {    
    // digits = digits.reverse();
    // let hasCarry = false;
    // for (let [i, value] of digits.entries()) {
    //     if (i === 0) {
    //         digits[i] += 1;
    //     }
    //     if (hasCarry) {
    //         digits[i] += 1;
    //         hasCarry = false;
    //     }
    //     if (digits[i] === 10) {
    //         hasCarry = true;
    //         digits[i] = 0;
    //     }
    // }
    // return hasCarry ? [].concat(1, ...digits.reverse()) : digits.reverse();
// 