/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let round = (matrix.length - 1) + matrix[0].length;
    for (let i = 0; i < round; i++) {
        console.log(i);
    }
};

console.log(isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
]));