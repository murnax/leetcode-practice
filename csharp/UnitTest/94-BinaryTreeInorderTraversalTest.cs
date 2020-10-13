using Solution;
using Xunit;
using System;
using System.Collections.Generic;
using System.Text;
using Solution.Utils;

namespace UnitTest
{
    public class _BinaryTreeInorderTraversalTest
    {
        [Theory]
        [MemberData(nameof(Data))]
        public void TestMethod_Recursion(TreeNode<int> root, List<int> output)
        {
            Assert.Equal(output, BinaryTreeInorderTraversalRecursive.Solution(root));
        }

        public static IEnumerable<object[]> Data
        {
            get
            {
                return new List<object[]>
                {
                    new object[]
                    {
                        new List<int?>{1, null, 2, null, null, 3 }.ToTreeNode(), 
                        new List<int> { 1, 3, 2 },
                    },
                    new object[]
                    {
                        new List<int?>{ }.ToTreeNode(),
                        new List<int> { },
                    },
                    new object[]
                    {
                        new List<int?>{1, 2 }.ToTreeNode(),
                        new List<int>{ 2, 1 }
                    },
                    new object[]
                    {
                        new List<int?>{1, null, 2 }.ToTreeNode(),
                        new List<int>{1, 2 }
                    }
                };
            }
        }
    }
}
