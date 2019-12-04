/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix, result = []) {
    if (!matrix.length) return result;
    for (let i = 0; i < matrix.length; i++) {
        let current = matrix[i];
        if (i === 0) {
            result = result.concat(current);
        } else {
            let last = current.pop();
            if (!last) return result;
            result.push(last);
            current.reverse();
        }
    }
    matrix.shift();
    return spiralOrder(matrix.reverse(), result);
};

console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
]))