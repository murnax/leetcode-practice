/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const { ListNode } = require('../helper/linkedList')

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
	let result = new ListNode(null);
	let curr = result;
	let next = head;
	let nextTwo = next ? next.next : null;
	while (next) {
		if (!nextTwo) {
			curr.next = new ListNode(next.val);
			break;
		}

		if (next.val !== nextTwo.val) {
			curr = curr.next = new ListNode(next.val);
			nextTwo = nextTwo.next;
			next = next.next;
		} else if (next.val === nextTwo.val) {
			do {
				nextTwo = nextTwo.next;
			} while (nextTwo && next.val === nextTwo.val);
			if (!nextTwo) break;
			next = nextTwo;
			nextTwo = nextTwo.next;
		}
	}
	return result.next;
};
module.exports = deleteDuplicates;