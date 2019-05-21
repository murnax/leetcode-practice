/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    if (nums.reduce((a, b) => a + b, 0) < s) return 0;
    if (nums.reduce((a, b) => a + b, 0) === s) return nums.length;
    let sum = 0;
    let result = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum >= s) return 1;

        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= s) {
                result = Math.min(j - i + 1, result);
                break;
            }
        }
        sum = 0;
    }
    return result;
};
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
// console.log(minSubArrayLen(15, [5, 1, 3, 5, 10, 7, 4, 9, 2, 8]));
console.log(minSubArrayLen(3, [1, 1]));