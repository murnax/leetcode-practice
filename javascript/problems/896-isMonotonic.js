/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
    // https://leetcode.com/problems/monotonic-array/discuss/191397/javascript
    let increasing = true, decreasing = true;
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] < A[i + 1]) increasing = false;
        if (A[i] > A[i + 1]) decreasing = false;
    }
    return increasing || decreasing;
}

module.exports = isMonotonic;

// var isMonotonic = function (A) {
//     let increasing;
//     let start = 1;
//     for (let j = start; j < A.length; j++) {
//         if (A[0] !== A[j]) {
//             start = j;
//             increasing = A[0] < A[j];
//             break;
//         }
//     }
//     for (let i = start; i < A.length; i++) {
//         if (increasing && A[i - 1] > A[i]) {
//             return false;
//         }
//         if (!increasing && A[i - 1] < A[i]) {
//             return false;
//         }
//     }
//     return true;
// };