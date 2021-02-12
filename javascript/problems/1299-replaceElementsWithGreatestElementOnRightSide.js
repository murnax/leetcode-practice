/**
 * @param {number[]} arr
 * @return {number[]}
 */
// var replaceElements = function(arr) {
//     let n = arr.length;
//     let output = Array(n).fill(-1);
//     output[n - 2] = arr[n - 1];
//     let max = arr[n - 1];
//     for (let i = n - 2; i >= 0; i--) {
//         max = Math.max(max, arr[i + 1]);
//         output[i] = max;
        
//     }
//     return output;
// };
// module.exports = replaceElements;

var solution2 = function(arr) {
    for (let i = arr.length - 1, mx = -1; i >= 0; i--)
        mx = Math.max(arr[i], arr[i] = mx);
    return arr;
}
module.exports = solution2;