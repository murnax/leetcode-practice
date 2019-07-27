const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const plusOne = require('./66-plusOne');

describe('plusOne()', () => {
    const testCases = [
        {
            digits: [1, 2, 3],
            result: [1, 2, 4]
        },
        {
            digits: [9],
            result: [1, 0]
        },
        {
            digits: [4, 3, 2, 1],
            result: [4, 3, 2, 2]
        },
        {
            digits: [1, 9, 9],
            result: [2, 0, 0]
        },
        {
            digits: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3],
            result: [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 4]
        }
    ];

    itParam("nums = ${value.digits} should return ${value.result}", testCases, testCase => {
        expect(plusOne(testCase.digits)).to.deep.equal(testCase.result);
    });
});
