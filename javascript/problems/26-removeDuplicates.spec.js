const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const removeDuplicates = require('./26-removeDuplicates');

describe('removeDuplicates()', () => {
    const testCases = [
        {
            nums: [1, 1, 2],
            result: [1, 2]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        removeDuplicates(testCase.nums);
        expect(testCase.nums).to.deep.equal(testCase.result);
    });
});
