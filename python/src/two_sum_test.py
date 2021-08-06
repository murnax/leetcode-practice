import two_sum
import unittest

class TestTwoSum(unittest.TestCase):
    def test_solution(self):
        testCases = [
            {
                "nums": [2,7,11,15],
                "target": 9,
                "expected": [0, 1]
            },
            {
                "nums": [3,2,4],
                "target": 6,
                "expected": [1, 2]
            },
            {
                "nums": [3,3],
                "target": 6,
                "expected": [0, 1]
            },
        ]

        for case in testCases:
            actual = two_sum.TwoSum.solution(self, case["nums"], case["target"])
            self.assertListEqual(case["expected"], actual, )

if __name__ == '__main__':
    unittest.main()
