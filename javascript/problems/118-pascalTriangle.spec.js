const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const pascalTriangle = require('./118-pascalTriangle');

describe('pascalTriangle()', () => {
	const testCases = [
		{
			numRows: 5,
			result: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
		},
	];

	itParam("numRows = ${value.numRows} should return ${value.result}", testCases, testCase => {
		expect(pascalTriangle(testCase.numRows)).to.deep.equal(testCase.result);
	});
});
