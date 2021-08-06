from utility.list_node import ListNode

class AddTwoNumber:
    def solution(self, l1: ListNode, l2: ListNode) -> ListNode:
        carry = 0
        result = None
        currentNode = None
        while (l1 is not None or l2 is not None or carry):
            sum = (l1.val if l1 else 0) + (l2.val if l2 else 0) + carry
            if sum >= 10:
                carry = 1
                sum %= 10
            else:
                carry = 0
            node = ListNode(sum)
            if result is None:
                result = currentNode = node
            else:
                currentNode.next = node
                currentNode = node
            l1 = (l1.next if l1 else None)
            l2 = (l2.next if l2 else None)

        return result

l1 = ListNode(1, ListNode(2, ListNode(3)))
l2 = ListNode(5)
result = AddTwoNumber().solution(l1, l2)