const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
require('../helper/treeNode');

const inorderTraversal = require('./94-binary-tree-inorder-traversal');

describe('in order traversal', () => {
    const testCases = [
        {
            root: [1, null, 2, null, null, 3].toBinaryTree(),
            result: [1, 3, 2]
        },
        {
            root: [].toBinaryTree(),
            result: []
        },
        {
            root: [1, 2].toBinaryTree(),
            result: [2, 1]
        },
        {
            root: [1, null, 2].toBinaryTree(),
            result: [1, 2]
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4)} should return ${JSON.stringify(value.result, null)}", testCases, testCase => {
        expect(inorderTraversal(testCase.root)).to.deep.equal(testCase.result);
    });
});