/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
	let memo = {};

	function helper(amount) {
		if (memo[amount]) return memo[amount];
		if (amount === 0) return 0;

		let minCoins = Infinity;
		for (let coin of coins) {
			if (coin <= amount) {
				let currMinCoins = helper(amount - coin);
				if (currMinCoins < minCoins) minCoins = currMinCoins;
			}
		}
		return memo[amount] = minCoins + 1;
	}
	let result = helper(amount);
	return result === Infinity ? -1 : result;

	// let memo = {};
	// function helper(amount) {
	// 	if (memo[amount]) return memo[amount];
	// 	if (amount === 0) return 0;
	// 	// if (amount < 0) return Infinity;

	// 	return memo[amount] = Math.min(...coins.filter(n => n <= amount).map(n => helper(amount - n))) + 1;
	// }
	// let result = helper(amount);
	// return result === Infinity ? -1 : result;
};
module.exports = coinChange;