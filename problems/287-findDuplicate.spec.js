const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const findDuplicate = require('./287-findDuplicate');

describe('findDuplicate()', () => {
    const testCases = [
        {
            nums: [1, 3, 4, 2, 2],
            result: 2
        },
        {
            nums: [3, 1, 3, 4, 2],
            result: 3
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        expect(findDuplicate(testCase.nums)).to.equal(testCase.result);
    });
});
