const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { solution } = require('./ValidPalindrome2');

describe('validPalindrome()', () => {
    const testCases = [
        {
            s: "aba",
            expected: true,
        },
        {
            s: "abca",
            expected: true,
        },
        {
            s: "abcbeebba",
            expected: true,
        },
        {
            s: "eabbcbbe",
            expected: true,
        },
        {
            s: "abc",
            expected: false,
        },
        {
            s: "cbbcc",
            expected: true,
        },
        {
            s: "eeccccbebaeeabebccceea",
            expected: false,
        },
        {
            s: "xdddbababeccebababddd",
            expected: true,
        },
        {
            s: "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga",
            expected: true,
        },
    ];

    itParam("f(${value.s}) should equal ${value.expected}", testCases, t => {
        expect(solution(t.s)).to.equal(t.expected);
    });
});
