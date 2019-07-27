/**
 * @param {number[]} nums
 * @return {number[]}
 */

let sortArray = nums => {
    if (nums.length <= 1) return nums;
    let pivot = Math.ceil(nums.length / 2);
    let leftList = sortArray(nums.slice(0, pivot));
    let rightList = sortArray(nums.slice(pivot));
    return merge(leftList, rightList);
}

let merge = (leftList, rightList) => {
    let result = [], leftCursor = 0, rightCursor = 0;
    while (leftCursor < leftList.length && rightCursor < rightList.length) {
        if (leftList[leftCursor] > rightList[rightCursor]) {
            result.push(rightList[rightCursor++]);
        } else {
            result.push(leftList[leftCursor++]);
        }
    }
    result.push(...leftList.slice(leftCursor));
    result.push(...rightList.slice(rightCursor));
    return result;
}

// let sortArray = function (nums) {
//     if (nums.length <= 1) return nums;
//     let pivot = Math.ceil(nums.length / 2);
//     let leftList = sortArray(nums.slice(0, pivot));
//     let rightList = sortArray(nums.slice(pivot));
//     return merge(leftList, rightList);
// };

// let merge = function (leftList, rightList) {
//     let leftCursor = 0;
//     let rightCursor = 0;
//     let result = [];
//     while (leftCursor < leftList.length && rightCursor < rightList.length) {
//         if (leftList[leftCursor] < rightList[rightCursor]) {
//             result.push(leftList[leftCursor++]);
//         } else {
//             result.push(rightList[rightCursor++])
//         }
//     }
//     result.push(...leftList.slice(leftCursor));
//     result.push(...rightList.slice(rightCursor));
//     return result;
// }

module.exports = sortArray;
console.log(sortArray([5, 1, 1, 2, 0, 0]))