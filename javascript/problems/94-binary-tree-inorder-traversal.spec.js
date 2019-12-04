const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');

const inorderTraversal = require('./94-binary-tree-inorder-traversal');
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('in order traversal', () => {

    const input1 = new TreeNode(1);
    input1.right = new TreeNode(2);
    input1.right.left = new TreeNode(3);

    const testCases = [
        {
            root: input1,
            result: [1, 3, 2]
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4} should return ${value.result}", testCases, testCase => {
        expect(inorderTraversal(testCase.root)).to.equal(testCase.result);
    })
});