using Solution;
using Xunit;

namespace UnitTest
{
    public class ValidPalindromeTest
    {
        [Theory]
        [InlineData("A man, a plan, a canal: Panama", true)]
        [InlineData("race a car", false)]
        public void TestMethod(string s, bool output)
        {
            Assert.Equal(output, ValidPalindrome.Solution(s));
        }
    }
}
