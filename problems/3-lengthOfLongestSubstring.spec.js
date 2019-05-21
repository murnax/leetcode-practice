const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const lengthOfLongestSubstring = require('./3-lengthOfLongestSubstring');

describe('lengthOfLongestSubstring()', () => {
    const testCases = [
        {
            n: 'rithmschool',
            result: 7
        },
        {
            n: 'thisisawesome',
            result: 6
        },
        {
            n: 'thecatinthehat',
            result: 7
        },
        {
            n: 'abcb',
            result: 3
        },
        {
            n: 'bbbbbb',
            result: 1
        },
        {
            n: 'longestsubstring',
            result: 8
        },
        {
            n: 'thisishowwedoit',
            result: 6
        }
    ];

    itParam("n = ${value.n} should return ${value.result}", testCases, testCase => {
        expect(lengthOfLongestSubstring(testCase.n)).to.equal(testCase.result);
    });
});
