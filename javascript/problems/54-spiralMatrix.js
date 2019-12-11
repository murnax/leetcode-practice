/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix, result = []) {
	// if (!matrix.length) return result;
	// for (let i = 0; i < matrix.length; i++) {
	//     let current = matrix[i];
	//     if (i === 0) {
	//         result = result.concat(current);
	//     } else {
	//         let last = current.pop();
	//         if (!last) return result;
	//         result.push(last);
	//         current.reverse();
	//     }
	// }
	// matrix.shift();
	// return spiralOrder(matrix.reverse(), result);


	if (!matrix.length) {
		return result;
	}

	result.push(...matrix.shift());
	for (let i = 0; i < matrix.length && matrix[i].length; i++) {
		result.push(matrix[i].pop());
		matrix[i] = matrix[i].reverse();
	}
	return spiralOrder(matrix.reverse(), result);
};
module.exports = spiralOrder;
