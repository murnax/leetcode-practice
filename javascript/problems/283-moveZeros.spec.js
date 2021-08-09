const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const moveZeros = require('./283-moveZeros');

describe('moveZeros', () => {
    const testCases = [
        {
            nums: [0, 1, 0, 3, 12],
            result: [1, 3, 12, 0, 0]
        },
        {
            nums: [0],
            result: [0],
        },
        {
            nums: [0, 0],
            result: [0, 0]
        },
        {
            nums: [2, 1],
            result: [2, 1],
        },
        {
            nums: [4, 2, 4, 0, 0, 3, 0, 5, 1, 0],
            result: [4, 2, 4, 3, 5, 1, 0, 0, 0, 0]
        }
    ];

    // itParam("nums = [${value.nums}] should return [${value.result}]", testCases, testCase => {
    //     expect(moveZeros(testCase.nums)).to.deep.equal(testCase.result);
    // });
});
