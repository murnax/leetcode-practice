const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const deleteDuplicates = require('./82-deleteDuplicates');
require('../helper/linkedList');

describe('deleteDuplicates()', () => {
	const testCases = [
		{
			head: [1, 2, 3, 3, 4, 4, 5].toLinkedList(),
			result: [1, 2, 5]
		},
		{
			head: [1, 2, 3].toLinkedList(),
			result: [1, 2, 3]
		},
		{
			head: [1, 2, 2, 3].toLinkedList(),
			result: [1, 3]
		},
		{
			head: [1, 1, 2, 2, 3].toLinkedList(),
			result: [3]
		},
		{
			head: [1, 2, 3, 3, 3].toLinkedList(),
			result: [1, 2]
		},
		{
			head: [1, 1].toLinkedList(),
			result: []
		},
		{
			head: [1].toLinkedList(),
			result: [1]
		}
	];

	itParam("head = ${value.head.toString()} should return ${value.result.join('->')}", testCases, testCase => {
		const output = deleteDuplicates(testCase.head);
		expect(output ? output.toArray() : []).to.deep.equal(testCase.result);
	});
});
