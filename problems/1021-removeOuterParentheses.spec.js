const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const removeOuterParentheses = require('./1021-removeOuterParentheses');

describe('removeOuterParentheses', () => {
    const testCases = [
        {
            S: '(()())(())',
            result: '()()()',
        },
        {
            S: '(()())(())(()(()))',
            result: '()()()()(())'
        },
        {
            S: '()()',
            result: ''
        }
    ];

    itParam("S = ${value.S} should return ${value.result}", testCases, testCase => {
        expect(removeOuterParentheses(testCase.S)).to.equal(testCase.result);
    });
});