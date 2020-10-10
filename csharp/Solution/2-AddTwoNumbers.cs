using Leetcode.Utils;
namespace Solution
{
    public class AddTwoNumbers
    {
        public ListNode<int> Solution(ListNode<int> l1, ListNode<int> l2)
        {
            var carry = 0;
            ListNode<int> result = new ListNode<int>(-1);
            ListNode<int> currentNode = result;

            while (l1 != null || l2 != null || carry != 0)
            {
                var sum = (l1 != null ? l1.Val : 0) + (l2 != null ? l2.Val : 0) + carry;
                carry = sum / 10;
                sum %= 10;
                var node = new ListNode<int>(sum);
                currentNode.Next = node;
                currentNode = node;
                if (l1 != null) l1 = l1.Next;
                if (l2 != null) l2 = l2.Next;
            }

            return result.Next;
        }
    }
}
