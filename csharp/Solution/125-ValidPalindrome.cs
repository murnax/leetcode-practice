using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Solution
{
    public class ValidPalindrome
    {
        public static bool Solution(string s)
        {
            char[] chars = s.ToLower().ToCharArray().Where(c => char.IsLetterOrDigit(c)).ToArray();
            int l = 0, r = chars.Length - 1;
            while (l < r) 
                if (chars[l++] != chars[r--]) return false;
            return true;
        }
    }
}
