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

console.log(containsDuplicate([1, 2, 3, 1]), containsDuplicate([1, 2, 3, 1]) === true);
console.log(containsDuplicate([1, 2, 3, 4]), containsDuplicate([1, 2, 3, 4]) === false);
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]) === true);