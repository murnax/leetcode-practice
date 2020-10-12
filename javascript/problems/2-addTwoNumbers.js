/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    /*
    define steps:
    - define carry variable with 0 as value to store value when sum of two nodes greater than ten
    - define result variable
    - define currentNode variable
    - define while loop where l1 or l2 or carry are not falsy
        - define sum equal to l1.val (if any) + l2.val (if any) + carry
        - if sum greater than 10
            - mode sum with 10 to get placed value and set carry to one to be used on next loop
        - else
            - reset carry back to zero
        - create node with sum as a value
        - if result is null
            - result = currentNode = node
        - else
            - currentNode.next = node
            - set currentNode as node to move cursor to next node in result list
        - move l1 and l2 to next node if any
    - return result
    */
    
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
};