const chai = require('chai');
const expect = chai.expect;
const longestPalindrome = require('./longestPalindrome');

describe('longestPalindrome()', () => {
    it('longestPalindrome("abccccdd") should return 7', done => {
        expect(longestPalindrome("abccccdd")).to.equal(7);
        done();
    });
});