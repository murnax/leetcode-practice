/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
    const map = words.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
    return Object.keys(map)
        .map(n => {
            return { key: n, val: map[n] };
        })
        .sort((a, b) => {
            if (a.val === b.val) return a.key > b.key ? 1 : -1;
            return b.val - a.val;
        })
        .splice(0, k)
        .map(n => n.key);
};
module.exports = topKFrequent;