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
	let next2 = next ? next.next : null;
	while (next) {
		if (next.val !== next2.val) {
			curr = curr.next = new ListNode(next.val);
			next2 = next2.next;
			next = next.next;
		} else if (next.val === next2.val) {
			do {
				next2 = next2.next;
			} while (next2 && next.val === next2.val);
			if (!next2) break;
			next = next2;
			next2 = next2.next;
		}

		if (!next2) {
			curr.next = new ListNode(next.val);
			break;
		}
	}
	return result.next;
};
module.exports = deleteDuplicates;