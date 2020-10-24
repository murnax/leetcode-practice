/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = {};
    const columns = {};
    const b = {};

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const ele = board[i][j];
            if (ele == '.') continue;

            const bY = Math.floor(i/3);
            const bX = Math.floor(j/3);

            if (rows[i] && rows[i][ele]) return false;
            if (columns[j] && columns[j][ele]) return false;
            if (b[`${bY},${bX}`] && b[`${bY},${bX}`][ele]) return false;
            
            rows[i] = { ...rows[i], [ele]: true };
            columns[j] = { ...columns[j], [ele]: true };
            b[`${bY},${bX}`] = { ...b[`${bY},${bX}`], [ele]: true };
        }
    }
    return true;
};

module.exports = isValidSudoku;