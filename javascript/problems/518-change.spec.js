const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const change = require('./518-change');

describe('change(n)', () => {
	const testCases = [
		{
			coins: [1, 2, 5],
			amount: 5,
			result: 4
		},
		{
			coins: [1, 2],
			amount: 4,
			result: 3
		},
		{
			coins: [2],
			amount: 3,
			result: 0
		},
	];

	itParam("coins = ${value.coins}, amount = ${value.amount} should return ${value.result}", testCases, testCase => {
		expect(change(testCase.amount, testCase.coins)).to.equal(testCase.result);
	});
});