/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 1) return 0;
    let largestIndex = 0;
    let secondLargestIndex = null;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[largestIndex]) {
            secondLargestIndex = largestIndex;
            largestIndex = i;
        } else {
            if (secondLargestIndex === null) {
                secondLargestIndex = i;
            } else if (nums[i] > nums[secondLargestIndex]) {
                secondLargestIndex = i
            }

            // secondLargestIndex = secondLargestIndex !== null ? nums[secondLargestIndex] > nums[i] ? secondLargestIndex : i : i;
        }
        console.log(`${i} round: `, '1st:', largestIndex, '\t2nd:', secondLargestIndex);
    }
    return nums[largestIndex] >= nums[secondLargestIndex] * 2 ? largestIndex : -1;
};

// console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 0, 4, 2]));
// console.log(dominantIndex([2, 0, 3, 0]));
