const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const binarySearch = require('./704-binarySearch');

describe('binarySearch', () => {

    const testCases = [
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 9,
            result: 4,
        },
        {
            nums: [-1, 0, 3, 5, 9, 12],
            target: 2,
            result: -1
        }
    ];

    itParam("s = ${value.s} should return ${value.result}", testCases, testCase => {
        expect(binarySearch(testCase.nums, testCase.target)).to.equal(testCase.result);
    });
});