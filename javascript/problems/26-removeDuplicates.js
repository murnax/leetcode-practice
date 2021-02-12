/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let fast = 1, slow = 0;
    while (fast < nums.length) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    nums.splice(slow + 1);
};
module.exports = removeDuplicates;

const a = [1, 1, 2];
removeDuplicates(a);
