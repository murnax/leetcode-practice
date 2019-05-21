/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    const b = [];
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (!b[j]) b.push([]);
            if (!b[j][i]) b[j].push([]);
            b[j][i] = A[i][j];
        }
    }
    return b;
};

console.log(transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));