/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let n = nums.length;
    let result = Array(n);
    for (let i of nums) {
        result[i - 1] = -1;
    }
    for (let j = 0; j < n; j++) {
        if (result[j] !== -1) result[j] = j + 1;
    }
    return result.filter(n => n !== -1);
};
module.exports = findDisappearedNumbers;