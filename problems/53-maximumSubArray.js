/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    // Naive solution 
    // Time complexity: O(n^2)

    // let max = Number.NEGATIVE_INFINITY;
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {
    //         sum += nums[j];
    //         max = Math.max(max, sum);
    //     }
    //     sum = 0;
    // }
    // return max;

    // https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts
    // Dynamic programming
    const n = nums.length;
    const dp = Array(n);
    dp[0] = nums[0];
    let max = dp[0];

    for (let i = 1; i < n; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        max = Math.max(max, dp[i]);
    }
    return max;
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));