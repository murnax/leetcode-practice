const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');

const preorderTraversal = require('./144-binary-tree-preorder-traversal');
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('in order traversal', () => {

    const input1 = new TreeNode(1);
    input1.right = new TreeNode(2);
    input1.right.left = new TreeNode(3);

    const input2 = new TreeNode(1);
    input2.left = new TreeNode(2);
    input2.right = new TreeNode(3);
    input2.left.left = new TreeNode(4);
    input2.right.right = new TreeNode(5);

    const testCases = [
        {
            root: input1,
            result: [1, 2, 3]
        },
        {
            root: input2,
            result: [1,2,4,3,5]
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4} should return ${value.result}", testCases, testCase => {
        expect(preorderTraversal(testCase.root)).to.deep.equal(testCase.result);
    })
});