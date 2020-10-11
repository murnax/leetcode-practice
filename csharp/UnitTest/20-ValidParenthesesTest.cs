using Solution;
using Xunit;
using System;
using System.Collections.Generic;
using System.Text;

namespace UnitTest
{
    public class ValidParenthesesTest
    {
        [Theory]
        [InlineData("()", true)]
        [InlineData("()[]{}", true)]
        [InlineData("(]", false)]
        [InlineData("([)]", false)]
        [InlineData("{[]}", true)]
        public void TestMethod(string s, bool output)
        {
            Assert.Equal(output, ValidParentheses.Solution(s));
        }
    }
}
