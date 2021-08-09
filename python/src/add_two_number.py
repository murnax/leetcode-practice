import math
from utility.list_node import ListNode

class AddTwoNumber:
    def solution(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        result = None
        currentNode = None
        while l1 or l2 or carry:
            sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
            if sum >= 10:
                carry = 1
                sum %= 10
            else:
                carry = 0
            node = ListNode(sum)
            if not result:
                result = currentNode = node
            else:
                currentNode.next = node
                currentNode = node
            l1 = (l1.next if l1 else None)
            l2 = (l2.next if l2 else None)
        return result

    def solution2(self, l1: ListNode, l2: ListNode, c: int = 0) -> ListNode:
        if not l1 and not l2:
            return ListNode(c) if c else None
        if l1 and not l2:
            return ListNode((l1.val + c) % 10, self.solution2(l1.next, None, math.floor((l1.val + c) / 10)))
        if not l1 and l2:
            return ListNode((l2.val + c) % 10, self.solution2(None, l2.next, math.floor((l2.val + c) / 10)))
        if l1 and l2: 
            return ListNode((l1.val + l2.val + c) % 10, self.solution2(l1.next, l2.next, math.floor((l1.val + l2.val + c) / 10)))
