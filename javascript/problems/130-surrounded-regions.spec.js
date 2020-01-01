const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const surroundedRegions = require('./130-surrounded-regions');

describe('surroundedRegions()', () => {
    const testCases = [
        {
            board: [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]],
            result: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
        },
    ];

    itParam("board = ${value.board}", testCases, testCase => {
        surroundedRegions(testCase.board);
        expect(testCase.board).to.equal(testCase.result);
    });
});
