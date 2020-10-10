using Solution;
using Leetcode.Utils;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class AddTwoNumbersTest
    {
        [Theory]
        [MemberData(nameof(InputData_Property))]
        public void TestMethod(ListNode<int> l1, ListNode<int> l2, List<int> output)
        {
            Assert.Equal(output, new AddTwoNumbers().Solution(l1, l2).ToList());
        }

        public static IEnumerable<object[]> InputData_Property
        {
            get
            {
                var l1 = new List<int> { 2, 4, 3 }.ToListNode();
                var l2 = new List<int> { 5, 6, 4 }.ToListNode();
                var result = new List<int> { 7, 0, 8 };
                var driverData = new List<object[]>();
                driverData.Add(new object[] { l1, l2, result });
                l1 = new List<int> { 6, 1, 7 }.ToListNode();
                l2 = new List<int> { 5, 6, 4 }.ToListNode();
                result = new List<int> { 1, 8, 1, 1 };
                driverData.Add(new object[] { l1, l2, result });
                return driverData;
            }
        }
    }
}
