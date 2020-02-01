const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const subset2 = require('./90-subset2');

describe('subset2()', () => {
	const testCases = [
		{
			nums: [1,2,2],
			result: [
                [],
                [1],
                [1,2],
                [1,2,2],
                [2],
                [2,2],
            ]
		}
	];

	itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
		expect(subset2(testCase.nums)).to.deep.equal(testCase.result);
	});
});
