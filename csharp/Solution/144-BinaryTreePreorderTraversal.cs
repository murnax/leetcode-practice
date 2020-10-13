using Solution.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class BinaryTreePreorderTraversalIterative
    {
        public static List<int> Solution(TreeNode<int> root)
        {
            List<int> result = new List<int>();
            var stack = new Stack<TreeNode<int>>();
            stack.Push(root);
            while (stack.Count != 0)
            {       
                var node = stack.Pop();
                result.Add(node.Val);                    
                if (node.Right != null) stack.Push(node.Right);
                if (node.Left != null) stack.Push(node.Left);
            }
            return result;
        }
    }
}
