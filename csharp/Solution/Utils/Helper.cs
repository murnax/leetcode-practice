using System;
using System.Collections.Generic;
using System.Linq;

namespace Solution.Utils
{
    public static class Helper
    {
        public static ListNode<int> ToListNode(this List<int> list)
        {
            if (list.Count == 0)
                return null;

            ListNode<int> head = new ListNode<int>(list[0]);
            ListNode<int> current = head;
            for (var i = 1; i < list.Count; i++)
            {
                current.Next = new ListNode<int>(list[i]);
                current = current.Next;
            }
            return head;
        }

        public static List<int> ToList(this ListNode<int> node)
        {
            var list = new List<int>();
            while (node != null)
            {
                list.Add(node.Val);
                node = node.Next;
            }
            return list;
        }

        public static TreeNode<int> ToTreeNode(this List<int?> list)
        {
            return CreateTreeNode(list, 1);
        }

        private static TreeNode<int> CreateTreeNode(List<int?> list, int index)
        {
            if (index > list.Count) return null;
            int? val = list[index - 1];
            if (val == null) return null;

            TreeNode<int> node = new TreeNode<int>((int)val);
            node.Left = CreateTreeNode(list, index * 2);
            node.Right = CreateTreeNode(list, index * 2 + 1);
            return node;
        }
    }
}
