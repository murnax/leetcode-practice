const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const minWindow = require('./76-minWindow');

describe('minWindow(s, t)', () => {
	const testCases = [
		{
			s: "ADOBECODEBANC",
			t: "ABC",
			result: 'BANC'
		},
		{
			s: 'A',
			t: 'A',
			result: 'A'
		}
	];

	itParam("s = ${value.s}, t = ${value.t} should return ${value.result}", testCases, testCase => {
		expect(minWindow(testCase.s, testCase.t)).to.equal(testCase.result);
	});
});