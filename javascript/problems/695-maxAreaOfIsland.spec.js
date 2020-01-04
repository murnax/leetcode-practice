const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const maxAreaOfIsland = require('./695-maxAreaOfIsland');

describe('maxAreaOfIsland()', () => {
    const testCases = [
        {
            grid: [
                [0,0,1,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0],
                [0,1,1,0,1,0,0,0,0,0,0,0,0],
                [0,1,0,0,1,1,0,0,1,0,1,0,0],
                [0,1,0,0,1,1,0,0,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,0,0],
                [0,0,0,0,0,0,0,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,1,1,0,0,0,0]
            ],
            result: 6
        },
    ];

    itParam("grid = ${value.grid}", testCases, testCase => {
        expect(maxAreaOfIsland(testCase.grid)).to.equal(testCase.result);
    });
});
