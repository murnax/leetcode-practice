using Solution;
using Solution.Utils;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class RemoveNthNodeFromEndOfListTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod(ListNode<int> head, int n, List<int> output)
        {
            Assert.Equal(output, RemoveNthNodeFromEndOfList.Solution(head, n).ToList());
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>()
                {
                    new object[]
                    {
                        new List<int>{1,2,3,4,5 }.ToListNode(),
                        2,
                        new List<int>{1,2,3,5 },
                    },
                    new object[]
                    {
                        new List<int>{1}.ToListNode(),
                        1,
                        new List<int>{},
                    },
                    new object[]
                    {
                        new List<int>{1,2}.ToListNode(),
                        1,
                        new List<int>{1},
                    },
                };
            }
        }
    }
}
