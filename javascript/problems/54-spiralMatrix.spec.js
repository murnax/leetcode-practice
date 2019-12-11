const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const spiralMatrix = require('./54-spiralMatrix');

describe('spiralMatrix()', () => {
	const testCases = [
		{
			matrix: [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			],
			result: [1, 2, 3, 6, 9, 8, 7, 4, 5]
		},
		{
			matrix: [
				[1, 2, 3, 4],
				[5, 6, 7, 8],
				[9, 10, 11, 12]
			],
			result: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
		},
		{
			matrix: [[7], [9], [6]],
			result: [7, 9, 6]
		}
	];

	itParam("matrix = ${value.matrix} should return ${value.result}", testCases, testCase => {
		expect(spiralMatrix(testCase.matrix)).to.deep.equal(testCase.result);
	});
});
