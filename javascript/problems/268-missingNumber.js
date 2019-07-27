/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    return nums.reduce((a, b) => a - b, (nums.length + 1) * nums.length / 2);
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));