import unittest
from add_two_number import AddTwoNumber

from utility.list_node import ListNode

class AddTwoNumberTest(unittest.TestCase):
    def test_solution(self):
        testCases = [
            {
                "l1": ListNode.list_to_list_node([2, 4, 3]),
                "l2": ListNode.list_to_list_node([5, 6, 4]),
                "expected": [7, 0, 8]
            },
            {
                "l1": ListNode.list_to_list_node([0]),
                "l2": ListNode.list_to_list_node([0]),
                "expected": [0]
            },
            {
                "l1": ListNode.list_to_list_node([9,9,9,9,9,9,9]),
                "l2": ListNode.list_to_list_node([9,9,9,9]),
                "expected": [8,9,9,9,0,0,0,1]
            }
        ]

        for case in testCases:
            actual = AddTwoNumber.solution(self, case["l1"], case["l2"])
            self.assertListEqual(case["expected"], actual.to_list())

if __name__ == '__main__':
    unittest.main()
