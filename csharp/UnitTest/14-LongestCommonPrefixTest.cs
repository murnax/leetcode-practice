using Solution;
using Xunit;

namespace UnitTest
{
    public class LongestCommonPrefixTest
    {
        [Theory]
        [InlineData(new string[] { "flower", "flow", "flight" }, "fl")]
        [InlineData(new string[] { "dog", "racecar", "car" }, "")]
        [InlineData(new string[] { "ab", "a" }, "a")]
        [InlineData(new string[] { }, "")]
        public void TestMethod(string[] strs, string output)
        {
            Assert.Equal(output, LongestCommonPrefix.Solution(strs));
        }
    }
}
