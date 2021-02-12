using System.Linq;

namespace Solution {
    public class RunningSumOf1dArray {
        public static int[] Solution(int[] nums) 
        {
            for (int i = 1; i < nums.Length; i++) 
            {
                nums[i] += nums[i - 1];
            }
            return nums;
        }
    }
}
