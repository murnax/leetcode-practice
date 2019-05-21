const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');

const isValidBST = require('./98-isValidBST');
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

describe('isValidBST()', () => {
    const input1 = new TreeNode(2);
    input1.left = new TreeNode(1);
    input1.right = new TreeNode(3);

    const input2 = new TreeNode(5);
    input2.left = new TreeNode(1);
    input2.right = new TreeNode(4);
    input2.right.left = new TreeNode(3);
    input2.right.right = new TreeNode(6);

    const input3 = new TreeNode(10);
    input3.left = new TreeNode(5);
    input3.right = new TreeNode(15);
    input3.right.left = new TreeNode(6);
    input3.right.right = new TreeNode(20);

    const testCases = [
        {
            root: input1,
            result: true
        },
        {
            root: input2,
            result: false
        },
        {
            root: input3,
            result: false
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4)} should return ${value.result}", testCases, testCase => {
        expect(isValidBST(testCase.root)).to.equal(testCase.result);
    });
});