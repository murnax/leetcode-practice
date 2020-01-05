/**
 * @param {string} s
 * @return {string}
 */
module.exports = function (s) {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (i < s.length - 2 && s[i + 2] === '#') {
            result += String.fromCharCode(96 + +(s.substr(i, 2)));
            i += 2;
        } else {
            result += String.fromCharCode(96 + +(s[i]));
        }
    }
    return result;
};
