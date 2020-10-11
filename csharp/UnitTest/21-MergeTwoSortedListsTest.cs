using Solution;
using Solution.Utils;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class MergeTwoSortedListsTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod(ListNode<int> l1, ListNode<int> l2, List<int> output)
        {
            Assert.Equal(output, MergeTwoSortedLists.Solution(l1, l2).ToList());
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>
                {
                    new object[]
                    {
                        new List<int>{1,2,4 }.ToListNode(),
                        new List<int>{1,3,4 }.ToListNode(),
                        new List<int>{1,1,2,3,4,4 }
                    },
                    new object[]
                    {
                        new List<int>{ }.ToListNode(),
                        new List<int>{ }.ToListNode(),
                        new List<int>{ }
                    },
                    new object[]
                    {
                        new List<int>{ }.ToListNode(),
                        new List<int>{ 0 }.ToListNode(),
                        new List<int>{ 0 }
                    }
                };
            }
        }
    }
}
