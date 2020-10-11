using Solution.Utils;
using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class RemoveNthNodeFromEndOfList
    {
        public static ListNode<int> Solution(ListNode<int> head, int n)
        {
            var dummy = new ListNode<int>(-1);
            dummy.Next = head;
            var s = dummy;
            var f = dummy;

            while (n > 0)
            {
                f = f.Next;
                n--;
            }

            while (f.Next != null)
            {
                f = f.Next;
                s = s.Next;
            }

            s.Next = s.Next.Next;
            return dummy.Next;
        }
    }
}
