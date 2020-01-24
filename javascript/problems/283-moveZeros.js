let moveZeroes = nums => {
    let i = 0, j = 0;
    while (j < nums.length) {
        // console.log(nums, i, j)
        while (j < nums.length && nums[j] !== 0) {
            j++;
        }
        while (i < nums.length && nums[i] === 0) {
            console.log(i);
            i++;
        }
        nums[j] = nums[i];
        nums[i] = 0;
        // console.log(nums)
    }
    return nums;
}
module.exports = moveZeroes;

/*

   i
1, 0, 0, 3, 12
j

*/