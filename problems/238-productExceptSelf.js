/**
 * 1) Understanding the question
 * Write function that take an array of non-negative integer 
 * and return the result as an array where each index contains the product
 * of every elements except itself.
 * 
 * 2) Examples
 * nums: [1, 2, 3, 4] should returns [24 <- (2*3*4), 12 <- (1*3*4), 8 <- (1*2*4), 6 <- (1*2*3)]
 * nums: [3, 5, 7, 9] should returns [315 <- (5*7*9), 189 <- (3*7*9), 135 <- (3*5*9), 105 <- 3*5*7)]
 * 
 * 
 */

// https://stackoverflow.com/questions/2680548/given-an-array-of-numbers-return-array-of-products-of-all-other-numbers-no-div?page=1&tab=oldest#tab-top
// https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space
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
