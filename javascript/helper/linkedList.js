class ListNode {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}

	toArray() {
		let node = this;
		const result = [];
		while (node) {
			result.push(node.val);
			node = node.next;
		}
		return result;
	}

	toString() {
		return this.toArray().join('->');
	}
}

Array.prototype.toLinkedList = function() {
	let dummy = new ListNode(null);
	let current = dummy;
	for (let elem of this) {
		current.next = new ListNode(elem);
		current = current.next;
	}
	return dummy.next;
}

exports.ListNode = ListNode;