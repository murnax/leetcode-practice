const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const orangesRotting = require('./994-orangesRotting');

describe('orangesRotting', () => {
	const testCases = [
		{
			grid: [[2, 1, 1], [1, 1, 0], [0, 1, 1]],
			result: 4,
		},
		{
			grid: [[2, 1, 1], [0, 1, 1], [1, 0, 1]],
			result: -1
		},
		{
			grid: [[0, 2]],
			result: 0
		},
	];

	itParam("grid = ${value.grid} should return ${value.result}", testCases, testCase => {
		expect(orangesRotting(testCase.grid)).to.equal(testCase.result);
	});
});