/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    // Naive solution
    // nums = nums.sort((a, b) => a - b)
    //     .reduce((result, key, index) => (index % 2 === 0 ? result.push([key]) : result[result.length - 1].push(key)) && result, [])
    //     .map(n => Math.min(n[0], n[1]))
    //     .reduce((a, b) => a + b, 0);
    // return nums;

    // A little improve to be one line
    return nums.sort((a, b) => a - b).reduce((a, b, i) => i % 2 === 0 ? a + b : a);
};
console.log(arrayPairSum([1, 4, 7, 2, 6, 8]));