const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const twoSum = require('./1-twoSum');

describe('twoSum', () => {
    const testCases = [
        {
            nums: [2, 7, 11, 15],
            target: 9,
            result: [0, 1]
        },
        {
            nums: [3, 2, 4],
            target: 6,
            result: [1, 2]
        }
    ];

    itParam("nums = [${testCase.nums}], target = ${testCase.target} should return ${value.result}", testCases, testCase => {
        expect(twoSum(testCase.nums, testCase.target)).to.deep.equal(testCase.result);
    });
});
