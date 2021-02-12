/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    return nums.reduce((a, b) => a - b, (nums.length + 1) * nums.length / 2);
};
