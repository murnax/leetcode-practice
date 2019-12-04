/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let minute = 0;
	let totalFreshOranges = 0;
	let queue = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] === 1) totalFreshOranges++;
			if (grid[i][j] === 2) queue.push([i, j]);
		}
	}

	while (totalFreshOranges > 0 && queue.length) {
		let nextQueue = [];
		while (queue.length) {
			let [i, j] = queue.shift();
			if (grid[i][j] === 2) {
				rot(grid, i - 1, j) && nextQueue.push([i - 1, j]);
				rot(grid, i + 1, j) && nextQueue.push([i + 1, j]);
				rot(grid, i, j - 1) && nextQueue.push([i, j - 1]);
				rot(grid, i, j + 1) && nextQueue.push([i, j + 1]);
				grid[i][j] = -1;
			}
		}
		queue = nextQueue;
		minute++;
	}

	return totalFreshOranges > 0 ? -1 : minute;

	function rot(grid, i, j) {
		if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j] === 1) {
			grid[i][j] = 2;
			totalFreshOranges--;
			return true;
		}
		return false;
	}
};
module.exports = orangesRotting;