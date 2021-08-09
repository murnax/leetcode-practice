const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { solution } = require('./347-topKFrequentElements');

describe('topKFrequentElements', () => {

    const testCases = [
        {
            nums: [1, 1, 1, 2, 2, 3],
            k: 2,
            result: [1, 2],
        },
        {
            nums: [1],
            k: 1,
            result: [1],
        },
    ];

    itParam("s = ${value.s} should return ${value.result}", testCases, testCase => {
        expect(solution(testCase.nums, testCase.k)).to.deep.equal(testCase.result);
    });
});