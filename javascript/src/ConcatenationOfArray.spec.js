const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { reduceSolution, forEachSolution } = require('./ConcatenationOfArray');

describe('ConcatenationOfArray', () => {
    const testCases = [
        {
            nums: [1,2,1],
            expected: [1,2,1,1,2,1],
        },
        {
            nums: [1,3,2,1],
            expected: [1,3,2,1,1,3,2,1],
        },
    ];

    itParam("f([${value.nums}]) should equal [${value.expected}]", testCases, t => {
        expect(reduceSolution(t.nums)).to.deep.equal(t.expected);
    });

    itParam("f2([${value.nums}]) should equal [${value.expected}]", testCases, t => {
        expect(forEachSolution(t.nums)).to.deep.equal(t.expected);
    });
});
