const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const xorQueries = require('./5304-xorQueries');

describe('xorQueries', () => {
    const testCases = [
        {
            arr: [1, 3, 4, 8],
            queries: [[0, 1], [1, 2], [0, 3], [3, 3]],
            result: [2, 7, 14, 8],
        },
        {
            arr: [4, 8, 2, 10],
            queries: [[2, 3], [1, 3], [0, 0], [0, 3]],
            result: [8, 0, 4, 4],
        },
    ];

    itParam("S = ${value.S} should return ${value.result}", testCases, testCase => {
        expect(xorQueries(testCase.arr, testCase.queries)).to.deep.equal(testCase.result);
    });
});