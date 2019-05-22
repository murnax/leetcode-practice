/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let n = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = `${target - nums[i]}`;
        if (diff in n) {
            return [n[diff], i];
        }
        n[nums[i]] = i;
    }
};

// Naive approach
// Time O(n**2)
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             const x = nums[i];
//             const y = nums[j];
//             if (x + y === target) {
//                 return [i, j]
//             }
//         }
//     }
// };

// Two pointers do not work, array nums is not sorted
// var twoSum = function (nums, target) {
//     let begin = 0, end = nums.length - 1;
//     while (begin < end) {
//         let sum = nums[begin] + nums[end];
//         if (sum === target) return [begin, end];
//         if (sum > target) end--;
//         if (sum < target) begin++;
//     }
// };

module.exports = twoSum;