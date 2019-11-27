const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const minCostClimbingStairs = require('./746-minCostClimbingStairs');

describe('minCostClimbingStairs(n)', () => {
	const testCases = [
		{
			cost: [10, 15, 20],
			result: 15
		},
		{
			cost: [0, 0, 0, 1],
			result: 0
		},
		{
			cost: [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
			result: 6
		},

	];

	itParam("cost = ${value.cost} should return ${value.result}", testCases, testCase => {
		expect(minCostClimbingStairs(testCase.cost)).to.equal(testCase.result);
	});
});