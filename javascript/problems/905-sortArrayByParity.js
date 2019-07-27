/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return [...A.filter(n => n % 2 === 0), ...A.filter(n => n % 2 === 1)];
};

console.log(sortArrayByParity([3,1,2,4]));