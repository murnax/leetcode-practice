const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const validPalindrome = require('./680-valid-palindrome-ii');

describe('validPalindrome', () => {
	const testCases = [
		{
			input: "aba",
			result: true
		},
		{
			input: "abca",
			result: true
		},
		{
			input: "abc",
			result: false
		},
	];

	itParam("input = [${value.input}] should return ${value.result}", testCases, testCase => {
		expect(validPalindrome(testCase.input)).to.deep.equal(testCase.result);
	});
});
