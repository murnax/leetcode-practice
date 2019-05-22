const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const removeElement = require('./27-removeElement');

describe('removeElement()', () => {
    const testCases = [
        {
            nums: [0, 1, 2, 2, 3, 0, 4, 2],
            val: 2,
            result: [0, 1, 3, 0, 4]
        },
        {
            nums: [3, 2, 2, 3],
            val: 2,
            result: [3, 3]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        expect(testCase.nums.slice(0, removeElement(testCase.nums, testCase.val))).to.deep.equal(testCase.result);
    });
});
