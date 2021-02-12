/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let result = [];
    let counter = {};
    for (let i of nums) {
        if (i in counter) {
            result.push(i);
        }
        counter[i] = 1;
    }
    return result;
};
