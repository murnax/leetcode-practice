/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Naive solution
// Time complexity: O(n)
// Space complexity: O(1)

// var middleNode = function (head) {
//     let totalNode = 0;
//     let current = head;
//     while (current) {
//         totalNode++;
//         current = current.next;
//     }

//     current = head;
//     let position = 1;
//     const middle = totalNode % 2 === 0 ? totalNode / 2 + 1 : Math.ceil(totalNode / 2);
//     while (current) {
//         if (position === middle) {
//             return current;
//         }
//         current = current.next;
//         position++;
//     }
// };

// https://leetcode.com/problems/middle-of-the-linked-list/discuss/232995/Javascript-brute-force-elegant
// function middleNode(head) {
//     if (!head.next) return head;
//     let count = 0, pointer = head, result = head;
//     while (pointer) {
//         count++;
//         pointer = pointer.next;
//     }
//     count = Math.floor(count / 2);
//     while (count > 0) {
//         count--;
//         result = result.next;
//     }
//     return result;
// }

// https://leetcode.com/problems/middle-of-the-linked-list/discuss/187550/Javascript-two-pointer-solution
function middleNode(head) {
    if (!head.next) return head;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);
list.next.next.next.next.next = new ListNode(6);
console.log(middleNode(list));