const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const solution = require('./1299-replaceElementsWithGreatestElementOnRightSide');

describe('replaceElementsWithGreatestElementOnRightSide', () => {
    const testCases = [
        {
            nums: [17,18,5,4,6,1],
            output: [18,6,6,6,1,-1]
        },
    ];

    itParam("nums = ${value.nums} should return ${value.output}", testCases, testCase => {
        expect(solution(testCase.nums)).to.deep.equal(testCase.output);
    });
});
