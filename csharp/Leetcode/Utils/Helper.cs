using System;
using System.Collections.Generic;
using System.Linq;

namespace Leetcode.Utils
{
    public static class Helper
    {
        public static ListNode<int> ToListNode(this List<int> list)
        {
            if (list.Count > 0 && list.Where(x => x >= 10).Count() == 0)
            {
                ListNode<int> head = new ListNode<int>(list[0]);
                ListNode<int> current = head;
                for (var i = 1; i < list.Count; i++)
                {
                    current.Next = new ListNode<int>(list[i]);
                    current = current.Next;
                }
                return head;
            }
            throw new Exception("input is not a valid list");
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
    }
}
