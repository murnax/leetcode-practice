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
var detectCycle = function (head) {
    // slow = tortoise, fast = hare
    let slow = head, fast = head;

    // The moment where fast and slow are pointing to the same
    // object that where we know there is cycle in linked list.
    // Because by moving fast 2 steps and move slow 1 step per iteration,
    // there is no way these two pointers could meet if it's not cycle.
    while (fast) {
        if ((fast = fast.next) === slow) return true;
        if (fast && (fast = fast.next) === slow) return true;
        if (!fast || !fast.next) return false;
        slow = slow.next;
    }
    return false;
};
module.exports = detectCycle;
