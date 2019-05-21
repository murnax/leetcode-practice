/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Naive approach
    // for (let i = 0; i < nums.length; i++) {
    //     let sumLeft = nums.slice(0, i).reduce((a, b) => a + b, 0);
    //     let sumRight = nums.slice(i + 1, nums.length).reduce((a, b) => a + b, 0);
    //     if (sumLeft === sumRight) return i;
    // }
    // return -1;

    // https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/discuss/109255/Short-Python-O(n)-time-O(1)-space-with-Explanation
    // Time : O(n)
    // Space : O(1)
    let left = 0;
    let right = nums.reduce((a, b) => a + b, 0);
    for (let [index, value] of nums.entries()) {
        console.log(index, value);
    }
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));