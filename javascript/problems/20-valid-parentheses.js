/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let openBracketsStack = [];
    for (let n of s) {
        -~['(', '[', '{'].indexOf(n) && openBracketsStack.push(n);

        if ([')', ']', '}'].indexOf(n) !== -1) {
            if (n === ')' && openBracketsStack.pop() !== '(') return false;
            if (n === ']' && openBracketsStack.pop() !== '[') return false;
            if (n === '}' && openBracketsStack.pop() !== '{') return false;
        }
    }
    return !openBracketsStack.length ? true : false;
};
console.log(isValid("()[]{}"))

