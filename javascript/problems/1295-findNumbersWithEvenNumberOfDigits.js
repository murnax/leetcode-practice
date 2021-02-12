/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = nums => nums.find(num => num.toString().length % 2 == 0).length;
module.exports = findNumbers;