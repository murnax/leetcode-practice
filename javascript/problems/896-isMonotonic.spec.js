const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const isMonotonic = require('./896-isMonotonic');

describe('isMonotonic', () => {
    const testCases = [
        {
            A: [1, 2, 2, 3],
            result: true
        },
        {
            A: [6, 5, 4, 4],
            result: true
        },
        {
            A: [1, 1, 0],
            result: true
        },
        {
            A: [1, 1, 1],
            result: true
        },
        {
            A: [1, 3, 2, 4],
            result: false
        }
    ];

    itParam("A = ${value.A} should return [${value.result}]", testCases, testCase => {
        expect(isMonotonic(testCase.A)).to.equal(testCase.result);
    });
});