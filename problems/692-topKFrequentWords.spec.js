const chai = require('chai');
const expect = chai.expect;
const itParam = require('mocha-param');
const topKFrequentWords = require('./692-topKFrequentWords');

describe('topKFrequentWords', () => {
    const testCases = [
        {
            words: ["i", "love", "leetcode", "i", "love", "coding"],
            k: 2,
            result: ['i', 'love']
        },
        {
            words: ["i", "love", "leetcode", "i", "love", "coding"],
            k: 3,
            result: ["i", "love", "coding"]
        },
        {
            words: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
            k: 4,
            result: ["the", "is", "sunny", "day"]
        },
        {
            words: ["plpaboutit", "jnoqzdute", "sfvkdqf", "mjc", "nkpllqzjzp", "foqqenbey", "ssnanizsav", "nkpllqzjzp", "sfvkdqf", "isnjmy", "pnqsz", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "cyxwlef", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "sfvkdqf", "mjc", "fvvdtpnzx", "bwumsj", "foqqenbey", "isnjmy", "nkpllqzjzp", "hhqpvvt", "foqqenbey", "fvvdtpnzx", "bwumsj", "hhqpvvt", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "foqqenbey", "jnoqzdute", "foqqenbey", "hhqpvvt", "ssnanizsav", "mjc", "foqqenbey", "bwumsj", "ssnanizsav", "fvvdtpnzx", "nkpllqzjzp", "jkqonvenhx", "hhqpvvt", "mjc", "isnjmy", "bwumsj", "pnqsz", "hhqpvvt", "nkpllqzjzp", "jnoqzdute", "pnqsz", "nkpllqzjzp", "jnoqzdute", "foqqenbey", "nkpllqzjzp", "hhqpvvt", "fvvdtpnzx", "plpaboutit", "jnoqzdute", "sfvkdqf", "fvvdtpnzx", "jkqonvenhx", "jnoqzdute", "nkpllqzjzp", "jnoqzdute", "fvvdtpnzx", "jkqonvenhx", "hhqpvvt", "isnjmy", "jkqonvenhx", "ssnanizsav", "jnoqzdute", "jkqonvenhx", "fvvdtpnzx", "hhqpvvt", "bwumsj", "nkpllqzjzp", "bwumsj", "jkqonvenhx", "jnoqzdute", "pnqsz", "foqqenbey", "sfvkdqf", "sfvkdqf"],
            k: 1,
            result: ["fvvdtpnzx"]
        }
    ];

    itParam("words = [${value.words}], k = ${value.k} should return ${value.result}", testCases, testCase => {
        expect(topKFrequentWords(testCase.words, testCase.k)).to.deep.equal(testCase.result);
    });
});
