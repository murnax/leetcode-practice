const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const reverseInteger = require('./7-reverseInteger');

describe('reverseInteger()', () => {
    const testCases = [
        {
            x: 123,
            result: 321
        },
        {
            x: -123,
            result: -321
        },
        {
            x: 120,
            result: 21
        }
    ];

    itParam("x = ${value.x} should return ${value.result}", testCases, testCase => {
        expect(reverseInteger(testCase.x)).to.equal(testCase.result);
    });
});
