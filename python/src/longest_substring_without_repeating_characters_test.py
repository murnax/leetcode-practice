import unittest

from longest_substring_without_repeating_characters import LongestSubstringWithoutRepeatingCharacters

class LongestSubstringWithoutRepeatingCharactersTest(unittest.TestCase):
    def test_solution(self):
        testCases = [
            {
                "s": "abcabcbb",
                "expected": 3
            },
            {
                "s": "bbbbb",
                "expected": 1
            },
            {
                "s": "pwwkew",
                "expected": 3
            },
            {
                "s": "",
                "expected": 0
            }
        ]

        for case in testCases:
            actual = LongestSubstringWithoutRepeatingCharacters.solution(self, case["s"])
            actual2 = LongestSubstringWithoutRepeatingCharacters.solution2(self, case["s"])

            self.assertEqual(case["expected"], actual)
            self.assertEqual(case["expected"], actual2)

if __name__ == '__main__':
    unittest.main()
