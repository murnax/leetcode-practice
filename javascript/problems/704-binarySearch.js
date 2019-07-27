/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let leftPointer = 0, rightPointer = nums.length - 1;
    while (leftPointer <= rightPointer) {
        let middle = Math.floor((rightPointer - leftPointer) / 2) + leftPointer;
        if (nums[middle] === target) return middle;
        if (nums[middle] < target) leftPointer = middle + 1;
        if (nums[middle] > target) rightPointer = middle - 1;
    }
    return -1;
};
module.exports = search;


