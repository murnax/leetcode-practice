const chai = require('chai');
const expect = chai.expect;
const longestPalindrome = require('./409-longestPalindrome');

describe('longestPalindrome()', () => {
    it('longestPalindrome("abccccdd") should return 7', done => {
        expect(longestPalindrome("abccccdd")).to.equal(7);
        done();
    });
});