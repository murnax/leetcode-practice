/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let maxArea = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            maxArea = Math.max(maxArea, getIslandArea(grid, i, j));
        }
    }
    return maxArea;
};

function getIslandArea(grid, i, j) {
    if (i >= 0 && i < grid.length &&
        j >= 0 && j < grid[i].length &&
        grid[i][j] === 1) {
            grid[i][j] = -1;
            return 1 + getIslandArea(grid, i - 1, j) + getIslandArea(grid, i + 1, j) + getIslandArea(grid, i, j - 1) + getIslandArea(grid, i, j + 1);
        }
    return 0;
}

module.exports = maxAreaOfIsland;
