/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.split('').reduce((a, b) => {
        let code = b.charCodeAt();
        if ((code > 47 && code < 58) || // numeric (0-9)
            (code > 64 && code < 91) || // upper alpha (A-Z)
            (code > 96 && code < 123)) { // lower alpha (a-z)
            a += b.toLowerCase();
        }
        return a;
    }, '');

    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i++] !== s[j--]) return false;
    }
    return true;
};
module.exports = isPalindrome;