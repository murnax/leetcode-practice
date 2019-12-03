const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const trap = require('./42-trap');

describe('trap()', () => {
	const testCases = [
		{
			heights: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
			result: 6
		},
		{
			heights: [2, 0, 2],
			result: 2
		}
	];

	itParam("heights = ${value.heights} should return ${value.result}", testCases, testCase => {
		expect(trap(testCase.heights)).to.equal(testCase.result);
	});
});
