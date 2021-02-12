/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // Naive approach
    // Time complexity: O(n ** n log n)
    // let i = 0;
    // while (i < m + n) {
    //     if (i < m) {
    //         nums2.push(nums1[i]);
    //         nums1[i] = nums2.sort((a, b) => a - b).shift();
    //     } else {
    //         nums1[i] = nums2.shift();
    //     }
    //     i++;
    // }

    // Two pointer approach
    // https://leetcode.com/problems/merge-sorted-array/discuss/29515/4ms-C%2B%2B-solution-with-single-loop
    let i = m - 1, j = n - 1, target = m + n - 1;
    while (j >= 0) {
        nums1[target--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
};

let nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);

/*
      |        |
1, 2, 3, 0, 0, 0
2, 5, 6
      |
*/