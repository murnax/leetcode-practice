function lengthOfLongestSubstring(s) {
    let result = 0, i = 0, j = 0;
    let counter = {};
    while (i < s.length && j < s.length) {
        if (!(s[j] in counter)) {
            counter[s[j++]] = 1;
            result = Math.max(result, j - i);
        } else {
            delete counter[s[i++]];
        }
    }
    return result;
}
module.exports = lengthOfLongestSubstring;