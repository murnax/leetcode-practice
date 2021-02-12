/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
    const sum = A.reduce((a, b) => {
        return a + b;
    }, 0);
    if (sum % 3 !== 0) return false;
    const groupValue = sum / 3;

    let accum = 0;
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        accum += A[i];
        if (accum === groupValue) {
            accum = 0;
            count++;
        }
    }
    return count > 2;
};
