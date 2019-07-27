const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const subsets = require('./78-subsets');

describe('subsets()', () => {
    const testCases = [
        {
            nums: [1, 2, 3],
            result: [[
                [3],
                [1],
                [2],
                [1, 2, 3],
                [1, 3],
                [2, 3],
                [1, 2],
                []
            ]]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        expect(subsets(testCase.nums)).to.deep.equal(testCase.result);
    });
});