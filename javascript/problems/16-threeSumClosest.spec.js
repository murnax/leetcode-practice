const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const threeSumClosest = require('./16-threeSumClosest');

describe('threeSumClosest()', () => {
    const testCases = [
        {
            nums: [-1, 2, 1, -4],
            target: 1,
            result: 2
        },
        {
            nums: [1,1,1,1],
            target: 3,
            result: 3
        },
        {
            nums: [1,1,-1,-1,3],
            target: 3,
            result: 3
        }
    ];

    itParam("nums = ${value.nums}, target = ${value.target} should return ${value.result}", testCases, testCase => {
        expect(threeSumClosest(testCase.nums, testCase.target)).to.equal(testCase.result);
    });
});
