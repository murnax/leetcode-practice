/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let totalBitDifferent = 0;
    const xBit = (x >>> 0).toString(2).split('').reverse();
    const yBit = (y >>> 0).toString(2).split('').reverse();

    for (let i = 0; i <= Math.max(xBit.length, yBit.length) - 1; i++) {
        const x = +xBit[i] || 0;
        const y = +yBit[i] || 0;
        totalBitDifferent += x !== y ? 1 : 0;
    }
    return totalBitDifferent;
};
const output = hammingDistance(3, 1);
console.log(output);