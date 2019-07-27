/**
 * 1) Understand the problem
 * 
 * Given linked list, return reversed one
 * 
 * Input: linked list
 * Output: linked list
 * 
 * 2) Explore concrete examples
 * 
 * 1->2->3->4->null = 4->3->2->1->null
 * hello->how->are->you->null = you->are->how->hello->null
 * 
 * 3) Break it down
 * if head is null, return null
 * if head.next is null, return head
 * set result to null
 * traverse through linked list
 *   new node from loop value
 *   if result is null 
 *      set node to result
 *   else
 *      set node.next = result
 *      result = node
 * return result
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return null;
    if (!head.next) return head;
    let result, current = head;
    while (current) {
        const node = new ListNode(current.val);
        if (!result) {
            result = node;
        } else {
            node.next = result;
            result = node;
        }
        current = current.next;
    }
    return result;
};

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
console.log(reverseList(list));