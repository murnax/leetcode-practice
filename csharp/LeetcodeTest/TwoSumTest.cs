using Leetcode;
using Xunit;

namespace LeetcodeTest
{
    public class TwoSumTest
    {
        [Theory]
        [InlineData(new int[] { 2, 7, 11, 15 }, 9, new int[] { 0, 1 })]
        public void TestMethod(int[] nums, int target, int[] output)
        {
            Assert.Equal(output, new TwoSumSolution().Solution(nums, target));
        }
    }
}
