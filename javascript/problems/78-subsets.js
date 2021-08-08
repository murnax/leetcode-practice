/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let powerSet = [];
    
    function backtrack(subset = [], i = 0) {
        powerSet.push(subset.slice(0));
        
        for (; i < nums.length; i++) {
            subset.push(nums[i]);
            backtrack(subset, i + 1);
            
            subset.pop();
        }
    }
    
    backtrack();
    return powerSet;
};
module.exports = subsets;