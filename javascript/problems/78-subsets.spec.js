const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const subsets = require('./78-subsets');

describe('subsets()', () => {
    const testCases = [
        {
            nums: [1, 2, 3],
            expected: [
                [],       [ 1 ],
                [ 1, 2 ], [ 1, 2, 3 ],
                [ 1, 3 ], [ 2 ],
                [ 2, 3 ], [ 3 ]
            ]
        }
    ];

    itParam("nums = ${value.nums} should return ${value.expected}", testCases, testCase => {
        const actual = subsets(testCase.nums);
        expect(actual.length).to.equal(testCase.expected.length)
        for(let i = 0; i < actual.length; i++) {
            expect(actual[i]).to.have.members(testCase.expected[i])
        }
    });
});
