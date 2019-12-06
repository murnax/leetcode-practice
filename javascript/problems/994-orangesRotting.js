/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
	let minute = 0;
	let totalFreshOranges = 0;

	// this stack will contain [x,y] of the rotten oranges
	// and will be used in while loop as a spreading point.
	let rottenOranges = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {

			// count fresh oranges
			if (grid[i][j] === 1) totalFreshOranges++;

			// find rotten oranges and push it into stack
			if (grid[i][j] === 2) rottenOranges.push([i, j]);
		}
	}

	// use for accessing adjacency grids.
	const m = [[0, -1], [0, 1], [-1, 0], [1, 0],];

	// keep spreading if there still fresh oranges left 
	// and there still rotten orages left to be spread
	while (totalFreshOranges && rottenOranges.length) {

		// fresh oranges that is adjacent to the rotten oranges
		//  will be pushed into this and will become rotten oranges!
		let rottingOranges = [];

		while (rottenOranges.length) {
			let [x, y] = rottenOranges.pop();
			for (let i = 0; i < 4; i++) {
				let [x2, y2] = [x + m[i][0], y + m[i][1]];
				
				// if adjacency grid is fresh orange:
				// make it rotten, decrease total fresh oranges
				// and push it into stack that will be used for
				// next round of speading.
				if (grid[x2] && grid[x2][y2] === 1) {
					grid[x2][y2] = 2;
					totalFreshOranges--;
					rottingOranges.push([x2, y2]);
				}
			}
		}

		// rotting oranges now became rotten oranges, 
		// it will continue to spread until nothing left!
		rottenOranges = rottingOranges;

		minute++;
	}

	// if there is any fresh oranges left, return -1, otherwise, return minute;
	return totalFreshOranges ? -1 : minute;
};
module.exports = orangesRotting;