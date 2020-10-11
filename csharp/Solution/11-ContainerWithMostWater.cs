using System;

namespace Solution
{
    public class ContainerWithMostWater
    {
        public static int Solution(int[] height)
        {
            int result = 0, i = 0, j = height.Length - 1;
            while (i < j)
            {
                int area = Math.Min(height[i], height[j]) * (j - i);
                result = Math.Max(result, area);
                if (height[i] < height[j]) i++;
                else j--;
            }
            return result;
        }
    }
}
