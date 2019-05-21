/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    // if (!needle.length) return 0;
    // let j = 0;
    // let startIndex = -1;
    // let counting = false;
    // for (let i = 0; i < haystack.length; i++) {
    //     if (haystack[i] === needle[j]) {
    //         if (!counting) {
    //             counting = true;
    //             startIndex = i;
    //         }
    //         if (j === needle.length - 1) {
    //             return startIndex;
    //         }
    //         j++;
    //     } else {
    //         if (counting) i = startIndex;
    //         counting = false;
    //         j = 0;
    //     }
    // }
    // return -1;

    // https://leetcode.com/problems/implement-strstr/discuss/116860/JavaScript-Solution-Beats-100
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0] && haystack.substr(i, needle.length) === needle)
            return i;

    }
    return -1;
};

// console.log(strStr("hello", "ll"));
// console.log(strStr("aaaaa", "bba"));
console.log(strStr("mississippi", "issip"));