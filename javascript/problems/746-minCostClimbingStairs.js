/**
 * @param {number[]} A
 * @return {number}
 */
var minCostClimbingStairs = function (A) {
	// let n = A.length;
	// let m = {};

	// function helper(i, c) {
	// 	if (m[i]) return m[i];
	// 	if (i < 2) return m[i] = A[i];
	// 	return m[i] = A[i] + Math.min(helper(i - 2), helper(i - 1));
	// }
	// helper(n - 1);
	// return Math.min(m[n - 1], m[n - 2]);

	// recursive backward
	// let n = A.length;
	// function helper(i, c) {
	// 	// base case is when index is 0 or 1
	// 	if (i <= 1) return c + A[i];
	// 	return Math.min(helper(i - 1, c + A[i]), helper(i - 2, c + A[i]));
	// }
	// return Math.min(helper(n - 1, 0), helper(n - 2, 0));

	// recursive forward
	// let n = A.length;
	// function helper(i, c = 0) {
	// 	// base case is when index reach 2nd last element 
	// 	if (i >= n - 2) return c + A[i];
	// 	return Math.min(helper(i + 1, c + A[i]), helper(i + 2, c + A[i]));
	// }
	// return Math.min(helper(0), helper(1));

	// recursive memoi
	// let n = A.length;
	// let memo = {};
	// function helper(i, c = 0) {
	// 	if (memo[i]) return memo[i];
	// 	if (i <= 1) return c + A[i];
	// 	let result = Math.min(helper(i - 1, c + A[i]), helper(i - 2, c + A[i]));
	// 	memo[i] = c;
	// 	return result;
	// }

	// let firstMin = A[0];
	// let secondMin = A[1];
	// for (let i = 2; i < A.length; i++) {
	// 	let currMin = A[i] + Math.min(firstMin, secondMin);
	// 	[firstMin, secondMin] = [secondMin, currMin];
	// }
	// return Math.min(firstMin, secondMin);


	// Recursive
	// recurrence relation
	function helper(i) {
		if (i >= A.length) return 0;

		return Math.min(A[i] + helper(i + 1), A[i] + helper(i + 2));
	}
	return Math.min(helper(0), helper(1));
};
module.exports = minCostClimbingStairs;