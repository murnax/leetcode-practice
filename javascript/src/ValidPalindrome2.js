// problem id: 680
// url: https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
var solution = function (s) {
    let l = 0, r = s.length - 1;
	while (l <= r) {
		if (s[l] === s[r]) {
			l++;
			r--;
		} else {
			return helper(s, l + 1, r) || helper(s, l, r - 1);
		}
	}
	return true;

	function helper(s, leftCursor, rightCursor) {
		while (leftCursor <= rightCursor) {
			if (s[leftCursor++] !== s[rightCursor--]) return false;
		}
		return true;
	}
}

module.exports = {
	solution,
};
