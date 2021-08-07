from typing import List

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def to_list(self) -> List[int]:
        result = []
        currentNode = self
        while (currentNode is not None):
            result.append(currentNode.val)
            currentNode = currentNode.next
        return result

    @staticmethod
    def list_to_list_node(list: List[int]):
        result = None
        currentNode = None
        for i in list:
            node = ListNode(i)
            if result is None:
                result = currentNode = node
            else:
                currentNode.next = node
                currentNode = node
        return result
