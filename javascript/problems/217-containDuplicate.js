/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let counter = {};
    for (let i of nums) {
        if (i in counter) {
            return true;
        }
        counter[i] = 1;
    }
    return false;
};
