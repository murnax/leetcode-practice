const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const findSubstring = require('./30-substring-with-concatenation-of-all-words');

describe('findSubstring()', () => {
	const testCases = [
		{
			s: "barfoothefoobarman",
			words: ["foo", "bar"],
			result: [0, 9],
		},
		{
			s: "wordgoodgoodgoodbestword",
			words: ["word", "good", "best", "word"],
			result: []
		},
		{
			s: "barfoofoobarthefoobarman",
			words: ["bar", "foo", "the"],
			result: [6, 9, 12]
		},
		{
			s: "ababaab",
			words: ["ab", "ba", "ba"],
			result: [1],
		}
	];

	itParam("s = ${value.s}, words = ${value.words} should return ${value.result}", testCases, testCase => {
		expect(findSubstring(testCase.s, testCase.words)).to.deep.equal(testCase.result);
	});
});
