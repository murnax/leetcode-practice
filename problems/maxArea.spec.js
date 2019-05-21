const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const maxArea = require('./maxArea');

describe('maxArea', () => {
    const testCases = [
        {
            height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
            result: 49
        }
    ];

    itParam("height = [${value.height}] should return ${value.result}", testCases, testCase => {
        expect(maxArea(testCase.height)).to.equal(testCase.result);
    });
});
