/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
    let i = 1;
    while (2 ** i - 1 < N) {
        i++;
    }
    return (2 ** i - 1) - N;
};
