const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const permutation = require('./46-permutation');

describe('permutation()', () => {
	const testCases = [
		{
			nums: [1,2,3],
			result: [
                [1,2,3],
                [1,3,2],
                [2,1,3],
                [2,3,1],
                [3,1,2],
                [3,2,1]
              ]
		}
	];

	itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
		expect(permutation(testCase.nums)).to.deep.equal(testCase.result);
	});
});
