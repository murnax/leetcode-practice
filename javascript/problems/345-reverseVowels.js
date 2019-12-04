/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('');
    let i = 0, j = s.length - 1;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    while (i < j) {
        !vowels.includes(s[i]) && i++;
        !vowels.includes(s[j]) && j--;
        if (vowels.includes(s[i]) && vowels.includes(s[j])) {
            [s[i++], s[j--]] = [s[j], s[i]];
        }
    }
    return s.join('');
};
module.exports = reverseVowels;
