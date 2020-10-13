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

        public static IEnumerable<object[]> Data
        {
            get
            {
                var driverData = new List<object[]>();

                TreeNode<int> root2 = new TreeNode<int>(1);
                root2.Left = new TreeNode<int>(2);
                root2.Right = new TreeNode<int>(3);
                driverData.Add(new object[] { root2, new List<int> { 1, 2, 3 } });

                TreeNode<int> root = new TreeNode<int>(1);
                root.Right = new TreeNode<int>(2);
                root.Right.Left = new TreeNode<int>(3);
                root.Right.Right = new TreeNode<int>(4);
                root.Right.Right.Left = new TreeNode<int>(5);
                driverData.Add(new object[]{root, new List<int>{ 1, 2, 3, 4, 5 } });

                TreeNode<int> root3 = new TreeNode<int>(1);
                root3.Right = new TreeNode<int>(2);
                driverData.Add(new object[] { root3, new List<int> { 1, 2 } });

                return driverData;
            }
        }
    }
}
