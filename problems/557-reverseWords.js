/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').map(n => n.split('').reverse().join('')).join(' ');
};
console.log(reverseWords("Let's take LeetCode contest"));