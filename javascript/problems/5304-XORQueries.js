/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
module.exports = function (arr, queries) {
    let result = [];
    for (let query of queries) {
        result.push(arr.slice(query[0], query[1] + 1).reduce((a, b) => a ^ b, 0));
    }
    return result;
};