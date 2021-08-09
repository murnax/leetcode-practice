const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');

require('../helper/linkedList');
const { solution, solution2 } = require('./AddTwoNumbers');

describe('AddTwoNumbers', () => {
    const testCases = [
        {
            l1: [1,2,3].toLinkedList(),
            l2: [1,2,3].toLinkedList(),
            result: [2,4,6],
        },
    ];

    itParam("f(${value.param1}) should equal ${value.result}", testCases, t => {
        const actual = solution(t.l1, t.l2).toArray()
        expect(actual).to.deep.equal(t.result);
    });

    itParam("f2(${value.param1}) should equal ${value.result}", testCases, t => {
        const actual = solution2(t.l1, t.l2).toArray()
        expect(actual).to.deep.equal(t.result);
    });
});
