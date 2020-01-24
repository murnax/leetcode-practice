/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
module.exports = function (arr, queries) {
    let result = Array(arr.length);
    for (let i = 1; i < arr.length; i++) {
        arr[i] ^= arr[i - 1];
    }
};