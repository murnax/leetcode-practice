var permute = function (nums) {
    let result = [];
    function backtrack(subset = []) {
        if (subset.length === nums.length) {
            result.push(subset.slice(0));
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (subset.indexOf(nums[i]) !== -1) continue;

                subset.push(nums[i]);
                backtrack(subset);

                subset.pop();
            }
        }
    }
    backtrack();
    return result;
};
module.exports = permute;
