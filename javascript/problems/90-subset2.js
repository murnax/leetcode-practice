/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums = nums.sort();
    
    let powerSet = [];
    function backtrack(subset = [], start = 0) {
        powerSet.push(subset.slice(0));

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue;

            subset.push(nums[i]);
            backtrack(subset, i + 1);

            subset.pop();
        }
    }
    backtrack();
    return powerSet;
};
module.exports = subsetsWithDup;
