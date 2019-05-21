const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const sortArray = require('./sortArray');

describe('sortArray()', () => {
    const testCases = [
        {
            nums: [5, 2, 3, 1],
            result: [1, 2, 3, 5]
        },
        {
            nums: [5, 1, 1, 2, 0, 0],
            result: [0, 0, 1, 1, 2, 5]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        expect(sortArray(testCase.nums)).to.deep.equal(testCase.result);
    });
});