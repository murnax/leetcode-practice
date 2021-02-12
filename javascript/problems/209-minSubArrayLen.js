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
