const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const checkRecord = require('./551-checkRecord');

describe('checkRecord', () => {
    const testCases = [
        {
            s: 'PPALLP',
            result: true,
        },
        {
            s: 'PPALLL',
            result: false
        },
        {
            s: 'A',
            result: true
        },
        {
            s: 'LALL',
            result: true
        },
        {
            s: 'ALLL',
            result: false
        }
    ];

    itParam("s = ${value.s} should return ${value.result}", testCases, testCase => {
        expect(checkRecord(testCase.s)).to.equal(testCase.result);
    });
});