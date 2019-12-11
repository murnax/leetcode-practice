/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	// Recursive, failed TLE
	// coins = coins.sort((a, b) => b - a);
	// let memo = {};
	// function helper(amount, currCoin) {
	// 	if (amount === 0) return 1;

	// 	const result = coins.filter(n => n <= amount && n <= currCoin)
	// 		.map(n => helper(amount - n, n))
	// 		.reduce((a, b) => a + b, 0);
	// 	return result;
	// }
	// return helper(amount, coins[0]);



	coins = coins.sort((a, b) => b - a);
	let memo = {};
	function helper(amount, currCoin) {
		if (amount.toString() in memo) {
			return memo[amount.toString()];
		}
		if (amount === 0) return 1;

		let n = 0;
		for (let coin of coins) {
			if (coin <= amount && coin <= currCoin) {
				n += helper(amount - coin, coin);
			}
		}
		return n;
	}
	return helper(amount, coins[0]);
};
module.exports = change;