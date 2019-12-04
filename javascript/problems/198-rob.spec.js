const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const rob = require('./198-rob');

describe('rob()', () => {
	const testCases = [
		{
			nums: [1, 2, 3, 1],
			result: 4
		},
		{
			nums: [2, 7, 9, 3, 1],
			result: 12
		},
		{
			nums: [],
			result: 0
		},
		{
			nums: [2, 1],
			result: 2
		},
		{
			nums: [2, 1, 1, 2],
			result: 4
		}
	];

	itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
		expect(rob(testCase.nums)).to.deep.equal(testCase.result);
	});
});