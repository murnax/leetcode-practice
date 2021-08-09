// Problem ID: 2
// URL: https://leetcode.com/problems/add-two-numbers/

const { ListNode } = require('../helper/linkedList');

const solution = (l1, l2) => {
    let carry = 0;
    let result;
    let currentNode;
    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        if (sum >= 10) {
            sum %= 10;
            carry = 1;
        } else {
            carry = 0;
        }
        let node = new ListNode(sum);
        if (!result) {
            result = currentNode = node;
        } else {
            currentNode.next = node;
            currentNode = node;
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    
    return result;
}

const solution2 = (l1, l2, c = 0) => {
    if (!l1 && !l2) return c ? new ListNode(c) : null;
    if (l1 && !l2) return new ListNode((l1.val + c) % 10, solution2(l1.next, null, Math.floor((l1.val + c) / 10)))
    if (!l1 && l2) return new ListNode((l2.val + c) % 10, solution2(null, l2.next, Math.floor((l2.val + c) / 10)))
    return new ListNode((l1.val + l2.val + c) % 10, solution2(l1.next, l2.next, Math.floor((l1.val + l2.val + c) / 10)))
}

module.exports = {
    solution,
    solution2,
};
