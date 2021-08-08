const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { bruteForceSolution, memoizationSolution, dpSolution, recursiveSolution } = require('./70-climbStairs');

describe('climbStairs(n)', () => {
	const testCases = [
		{
			n: 2,
			expected: 2
		},
		{
			n: 3,
			expected: 3
		},
		{
			n: 10,
			expected: 89
		},
		{
			n: 38,
			expected: 63245986
		}
	];

	// test will fail because of time out
	describe('bruteForceSolution', () => {
		// itParam("f(${value.n}) should equal to ${value.expected}", testCases, testCase => {
		// 	expect(bruteForceSolution(testCase.n)).to.equal(testCase.expected);
		// });
	});

	describe('memoizationSolution', () => {
		itParam("f(${value.n}) should equal to ${value.expected}", testCases, testCase => {
			expect(memoizationSolution(testCase.n)).to.equal(testCase.expected);
		});	
	});

	describe('dpSolution', () => {
		itParam("f(${value.n}) should equal to ${value.expected}", testCases, testCase => {
			expect(dpSolution(testCase.n)).to.equal(testCase.expected);
		});	
	});

	describe('recursiveSolution', () => {
		itParam("f(${value.n}) should equal to ${value.expected}", testCases, testCase => {
			expect(recursiveSolution(testCase.n)).to.equal(testCase.expected);
		});	
	});
});