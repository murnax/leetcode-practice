using System;
using System.Collections.Generic;
using System.Text;

namespace Solution
{
    public class ValidParentheses
    {
        public static bool Solution(string s)
        {
            Stack<char> stack = new Stack<char>();
            foreach(var c in s)
            {
                if (c == '(') stack.Push(')');
                else if (c == '{') stack.Push('}');
                else if (c == '[') stack.Push(']');
                else if (stack.Count == 0 || c != stack.Pop()) return false;
            }
            return stack.Count == 0;
        }
    }
}
