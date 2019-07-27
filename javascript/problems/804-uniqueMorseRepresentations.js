/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    const encodedChars = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    return new Set(words.map(n => n.split('').map(m => encodedChars[m.charCodeAt(0) - 96 - 1]).join(''))).size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

