using Solution;
using Xunit;

namespace UnitTest
{
    public class RomanToIntegerTest
    {
        [Theory]
        [InlineData("III", 3)]
        [InlineData("IV", 4)]
        [InlineData("IX", 9)]
        [InlineData("LVIII", 58)]
        [InlineData("MCMXCIV", 1994)]
        public void TestMethod(string s, int output)
        {
            Assert.Equal(output, RomanToInteger.Solution(s));
        }
    }
}
