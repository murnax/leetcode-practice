using Solution;
using Xunit;

namespace UnitTest
{
    public class LongestPalindromicSubstringTest
    {
        [Theory]
        [InlineData("babad", "bab")]
        public void TestMethod(string s, string output)
        {
            Assert.Equal(output, LongestPalindromicSubstring.Solution(s));
        }
    }
}
