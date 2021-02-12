/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    // Naive approach
    // for (let i = 0; i < numbers.length; i++) {
    //     for (let j = i + 1; j < numbers.length; j++) {
    //         if (numbers[i] + numbers[j] === target) {
    //             return [i + 1, j + 1];
    //         }
    //     }
    // }

    // Two pointers at the beginning
    // let i = 0;
    // for (let j = 1; j <= numbers.length; j++) {
    //     const sum = numbers[i] + numbers[j];
    //     if (sum === target) {
    //         return [i + 1, j + 1];
    //     }
    //     if (sum > target || j === numbers.length - 1) {
    //         i++;
    //         j = i;
    //     }
    // }

    // https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/discuss/51287/JavaScript-simple-solution
    // Two pointers at beginning and end
    let i = 0, j = numbers.length;
    let sum = numbers[i] + numbers[j];
    while (sum !== target) {
        sum < target ? i++ : j--;
        sum = numbers[i] + numbers[j];
    }
    return [i + 1, j + 1];
};
