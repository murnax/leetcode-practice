/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let result = 0;
    while (i < j) {
        let area = Math.min(height[i], height[j]) * (j - i);
        result = Math.max(result, area);
        if (height[i] < height[j]) {
            i++;
        } else {
            j--;
        }
    }
    return result;
};
module.exports = maxArea;