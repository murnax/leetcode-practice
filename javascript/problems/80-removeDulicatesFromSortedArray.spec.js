const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const removeDulicatesFromSortedArray = require('./80-removeDulicatesFromSortedArray');

describe('removeDulicatesFromSortedArray()', () => {
	const testCases = [
		{
			nums: [1, 1, 1, 2, 2, 3],
			result: 5,
			updatedNums: [1, 1, 2, 2, 3]
		},
		// {
		// 	nums: [0, 0, 1, 1, 1, 1, 2, 3, 3],
		// 	result: 7
		// },
		// {
		// 	nums: [1, 1, 1, 1, 1],
		// 	result: 2
		// },
		// {
		// 	nums: [1, 1, 1, 2, 2, 2, 3, 3, 3],
		// 	result: 6
		// }
	];

	// itParam("nums = ${value.nums} should return ${value.result}", testCases, testCase => {
	// 	expect(removeDulicatesFromSortedArray(testCase.nums)).to.equal(testCase.result);
	// 	expect(testCase.nums).to.deep.equal(testCase.updatedNums);
	// });
});
