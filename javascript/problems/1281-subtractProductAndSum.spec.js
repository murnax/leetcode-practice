const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const subtractProductAndSum = require('./1281-subtractProductAndSum');

describe('subtractProductAndSum', () => {
    const testCases = [
        {
            n: 234,
            result: 15,
        },
        {
            n: 4421,
            result: 21
        },
    ];

    itParam("n = ${value.n} should return ${value.result}", testCases, testCase => {
        expect(subtractProductAndSum(testCase.n)).to.equal(testCase.result);
    });
});