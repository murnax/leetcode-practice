/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
	function helper(amount) {
		if (amount === 0) return 1;
		if (amount < 0) return 0;

		for (let coin of coins) {
			console.log(coin);
		}
	}
	return helper(amount);
};
module.exports = change;