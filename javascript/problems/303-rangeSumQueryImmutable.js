/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
	this.memo = [nums[0]];
	for (let i = 1; i < nums.length; i++)
		this.memo.push(this.memo[i - 1] + nums[i]);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
	return this.memo[j] - (this.memo[i - 1] || 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

module.exports = NumArray;