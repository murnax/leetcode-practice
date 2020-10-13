/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = -Infinity;
    let answer = '';
    let n = s.length
    for (let i = n; i > 0; i--) {
        for (let j = 0; j <= n - i; j++) {
            let subStr = s.substr(j, i);
            if (isPalindrome(subStr)) return subStr;
        }
    }
    return answer;
};

function isPalindrome(s) {
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        if (s[l++] !== s[r--]) return false;
    }
    return true;
}