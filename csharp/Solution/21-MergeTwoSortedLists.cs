using Solution.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class MergeTwoSortedLists
    {
        public static ListNode<int> Solution(ListNode<int> l1, ListNode<int> l2)
        {
            if (l1 == null) return l2;
            if (l2 == null) return l1;

            ListNode<int> result;
            if (l1.Val < l2.Val)
            {
                result = l1;
                result.Next = Solution(l1.Next, l2);
            }
            else
            {
                result = l2;
                result.Next = Solution(l1, l2.Next);
            }
            return result;
        }
    }
}
