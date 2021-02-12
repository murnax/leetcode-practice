/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let counterA = {};
    let counterB = {};
    let result = [];

    for (let i of nums1) {
        counterA[i] = ++counterA[i] || 1;
    }

    for (let j of nums2) {
        counterB[j] = ++counterB[j] || 1;
    }

    for (let k in counterA) {
        if (k in counterB) {
            result.push(Number(k));
        }
    }
    return result;
};
