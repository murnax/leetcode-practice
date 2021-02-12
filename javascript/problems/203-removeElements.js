/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // while (head !== null && head.val === val) {
    //     head = head.next;
    // }
    // if (head === null) return null;
    // let pre = head, current = head.next;
    // while (current !== null) {
    //     if (current.val === val) {
    //         pre.next = current.next;
    //     } else {
    //         pre = pre.next;
    //     }
    //     current = current.next;
    // }
    // return head;

    while (head !== null && head.val === val) {
        head = head.next;
    }
    if (!head) return null;
    let pre = head, current = head.next;
    while (current) {
        if (current.val === val) {
            pre.next = current.next;
        } else {
            pre = pre.next;
        }
        current = current.next;
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(2);
list.next.next.next = new ListNode(1);
// list.next.next.next.next = new ListNode(5);
// list.next.next.next.next.next = new ListNode(6);
