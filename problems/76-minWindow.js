/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    if (s.length < t.length) return '';

    // These two variables will be used to substring and get the result
    // 
    let head = 0, len = Infinity;

    // map character for substring t
    let map = t.split('').reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});

    // number of unique characters in map, this will be use to check whether window contains all substring's characters or not
    let counter = Object.keys(map).length;

    // Two pointer variables for sliding window, beging is left window, end is right window
    let begin = 0, end = 0;

    // Loop through s string using end pointer
    while (end < s.length) {
        let c = s[end++];

        if (c in map) {
            // decrement total number of character in map and,            
            // if total number of character ${c} are found in the current window, decrement the counter by one
            --map[c] === 0 && counter--;
        }

        // If counter is equal to zero, it means, we found every characters in substring s,
        // then we should start move left side of the window (begin var) in order to make
        // window no longer contains all substring t
        while (counter === 0) {
            // calculate result
            if (end - begin < len) len = end - (head = begin);

            // get character at the left side of the window (begin)
            let c = s[begin++];
            // If map[c] is greater than zero, it means when we move left side of the window
            // our window will no longer contains all substring characters, which mean
            // we need to break this loop and continue moving right side (end) of the window
            // to find all substring again
            c in map && ++map[c] > 0 && counter++;
        }
    }

    return len === Infinity ? '' : s.substr(head, len);
};

module.exports = minWindow;