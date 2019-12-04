const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const rotateArray = require('./189-rotateArray');

describe('rotateArray()', () => {
    const testCases = [
        {
            nums: [1, 2, 3, 4, 5, 6, 7],
            k: 3,
            result: [5, 6, 7, 1, 2, 3, 4]
        },
        {
            nums: [1],
            k: 1,
            result: [1]
        },
        {
            nums: [-1],
            k: 2,
            result: [-1]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        rotateArray(testCase.nums, testCase.k);
        expect(testCase.nums).to.deep.equal(testCase.result);
    });
});