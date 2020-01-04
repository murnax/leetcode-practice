/**
 * @param {number} n
 * @return {boolean}
 */
module.exports = n => n > 0 && !(n & (n - 1)) && !((n - 1) % 3);