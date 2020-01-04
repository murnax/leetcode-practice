const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const powerOfTwo = require('./231-powerOfTwo');

describe('powerOfTwo', () => {
    const testCases = [
        {
            n: 16,
            result: true
        },
        {
            n: 8,
            result: true
        },
        {
            n: 5,
            result: false
        },
    ];

    itParam("n = ${value.n} should return ${value.result}", testCases, testCase => {
        expect(powerOfTwo(testCase.n)).to.equal(testCase.result);
    });
});