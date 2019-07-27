const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const findAnagrams = require('./438-findAnagrams');

describe('findAnagrams', () => {
    const testCases = [
        {
            s: "cbaebabacd",
            p: "abc",
            result: [0, 6]
        },
        // {
        //     s: "abab",
        //     p: "ab",
        //     result: [0, 1, 2]
        // }
    ];

    itParam("s = ${value.s} and p = ${value.p} should return [${value.result}]", testCases, testCase => {
        expect(findAnagrams(testCase.s, testCase.p)).to.deep.equal(testCase.result);
    });
});