/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// @TODO: finish the implementation
module.exports = function (matrix) {
    let result = Array.from(matrix);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1) {
                const distance = distanceToNearestZero(i, j);
                result[i][j] = distance;
            }
        }
    }
    return result;

    function distanceToNearestZero(i, j, distance = 0, visited = {}) {
        if ((matrix[i - 1] && matrix[i - 1][j] === 0) ||
            (matrix[i + 1] && matrix[i + 1][j] === 0) ||
            (matrix[i][j - 1] === 0) ||
            (matrix[i][j + 1] === 0)) return 1;

        return 1 + Math.min(

        );
    }

    // function distanceToNearestZero(i, j, visited = {}, distance = 0) {
    //     if (visited[i] && visited[i][j]) return Number.MAX_VALUE;

    //     if (i < 0 || i === matrix.length || j < 0 || j === matrix.length) return Number.MAX_VALUE;
    //     if (matrix[i][j] === 0) return 0;

    //     if (!visited[i]) visited[i] = {};
    //     visited[i][j] = 1;

    //     return 1 + Math.min(
    //         distanceToNearestZero(i - 1, j, Object.assign({}, visited)),
    //         distanceToNearestZero(i + 1, j, Object.assign({}, visited)),
    //         distanceToNearestZero(i, j - 1, Object.assign({}, visited)),
    //         distanceToNearestZero(i, j + 1, Object.assign({}, visited))
    //     );
    // }
};
