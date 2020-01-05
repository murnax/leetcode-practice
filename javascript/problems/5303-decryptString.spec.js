const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const decryptString = require('./5303-decryptString');

describe('decryptString', () => {
    const testCases = [
        {
            S: "10#11#12",
            result: "jkab",
        },
        {
            S: "1326#",
            result: "acz"
        },
        {
            S: "25#",
            result: 'y'
        },
        {
            S: "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#",
            result: "abcdefghijklmnopqrstuvwxyz"
        },
    ];

    itParam("S = ${value.S} should return ${value.result}", testCases, testCase => {
        expect(decryptString(testCase.S)).to.equal(testCase.result);
    });
});