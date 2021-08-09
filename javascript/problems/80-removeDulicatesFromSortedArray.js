/**
 * @param {number[]} nums
 * @return {number}
 */
// @TODO: finish the implementation
var removeDuplicates = function (nums) {
	// failed need to modify in-place
	// let s = 0;
	// let f = 0;
	// while (f < nums.length) {
	// 	if (nums[s] !== nums[f]) {
	// 		const leftSide = nums.slice(0, s + ((f - s >= 2) ? 2 : 1));
	// 		const rightSide = nums.slice(f)
	// 		nums = [...leftSide, ...rightSide];
	// 		s = f = leftSide.length;
	// 	}
	// 	f++;
	// }
	// nums = [...nums.slice(0, s + ((f - s >= 2) ? 2 : 1)), ...nums.slice(f)];
	// return nums.length;

	//     f
	// [1, 1, 1, 2, 2, 3]
	//  s

	// we need to know how many times we met nums[f] value.
	// the moment when we meet nums[f] more than two times
	// we should move slow pointer to that index, so that when
	// the moment we meet new nums[f], we can move the value to that slow pointer index
	// and we will move 

	/* 
	define steps:
	- define two pointers: fast (f) = 1, slow (s) = 0
	- loop through nums using f
		- if nums[f] equal to nums[s] and f - s <= 2
			- move s
		- else not equal

	- increse f by one
	*/
	let s = 0, f = 0;
	let count = 0;
	while (f < nums.length) {
		if (nums[f] === nums[s]) {
			count++;
			s++;
		} else {

		}
		f++;
	}
};
module.exports = removeDuplicates;