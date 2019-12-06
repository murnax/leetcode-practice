class ListNode {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function arrayToLinkedList(arr) {
	let dummy = new ListNode(null);
	let curr = dummy;
	for (let elem of arr) {
		curr.next = new ListNode(elem);
		curr = curr.next;
	}
	return dummy.next;
}

function linkedListToArray(node) {
	let result = [];
	while (node) {
		result.push(node.val);
		node = node.next;
	}
	return result;
}

exports.ListNode = ListNode;
exports.arrayToLinkedList = arrayToLinkedList;
exports.linkedListToArray = linkedListToArray;