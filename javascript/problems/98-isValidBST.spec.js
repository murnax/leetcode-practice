const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { convertArrayToBinaryTree } = require('../helper/treeNode');

const isValidBST = require('./98-isValidBST');

describe('isValidBST()', () => {
    const testCases = [
        {
            root: convertArrayToBinaryTree([2, 1, 3]),
            result: true
        },
        {
            root: convertArrayToBinaryTree([5, 1, 4, null, null, 3, 6]),
            result: false
        },
        {
            root: convertArrayToBinaryTree([10, 5, 15, 6, 20]),
            result: false
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4)} should return ${value.result}", testCases, testCase => {
        expect(isValidBST(testCase.root)).to.equal(testCase.result);
    });
});