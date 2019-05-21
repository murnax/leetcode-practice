/**
 * @param {string} s
 * @return {number}
 */
let longestPalindrome = function (s) {
    let counter = s.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});

    let result = 0;
    for (let j of Object.keys(counter)) {
        result += Math.floor(counter[j] / 2) * 2;
        counter[j] = counter[j] % 2;
    }
    for (let k of Object.keys(counter)) {
        if (counter[k] === 1) {
            ++result;
            break;
        }
    }
    return result;
};
module.exports = longestPalindrome;