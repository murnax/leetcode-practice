const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const coinChange = require('./322-coinChange');

describe('coinChange(n)', () => {
	const testCases = [
		{
			coins: [1, 5, 10],
			amount: 16,
			result: 3
		},
		{
			coins: [1, 2, 5],
			amount: 11,
			result: 3
		},
		{
			coins: [2],
			amount: 3,
			result: -1
		},
	];

	itParam("coins = ${value.coins}, amount = ${value.amount} should return ${value.result}", testCases, testCase => {
		expect(coinChange(testCase.coins, testCase.amount)).to.equal(testCase.result);
	});
});