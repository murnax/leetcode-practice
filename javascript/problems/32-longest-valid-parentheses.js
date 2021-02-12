/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let result = 0;
    let openBracketsStack = [];
    let r = 0;
    for (let n of s) {
        ['(', '[', '{'].indexOf(n) !== -1 && openBracketsStack.push(n);

        if ([')', ']', '}'].indexOf(n) !== -1) {
            if (n === ')' && openBracketsStack.pop() !== '(') {
                r = 0;
            } else if (n === ']' && openBracketsStack.pop() !== '[') {
                r = 0;
            } else if (n === '}' && openBracketsStack.pop() !== '{') {
                r = 0;
            } else {
                r += 2;
            }
        }
        result = Math.max(result, r);
    }
    return result;
};
