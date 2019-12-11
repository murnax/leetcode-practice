const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const bestTimeToBuyAndSellStock = require('./121-bestTimeToBuyAndSellStock');

describe('bestTimeToBuyAndSellStock()', () => {
	const testCases = [
		{
			prices: [7, 1, 5, 3, 6, 4],
			result: 5
		},
		{
			prices: [7, 6, 4, 3, 1],
			result: 0
		},
	];

	itParam("prices = ${value.prices} should return ${value.result}", testCases, testCase => {
		expect(bestTimeToBuyAndSellStock(testCase.prices)).to.equal(testCase.result);
	});
});
