const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const strStr = require('./28-strStr');

describe('strStr()', () => {
    const testCases = [
        {
            haystack: 'hello',
            needle: 'll',
            result: 2
        },
        {
            haystack: 'aaaaa',
            needle: 'bba',
            result: -1
        }
    ];

    itParam("haystack = ${value.haystack}, needle = ${value.needle} should return ${value.result}", testCases, testCase => {
        expect(strStr(testCase.haystack, testCase.needle)).to.equal(testCase.result);
    });
});
