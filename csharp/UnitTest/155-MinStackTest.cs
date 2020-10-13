using Solution;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class MinStackTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod(IMinStack stack)
        {
            stack.Push(-2);
            stack.Push(0);
            stack.Push(-3);
            Assert.Equal(-3, stack.GetMin());
            stack.Pop();
            Assert.Equal(0, stack.Top());
            Assert.Equal(-2, stack.GetMin());
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>
                {
                    new object[]{ new MinStackWithOneStack() },
                    new object[]{ new MinStackWithTwoLinkedLists() },
                };
            }
        }
    }
}
