using Solution.Utils;
using System;
using System.Collections.Generic;

namespace Solution
{
    public class BinaryTreeInorderTraversalRecursive
    {
        public static List<int> Solution(TreeNode<int> root)
        {
            return Inorder(root, new List<int>());
        }

        private static List<int> Inorder(TreeNode<int> root, List<int> nodes)
        {
            if (root == null) return nodes;

            if (root.Left != null) Inorder(root.Left, nodes);
            nodes.Add(root.Val);
            if (root.Right != null) Inorder(root.Right, nodes);

            return nodes;
        }
    }
}
