from typing import List

class TwoSum:
    def solution(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for i, v in enumerate(nums):
            if target - nums[i] in map:
                return [map[target - nums[i]], i]
            else:
                map[nums[i]] = i
