const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const maximumProductsOfThreeNumbers = require('./628-maximumProductsOfThreeNumbers');

describe('maximumProductsOfThreeNumbers', () => {
    const testCases = [
        {
            input: [1, 2, 3],
            result: 6,
        },
        {
            input: [1, 2, 3, 4],
            result: 24,
        },
        {
            input: [0, 0, 0, 4],
            result: 0
        }
    ];

    itParam("input = ${value.input} should return ${value.result}", testCases, testCase => {
        expect(maximumProductsOfThreeNumbers(testCase.input)).to.equal(testCase.result);
    });
});