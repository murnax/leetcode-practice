/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let lastChar;
    let stack = [];
    for (let c of S) {
        if (c === lastChar) stack.pop();
        else {
            stack.push(c);
            lastChar = c;
        }
    }
    return stack.join('');
};
console.log(removeDuplicates("abbaca"))