/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // This map is used to store the diff value between target and nums[x],
    // so next loop can check whether it's value is being looked for or not
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let diff = `${target - nums[i]}`;
        if (diff in map) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
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