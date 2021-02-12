const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const runningSum = require('./1480-runningSumOf1dArray');

describe('runningSum', () => {
    const testCases = [
        {
            nums: [1, 2, 3, 4],
            result: [1, 3, 6, 10],
        },        
    ];

    itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
        expect(runningSum(testCase.nums)).to.equal(testCase.result);
    });
});