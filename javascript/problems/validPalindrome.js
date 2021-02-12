/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let i = 0, j = s.length - 1;
    let skippedOneCharacter = false;
    while (i < j) {
        if (s[i] !== s[j]) {
            if (skippedOneCharacter) return false;
            if (i + 1 === j) return true;
            if (s[i + 1] === s[j]) {
                ++i;
            } else if (s[j - 1] === s[i]) {
                --j;
            }
            if (s[i] !== s[j]) return false;
            skippedOneCharacter = true;
        }
        ++i;
        --j;
    }
    return true;
};

// var validPalindrome = function (s) {
//     for (let i = 0, j = s.length - 1; i < j; i++ , j--) {
//         if (s[i] !== s[j]) {
//             let i1 = i, j1 = j - 1, i2 = i - 1, j2 = j - 1;
//             while (i1 < j1 && s[i1] === s[j1]) { i1++; j1--; }
//             while (i2 < j2 && s[i2] === s[j2]) { i2++; j2--; }
//             return i1 >= j1 && i2 >= j2;
//         }
//     }
//     return true;
// }

module.exports = validPalindrome;
