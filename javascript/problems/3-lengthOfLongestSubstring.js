function lengthOfLongestSubstring(s) {
    let result = 0;

    // pointers, begin is window left side, end is window right side 
    let begin = 0, end = 0;

    // counter to check character has already been found in substring or not
    let counter = {};
    while (end < s.length) {
        if (!(s[end] in counter)) {
            counter[s[end++]] = 1;
            if (end - begin > result) result = end - begin;
        } else {
            // if character exists in counter, 
            // remove character from counter and move window left side
            delete counter[s[begin++]];
        }
    }
    return result;
}
module.exports = lengthOfLongestSubstring;

