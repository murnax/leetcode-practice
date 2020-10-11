using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class ThreeSum
    {
        public static IList<IList<int>> Solution(int[] nums)
        {
            IList<IList<int>> result = new List<IList<int>>();
            Array.Sort(nums);

            for (int i = 0; i < nums.Length - 2; i++)
            {
                int l = i + 1;
                int r = nums.Length - 1;
                while (l < r)
                {
                    if (nums[i] == 0 - nums[l] - nums[r])
                    {
                        result.Add(new List<int> { nums[i], nums[l], nums[r] });

                        while (l < r && nums[l] == nums[l + 1]) l++;
                        while (l < r && nums[r] == nums[r - 1]) r--;

                        l++;
                        r--;
                    }
                    else if (nums[i] < 0 - nums[l] - nums[r])
                    {
                        l++;
                    }
                    else
                    {
                        r--;
                    }
                }
                while (i < nums.Length - 1 && nums[i] == nums[i + 1]) i++;
            }
            return result;
        }
    }
}
