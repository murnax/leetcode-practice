const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
    const testCases = [
        {
            s: 'A man, a plan, a canal: Panama',
            result: true
        },
        {
            s: 'race a car',
            result: false
        }
    ];

    itParam("s = ${value.s} should return ${value.result}", testCases, testCase => {
        expect(isPalindrome(testCase.s)).to.equal(testCase.result);
    });
});
