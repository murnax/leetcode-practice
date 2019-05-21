/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    while (i >= 0 || j >= 0) {
        let sum = (Number(a[i--]) || 0) + (Number(b[j--]) || 0) + carry;
        carry = Math.floor(sum / 2);
        result = `${sum % 2}${result}`;
    }
    return carry ? `${carry}${result}` : result;
};

console.log(addBinary("11101", "100"));

/*

 11101
   100
100001
*/