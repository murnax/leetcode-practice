const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const kthLargestElementInArray = require('./215-kthLargestElementInArray');

describe('kthLargestElementInArray', () => {
    const testCases = [
        {
            nums: [3, 2, 1, 5, 6, 4],
            k: 2,
            result: 5
        },
        {
            nums: [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6],
            k: 2,
            result: 10
        }
    ];

    itParam("nums = [${value.nums}] should return ${value.result}", testCases, testCase => {
        expect(kthLargestElementInArray(testCase.nums, testCase.k)).to.equal(testCase.result);
    });
});
