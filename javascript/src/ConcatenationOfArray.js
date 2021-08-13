// Problem ID: 1929
// URL: https://leetcode.com/problems/concatenation-of-array/

const solution = (nums) => {
    return nums.reduce((a, b, i) => {
        a[i] = a[i + nums.length] = b;
        return a;
    }, Array(nums.length * 2));
}

module.exports = {
    solution,
};
