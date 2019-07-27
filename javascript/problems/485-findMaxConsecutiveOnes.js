/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    // let maxConsecutive = 0;
    // let i = 0;
    // let counting = nums[0] === 1;
    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] === 0 && !counting) {
    //         i++;
    //     }
    //     if (nums[j] === 0 && counting) {
    //         maxConsecutive = Math.max(j - i, maxConsecutive);
    //         counting = false;
    //     } else if (nums[j] === 1 && !counting) {
    //         counting = true;
    //         i = j;
    //     }
    //     if (nums[j] === 1 && j === nums.length - 1 && counting) {
    //         maxConsecutive = Math.max(j - i + 1, maxConsecutive);
    //     }
    // }
    // return maxConsecutive;

    // Using string spliting
    // return Math.max(0, ...[].concat(nums.join('').split('0').map(n => n.length)));

    let maxHere = 0, max = 0;
    for (let i of nums) {
        max = Math.max(max, maxHere = (i === 0 ? 0 : maxHere + 1))
    }
    return max;
};

console.log(findMaxConsecutiveOnes([0, 0, 1, 1, 0, 1, 1, 1, 1, 0]));
// console.log(findMaxConsecutiveOnes([1]));
// console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
// console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));



/*

i
0 0 1 1 1
  j

counting = false;

*/