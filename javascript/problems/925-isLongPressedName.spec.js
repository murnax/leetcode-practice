const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const isLongPressedName = require('./925-isLongPressedName');

describe('isLongPressedName', () => {
    const testCases = [
        {
            name: 'alex',
            typed: 'aaleex',
            result: true,
        },
        {
            name: 'saeed',
            typed: 'ssaaedd',
            result: false
        },
        {
            name: 'pyplrz',
            typed: 'ppyypllr',
            result: false
        }
    ];

    itParam("name = ${value.name}, typed = ${value.typed} should return ${value.result}", testCases, testCase => {
        expect(isLongPressedName(testCase.name, testCase.typed)).to.equal(testCase.result);
    });
});