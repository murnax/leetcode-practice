// problem id: 130
// url: https://leetcode.com/problems/surrounded-regions/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solution = function (board) {
    let visitedIslands = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === "O" && !(visitedIslands[i] && visitedIslands[i][j])) {
                g(i, j);
            }
        }
    }

    function g(i, j) {
        let surrounded = true;
        let subIslands = [];

        function h(i, j) {
            if (board[i][j] === "X" || (visitedIslands[i] && visitedIslands[i][j])) return;

            if (!visitedIslands[i]) visitedIslands[i] = {};
            visitedIslands[i][j] = 1;

            subIslands.push([i, j]);

            if (i === 0 || i >= board.length - 1 || j === 0 || j >= board[i].length - 1) surrounded = false;

            if (i > 0) h(i - 1, j);
            if (i < board.length - 1) h(i + 1, j);
            if (j > 0) h(i, j - 1);
            if (j < board[i].length - 1) h(i, j + 1);
        }
        h(i, j);
        if (surrounded) {
            for (let island of subIslands) board[island[0]][island[1]] = "X";
        }
        return subIslands;
    }
};
module.exports = {
    solution,
};
