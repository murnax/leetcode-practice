const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const productExceptSelf = require('./238-productExceptSelf');

describe('productExceptSelf', () => {
    const testCases = [
        {
            nums: [1, 2, 3, 4],
            result: [24, 12, 8, 6]
        }
    ];

    itParam("nums = [${value.nums}] should return ${value.result}", testCases, testCase => {
        expect(productExceptSelf(testCase.nums)).to.deep.equal(testCase.result);
    });
});
