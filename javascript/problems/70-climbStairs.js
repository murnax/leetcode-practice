/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, i = 0) {
	// Brute force
	// Space complexity = O(2^n)
	// Time complexity = O(n)
	// if (i > n) return 0;
	// if (i === n) return 1;
	// return climbStairs(n, i + 1) + climbStairs(n, i + 2);


	// Memoization
	// Space complexity = O(n)
	// Time complexity = O(n)
	// let memo = [];
	// function helper(i, n) {
	//     if (i > n) return 0;
	//     if (i === n) return 1;
	//     if (memo[i]) return memo[i];
	//     memo[i] = helper(i + 1, n) + helper(i + 2, n);
	//     return memo[i];
	// }
	// return helper(0, n);

	// Dynamic Programming
	// if (n <= 2) return n;
	// let f = new Array(n);
	// f[1] = 1;
	// f[2] = 2;
	// for (let i = 3; i <= n; i++) {
	//     f[i] = f[i - 1] + f[i - 2];
	// }
	// console.log(f);
	// return f[n];


	// Recursive
	// if (n < 0) return 0;
	// if (n === 0) return 1;
	// return climbStairs(n - 1) + climbStairs(n - 2);

	// Top-down
	// let memo = [];
	// function helper(n) {
	// 	if (memo[n] !== undefined) return memo[n];

	// 	if (n < 0) return 0;
	// 	if (n === 0) return 1;

	// 	return memo[n] = helper(n - 1) + helper(n - 2);
	// }
	// return helper(n);

	// recursive
	if (n === 0) return 1;
	if (n < 0) return 0;
	return climbStairs(n - 1) + climbStairs(n - 2);
};
module.exports = climbStairs;