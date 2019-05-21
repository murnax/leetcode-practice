/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;
    const origin = [].concat(...nums);
    for (let i = 0; i < nums.length; i++) {
        nums[i] = i < k ? origin[i + k + 1] : origin[i - k];
    }
};
module.exports = rotate;

// var rotate = function (nums, k) {
//     k %= nums.length;
//     reverse(0, nums.length - 1);
//     reverse(0, k - 1);
//     reverse(k, nums.length - 1);
//     function reverse(start, end) {
//         while (start < end) {
//             [nums[start], nums[end]] = [nums[end], nums[start]];
//             start++;
//             end--;
//         }
//     }
// };

// var rotate = function (nums, k) {
//     let tmp = [];
//     for (let i = 0; i < nums.length; i++) {
//         tmp[(i + k) % nums.length] = nums[i];
//     }
//     for (let j = 0; j < nums.length; j++) {
//         nums[j] = tmp[j];
//     }
// };
