const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const reverseVowels = require('./345-reverseVowels');

describe('reverseVowels', () => {
    const testCases = [
        {
            s: 'hello',
            result: 'holle',
        },
        {
            s: 'leetcode',
            result: 'leotcede'
        }
    ];

    itParam("s = ${value.s} should return ${value.result}", testCases, testCase => {
        expect(reverseVowels(testCase.s)).to.equal(testCase.result);
    });
});