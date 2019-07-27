/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = i + 2; k < nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));