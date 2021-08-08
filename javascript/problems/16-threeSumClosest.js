/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    // two pointer 
    // nums = nums.sort((a, b) => a - b);

    // naive approach
    // time complexity: n^3
    let sum = 0;
    let closestValue = Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k];
                if (Math.abs(target - sum) === 0) return target;
                if (Math.abs(target - sum) < Math.abs(target - closestValue))
                    closestValue = sum;
            }
        }
    }
    return closestValue;
};
module.exports = threeSumClosest;