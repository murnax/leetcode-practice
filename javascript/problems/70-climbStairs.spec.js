const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const climbStairs = require('./70-climbStairs');

describe('climbStairs(n)', () => {
	const testCases = [
		{
			n: 2,
			result: 2
		},
		{
			n: 3,
			result: 3
		},
		{
			n: 10,
			result: 89
		},
		{
			n: 38,
			result: 63245986
		}
	];

	itParam("n = ${value.n} should return ${value.result}", testCases, testCase => {
		expect(climbStairs(testCase.n)).to.equal(testCase.result);
	});
});