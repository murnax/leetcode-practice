using Solution;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class LongestPalindromicSubstringTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod_NaiveApproach(string s, string output)
        {
            Assert.Equal(output, LongestPalindromicSubstring.Solution(s));
        }

        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod_BottomUpDp(string s, string output)
        {
            Assert.Equal(output, LongestPalindromicSubstring.SolutionWithBottomUpDp(s));
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>
                {
                    new object[] { "babad", "bab" },
                    new object[] { "cbbd", "bb" },
                    new object[] { "a", "a" },
                    new object[] { "ac", "a" },
                };
            }
        }

    }
}
