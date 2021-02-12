/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let counter = {};
    for (let i of s) {
        counter[i] = ++counter[i] || 1;
    }
    for (let j of t) {
        if (!(j in counter)) {
            return j;
        } else {
            if (counter[j] === 0) {
                return j;
            }
            counter[j] = --counter[j];
        }
    }
};
