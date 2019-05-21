/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
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

    // Reverse
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

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1].concat(digits);
};

console.log(plusOne([9]))
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([1, 9, 9]));