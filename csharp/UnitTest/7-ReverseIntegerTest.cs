using Solution;
using Xunit;

namespace UnitTest
{
    public class ReverseIntegerTest
    {
        [Theory]
        [InlineData(123, 321)]
        [InlineData(-123, -321)]
        [InlineData(120, 21)]
        [InlineData(0, 0)]
        [InlineData(1534236469, 0)]
        public void TestMethod(int n, int output)
        {
            Assert.Equal(output, ReverseInteger.Solution(n));
        }
    }
}
