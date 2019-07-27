/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return sortArrayDesc(nums)[k - 1];
};

var sortArrayDesc = nums => {
    if (nums.length <= 1) return nums;
    let pivot = Math.ceil(nums.length / 2);
    let leftList = sortArrayDesc(nums.slice(0, pivot));
    let rightList = sortArrayDesc(nums.slice(pivot));
    return merge(leftList, rightList);
}

var merge = (leftList, rightList) => {
    let result = [], leftCursor = 0, rightCursor = 0;
    while (leftCursor < leftList.length && rightCursor < rightList.length) {
        if (leftList[leftCursor] < rightList[rightCursor]) {
            result.push(rightList[rightCursor++]);
        } else {
            result.push(leftList[leftCursor++]);
        }
    }
    result.push(...leftList.slice(leftCursor));
    result.push(...rightList.slice(rightCursor));
    return result;
}

module.exports = findKthLargest;
