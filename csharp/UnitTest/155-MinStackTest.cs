using Solution;
using Xunit;

namespace UnitTest
{
    public class MinStackTest
    {
        [Fact]
        public void TestMethod()
        {
            MinStack stack = new MinStack();
            stack.Push(-2);
            stack.Push(0);
            stack.Push(-3);
            Assert.Equal(-3, stack.GetMin());
            stack.Pop();
            Assert.Equal(0, stack.Top());
            Assert.Equal(-2, stack.GetMin());
        }
    }
}
