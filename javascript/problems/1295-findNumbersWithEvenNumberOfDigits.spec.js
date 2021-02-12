const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const solution = require('./1295-findNumbersWithEvenNumberOfDigits');

describe('decryptString', () => {
    const testCases = [
        {
            nums: [12,345,2,6,7896],
            output: 2
        },
        {
            nums: [555,901,482,1771],
            output: 1
        },
    ];

    itParam("nums = ${value.nums} should return ${value.output}", testCases, testCase => {
        expect(solution(testCase.nums)).to.equal(testCase.result);
    });
});
