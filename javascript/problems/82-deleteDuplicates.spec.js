const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const deleteDuplicates = require('./82-deleteDuplicates');
const { arrayToLinkedList, linkedListToArray } = require('../helper/linkedList');

describe('deleteDuplicates()', () => {
	const testCases = [
		{
			head: [1, 2, 3, 3, 4, 4, 5],
			result: [1, 2, 5]
		},
		{
			head: [1, 2, 3],
			result: [1, 2, 3]
		},
		{
			head: [1, 2, 2, 3],
			result: [1, 3]
		},
		{
			head: [1, 1, 2, 2, 3],
			result: [3]
		},
		{
			head: [1, 2, 3, 3, 3],
			result: [1, 2]
		},
		{
			head: [1, 1],
			result: []
		}
	];

	itParam("head = ${value.head.join('->')} should return ${value.result.join('->')}", testCases, testCase => {
		expect(linkedListToArray(deleteDuplicates(arrayToLinkedList(testCase.head)))).to.deep.equal(testCase.result);
	});
});
