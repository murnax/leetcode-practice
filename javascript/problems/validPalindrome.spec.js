const chai = require('chai');
const expect = chai.expect;
const validPalindrome = require('./validPalindrome');

describe('validPalindrome()', () => {
    it('validPalindrome("aba") should return true', done => {
        expect(validPalindrome("aba")).to.be.true;
        done();
    });

    it('validPalindrome("abca") should return true', done => {
        expect(validPalindrome("abca")).to.be.true;
        done();
    });

    it('validPalindrome("abcbeebba") should return true', done => {
        expect(validPalindrome("abcbeebba")).to.be.true;
        done();
    });

    it('validPalindrome("eabbcbbe") should return true', done => {
        expect(validPalindrome("eabbcbbe")).to.be.true;
        done();
    });

    it('validPalindrome("abc") should return false', done => {
        expect(validPalindrome("abc")).to.be.false;
        done();
    });

    it('validPalindrome("cbbcc") should return true', done => {
        expect(validPalindrome("cbbcc")).to.be.true;
        done();
    });

    it('validPalindrome("eeccccbebaeeabebccceea") should return false', done => {
        expect(validPalindrome("eeccccbebaeeabebccceea")).to.be.false;
        done();
    });

    it('validPalindrome("xdddbababeccebababddd") should return true', done => {
        expect(validPalindrome("xdddbababeccebababddd")).to.be.true;
        done();
    });

    it('validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga") should return true', done => {
        expect(validPalindrome("aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga")).to.be.true;
        done();
    });

});