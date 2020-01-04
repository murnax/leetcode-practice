const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const powerOfFour = require('./342-powerOfFour');

describe('powerOfFour', () => {
    const testCases = [
        {
            n: 16,
            result: true
        },
        {
            n: 64,
            result: true
        },
        {
            n: 5,
            result: false
        },
    ];

    itParam("a = ${value.a} should return ${value.result}", testCases, testCase => {
        expect(powerOfFour(testCase.n)).to.equal(testCase.result);
    });
});