/**
 * 1) Understand problem
 * 
 * Remove outer parentheses from a given string and only remove the most outer one
 * 
 * 2) Explore example
 * (()())(()) -> ()()()
 * (()())(())(()(())) -> ()()()()(())
 * ()() -> empty string
 * 
 * 3) Define step
 * 
 */

var removeOuterParentheses = function (S) {
    let l = 0;
    let r = 0;
    let stack = [];
    let result = [];
    for (let i = 0; i < S.length; i++) {
        if (S[i] === '(') {
            l++;
        } else {
            r++;
        }
        stack.push(S[i]);
        if (l === r) {
            result = result.concat(stack.slice(1, stack.length - 1));
            stack = [];
        }
    }
    return result.join('');
};
module.exports = removeOuterParentheses;