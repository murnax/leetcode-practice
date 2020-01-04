const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const surroundedRegions = require('./130-surroundedRegions');

describe('surroundedRegions', () => {
    const testCases = [
        {
            board: [
                ["X", "X", "X", "X"],
                ["X", "O", "O", "X"],
                ["X", "X", "O", "X"],
                ["X", "O", "X", "X"],
            ],
            updatedBoard: [
                ["X", "X", "X", "X"],
                ["X", "X", "X", "X"],
                ["X", "X", "X", "X"],
                ["X", "O", "X", "X"],
            ]
        },
        {
            board: [
                ["X", "O", "X", "X"],
                ["X", "O", "O", "X"],
                ["X", "X", "O", "X"],
                ["X", "O", "X", "X"],
            ],
            updatedBoard: [
                ["X", "O", "X", "X"],
                ["X", "O", "O", "X"],
                ["X", "X", "O", "X"],
                ["X", "O", "X", "X"],
            ]
        },
    ];

    itParam("should update board correctly", testCases, testCase => {
        surroundedRegions(testCase.board);
        expect(testCase.board).to.deep.equal(testCase.updatedBoard);
    });
});
