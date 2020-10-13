const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
require('../helper/treeNode');

const isValidBST = require('./98-isValidBST');

describe('isValidBST()', () => {
    const testCases = [
        {
            root: [2, 1, 3].toBinaryTree(),
            result: true
        },
        {
            root: [5, 1, 4, null, null, 3, 6].toBinaryTree(),
            result: false
        },
        {
            root: [10, 5, 15, 6, 20].toBinaryTree(),
            result: false
        }
    ];

    itParam("root = ${JSON.stringify(value.root, null, 4)} should return ${value.result}", testCases, testCase => {
        expect(isValidBST(testCase.root)).to.equal(testCase.result);
    });
});