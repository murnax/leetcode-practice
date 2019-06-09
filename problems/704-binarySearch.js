/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftPointer = 0, rightPointer = nums.length - 1;
    while (leftPointer < rightPointer - 1) {

        let middle = Math.floor((rightPointer - leftPointer) / 2) + leftPointer;
        if (nums[middle] === target) return middle;
        if (nums[leftPointer] === target) return leftPointer;
        if (nums[rightPointer] === target) return rightPointer;
        if (nums[middle] < target) leftPointer = middle;
        if (nums[middle] > target) rightPointer = middle;
    }
    return -1;
};
module.exports = search;


