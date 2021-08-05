const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { solution } = require('./ExcelSheetColumnNumber');

describe('ExcelSheetColumnNumber', () => {
    const testCases = [
        {
            param1: "A",
            result: 1,
        },
        {
            param1: "B",
            result: 2,
        },
        {
            param1: "Z",
            result: 26,
        },
        {
            param1: "AA",
            result: 27,
        },
        {
            param1: "AB",
            result: 28,
        },
        {
            param1: "ZY",
            result: 701,
        },
        {
            param1: "FXSHRXW",
            result: 2147483647,
        },
    ];

    itParam("f(${value.param1}) should equal ${value.result}", testCases, t => {
        expect(solution(t.param1)).to.equal(t.result);
    });
});
