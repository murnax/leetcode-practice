// Problem ID: 1929
// URL: https://leetcode.com/problems/concatenation-of-array/

const reduceSolution = (nums) => {
    return nums.reduce((a, b, i) => {
        a[i] = a[i + nums.length] = b;
        return a;
    }, Array(nums.length * 2));
}

const forEachSolution = (nums) => {
    nums.forEach(n => nums.push(n));
    return nums;
}

// https://leetcode.com/problems/concatenation-of-array/discuss/1369400/JavaScript-or-one-liner
const spreadSolution = (nums) => {
    return [...nums, ...nums];
}

module.exports = {
    reduceSolution,
    forEachSolution,
};
