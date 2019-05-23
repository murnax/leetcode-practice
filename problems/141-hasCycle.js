/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Floyd's cycle detection algorithm
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // edge case
    if (!head || !head.next) return false;

    // slow = tortoise, fast = hare
    let slow = head, fast = head;

    while (true) {
        if (fast) {
            // The moment where fast and slow are pointing to the same
            // object that where we know there is cycle in linked list.
            // Because by moving fast 2 steps and move slow 1 step per iteration,
            // there is no way these two pointers could meet if it's not cycle.
            if ((fast = fast.next) === slow) return true;
            if ((fast = fast.next) === slow) return true;
            if (!fast || !fast.next) return false;
            slow = slow.next;
        } else {
            return false;
        }
    }
};