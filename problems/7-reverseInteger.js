var reverse = function (x) {
    let rev = 0;
    while (x != 0) {
        let pop = x % 10;
        x = parseInt(x / 10);
        if (rev > Number.MAX_SAFE_INTEGER / 10 ||
            (rev === Number.MAX_SAFE_INTEGER / 10 && pop > 7)) {
            return 0;
        }
        if (rev < Number.MIN_SAFE_INTEGER / 10 ||
            (rev === Number.MIN_SAFE_INTEGER / 10 && pop < -8)) {
            return 0;
        }
        rev = rev * 10 + pop;
    }
    return rev;
};
module.exports = reverse;