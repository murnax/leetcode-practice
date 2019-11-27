/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
*/
var findSubstring = function (s, words) {
	let result = [];
	if (!words.length) return result;

	let map = words.reduce((a, b) => { a[b] = ++a[b] || 1; return a; }, {});
	let referenceMap = Object.assign({}, map);
	let wordSize = words[0].length;
	let windowSize = wordSize * words.length;
	let counter = Object.keys(map).length;
	let begin = 0;
	let end = 0;

	if (s.length < windowSize) return result;

	for (let i = 0; i < wordSize; i++) {
		begin = end = i;
		map = referenceMap;
		counter = Object.keys(map).length;

		while (end + wordSize - 1 < s.length) {
			let lastWord = s.substr(end, wordSize);

			lastWord in map && --map[lastWord] === 0 && --counter;

			if (end + wordSize - begin === windowSize) {
				if (counter === 0) result.push(begin);

				let firstWord = s.substr(begin, wordSize);

				firstWord in map && ++map[firstWord] > 0 && ++counter;

				begin += wordSize;
			}

			end += wordSize;
		}
	}

	return result;
};
module.exports = findSubstring;