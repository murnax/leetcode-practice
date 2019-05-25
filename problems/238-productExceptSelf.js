/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let n = nums.length;
    let pLeft = 1;
    let result = Array(n);
    for (let i = 0; i < n; i++) {
        result[i] = pLeft;
        pLeft *= nums[i];
    }
    let pRight = 1;
    for (let j = n - 1; j >= 0; j--) {
        result[j] = result[j] * pRight;
        pRight *= nums[j];
    }
    return result;
};
module.exports = productExceptSelf;
