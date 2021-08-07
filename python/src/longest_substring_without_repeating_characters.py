class LongestSubstringWithoutRepeatingCharacters:

    def solution(self, s: str) -> int:
        start = end = 0
        map = {}
        result = 0

        while end < len(s):            
            c = s[end]
            end += 1
            if c not in map:
                result = max(result, end - start)
            map[c] = map[c] + 1 if c in map else 1

            while map[c] != 1:                
                c2 = s[start]
                start += 1
                map[c2] -= 1
                if map[c2] == 0:
                    del map[c2]
        return result

    # https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1731/A-Python-solution-85ms-O(n)
    def solution2(self, s: str) -> int:
        start = maxLength = 0
        usedChar = {}

        for i in range(len(s)):
            if s[i] in usedChar and start <= usedChar[s[i]]:
                start = usedChar[s[i]] + 1
            else:
                maxLength = max(maxLength, i - start + 1)
            usedChar[s[i]] = i

        return maxLength