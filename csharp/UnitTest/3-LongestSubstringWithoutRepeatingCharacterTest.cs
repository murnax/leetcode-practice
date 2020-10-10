using Solution;
using Xunit;

namespace UnitTest
{
    public class LongestSubstringWithoutRepeatingCharacterTest
    {
        [Theory]
        [InlineData("abcabcbb", 3)]
        [InlineData("bbbbb", 1)]
        [InlineData("pwwkew", 3)]
        [InlineData("", 0)]
        public void TestMethod(string s, int output)
        {
            Assert.Equal(output, LongestSubstringWithoutRepeatingCharacter.Solution(s));
            Assert.Equal(output, LongestSubstringWithoutRepeatingCharacter.SolutionB(s));
        }
    }
}
