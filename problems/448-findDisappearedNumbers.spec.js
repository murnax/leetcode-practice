const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
var findDisappearedNumbers = require('./findDisappearedNumbers');

describe('findDisappearedNumbers', () => {
    const testCases = [
        {
            nums: [4, 3, 2, 7, 8, 2, 3, 1],
            result: [5, 6]
        }
    ];

    itParam("nums = ${value.nums} should return [${value.result}]", testCases, testCase => {
        expect(findDisappearedNumbers(testCase.nums)).to.deep.equal(testCase.result);
    });
});
