const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const { convertArrayToBinaryTree } = require('../helper/treeNode');

const inorderTraversal = require('./94-binary-tree-inorder-traversal');

describe('in order traversal', () => {
    const testCases = [
        {
            root: convertArrayToBinaryTree([1, null, 2, null, null, 3]),
            result: [1, 3, 2]
        },
        {
            root: convertArrayToBinaryTree([]),
            result: []
        },
        {
            root: convertArrayToBinaryTree([1, 2]),
            result: [2, 1]
        },
        {
            root: convertArrayToBinaryTree([1, null, 2]),
            result: [1, 2]
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4)} should return ${JSON.stringify(value.result, null)}", testCases, testCase => {
        expect(inorderTraversal(testCase.root)).to.deep.equal(testCase.result);
    });
});