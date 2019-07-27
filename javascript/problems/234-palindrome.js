/**
 * 1) Understand the problem
 * Is linked list still having the same value after reversed
 * 
 * Input: linked list
 * Output: boolean
 * 
 * Time complexity should be O(n)
 * Space complexity should be O(1)
 * 
 * 2) Explore concrete examples
 * 
 * 1->2->3 = false
 * 1->2->2->1 = true
 * 1 = true
 * null = true
 * 
 * Can value in list node contains string? Yes
 * 
 * 3) Break it down
 * if head is null, return true
 * if head.next is null, return true
 * 
 * set forwardStr, backwardStr
 * traverse through linked list to build forwardStr and backStr
 *    forwardStr = forwardStr + node.val
 *    backwardStr = node.val + backwardStr
 * return forwardStr === backwardStr
 * 
 * forwarStr === forwardStr.split('').reverse().join('')
 * 
 */
var isPalindrome = function (head) {
    if (!head || !head.next) return true;

    let forwardStr = '', backwardStr = '', current = head;
    while (current) {
        forwardStr = forwardStr + current.val;
        backwardStr = current.val + backwardStr;
        current = current.next;
    }
    return forwardStr === backwardStr;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(3);
list.next.next.next.next = new ListNode(2);
list.next.next.next.next.next = new ListNode(1);
console.log(isPalindrome(list));