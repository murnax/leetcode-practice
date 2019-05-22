/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
    let map = {};
    let lastL = -Infinity;
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        if (c === 'L') {
            if (i === lastL + 1) {
                if (++map['L'] > 2) {
                    return false;
                }
            } else {
                map['L'] = 1;
            }
            lastL = i;
        } else {
            map[c] = ++map[c] || 1;
            if (map['A'] && map['A'] > 1) return false;
        }
    }
    return true;
};
module.exports = checkRecord;