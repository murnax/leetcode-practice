const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const isSubsequence = require('./392-isSubsequence');

describe('isSubsequence', () => {

	const testCases = [
		{
			s: "abc",
			t: "ahbgdc",
			result: true,
		},
		{
			s: "axc",
			t: "ahbgdc",
			result: false,
		},
	];

	itParam("s = ${value.s} and t = ${value.t} should return ${value.result}", testCases, testCase => {
		expect(isSubsequence(testCase.s, testCase.t)).to.equal(testCase.result);
	});
});