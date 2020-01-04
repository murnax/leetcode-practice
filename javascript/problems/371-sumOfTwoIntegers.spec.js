const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const getSum = require('./371-sumOfTwoIntegers');

describe('getSum', () => {
    const testCases = [
        {
            a: 2,
            b: 3,
            result: 5,
        },
        {
            a: 10,
            b: 8,
            result: 18,
        },
    ];

    itParam("a = ${value.a}, b = ${value.b} should return ${value.result}", testCases, testCase => {
        expect(getSum(testCase.a, testCase.b)).to.equal(testCase.result);
    });
});