/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;

    // we will take last digit of n by using mid 
    // from every loop and update n with devided by 10 until n become zero

    // example:
    // n: 234, product = 1, sum = 0
    // n: 23, product = 4, sum = 4
    // n: 2, product = 12, sum = 7
    // n: 0, product = 24, sum = 9
    while (n) {
        sum += n % 10;
        product *= n % 10;
        n = Math.floor(n / 10);
    }
    return product - sum;
};
module.exports = subtractProductAndSum;