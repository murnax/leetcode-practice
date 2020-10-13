const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
require('../helper/treeNode');

const preorderTraversal = require('./144-binary-tree-preorder-traversal');

describe('in order traversal', () => {
    const testCases = [
        {
            root: [1, null, 2, null, null, 3].toBinaryTree(),
            result: [1, 2, 3]
        },
        {
            root: [1, 2, 3, 4, null, null, 5].toBinaryTree(),
            result: [1,2,4,3,5]
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4} should return ${value.result}", testCases, testCase => {
        expect(preorderTraversal(testCase.root)).to.deep.equal(testCase.result);
    })
});