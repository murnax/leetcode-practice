using System;
using System.Collections.Generic;
using System.Text;

namespace Leetcode
{
    public class TwoSumSolution
    {
        public int[] Solution(int[] nums, int target)
        {
            var map = new Dictionary<int, int>();
            for (var i = 0; i < nums.Length; i++)
            {
                if (map.ContainsKey(target - nums[i])) return new int[2] { map[target - nums[i]], i };
                else map[nums[i]] = i;
            }
            return new int[0];
        }
    }
}
