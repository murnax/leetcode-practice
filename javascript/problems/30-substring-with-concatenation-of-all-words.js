/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
*/
var findSubstring = function (s, words) {
	if (!words.length) return [];
    
    let map = words.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
    let counter = Object.keys(map).length;
    let wordLen = words[0].length;
    
    if (s.length < words.length * wordLen) return [];
    
    let begin = 0, end = 0, lastEnd = 0;
    let result = [];
    
    while (end < s.length) {
        let endWord = s.substr(end, wordLen);
        
        if (endWord in map) {
            --map[endWord] === 0 && --counter;              
            end += wordLen;
        } else {
            end = ++begin;
            map = words.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
            counter = Object.keys(map).length;
        }
        
        while (counter === 0) {
            if (end - begin === words.length * wordLen) {
                result.push(begin);
            }
            map = words.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
            counter = Object.keys(map).length;
            end = ++begin;
        }
    }
    return result;
};
module.exports = findSubstring;