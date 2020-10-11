using Solution;
using Xunit;

namespace UnitTest
{
    public class ContainerWithMostWaterTest
    { 
        [Theory]
        [InlineData(new int[] { 1,8,6,2,5,4,8,3,7}, 49)]
        public void TestMethod(int[] height, int output)
        {
            Assert.Equal(output, ContainerWithMostWater.Solution(height));  
        }
    }
}
