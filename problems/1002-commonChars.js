/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function (A) {
    let result = [];
    let hashTables = A.map(word => {
        let hash = {};
        for (let i of word) {
            hash[i] = ++hash[i] || 1;
        }
        return hash;
    });
    for (let j in hashTables[0]) {
        let min = 100;
        const hasKey = hashTables.every(n => {
            min = Math.min(min, n[j]);
            return n[j];
        });
        hasKey && result.push(...Array(min).fill(j));
    }
    return result;
};

console.log(commonChars(["bella", "label", "roller"]));