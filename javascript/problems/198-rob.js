/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums, i = nums.length - 1) {
	// recursive
	// function helper(nums, i) {
	//     if (i < 0) return 0;
	//     else return Math.max(nums[i] + helper(nums, i - 2), helper(nums, i - 1));
	// }
	// return helper(nums, nums.length - 1);

	// DP top-down
	//     let memo = [];
	//     function helper(nums, i) {
	//         if (i < 0) return 0;
	//         if (memo[i] >= 0) return memo[i];

	//         let result = Math.max(nums[i] + helper(nums, i - 2), helper(nums, i - 1));
	//         memo[i] = result;
	//         return result;
	//     }
	//     return helper(nums, nums.length - 1);

	// DP bottom-up
	// let memo = [0, nums[0]];
	// for (let i = 1; i < nums.length; i++) {
	//     memo[i + 1] = Math.max(nums[i] + memo[i - 1], memo[i]);
	// }
	// return memo[nums.length];


	// recursive
	// if (i < 0) return 0;
	// return Math.max(nums[i] + rob(nums, i - 2), rob(nums, i - 1));

	// top-down
	let memo = {};
	function helper(i) {
		if (memo[i]) return memo[i];
		if (i < 0) return 0;
		return memo[i] = Math.max(nums[i] + helper(i - 2), helper(i - 1));
	}
	return helper(nums.length - 1);
};
module.exports = rob;