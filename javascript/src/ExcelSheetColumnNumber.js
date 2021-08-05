// Problem ID: 171
// URL: https://leetcode.com/problems/excel-sheet-column-number/

const solution = (columnTitle) => columnTitle.split('').reduce((acc, cur) => acc * 26 + (cur.charCodeAt(0) - 'A'.charCodeAt(0) + 1), 0)

module.exports = {
    solution,
};
