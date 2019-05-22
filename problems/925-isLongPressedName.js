/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {

    let i = 0, j = 0;
    if (name[i] !== typed[j] || name[name.length - 1] !== typed[typed.length - 1]) return false;

    while (j < typed.length) {
        if (name[i] === typed[j]) {
            i++; j++;
        } else if (typed[j] !== name[i] && i >= 1 && typed[j] === name[i - 1]) {
            j++;
        } else {
            return false;
        }
    }
    return true;
};
module.exports = isLongPressedName;