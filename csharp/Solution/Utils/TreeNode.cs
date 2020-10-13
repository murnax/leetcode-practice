using System;
using System.Collections.Generic;
using System.Text;

namespace Solution.Utils
{
    class TreeNode<T>
    {        
        public T Val { get; set; }
        public TreeNode<T> Left { get; set; }
        public TreeNode<T> Right { get; set; }

        public TreeNode(T val) { Val = val; }
    }
}
