const chai = require('chai');
const expect = chai.expect;
const isPalindromeNumber = require('./9-isPalindromeNumber');

describe('isPalindromeNumber()', () => {
    it('isPalindromeNumber(121) should return true', done => {
        expect(isPalindromeNumber(121)).to.be.true;
        done();
    });

    it('isPalindromeNumber(-121) should return true', done => {
        expect(isPalindromeNumber(-121)).to.be.false;
        done();
    });
});