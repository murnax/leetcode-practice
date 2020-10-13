using Solution.Utils;
using Solution;
using System.Collections.Generic;
using Xunit;

namespace UnitTest
{
    public class BinaryTreePreorderTraversalTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public static void TestMethod_IterativeApproache(TreeNode<int> root, List<int> output)
        {
            Assert.Equal(output, BinaryTreePreorderTraversalIterative.Solution(root));
        }

        [Theory]
        [MemberData(nameof(Data))]
        public static void TestMethod_RecursiveApproache(TreeNode<int> root, List<int> output)
        {
            Assert.Equal(output, BinaryTreePreorderTraversalRecursive.Solution(root));
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                var driverData = new List<object[]>();

                driverData.Add(new object[] { new List<int?> { 1, null, 2, null, null, 3 }.ToTreeNode(), new List<int> { 1, 2, 3 } });
                driverData.Add(new object[] { new List<int?> { 1, 2, 3, 4, 5 }.ToTreeNode(), new List<int> { 1, 2, 4, 5, 3 } });
                driverData.Add(new object[] { new List<int?> { 1, 2, 3 }.ToTreeNode(), new List<int> { 1, 2, 3 } });

                return driverData;
            }
        }
    }
}
