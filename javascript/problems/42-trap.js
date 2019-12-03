/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
	let totalWater = 0;
	let n = height.length;

	for (let i = 1; i < n; i++) {

		// find the heightest building on the left side of height[i]
		let maxLeft = Math.max(...height.slice(0, i));

		// find the heightest building on the right side of height[i]
		let maxRight = Math.max(...height.slice(i + 1, n));

		// Only if the height of height[i] less than minimum of max left and max right, we increase total water
		if (Math.min(maxLeft, maxRight) > height[i]) {
			totalWater += Math.min(maxLeft, maxRight) - height[i];
		}
	}
	return totalWater;
};
module.exports = trap;