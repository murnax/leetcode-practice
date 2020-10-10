using Xunit;
using Solution;

namespace UnitTest
{
    public class PalinDromeNumberTest
    {
        [Theory]
        [InlineData(121, true)]
        [InlineData(-121, false)]
        [InlineData(10, false)]
        [InlineData(-101, false)]
        public void TestMethod(int x, bool output)
        {
            Assert.Equal(output, PalinDromeNumber.Solution(x));
        }
    }
}
