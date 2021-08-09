/**
 * @param {number[]} nums
 * @return {number}
 */

// @TODO: Incorrect, must be O(1) space
var findDuplicate = function (nums) {
    let counter = {};
    for (let i of nums) {
        i = i.toString();
        if (i in counter) return +i;
        counter[i] = 1;
    }
};
module.exports = findDuplicate;
